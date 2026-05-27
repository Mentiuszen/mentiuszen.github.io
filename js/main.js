const translations = {
    en: {
        navHome: "Home",
        navProjects: "Projects",
        heroStart: "Rendering work, addon tooling, and focused UI systems.",
        heroHighlight: "Mentiuszen Hub",
        heroDesc: "I work on C++ rendering, graphics tooling, and Lua addons with the same bias: predictable systems, fast iteration, and interfaces that stay out of the player's way.",
        indexWorkDesc: "I prefer small, observable systems over decorative complexity: code paths that are easy to profile, UI that keeps state clear, and tools that reduce repeated manual work.",
        indexPrinciplesTitle: "Built like tools, not billboards.",
        indexPrinciplesDesc: "Public projects here are treated as working software first: clear release paths, restrained interfaces, and implementation choices that can survive real use. The visual layer follows the same rule: typography, spacing, and surface hierarchy carry the page instead of glow effects.",
        btnBrowse: "Browse Projects",
        feat1Title: "Open Source",
        feat1Desc: "Explore the code behind my public repositories on GitHub.",
        feat2Title: "Quality of Life",
        feat2Desc: "Focusing on small improvements that make a big difference in daily usage.",
        
        // Index additions
        indexAboutTitle: "About Me",
        indexAboutDesc: "I work close to the frame: C++ rendering, graphics tooling, and pragmatic Lua addons for World of Warcraft. This hub collects the public pieces of that work.",
        indexSkillsTitle: "Technologies & Skills",
        indexSocialTitle: "Find Me",
        btnGithub: "My GitHub",
        
        projectsTitle: "Project Index",
        mQoLDesc: "A modular World of Warcraft quality-of-life addon focused on account overview, UI synchronization, weekly rewards, and small automation that removes repeated friction.",
        dttDesc: "A focused World of Warcraft addon that adds a dungeon teleport tab to Group Finder, with expansion filtering and fast access to unlocked portals.",
        btnViewProject: "View Project",
        download: "Download Latest",
        downloadStable: "Download Release",
        downloadBeta: "Download Beta",
        changelog: "Changelog",
        footerText: "&copy; 2026 Mentiuszen. All rights reserved.",
        tagAdded: "[Added]",
        tagFixed: "[Fixed]",
        tagChanged: "[Changed]",
        addonBadge: "World of Warcraft Addon",
        projectFeaturesLabel: "Feature surface",
        supportedExpansions: "Supported expansions",
        mqolCardFeat1: "Raid profile and Edit Mode synchronization across characters.",
        mqolCardFeat2: "Account overview with gold, professions, played time, and weekly reward progress.",
        mqolCardFeat3: "Fast autoloot, mailbox helpers, settings modules, and WoW client-specific fixes.",
        dttCardFeat1: "Native Group Finder tab for dungeon and raid teleport spells.",
        dttCardFeat2: "Expansion filters, current-season defaults, and active dungeon highlighting.",
        dttCardFeat3: "Combat-safe interaction model with clear portal unlock information.",
        descTitle: "Description",
        screenshotsTitle: "Screenshots",
        buildText: "Build",
        noScreenshot: "Image Coming Soon",
        
        // Dungeon Teleports Tab Description
        dttMainDesc: "Dungeon Teleports Tab adds a new tab to the Group Finder window, allowing you to quickly teleport to any dungeon or raid.",
        dttFeaturesTitle: "Features",
        dttFeat1: "Adds a dedicated Dungeon Teleports tab to the Group Finder",
        dttFeat2: "Displays all unlocked dungeon and raid teleports",
        dttFeat3: "Supports all teleports from every expansion",
        dttSeasonTitle: "Default Current Season",
        dttSeasonDesc: "By default, the addon opens the Current Season tab (currently Midnight – Season 1).",
        dttExpansionTitle: "Expansion Selection",
        dttExpansionDesc: "Easily switch between expansions using the menu.",
        
        // mQoL Description
        mqolMainDesc: "MQoL is a modular quality-of-life addon focused on account-wide character overview, UI synchronization, Dungeon Teleports, Weekly Rewards tracking, and targeted improvements across supported World of Warcraft clients.",
        mqolNewFeatTitle: "New Features (v1.2.0 - v1.2.1)",
        mqolNewFeat1: "Account Overview - Tracks characters, levels, classes, gold, played time, professions, and weekly reward progress across the account.",
        mqolNewFeat2: "Gold Chart - Adds an interactive wealth history chart with improved grid rendering and stable height handling.",
        mqolNewFeat3: "Weekly Rewards Preview - Shows Great Vault / Weekly Chest progress from saved addon data, including hover information and status icons.",
        mqolNewFeat4: "Dungeon Teleports Tab - Adds a Group Finder tab with expansion filters, cooldown display and active dungeon highlighting.",
        mqolNewFeat5: "Profession Tracking - Saves and displays profession details across supported clients, including Classic Era, BCC, Legion, and Retail.",
        mqolNewFeat6: "Fast Autoloot - Replaces the default CVAR-based looting flow with a faster custom module.",
        mqolFeatTitle: "Features",
        mqolFeat1: "Action Bars synchronization - Keeps action bar settings across all characters.",
        mqolFeat2: "Nameplates synchronization - Keeps nameplate settings across all characters.",
        mqolFeat3: "General settings synchronization - Keeps common interface options such as \"Auto Loot\" and \"My Name\".",
        mqolFeat4: "Force Edit Mode profile on login - Selected Edit Mode profile is applied on every login.",
        mqolFeat5: "Raid Profiles Synchronization - Shares saved raid profiles across all characters with full automation.",
        mqolFeat6: "Modules Manager - Lets you control which parts of the addon are active.",
        mqolFeat7: "Improved Option Control - Allows disabling or ignoring options you are not interested in.",
        mqolFeat8: "Modern addon interface - Provides a refreshed, consistent UI for addon settings and panels.",
        mqolOptFeatTitle: "Optional Features",
        mqolOptFeat1: "Mailbox side panel - Adds a mailbox side panel with a character list and quick-send buttons with item categories.",
        mqolOptFeat2: "Automatic mail subject - Allows setting a default subject for mail.",
        mqolOptFeat3: "Improved Consolidated Buffs (Mists of Pandaria) - Enhances the default consolidated buffs look.",
        mqolOptFeat4: "Blizzard bug fixes on Mists of Pandaria Classic - Fixes multiple interface issues, including:",
        mqolOptFeat4_1: "Missing PvP reward display.",
        mqolOptFeat4_2: "Broken map navigation on Pandaria.",
        mqolOptFeat4_3: "Incorrect World Boss display on the World Map.",
        mqolPlannedTitle: "Planned / Future Updates",
        mqolPlanned1: "Active plan for version 1.2.2-1.2.5 with lasser improvements and 1.3.0 that will focus on mailbox improvements.",
        
        tagRemoved: "[Removed]",
        dtt_v1_6_1_1: "Fix for not working Seat of the Triumvirate teleport",
        dtt_v1_6_1: "Added missing Dawn of the Infinite teleport",
        dtt_v1_6_2: "Fixed active dungeon teleports tab color",
        dtt_v1_5_1: "Added support for Mists of Pandaria Classic",
        dtt_v1_4_1: "Fixed wrong Midnight Season 1 start date",
        dtt_v1_4_2: "Removed TWW season tables",
        dtt_v1_3_1: "Added other regions support for season timers",
        dtt_v1_3_2: "Added season start/end info at season heading",
        dtt_v1_3_3: "Minor bug fixes",
        dtt_v1_2_1: "Fixed issue with not working Motherlode portal for Horde players",
        dtt_v1_2_2: "Added a custom tooltip with information on how to unlock each portal",
        dtt_v1_2_3: "Added information about season start and end dates on portal tooltip",
        dtt_v1_1_1: "Fixed bug that prevented buttons from working for some players",
        dtt_v1_1_2: "Fixed missing textures",
        dtt_v1_0_1: "Added standalone addon (ported from mQoL module)"
    },
    pl: {
        navHome: "Strona główna",
        navProjects: "Projekty",
        heroStart: "Rendering, narzędzia addonów i skupione systemy UI.",
        heroHighlight: "Mentiuszen Hub",
        heroDesc: "Pracuję przy renderingu C++, narzędziach graficznych i addonach Lua z tym samym podejściem: przewidywalne systemy, szybka iteracja i interfejsy, które nie przeszkadzają graczowi.",
        indexWorkDesc: "Wolę małe, obserwowalne systemy niż dekoracyjną złożoność: ścieżki kodu, które łatwo profilować, UI z czytelnym stanem i narzędzia zdejmujące powtarzalną pracę.",
        indexPrinciplesTitle: "Budowane jak narzędzia, nie billboardy.",
        indexPrinciplesDesc: "Publiczne projekty traktuję najpierw jako działające oprogramowanie: czytelne release pathy, powściągliwe interfejsy i decyzje implementacyjne, które wytrzymują realne użycie. Warstwa wizualna działa tak samo: typografia, spacing i hierarchia powierzchni zamiast efektów glow.",
        btnBrowse: "Przeglądaj projekty",
        feat1Title: "Otwarte Źródło",
        feat1Desc: "Odkryj kod stojący za moimi publicznymi repozytoriami na GitHubie.",
        feat2Title: "Jakość Życia",
        feat2Desc: "Skupiam się na drobnych ulepszeniach, które robią wielką różnicę w codziennym użytkowaniu.",
        
        // Index additions
        indexAboutTitle: "O mnie",
        indexAboutDesc: "Pracuję blisko klatki: rendering C++, narzędzia graficzne i praktyczne addony Lua do World of Warcraft. Ten hub zbiera publiczne części tej pracy.",
        indexSkillsTitle: "Technologie i umiejętności",
        indexSocialTitle: "Znajdziesz mnie tutaj",
        btnGithub: "Mój GitHub",
        
        projectsTitle: "Indeks projektów",
        mQoLDesc: "Modułowy addon quality-of-life do World of Warcraft skupiony na przeglądzie konta, synchronizacji UI, cotygodniowych nagrodach i automatyzacji drobnych powtórek.",
        dttDesc: "Skupiony addon do World of Warcraft, który dodaje zakładkę teleportów do Group Findera, z filtrowaniem dodatków i szybkim dostępem do odblokowanych portali.",
        btnViewProject: "Zobacz projekt",
        download: "Pobierz najnowszą",
        downloadStable: "Wersja Stabilna",
        downloadBeta: "Wersja Beta",
        changelog: "Historia Zmian",
        footerText: "&copy; 2026 Mentiuszen. Wszelkie prawa zastrzeżone.",
        tagAdded: "[Dodano]",
        tagFixed: "[Naprawiono]",
        tagChanged: "[Zmieniono]",
        addonBadge: "Dodatek do World of Warcraft",
        projectFeaturesLabel: "Zakres funkcji",
        supportedExpansions: "Wspierane dodatki",
        mqolCardFeat1: "Synchronizacja profili rajdowych i Edit Mode między postaciami.",
        mqolCardFeat2: "Przegląd konta ze złotem, profesjami, czasem gry i postępem cotygodniowych nagród.",
        mqolCardFeat3: "Szybki autoloot, pomocniki poczty, moduły ustawień i poprawki zależne od klienta WoW.",
        dttCardFeat1: "Natywna zakładka Group Findera dla teleportów do lochów i rajdów.",
        dttCardFeat2: "Filtry dodatków, domyślny obecny sezon i podświetlanie aktywnego lochu.",
        dttCardFeat3: "Combat-safe model interakcji z czytelną informacją o odblokowaniu portali.",
        descTitle: "Opis działania",
        screenshotsTitle: "Zrzuty ekranu",
        buildText: "Kompilacja (Build)",
        noScreenshot: "Zdjęcie wkrótce",
        
        // Dungeon Teleports Tab Description
        dttMainDesc: "Dungeon Teleports Tab dodaje nową zakładkę do okna wyszukiwania grup (Group Finder), pozwalając na szybki teleport do dowolnego lochu lub rajdu.",
        dttFeaturesTitle: "Główne cechy",
        dttFeat1: "Dodaje dedykowaną zakładkę teleportów w oknie Group Finder",
        dttFeat2: "Wyświetla wszystkie odblokowane teleporty do lochów i rajdów",
        dttFeat3: "Wspiera wszystkie teleporty z każdego dodatku",
        dttSeasonTitle: "Domyślny Obecny Sezon",
        dttSeasonDesc: "Domyślnie addon otwiera zakładkę obecnego sezonu (obecnie Midnight – Sezon 1).",
        dttExpansionTitle: "Wybór Dodatku",
        dttExpansionDesc: "Łatwe przełączanie między starymi dodatkami przy użyciu menu.",
        
        // mQoL Description
        mqolMainDesc: "MQoL to modułowy addon Quality of Life skupiony na przeglądzie konta, synchronizacji UI, teleportach do lochów, śledzeniu cotygodniowych nagród i konkretnych usprawnieniach na wspieranych klientach World of Warcraft.",
        mqolNewFeatTitle: "Nowe Funkcje (v1.2.0 - v1.2.1)",
        mqolNewFeat1: "Przegląd Konta - Śledzi postacie, poziomy, klasy, złoto, czas gry, profesje i postęp cotygodniowych nagród na całym koncie.",
        mqolNewFeat2: "Wykres Złota - Dodaje interaktywny wykres historii majątku z poprawionym renderowaniem siatki i stabilniejszą wysokością.",
        mqolNewFeat3: "Podgląd cotygodniowych nagród - Pokazuje postęp Great Vault / Weekly Chest z danych zapisanych przez addon, razem z informacją po najechaniu i ikonami stanu.",
        mqolNewFeat4: "Zakładka Dungeon Teleports - Dodaje zakładkę w Group Finderze z filtrami dodatków, wyświetlaniem cooldownów i podświetlaniem aktywnego lochu.",
        mqolNewFeat5: "Śledzenie profesji - Zapisuje i wyświetla szczegóły profesji na wspieranych klientach, w tym Classic Era, BCC, Legion i Retail.",
        mqolNewFeat6: "Fast Autoloot - Zastępuje domyślne lootowanie oparte o CVAR szybszym, autorskim modułem.",
        mqolNewFeat7: "Rozszerzone wsparcie Edit Mode - Włącza mQoL_EditMode na Mists of Pandaria Classic z zabezpieczeniami opartymi o wykrywanie wersji.",
        mqolFeatTitle: "Główne Cechy",
        mqolFeat1: "Synchronizacja pasków akcji - Zachowuje ustawienia pasków na wszystkich postaciach.",
        mqolFeat2: "Synchronizacja pasków zdrowia (Nameplates) - Zachowuje ustawienia pasków życia wokół postaci.",
        mqolFeat3: "Synchronizacja ogólnych ustawień - Utrzymuje popularne opcje, takie jak \"Auto Loot\" czy wyświetlanie swojego imienia.",
        mqolFeat4: "Wymuszanie profilu Edit Mode - Wybrany profil trybu edycji jest ładowany przy każdym logowaniu.",
        mqolFeat5: "Synchronizacja Profili Rajdowych - Współdzieli zapisane profile rajdowe pomiędzy postaciami z pełną automatyzacją.",
        mqolFeat6: "Menedżer Modułów - Pozwala kontrolować, które części addonu są aktywne.",
        mqolFeat7: "Ulepszona Kontrola Opcji - Pozwala wyłączać albo ignorować opcje, którymi nie jesteś zainteresowany.",
        mqolFeat8: "Nowoczesny interfejs addonu - Zapewnia odświeżony, spójny wygląd ustawień i paneli addonu.",
        mqolOptFeatTitle: "Opcjonalne Funkcje",
        mqolOptFeat1: "Boczny panel skrzynki pocztowej - Dodaje panel boczny z listą postaci oraz przyciskami szybkiego wysyłania podzielonymi na kategorie przedmiotów.",
        mqolOptFeat2: "Automatyczny temat wiadomości - Pozwala ustawić domyślny temat dla poczty w grze.",
        mqolOptFeat3: "Ulepszone skonsolidowane buffy (Mists of Pandaria) - Poprawia wygląd domyślnego grupowania buffów.",
        mqolOptFeat4: "Poprawki błędów Blizzarda w MoP Classic - Naprawia kilka problemów z interfejsem, w tym:",
        mqolOptFeat4_1: "Brak wyświetlania nagród PvP.",
        mqolOptFeat4_2: "Zepsuta nawigacja po mapie Pandarii.",
        mqolOptFeat4_3: "Nieprawidłowe wyświetlanie World Bossów na mapie świata.",
        mqolPlannedTitle: "Planowane Aktualizacje",
        mqolPlanned1: "Aktywny plan dla wersji 1.2.2-1.2.5 obejmuje mniejsze usprawnienia, a wersja 1.3.0 skupi się na ulepszeniach poczty.",
        
        tagRemoved: "[Usunięto]",
        dtt_v1_6_1_1: "Poprawka dla niedziałającego teleportu do Seat of the Triumvirate",
        dtt_v1_6_1: "Dodano brakujący teleport do Dawn of the Infinite",
        dtt_v1_6_2: "Naprawiono kolor aktywnej zakładki teleportów do lochów",
        dtt_v1_5_1: "Dodano wsparcie dla Mists of Pandaria Classic",
        dtt_v1_4_1: "Naprawiono błędną datę startu 1. Sezonu Midnight",
        dtt_v1_4_2: "Usunięto tabele sezonowe z TWW",
        dtt_v1_3_1: "Dodano wsparcie czasów sezonów dla innych regionów",
        dtt_v1_3_2: "Dodano informacje o dacie rozpoczęcia/zakończenia przy nagłówku sezonu",
        dtt_v1_3_3: "Drobne poprawki błędów",
        dtt_v1_2_1: "Naprawiono problem z niedziałającym portalem Motherlode dla graczy Hordy",
        dtt_v1_2_2: "Dodano niestandardowy tooltip z informacjami jak odblokować każdy portal",
        dtt_v1_2_3: "Dodano informacje o datach startu i zakończenia sezonu w tooltipie portalu",
        dtt_v1_1_1: "Naprawiono błąd uniemożliwiający działanie przycisków u niektórych graczy",
        dtt_v1_1_2: "Naprawiono brakujące tekstury",
        dtt_v1_0_1: "Wydano samodzielny addon (wcześniej jako moduł w mQoL)"
    }
};

// Obsługa Slidera (Screeny)
function scrollSlider(id, direction) {
    const slider = document.getElementById(id);
    if(slider) {
        // Przewija dokładnie o szerokość widocznego kontenera, uwzględniając luki między elementami (gap)
        const scrollAmount = slider.clientWidth;
        slider.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
}

// Obsługa Lightbox (Powiększanie screenów)
function openLightbox(element) {
    let src = '';
    const img = element.querySelector('.screenshot-src');
    
    // Jeśli nie ma źródła lub jest to pusty obrazek (z tej samej domeny bez pliku) - nie otwieraj
    if (img && img.src && !img.src.endsWith(window.location.host + window.location.pathname) && !img.src.includes('data:image')) {
        src = img.src;
    }
    
    if (!src) return; 
    
    let lightbox = document.getElementById('global-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'global-lightbox';
        lightbox.className = 'fixed inset-0 z-[100] bg-dark/95 backdrop-blur-sm hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300';
        lightbox.innerHTML = `
            <div class="absolute inset-0" onclick="closeLightbox()"></div>
            <button onclick="closeLightbox()" class="absolute top-6 right-6 text-slate-400 hover:text-white text-5xl transition-colors z-10">&times;</button>
            <img id="lightbox-img" src="" class="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-700 relative z-10">
        `;
        document.body.appendChild(lightbox);
        lightbox = document.getElementById('global-lightbox');
    }
    
    document.getElementById('lightbox-img').src = src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    
    // Wymuszenie reflow dla animacji
    void lightbox.offsetWidth;
    lightbox.classList.remove('opacity-0');
}

function closeLightbox() {
    const lightbox = document.getElementById('global-lightbox');
    if(lightbox) {
        lightbox.classList.add('opacity-0');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            document.getElementById('lightbox-img').src = "";
        }, 300);
    }
}

// Sprawdza czy slider wymaga scrollowania i uaktualnia stan strzałek (wyszarzone jeśli nie)
function checkSliderButtons() {
    const sliders = ['slider-mqol', 'slider-dtt'];
    
    sliders.forEach(id => {
        const slider = document.getElementById(id);
        if (!slider) return;
        
        // Zależnie od id projektu mamy różne ID przycisków
        const proj = id.split('-')[1]; 
        const btnLeft = document.getElementById(`btn-left-${proj}`);
        const btnRight = document.getElementById(`btn-right-${proj}`);
        
        if (!btnLeft || !btnRight) return;

        // Jeśli szerokość zawartości jest mniejsza lub równa szerokości pojemnika, wyłącz strzałki
        if (slider.scrollWidth <= slider.clientWidth) {
            btnLeft.disabled = true;
            btnRight.disabled = true;
        } else {
            // Logika dla lewej strzałki (jeśli jesteśmy na początku)
            btnLeft.disabled = slider.scrollLeft <= 0;
            
            // Logika dla prawej strzałki (jeśli jesteśmy na końcu)
            btnRight.disabled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1; // -1 bo mogą być ułamki pixeli
        }
    });
}

// Obsługa rozwijanego Changeloga (Akordeon)
function toggleChangelog(id) {
    const content = document.getElementById('content-' + id);
    const icon = document.getElementById('icon-' + id);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

const siteIcons = {
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.95-6.95 1.41-1.41M3.64 20.36l1.41-1.41m0-13.9L3.64 3.64m16.72 16.72-1.41-1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A7.5 7.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
};

const THEME_KEY = 'mentiuszen-hub-theme';
const LEGACY_THEME_KEY = 'theme';

function isTheme(value) {
    return value === 'light' || value === 'dark';
}

function logoSvg() {
    return `
        <svg class="brand-mark" viewBox="0 0 64 64" role="img" aria-label="Mentiuszen mark">
            <path d="M8 52V12h10l14 24 14-24h10v40h-9V27L35 48h-6L17 27v25H8Z" fill="currentColor"/>
            <path d="M8 52h48M17 12h30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" opacity=".36"/>
        </svg>
    `;
}

function injectNavbar() {
    const mount = document.getElementById('navbar');
    if (!mount) return;

    const current = window.location.pathname.split('/').pop() || 'index.html';
    const isProjects = current === 'projects.html' || current === 'mQoL.html' || current === 'DungeonTeleportsTab.html';

    mount.innerHTML = `
        <header class="site-nav">
            <div class="container nav-inner">
                <a class="brand" href="index.html" aria-label="Mentiuszen Hub home">
                    ${logoSvg()}
                    <span class="brand-text">
                        <span class="brand-name">Mentiuszen</span>
                        <span class="brand-sub">graphics / addons</span>
                    </span>
                </a>
                <nav class="nav-links" aria-label="Primary navigation">
                    <a class="nav-link" href="index.html" data-i18n="navHome" ${current === 'index.html' ? 'aria-current="page"' : ''}>Home</a>
                    <a class="nav-link" href="projects.html" data-i18n="navProjects" ${isProjects ? 'aria-current="page"' : ''}>Projects</a>
                </nav>
                <div class="nav-actions">
                    <div class="segmented" aria-label="Language">
                        <button type="button" id="btn-en" data-lang="en" aria-label="Switch language to English">EN</button>
                        <button type="button" id="btn-pl" data-lang="pl" aria-label="Przełącz język na polski">PL</button>
                    </div>
                    <button class="icon-button" type="button" id="theme-toggle" aria-label="Toggle light mode">${siteIcons.sun}</button>
                    <button class="menu-toggle" type="button" id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">${siteIcons.menu}</button>
                </div>
            </div>
        </header>
        <div class="mobile-panel" id="mobile-menu">
            <nav class="container" aria-label="Mobile navigation">
                <a class="nav-link" href="index.html" data-i18n="navHome" ${current === 'index.html' ? 'aria-current="page"' : ''}>Home</a>
                <a class="nav-link" href="projects.html" data-i18n="navProjects" ${isProjects ? 'aria-current="page"' : ''}>Projects</a>
            </nav>
        </div>
    `;
}

function readStoredTheme() {
    try {
        const stored = localStorage.getItem(THEME_KEY)
            || localStorage.getItem(LEGACY_THEME_KEY)
            || sessionStorage.getItem(THEME_KEY)
            || sessionStorage.getItem(LEGACY_THEME_KEY);

        if (isTheme(stored)) return stored;
    } catch (_) {
        // Some browser privacy modes can block storage; cookie fallback keeps page-to-page navigation stable.
    }

    const match = document.cookie.match(/(?:^|;\s*)mentiuszen-hub-theme=(light|dark)(?:;|$)/)
        || document.cookie.match(/(?:^|;\s*)theme=(light|dark)(?:;|$)/);
    return match ? match[1] : null;
}

function writeStoredTheme(theme) {
    if (!isTheme(theme)) return;

    try {
        localStorage.setItem(THEME_KEY, theme);
        localStorage.setItem(LEGACY_THEME_KEY, theme);
        sessionStorage.setItem(THEME_KEY, theme);
        sessionStorage.setItem(LEGACY_THEME_KEY, theme);
    } catch (_) {
        // Cookie fallback below.
    }

    document.cookie = `mentiuszen-hub-theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
}

function initTheme() {
    const stored = readStoredTheme();
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(stored || (prefersLight ? 'light' : 'dark'));

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
    });
}

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    writeStoredTheme(theme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.innerHTML = theme === 'light' ? siteIcons.moon : siteIcons.sun;
        toggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    }
}

function initMenu() {
    const toggle = document.getElementById('menu-toggle');
    const panel = document.getElementById('mobile-menu');
    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.innerHTML = open ? siteIcons.menu : siteIcons.close;
        panel.classList.toggle('is-open', !open);
        document.body.classList.toggle('nav-open', !open);
    });
}

function initLang() {
    let lang = localStorage.getItem('lang') || 'en';
    changeLanguage(lang);
}

function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Aktualizacja przycisków w navbarze
    const btnEn = document.getElementById('btn-en');
    const btnPl = document.getElementById('btn-pl');
    
    if(btnEn && btnPl) {
        if (lang === 'en') {
            btnEn.className = "is-active";
            btnPl.className = "";
        } else {
            btnPl.className = "is-active";
            btnEn.className = "";
        }
    }
    
    // Odbudowanie changelogu mQoL jeśli jesteśmy na tej stronie
    document.querySelectorAll('[data-lang]').forEach(button => {
        button.classList.toggle('is-active', button.dataset.lang === lang);
    });

    if(typeof renderMqolChangelog === 'function') {
        renderMqolChangelog(lang);
    }

    // Odbudowanie changelogu DungeonTeleportsTab jeśli jesteśmy na tej stronie
if(typeof renderDttChangelog === 'function') {
        renderDttChangelog(lang);
    }
}

function applyInitialThemeAttribute() {
    const stored = readStoredTheme();
    if (stored) {
        document.documentElement.dataset.theme = stored;
    }
}

applyInitialThemeAttribute();

document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    initTheme();
    initMenu();
    initLang();
    
    // Inicjalizuj i dodaj nasłuchiwanie na scroll dla wyłączania strzałek
    checkSliderButtons();
    const sliders = ['slider-mqol', 'slider-dtt'];
    sliders.forEach(id => {
        const s = document.getElementById(id);
        if(s) {
            s.addEventListener('scroll', checkSliderButtons);
            window.addEventListener('resize', checkSliderButtons);
        }
    });

    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', () => changeLanguage(button.dataset.lang));
    });
});

window.addEventListener('storage', (event) => {
    if (event.key !== THEME_KEY && event.key !== LEGACY_THEME_KEY) return;
    if (isTheme(event.newValue)) {
        setTheme(event.newValue);
    }
});
