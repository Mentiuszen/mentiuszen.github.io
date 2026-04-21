const translations = {
    en: {
        navHome: "Home",
        navProjects: "Projects",
        heroStart: "Welcome to ",
        heroHighlight: "Mentiuszen Hub",
        heroDesc: "My personal space for sharing public projects, quality of life tweaks, and scripts.",
        btnBrowse: "Browse Projects",
        feat1Title: "Open Source",
        feat1Desc: "Explore the code behind my public repositories on GitHub.",
        feat2Title: "Quality of Life",
        feat2Desc: "Focusing on small improvements that make a big difference in daily usage.",
        projectsTitle: "Public Projects",
        mQoLDesc: "Quality of Life improvements and tweaks for a better experience.",
        dttDesc: "A tab interface for quick and easy dungeon teleports.",
        btnViewProject: "View Project",
        download: "Download Latest",
        changelog: "Changelog",
        footerText: "&copy; 2026 Mentiuszen. All rights reserved.",
        tagAdded: "[Added]",
        tagFixed: "[Fixed]",
        tagChanged: "[Changed]",
        addonBadge: "World of Warcraft Addon",
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
        navHome: "Strona Główna",
        navProjects: "Projekty",
        heroStart: "Witaj w ",
        heroHighlight: "Mentiuszen Hub",
        heroDesc: "Moja osobista przestrzeń do dzielenia się publicznymi projektami, poprawkami i skryptami.",
        btnBrowse: "Przeglądaj Projekty",
        feat1Title: "Otwarte Źródło",
        feat1Desc: "Odkryj kod stojący za moimi publicznymi repozytoriami na GitHubie.",
        feat2Title: "Jakość Życia",
        feat2Desc: "Skupiam się na drobnych ulepszeniach, które robią wielką różnicę w codziennym użytkowaniu.",
        projectsTitle: "Publiczne Projekty",
        mQoLDesc: "Zbiór poprawek i ulepszeń typu Quality of Life ułatwiających rozgrywkę.",
        dttDesc: "Interfejs zakładek do szybkiego i łatwego teleportowania się po lochach.",
        btnViewProject: "Zobacz Projekt",
        download: "Pobierz najnowszą",
        changelog: "Historia Zmian",
        footerText: "&copy; 2026 Mentiuszen. Wszelkie prawa zastrzeżone.",
        tagAdded: "[Dodano]",
        tagFixed: "[Naprawiono]",
        tagChanged: "[Zmieniono]",
        addonBadge: "Dodatek do World of Warcraft",
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
        // Przewija o 80% widocznej szerokości
        const scrollAmount = slider.clientWidth * 0.8;
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

function initLang() {
    let lang = localStorage.getItem('lang') || 'en';
    changeLanguage(lang);
}

function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
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
            btnEn.className = "text-sm font-medium text-white bg-indigo-600/50 hover:bg-indigo-600 px-2 py-1 rounded transition-colors";
            btnPl.className = "text-sm font-medium text-slate-400 hover:text-white px-2 py-1 rounded transition-colors";
        } else {
            btnPl.className = "text-sm font-medium text-white bg-indigo-600/50 hover:bg-indigo-600 px-2 py-1 rounded transition-colors";
            btnEn.className = "text-sm font-medium text-slate-400 hover:text-white px-2 py-1 rounded transition-colors";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
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
});