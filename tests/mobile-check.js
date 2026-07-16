import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8091;
const BASE = `http://127.0.0.1:${PORT}`;

const PAGES = [
  `${BASE}/index.html`,
  `${BASE}/projects.html`,
  `${BASE}/mQoL.html`,
  `${BASE}/DungeonTeleportsTab.html`
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Prosty serwer statyczny — testy odpala się jedną komendą (npm test), bez zewnętrznego serwera
function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(new URL(req.url, BASE).pathname);
      let filePath = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);
      if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

let failedTests = 0;

function pass(msg) { console.log(`  ✅ Passed: ${msg}`); }
function fail(msg) { console.error(`  ❌ Failed: ${msg}`); failedTests++; }

async function testMobilePage(browser, url) {
  console.log(`\n🔎 [MOBILE 375px] ${url}`);
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('pageerror', err => consoleErrors.push(err.message));
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });

  try {
    await page.goto(url, { waitUntil: 'networkidle2' });

    // 1. Brak błędów JS
    if (consoleErrors.length > 0) fail(`Uncaught console errors: ${consoleErrors.join(', ')}`);
    else pass('No uncaught console errors.');

    // 2. Brak poziomego overflow
    const dims = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth
    }));
    if (dims.scrollWidth > 375 || dims.bodyScrollWidth > 375) {
      fail(`Horizontal overflow! scrollWidth: ${dims.scrollWidth}px, bodyScrollWidth: ${dims.bodyScrollWidth}px`);
    } else pass('No horizontal overflow (width <= 375px).');

    // 3. Navbar w jednej linii
    const nav = await page.evaluate(() => {
      const brand = document.querySelector('.brand');
      const toggle = document.querySelector('#menu-toggle');
      if (!brand || !toggle) return null;
      return { brandTop: brand.getBoundingClientRect().top, toggleTop: toggle.getBoundingClientRect().top };
    });
    if (!nav) fail('Navbar brand or menu toggle not found.');
    else if (Math.abs(nav.brandTop - nav.toggleTop) > 18) fail(`Navbar wrapped (diff ${Math.abs(nav.brandTop - nav.toggleTop)}px).`);
    else pass('Navbar elements aligned horizontally.');

    // 4. Hamburger: otwieranie, zamykanie Escape i kliknięciem poza panelem
    const closedBefore = await page.evaluate(() => !document.querySelector('#mobile-menu').classList.contains('is-open'));
    if (!closedBefore) fail('Mobile menu not closed by default.');
    else pass('Mobile menu closed by default.');

    await page.click('#menu-toggle');
    await new Promise(r => setTimeout(r, 150));
    const opened = await page.evaluate(() => document.querySelector('#mobile-menu').classList.contains('is-open'));
    if (!opened) fail('Mobile menu did not open on toggle click.');
    else pass('Mobile menu opens on click.');

    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 150));
    const closedByEsc = await page.evaluate(() => !document.querySelector('#mobile-menu').classList.contains('is-open'));
    if (!closedByEsc) fail('Mobile menu did not close on Escape.');
    else pass('Mobile menu closes on Escape.');

    // 5. Stackowanie przycisków na podstronach projektów
    if (url.includes('mQoL.html') || url.includes('DungeonTeleportsTab.html')) {
      const buttons = await page.evaluate(() =>
        Array.from(document.querySelectorAll('header.border-b a')).map(b => b.getBoundingClientRect().top)
      );
      if (buttons.length >= 2 && Math.abs(buttons[0] - buttons[1]) < 30) fail('Action buttons do not stack on mobile.');
      else pass('Action buttons stack vertically on mobile.');

      // 6. Wskaźnik pozycji slidera widoczny na mobile
      const indicator = await page.evaluate(() => {
        const el = document.querySelector('.slider-indicator');
        return el ? { text: el.textContent, hidden: el.hidden } : null;
      });
      if (!indicator || indicator.hidden || !/^\d+ \/ \d+$/.test(indicator.text.trim())) {
        fail(`Slider indicator missing or invalid: ${indicator ? JSON.stringify(indicator) : 'not found'}`);
      } else pass(`Slider position indicator shows "${indicator.text.trim()}".`);
    }
  } catch (err) {
    fail(`Page test error: ${err.message}`);
  } finally {
    await page.close();
  }
}

async function testDesktopPage(browser, url) {
  console.log(`\n🔎 [DESKTOP 1366px] ${url}`);
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('pageerror', err => consoleErrors.push(err.message));
  await page.setViewport({ width: 1366, height: 768 });

  try {
    await page.goto(url, { waitUntil: 'networkidle2' });

    if (consoleErrors.length > 0) fail(`Uncaught console errors: ${consoleErrors.join(', ')}`);
    else pass('No uncaught console errors.');

    if (url.includes('mQoL.html') || url.includes('DungeonTeleportsTab.html')) {
      // Regresja BUG-1: karta Description musi mieć padding (p-6 / sm:p-8 z builda Tailwinda)
      const padding = await page.evaluate(() => {
        const card = document.querySelector('section .bg-card.p-6');
        return card ? getComputedStyle(card).paddingLeft : null;
      });
      if (padding !== '32px') fail(`Description card padding is ${padding}, expected 32px (stale Tailwind build?).`);
      else pass('Description card has correct padding (32px).');

      // Obrazy WebP realnie się ładują
      const img = await page.evaluate(() => {
        const el = document.querySelector('.screenshot-src');
        return el ? { src: el.currentSrc || el.src, loaded: el.naturalWidth > 0 } : null;
      });
      if (!img || !img.loaded || !img.src.includes('.webp')) {
        fail(`Screenshot image not loading as WebP: ${img ? JSON.stringify(img) : 'not found'}`);
      } else pass('Screenshots load as WebP.');

      // Changelog: render z JSON + przycisk paginacji
      await page.waitForFunction(
        () => document.querySelector('[id$="-changelog-container"]').children.length > 0,
        { timeout: 5000 }
      ).catch(() => {});
      const changelog = await page.evaluate(() => {
        const container = document.querySelector('[id$="-changelog-container"]');
        return {
          groups: container.querySelectorAll(':scope > div').length,
          moreBtn: !!container.querySelector('button[onclick="showMoreChangelog()"]')
        };
      });
      if (changelog.groups === 0) fail('Changelog did not render from JSON.');
      else pass(`Changelog rendered (${changelog.groups} version groups visible).`);

      if (url.includes('mQoL.html')) {
        if (!changelog.moreBtn) fail('Changelog pagination button missing (mQoL has >4 groups).');
        else {
          await page.click('button[onclick="showMoreChangelog()"]');
          await new Promise(r => setTimeout(r, 200));
          const after = await page.evaluate(() =>
            document.querySelector('[id$="-changelog-container"]').querySelectorAll(':scope > div').length
          );
          if (after <= changelog.groups) fail('Changelog "show more" did not render additional groups.');
          else pass(`Changelog pagination works (${changelog.groups} -> ${after} groups).`);
        }
      }
    }
  } catch (err) {
    fail(`Page test error: ${err.message}`);
  } finally {
    await page.close();
  }
}

// Regresja: strona otwarta bezpośrednio z dysku (file://) — fetch jest tam blokowany przez
// CORS, więc changelog musi być ładowany w sposób, który działa bez serwera
async function testFileProtocol(browser) {
  const fileUrl = 'file:///' + ROOT.replace(/\\/g, '/') + '/mQoL.html';
  console.log(`\n🔎 [FILE://] ${fileUrl}`);
  const page = await browser.newPage();
  try {
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      () => document.querySelector('[id$="-changelog-container"]').querySelectorAll(':scope > div').length > 0,
      { timeout: 5000 }
    ).catch(() => {});
    const groups = await page.evaluate(() =>
      document.querySelector('[id$="-changelog-container"]').querySelectorAll(':scope > div').length
    );
    if (groups === 0) fail('Changelog does not render over file:// protocol.');
    else pass(`Changelog renders over file:// (${groups} version groups).`);
  } catch (err) {
    fail(`file:// test error: ${err.message}`);
  } finally {
    await page.close();
  }
}

async function run() {
  console.log('🚀 Starting E2E tests (mobile + desktop)...');
  const server = await startServer();
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  try {
    for (const url of PAGES) await testMobilePage(browser, url);
    for (const url of PAGES) await testDesktopPage(browser, url);
    await testFileProtocol(browser);
  } finally {
    await browser.close();
    server.close();
  }

  console.log('\n=======================================');
  if (failedTests === 0) {
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY! 🎯');
    process.exit(0);
  } else {
    console.error(`🚨 TESTS FAILED! Total failures: ${failedTests} 💔`);
    process.exit(1);
  }
}

run();
