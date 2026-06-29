const translations = {
    en: {
        navHome: "Home",
        navProjects: "Projects",
        heroStart: "Rendering work, addon tooling, and focused UI systems.",
        heroHighlight: "Mentiuszen Hub",
        heroDesc: "I work on C++ rendering, graphics tooling, and Lua addons with the same bias: predictable systems, fast iteration, and interfaces that stay out of the player's way.",
        projectsDesc: "An overview of my active projects, including World of Warcraft addons, tools, and graphics utilities.",
        indexWorkDesc: "I prefer small, observable systems over decorative complexity: code paths that are easy to profile, UI that keeps state clear, and tools that reduce repeated manual work.",
        indexPillarsTitle: "Engineering Focus",
        pillar1Title: "Predictable Systems",
        pillar1Desc: "Low latency, ease of profiling, and clean C++ and Lua patterns built to survive real use.",
        pillar2Title: "Zero Bloat",
        pillar2Desc: "Refined, focused feature sets and direct execution paths instead of unnecessary bells and whistles.",
        pillar3Title: "Focused UI",
        pillar3Desc: "Aesthetic structure carried by spacing, typography, and visual hierarchy that stays out of the way.",
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
        dttDesc: "A clean, lightweight addon that integrates a dedicated Dungeon Teleports tab directly into the World of Warcraft Group Finder, featuring expansion filters and quick access to all unlocked portals.",
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
        dttCardFeat1: "Direct integration of dungeon and raid teleport spells into the Group Finder interface.",
        dttCardFeat2: "Smart expansion filters, default current-season view, and active dungeon highlighting.",
        dttCardFeat3: "Fully combat-safe execution model with detailed tooltips explaining unlock requirements.",
        descTitle: "Description",
        screenshotsTitle: "Screenshots",
        buildText: "Build",
        noScreenshot: "Image Coming Soon",

        // Dungeon Teleports Tab Description
        dttMainDesc: "Dungeon Teleports Tab seamlessly integrates a custom tab into the default Blizzard Group Finder interface, providing quick, organized access to your unlocked dungeon and raid teleport spells.",
        dttFeaturesTitle: "Features",
        dttFeat1: "Seamlessly adds a dedicated Dungeon Teleports tab to the default Group Finder window",
        dttFeat2: "Displays all unlocked dungeon and raid portal spells in a clean, tile-based layout",
        dttFeat3: "Supports legacy and current season teleports across all WoW expansions",
        dttSeasonTitle: "Default Current Season",
        dttSeasonDesc: "By default, the addon opens the Current Season tab (currently Midnight – Season 1).",
        dttExpansionTitle: "Expansion Selection",
        dttExpansionDesc: "Easily switch between expansions using the menu.",

        // mQoL Description
        mqolMainDesc: "MQoL is a modular quality-of-life addon focused on account-wide character overview, UI synchronization, Dungeon Teleports, Weekly Rewards tracking, and targeted improvements across supported World of Warcraft clients.",
        mqolNewFeatTitle: "New Features (v1.2.3)",
        mqolNewFeat1: "Played Time Tab - Tracks and graphs character played time and class percentages.",
        mqolNewFeat2: "Character Sorting - Sorts character lists by name, level, Vault, played time, or gold.",
        mqolNewFeat3: "Gold Chart Zooming - Zooms into specific areas of the overall gold chart with a quick reset button.",
        mqolNewFeat4: "Gold History Tooltips - Shows detailed hover information for each recorded gold history checkpoint.",
        mqolNewFeat5: "Secondary Professions Details - Generates detailed panels and lists for secondary skills.",
        mqolNewFeat6: "Character Favorites - Pins preferred characters to the top of the Account Overview list.",
        mqolFeatTitle: "Features",
        mqolFeat1: "Action Bars synchronization - Keeps action bar settings across all characters.",
        mqolFeat2: "Nameplates synchronization - Keeps nameplate settings across all characters.",
        mqolFeat3: "General settings synchronization - Keeps common interface options such as \"Auto Loot\" and \"My Name\".",
        mqolFeat4: "Force Edit Mode profile on login - Selected Edit Mode profile is applied on every login.",
        mqolFeat5: "Raid Profiles Synchronization - Shares saved raid profiles across all characters with full automation.",
        mqolFeat6: "Modules Manager - Lets you control which parts of the addon are active.",
        mqolFeat7: "Improved Option Control - Allows disabling or ignoring options you are not interested in.",
        mqolFeat8: "Modern addon interface - Provides a refreshed, consistent UI for addon settings and panels.",
        mqolFeat9: "Account Overview - Tracks characters, levels, classes, gold, played time, professions, and weekly reward progress across the account.",
        mqolFeat10: "Gold Chart - Adds an interactive wealth history chart with improved grid rendering and stable height handling.",
        mqolFeat11: "Weekly Rewards Preview - Shows Great Vault / Weekly Chest progress from saved addon data, including hover information and status icons.",
        mqolFeat12: "Dungeon Teleports Tab - Adds a Group Finder tab with expansion filters, cooldown display, dungeon artwork, and active dungeon highlighting.",
        mqolFeat13: "Profession Tracking - Saves and displays profession details across supported clients, including Classic Era, BCC, Legion, and Retail.",
        mqolFeat14: "Fast Autoloot - Replaces the default CVAR-based looting flow with a faster custom module.",
        mqolFeat15: "Party Keystones Listing - Tracks party members' mythic keystones and lists them in LFG with one click.",
        mqolOptFeatTitle: "Optional Features",
        mqolOptFeat1: "Mailbox side panel - Adds a mailbox side panel with a character list and quick-send buttons with item categories.",
        mqolOptFeat2: "Automatic mail subject - Allows setting a default subject for mail.",
        mqolOptFeat3: "Improved Consolidated Buffs (Mists of Pandaria) - Enhances the default consolidated buffs look.",
        mqolOptFeat4: "Blizzard bug fixes on Mists of Pandaria Classic - Fixes multiple interface issues, including:",
        mqolOptFeat4_1: "Missing PvP reward display.",
        mqolOptFeat4_2: "Broken map navigation on Pandaria.",
        mqolOptFeat4_3: "Incorrect World Boss display on the World Map.",
        mqolPlannedTitle: "Planned / Future Updates",
        mqolPlanned1: "Version 1.3.0 - Focus on overall changes, e.g., thorough redesign of First Setup and adding functional import/export profile settings (previously dummy).",
        mqolPlanned2: "Version 1.4.0 - Focus on Mailbox module changes (likely a complete rewrite).",
        sourceCode: "Source Code",

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
        projectsDesc: "Przegląd moich aktywnych projektów, w tym addonów do World of Warcraft, narzędzi oraz programów graficznych.",
        indexWorkDesc: "Wolę małe, obserwowalne systemy niż dekoracyjną złożoność: ścieżki kodu, które łatwo profilować, UI z czytelnym stanem i narzędzia zdejmujące powtarzalną pracę.",
        indexPillarsTitle: "Filozofia projektowania",
        pillar1Title: "Przewidywalne systemy",
        pillar1Desc: "Niskie opóźnienia, łatwość profilowania i czyste wzorce C++ oraz Lua stworzone by przetrwać realne użytkowanie.",
        pillar2Title: "Bez zbędnego kodu",
        pillar2Desc: "Dopracowane, skupione zestawy funkcji i bezpośrednie ścieżki wykonania zamiast niepotrzebnych ozdobników.",
        pillar3Title: "Użyteczny interfejs",
        pillar3Desc: "Estetyczna struktura oparta na odstępach, typografii i hierarchii wizualnej, która nie rozprasza uwagi.",
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
        dttDesc: "Lekki i minimalistyczny dodatek integrujący zakładkę teleportów bezpośrednio z blizzardowym Group Finderem, oferujący przejrzyste filtrowanie dodatków oraz natychmiastowy dostęp do wszystkich odblokowanych portali.",
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
        dttCardFeat1: "Bezpośrednia integracja zaklęć teleportacji do lochów i rajdów z interfejsem Group Findera.",
        dttCardFeat2: "Inteligentne filtry dodatków, domyślny podgląd aktualnego sezonu i podświetlanie aktywnego lochu.",
        dttCardFeat3: "Bezpieczny w walce (combat-safe) model działania z opisami wymagań do odblokowania portali.",
        descTitle: "Opis działania",
        screenshotsTitle: "Zrzuty ekranu",
        buildText: "Kompilacja (Build)",
        noScreenshot: "Zdjęcie wkrótce",

        // Dungeon Teleports Tab Description
        dttMainDesc: "Dungeon Teleports Tab w płynny sposób dodaje nową zakładkę do oficjalnego okna wyszukiwania grup (Group Finder), oferując natychmiastowy i wygodny dostęp do wszystkich Twoich zaklęć teleportacji do lochów oraz rajdów.",
        dttFeaturesTitle: "Główne cechy",
        dttFeat1: "Płynnie integruje dedykowaną zakładkę Dungeon Teleports w oficjalnym oknie wyszukiwania grup",
        dttFeat2: "Przejrzyście wyświetla wszystkie odblokowane zaklęcia teleportacji w nowoczesnym układzie kaflowym",
        dttFeat3: "Obsługuje zarówno starsze portale, jak i te z aktualnego sezonu ze wszystkich dodatków WoW",
        dttSeasonTitle: "Domyślny Obecny Sezon",
        dttSeasonDesc: "Domyślnie addon otwiera zakładkę obecnego sezonu (obecnie Midnight – Sezon 1).",
        dttExpansionTitle: "Wybór Dodatku",
        dttExpansionDesc: "Łatwe przełączanie między starymi dodatkami przy użyciu menu.",

        // mQoL Description
        mqolMainDesc: "MQoL to modułowy addon Quality of Life skupiony na przeglądzie konta, synchronizacji UI, teleportach do lochów, śledzeniu cotygodniowych nagród i konkretnych usprawnieniach na wspieranych klientach World of Warcraft.",
        mqolNewFeatTitle: "Nowe Funkcje (v1.2.3)",
        mqolNewFeat1: "Zakładka Played Time - Śledzi i wyświetla czas gry postaci oraz statystyki klas na wykresach.",
        mqolNewFeat2: "Sortowanie postaci - Umożliwia sortowanie listy postaci po nazwie, poziomie, skarbcu (Vault), czasie gry lub złocie.",
        mqolNewFeat3: "Zoom wykresu złota - Pozwala przybliżać wybrany obszar wykresu oraz resetować go jednym przyciskiem.",
        mqolNewFeat4: "Tooltipy historii złota - Pokazuje szczegółowe informacje po najechaniu myszką na punkty zapisu stanu złota.",
        mqolNewFeat5: "Szczegóły profesji pobocznych - Generuje dedykowane panele dla Cooking, Fishing i innych profesji pomocniczych.",
        mqolNewFeat6: "Ulubione postacie - Pozwala oznaczyć postacie jako ulubione, przypinając je na samą górę zestawienia.",
        mqolFeatTitle: "Główne Cechy",
        mqolFeat1: "Synchronizacja pasków akcji - Zachowuje ustawienia pasków na wszystkich postaciach.",
        mqolFeat2: "Synchronizacja pasków zdrowia (Nameplates) - Zachowuje ustawienia pasków życia wokół postaci.",
        mqolFeat3: "Synchronizacja ogólnych ustawień - Utrzymuje popularne opcje, takie jak \"Auto Loot\" czy wyświetlanie swojego imienia.",
        mqolFeat4: "Wymuszanie profilu Edit Mode - Wybrany profil trybu edycji jest ładowany przy każdym logowaniu.",
        mqolFeat5: "Synchronizacja Profili Rajdowych - Współdzieli zapisane profile rajdowe pomiędzy postaciami z pełną automatyzacją.",
        mqolFeat6: "Menedżer Modułów - Pozwala kontrolować, które części addonu są aktywne.",
        mqolFeat7: "Ulepszona Kontrola Opcji - Pozwala wyłączać albo ignorować opcje, którymi nie jesteś zainteresowany.",
        mqolFeat8: "Nowoczesny interfejs addonu - Zapewnia odświeżony, spójny wygląd ustawień i paneli addonu.",
        mqolFeat9: "Przegląd Konta - Śledzi postacie, poziomy, klasy, złoto, czas gry, profesje i postęp cotygodniowych nagród na całym koncie.",
        mqolFeat10: "Wykres Złota - Dodaje interaktywny wykres historii majątku z poprawionym renderowaniem siatki i stabilniejszą wysokością.",
        mqolFeat11: "Podgląd cotygodniowych nagród - Pokazuje postęp Great Vault / Weekly Chest z danych zapisanych przez addon, razem z informacją po najechaniu i ikonami stanu.",
        mqolFeat12: "Zakładka Dungeon Teleports - Dodaje zakładkę w Group Finderze z filtrami dodatków, wyświetlaniem cooldownów i podświetlaniem aktywnego lochu.",
        mqolFeat13: "Śledzenie profesji - Zapisuje i wyświetla szczegóły profesji na wspieranych klientach, w tym Classic Era, BCC, Legion i Retail.",
        mqolFeat14: "Fast Autoloot - Zastępuje domyślne lootowanie oparte o CVAR szybszym, autorskim modułem.",
        mqolFeat15: "Wyświetlanie kluczy party - Śledzi klucze M+ członków grupy i umożliwia szybkie wystawienie ich w LFG jednym kliknięciem.",
        mqolOptFeatTitle: "Opcjonalne Funkcje",
        mqolOptFeat1: "Boczny panel skrzynki pocztowej - Dodaje panel boczny z listą postaci oraz przyciskami szybkiego wysyłania podzielonymi na kategorie przedmiotów.",
        mqolOptFeat2: "Automatyczny temat wiadomości - Pozwala ustawić domyślny temat dla poczty w grze.",
        mqolOptFeat3: "Ulepszone skonsolidowane buffy (Mists of Pandaria) - Poprawia wygląd domyślnego grupowania buffów.",
        mqolOptFeat4: "Poprawki błędów Blizzarda w MoP Classic - Naprawia kilka problemów z interfejsem, w tym:",
        mqolOptFeat4_1: "Brak wyświetlania nagród PvP.",
        mqolOptFeat4_2: "Zepsuta nawigacja po mapie Pandarii.",
        mqolOptFeat4_3: "Nieprawidłowe wyświetlanie World Bossów na mapie świata.",
        mqolPlannedTitle: "Planowane Aktualizacje",
        mqolPlanned1: "Wersja 1.3.0 - Skupienie na ogólnych zmianach, np. gruntowna przebudowa First Setup oraz dodanie funkcjonalnego importu/eksportu profili (dotychczas nieaktywne).",
        mqolPlanned2: "Wersja 1.4.0 - Skupienie na zmianach w module skrzynki pocztowej (prawdopodobnie całkowity rewrite).",
        sourceCode: "Kod źródłowy",

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
    if (slider) {
        // Przewija dokładnie o szerokość widocznego kontenera, uwzględniając luki między elementami (gap)
        const scrollAmount = slider.clientWidth;
        slider.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
}

// Obsługa Lightbox (Powiększanie screenów)
function openLightbox(element) {
    let src = '';
    const img = element.querySelector('.screenshot-src');

    // Jeśli nie ma źródła, obrazek jest ukryty (błąd ładowania) lub jest to pusty obrazek - nie otwieraj
    if (img && img.src && !img.classList.contains('hidden') && !img.src.endsWith(window.location.host + window.location.pathname) && !img.src.includes('data:image')) {
        src = img.src;
    }

    if (!src) return;

    let lightbox = document.getElementById('global-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'global-lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="absolute inset-0" onclick="closeLightbox()"></div>
            <button onclick="closeLightbox()" class="lightbox-close text-slate-400 hover:text-white text-5xl transition-colors z-10">&times;</button>
            <img id="lightbox-img" src="" alt="Screenshot" class="relative z-10">
        `;
        document.body.appendChild(lightbox);
        lightbox = document.getElementById('global-lightbox');
    }

    document.getElementById('lightbox-img').src = src;
    lightbox.classList.add('is-open');

    // Wymuszenie reflow dla animacji zamienione na non-blocking RqAF
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            // Opacity is handled by .active in CSS, but we ensure it's triggered
        });
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('global-lightbox');
    if (lightbox) {
        lightbox.classList.remove('is-open');
        setTimeout(() => {
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
            <defs>
                <linearGradient id="nav-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3ddc84" />
                    <stop offset="100%" stop-color="#00e5ff" />
                </linearGradient>
            </defs>
            <polygon points="32,4 58,19 58,45 32,60 6,45 6,19" fill="none" stroke="url(#nav-logo-grad)" stroke-width="3" stroke-linejoin="round"/>
            <path d="M19 40V24l13 11 13-11v16" fill="none" stroke="url(#nav-logo-grad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
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
    changeLanguage(lang, true);
}

function changeLanguage(lang, isInitial = false) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Aktualizacja stanu przycisków językowych
    document.querySelectorAll('[data-lang]').forEach(button => {
        button.classList.toggle('is-active', button.dataset.lang === lang);
    });

    const triggerRender = () => {
        if (typeof renderMqolChangelog === 'function') {
            renderMqolChangelog(lang);
        }
        if (typeof renderDttChangelog === 'function') {
            renderDttChangelog(lang);
        }
    };

    if (isInitial) {
        setTimeout(triggerRender, 400);
    } else {
        triggerRender();
    }
}

function initBgCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const properties = {
        bgColor: 'transparent',
        particleColor: 'rgba(61, 220, 132, 0.22)',
        particleGlowColor: 'rgba(0, 229, 255, 0.45)',
        lineColor: 'rgba(61, 220, 132, 0.04)',
        particleRadius: 2.2,
        maxVelocity: 0.45,
        lineLength: 130,
    };

    let mouse = { x: null, y: null };
    let currentScrollY = window.scrollY || window.pageYOffset;
    let driftVelocityX = 0;

    // Ustalanie początkowego dryfu cząsteczek na podstawie poprzedniej strony (referrer)
    try {
        const referrer = document.referrer;
        if (referrer) {
            const refUrl = new URL(referrer);
            const curUrl = new URL(window.location.href);
            if (refUrl.origin === curUrl.origin) {
                const getPathname = (url) => {
                    const parts = url.pathname.split('/');
                    let filename = parts.pop() || 'index.html';
                    if (filename === '') filename = 'index.html';
                    return filename;
                };
                const refPath = getPathname(refUrl);
                const curPath = getPathname(curUrl);

                const getIndex = (path) => {
                    if (path === 'index.html') return 0;
                    if (path === 'projects.html') return 1;
                    return 2;
                };
                const refIdx = getIndex(refPath);
                const curIdx = getIndex(curPath);

                if (curIdx > refIdx) {
                    driftVelocityX = -18; // Ruch w przód -> cząsteczki lecą w lewo
                } else if (curIdx < refIdx) {
                    driftVelocityX = 18;  // Ruch w tył -> cząsteczki lecą w prawo
                }
            }
        }
    } catch (e) {
        // Ignoruj błędy
    }

    // Funkcja wyzwalająca nagły dryf cząsteczek przy kliknięciu linku przed zmianą podstrony
    window.triggerBgDrift = function (direction) {
        if (direction === 'forward') {
            driftVelocityX = -18;
        } else if (direction === 'backward') {
            driftVelocityX = 18;
        }
    };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        adjustParticleCount();
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;

            // Assign to one of 3 depth layers: Far (0), Mid (1), Near (2)
            const rand = Math.random();
            if (rand < 0.35) {
                // Far background
                this.layer = 0;
                this.z = Math.random() * 0.12 + 0.08; // 0.08 to 0.20
            } else if (rand < 0.8) {
                // Midground
                this.layer = 1;
                this.z = Math.random() * 0.25 + 0.35; // 0.35 to 0.60
            } else {
                // Foreground
                this.layer = 2;
                this.z = Math.random() * 0.35 + 0.75; // 0.75 to 1.10
            }

            this.velocityX = (Math.random() * 2 - 1) * properties.maxVelocity * (this.z + 0.15);
            this.velocityY = (Math.random() * 2 - 1) * properties.maxVelocity * (this.z + 0.15);
            this.drawY = this.y;
        }

        position() {
            // Dodaj dryf pomnożony przez głębię z (paralaksa 3D)
            this.x += this.velocityX + driftVelocityX * (this.z * 0.75 + 0.25);
            this.y += this.velocityY;

            // Attraction logic based on visible on-screen coordinate drawY
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.drawY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    const force = (200 - dist) / 200;
                    // Near layer is more reactive to mouse attraction
                    const layerScale = this.layer === 0 ? 0.2 : (this.layer === 1 ? 0.6 : 1.25);
                    this.x += (dx / dist) * force * 0.45 * layerScale;
                    this.y += (dy / dist) * force * 0.45 * layerScale;
                }
            }

            // Boundary checks for wrapping/recycling
            if (this.x < 0) {
                this.x = width;
            } else if (this.x > width) {
                this.x = 0;
            }

            if (this.y < 0) {
                this.y = height;
            } else if (this.y > height) {
                this.y = 0;
            }
        }

        updateDrawY(scrollY) {
            // Apply parallax scrolling vertical offset with wrapping
            let dy = (this.y - scrollY * this.z) % height;
            if (dy < 0) dy += height;
            this.drawY = dy;
        }

        draw() {
            let size = properties.particleRadius;
            let baseOpacity = 0.22;

            if (this.layer === 0) {
                size = 1.0;
                baseOpacity = 0.12;
            } else if (this.layer === 1) {
                size = 1.8;
                baseOpacity = 0.26;
            } else if (this.layer === 2) {
                size = 2.8;
                baseOpacity = 0.55;
            }

            ctx.beginPath();
            ctx.arc(this.x, this.drawY, size, 0, Math.PI * 2);
            ctx.closePath();

            let isNearMouse = false;
            let mouseRange = 130;
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.drawY;
                if (Math.sqrt(dx * dx + dy * dy) < mouseRange) {
                    isNearMouse = true;
                }
            }

            // Scale opacity based on mouse proximity
            const opacity = isNearMouse ? 0.75 : baseOpacity;
            const color = isNearMouse
                ? properties.particleGlowColor
                : `rgba(61, 220, 132, ${opacity})`;

            ctx.fillStyle = color;
            ctx.fill();

            if (isNearMouse) {
                ctx.shadowBlur = 8 * this.z;
                ctx.shadowColor = '#00e5ff';
            } else {
                ctx.shadowBlur = 0;
            }
        }
    }

    function adjustParticleCount() {
        const area = width * height;
        const targetCount = Math.min(120, Math.max(30, Math.floor(area * 0.000035)));

        if (particles.length < targetCount) {
            while (particles.length < targetCount) {
                particles.push(new Particle());
            }
        } else if (particles.length > targetCount) {
            particles.splice(targetCount);
        }
    }

    adjustParticleCount();

    function drawLines() {
        ctx.shadowBlur = 0;
        const maxDistSq = properties.lineLength * properties.lineLength;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                // ONLY connect particles in the SAME depth layer
                if (particles[i].layer !== particles[j].layer) continue;

                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].drawY - particles[j].drawY;
                const distSq = dx * dx + dy * dy;

                if (distSq < maxDistSq) {
                    const dist = Math.sqrt(distSq);
                    let isLineActive = false;
                    if (mouse.x !== null && mouse.y !== null) {
                        const mdx1 = mouse.x - particles[i].x;
                        const mdy1 = mouse.y - particles[i].drawY;
                        const mdx2 = mouse.x - particles[j].x;
                        const mdy2 = mouse.y - particles[j].drawY;
                        if (Math.sqrt(mdx1 * mdx1 + mdy1 * mdy1) < 130 && Math.sqrt(mdx2 * mdx2 + mdy2 * mdy2) < 130) {
                            isLineActive = true;
                        }
                    }

                    const alpha = (properties.lineLength - dist) / properties.lineLength;

                    // Thicker and brighter lines for foreground layer
                    let strokeColor;
                    let lineWidth = 0.8;

                    if (isLineActive) {
                        strokeColor = `rgba(0, 229, 255, ${alpha * 0.3})`;
                        lineWidth = 1.4;
                    } else {
                        if (particles[i].layer === 0) {
                            // Far background - very faint lines
                            strokeColor = `rgba(61, 220, 132, ${alpha * 0.025})`;
                            lineWidth = 0.5;
                        } else if (particles[i].layer === 1) {
                            // Midground
                            strokeColor = `rgba(61, 220, 132, ${alpha * 0.05})`;
                            lineWidth = 0.8;
                        } else {
                            // Foreground
                            strokeColor = `rgba(61, 220, 132, ${alpha * 0.12})`;
                            lineWidth = 1.2;
                        }
                    }

                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = lineWidth;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].drawY);
                    ctx.lineTo(particles[j].x, particles[j].drawY);
                    ctx.stroke();
                }
            }
        }
    }

    function loop() {
        ctx.clearRect(0, 0, width, height);

        // Płynne wygaszanie dryfu tła do 0
        driftVelocityX *= 0.94;
        if (Math.abs(driftVelocityX) < 0.01) {
            driftVelocityX = 0;
        }

        // Update scroll offset inside loop for smooth frames (with cross-browser fallbacks)
        currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        particles.forEach(p => {
            p.position();
            p.updateDrawY(currentScrollY);
            p.draw();
        });
        drawLines();
        requestAnimationFrame(loop);
    }

    loop();
}

document.documentElement.dataset.theme = 'dark';

function renderChangelog(containerId, changelogData, versionGroups, lang) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const getTagColor = (type) => {
        if (type === 'Added') return 'text-emerald-400';
        if (type === 'Fixed') return 'text-red-400';
        if (type === 'Changed') return 'text-blue-400';
        if (type === 'Removed') return 'text-orange-400';
        return 'text-slate-400';
    };

    const getTagTranslation = (type, lang) => {
        if (lang === 'pl') {
            if (type === 'Added') return '[Dodano]';
            if (type === 'Fixed') return '[Naprawiono]';
            if (type === 'Changed') return '[Zmieniono]';
            if (type === 'Removed') return '[Usunięto]';
        }
        return `[${type}]`;
    };

    let html = '';
    const totalBuilds = changelogData.length;
    let renderedCount = 0;

    versionGroups.forEach((group, groupIndex) => {
        let revEndIdx;
        if (groupIndex === 0) {
            revEndIdx = totalBuilds - 1;
        } else {
            revEndIdx = versionGroups[groupIndex - 1].revStartIdx - 1;
        }

        const actualStartIdx = totalBuilds - 1 - revEndIdx;
        const actualEndIdx = totalBuilds - 1 - group.revStartIdx;

        // Skip rendering version group if it doesn't contain any builds yet
        if (actualStartIdx > actualEndIdx) return;

        const isFirst = renderedCount === 0;
        renderedCount++;

        let statusBadge = '';
        if (group.status === 'beta') {
            statusBadge = '<span class="ml-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border border-amber-500/50 text-amber-400 bg-amber-500/10">Beta</span>';
        } else if (group.status === 'stable') {
            statusBadge = '<span class="ml-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border border-emerald-500/50 text-emerald-400 bg-emerald-500/10">Release</span>';
        }

        const cleanId = containerId + '-' + group.id;

        html += '<div class="border ' + (isFirst ? 'border-emerald-900/40' : 'border-slate-800') + ' rounded-xl overflow-hidden">';
        html += '<button class="w-full px-5 py-4 flex justify-between items-center hover:bg-slate-800 transition-colors group" onclick="toggleChangelog(\'' + cleanId + '\')">';
        html += '<div class="flex items-center gap-3">';
        html += '<span class="font-bold ' + (isFirst ? 'text-white group-hover:text-emerald-400' : 'text-slate-400 group-hover:text-white') + ' transition-colors">' + (lang === 'pl' ? group.namePl : group.nameEn) + '</span>';
        html += statusBadge;
        html += '<span class="text-xs ' + (isFirst ? 'text-emerald-200/50 bg-emerald-950/50 border-emerald-900/50' : 'text-slate-500 bg-slate-900 border-slate-800') + ' px-2 py-1 border rounded-md hidden sm:block">' + (lang === 'pl' ? group.descPl : group.descEn) + '</span>';
        html += '</div>';
        html += '<i class="fa-solid fa-chevron-down ' + (isFirst ? 'text-emerald-500/50' : 'text-slate-600') + ' transition-transform duration-300" id="icon-' + cleanId + '"></i>';
        html += '</button>';
        html += '<div class="px-5 pb-5 pt-2 hidden" id="content-' + cleanId + '">';
        html += '<div class="space-y-6 border-l-2 ' + (isFirst ? 'border-slate-700/50' : 'border-slate-800') + ' ml-2 pl-4 mt-2">';
        for (let i = actualStartIdx; i <= actualEndIdx; i++) {
            const b = changelogData[i];
            const title = lang === 'pl' ? b.tp : b.te;
            const buildText = lang === 'pl' ? 'Kompilacja' : 'Build';

            let isLatestBuild = false;
            let buildBadge = '';
            let dotColor = 'bg-slate-600';
            let titleColor = 'text-slate-400';

            const buildType = b.type || (/\d+\.\d+\.\d+[a-z]/i.test(title) ? 'hotfix' : '');
            const isHotfixBuild = buildType === 'hotfix';
            const isReleaseBuild = buildType === 'release';

            if (isHotfixBuild) {
                isLatestBuild = true;
                dotColor = 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]';
                titleColor = 'text-red-400';
                buildBadge = '<span class="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded ml-2">Hotfix</span>';
            } else if (isReleaseBuild) {
                isLatestBuild = true;
                dotColor = 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
                titleColor = 'text-emerald-400';
                buildBadge = '<span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded ml-2">Release</span>';
            }

            if (!buildBadge && i === actualStartIdx) {
                if (group.status === 'beta') {
                    isLatestBuild = true;
                    dotColor = 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]';
                    titleColor = 'text-amber-400';
                    buildBadge = '<span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded ml-2">' + (lang === 'pl' ? 'Najnowsza Beta' : 'Latest Beta') + '</span>';
                }
            }

            html += '<div class="relative">';
            html += '<div class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full ' + dotColor + '"></div>';
            html += '<h4 class="' + titleColor + ' font-bold mb-2 flex items-center">' + buildText + ' ' + b.b + ' - ' + title + buildBadge + '</h4>';
            html += '<ul class="list-none space-y-1.5 text-sm ' + (isLatestBuild ? 'text-slate-300' : 'text-slate-400') + '">';

            b.c.forEach(c => {
                const text = lang === 'pl' ? c.p : c.e;
                html += '<li><span class="' + getTagColor(c.t) + ' font-bold mr-1">' + getTagTranslation(c.t, lang) + '</span> ' + text + '</li>';
            });
            html += '</ul></div>';
        }
        html += '</div></div></div>';
    });

    container.innerHTML = html;
}

function highlightCurrentPage() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    const isProjects = current === 'projects.html' || current === 'mQoL.html' || current === 'DungeonTeleportsTab.html';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.removeAttribute('aria-current');
        const href = link.getAttribute('href');
        if (href === 'index.html' && current === 'index.html') {
            link.setAttribute('aria-current', 'page');
        } else if (href === 'projects.html' && isProjects) {
            link.setAttribute('aria-current', 'page');
        }
    });
}

function initSite() {
    highlightCurrentPage();
    initMenu();
    initLang();
    initBgCanvas();

    // Inicjalizuj i dodaj nasłuchiwanie na scroll dla wyłączania strzałek
    setTimeout(checkSliderButtons, 400);
    const sliders = ['slider-mqol', 'slider-dtt'];
    sliders.forEach(id => {
        const s = document.getElementById(id);
        if (s) {
            s.addEventListener('scroll', checkSliderButtons);
            window.addEventListener('resize', checkSliderButtons);
        }
    });

    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', () => changeLanguage(button.dataset.lang));
    });

    // Zamknij lightbox przy użyciu klawisza Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    // Zapobiegaj przeładowaniu i animacji przejścia przy klikaniu linków do bieżącej strony
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        try {
            const targetUrl = new URL(link.href, window.location.href);
            const currentUrl = new URL(window.location.href);

            // Ignoruj linki zewnętrzne
            if (targetUrl.origin !== currentUrl.origin) return;

            // Ustal nazwę pliku (np. index.html)
            const getPathname = (url) => {
                const parts = url.pathname.split('/');
                let filename = parts.pop() || 'index.html';
                // Jeśli serwer obsługuje directory indexing (np. / to index.html)
                if (filename === '') filename = 'index.html';
                return filename;
            };

            const targetPath = getPathname(targetUrl);
            const currentPath = getPathname(currentUrl);

            if (targetPath === currentPath) {
                // Link prowadzi do tej samej podstrony
                if (targetUrl.hash) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetUrl.hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                        history.pushState(null, '', targetUrl.hash);
                    }
                } else {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    // Wyczyszczenie hasha w URL jeśli był obecny
                    if (currentUrl.hash) {
                        history.pushState(null, '', window.location.pathname);
                    }
                }
            } else {
                // Ruch do nowej podstrony -> wyzwól dryf tła przed przejściem
                const getIndex = (path) => {
                    if (path === 'index.html') return 0;
                    if (path === 'projects.html') return 1;
                    return 2;
                };
                const curIdx = getIndex(currentPath);
                const tarIdx = getIndex(targetPath);
                let direction = 'none';
                if (tarIdx > curIdx) direction = 'forward';
                else if (tarIdx < curIdx) direction = 'backward';

                if (direction !== 'none' && window.triggerBgDrift) {
                    window.triggerBgDrift(direction);
                }
            }
        } catch (err) {
            // Ignoruj błędy
        }
    });
}

if (document.readyState === 'complete') {
    initSite();
} else {
    document.addEventListener('DOMContentLoaded', initSite);
}

