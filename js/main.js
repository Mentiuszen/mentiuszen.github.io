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
        buildText: "Build"
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
        buildText: "Kompilacja (Build)"
    }
};

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

document.addEventListener('DOMContentLoaded', initLang);