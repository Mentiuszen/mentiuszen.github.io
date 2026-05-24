const dttChangelog = [
    { v: "1.7.0", release: true, e: "Release", p: "Wydanie", c: [
        { t: "Fixed", e: "Fixed broken artwork scaling in the Dungeon Teleports Tab.", p: "Naprawiono zepsute skalowanie grafik w Dungeon Teleports Tab." },
        { t: "Added", e: "Added highlighting for the dungeon currently joined or listed by the player.", p: "Dodano podswietlanie lochu, do ktorego gracz dolaczyl lub ktory wystawil w wyszukiwarce." }
    ]},
    { v: "1.6.1", e: "Hotfix", p: "Hotfix", c: [
        { t: "Fixed", e: "Fix for not working Seat of the Triumvirate teleport.", p: "Poprawka niedzialajacego teleportu do Seat of the Triumvirate." }
    ]},
    { v: "1.6.0", e: "Update", p: "Aktualizacja", c: [
        { t: "Added", e: "Added missing Dawn of the Infinite teleport.", p: "Dodano brakujacy teleport do Dawn of the Infinite." },
        { t: "Fixed", e: "Fixed active dungeon teleports tab color.", p: "Naprawiono kolor aktywnej zakladki teleportow do lochow." }
    ]},
    { v: "1.5.0", e: "Update", p: "Aktualizacja", c: [
        { t: "Added", e: "Added support for Mists of Pandaria Classic.", p: "Dodano wsparcie dla Mists of Pandaria Classic." }
    ]},
    { v: "1.4.0", e: "Update", p: "Aktualizacja", c: [
        { t: "Fixed", e: "Fixed wrong Midnight Season 1 start date.", p: "Naprawiono bledna date startu 1. Sezonu Midnight." },
        { t: "Removed", e: "Removed TWW season tables.", p: "Usunieto tabele sezonowe z TWW." }
    ]},
    { v: "1.3.0", e: "Update", p: "Aktualizacja", c: [
        { t: "Added", e: "Added other regions support for season timers.", p: "Dodano wsparcie czasow sezonow dla innych regionow." },
        { t: "Added", e: "Added season start/end info at season heading.", p: "Dodano informacje o dacie rozpoczecia i zakonczenia przy naglowku sezonu." },
        { t: "Fixed", e: "Minor bug fixes.", p: "Drobne poprawki bledow." }
    ]},
    { v: "1.2.0", e: "Update", p: "Aktualizacja", c: [
        { t: "Fixed", e: "Fixed issue with not working Motherlode portal for Horde players.", p: "Naprawiono problem z niedzialajacym portalem Motherlode dla graczy Hordy." },
        { t: "Added", e: "Added a custom tooltip with information on how to unlock each portal.", p: "Dodano niestandardowy tooltip z informacjami jak odblokowac kazdy portal." },
        { t: "Added", e: "Added information about season start and end dates on portal tooltip.", p: "Dodano informacje o datach startu i zakonczenia sezonu w tooltipie portalu." }
    ]},
    { v: "1.1.0", e: "Update", p: "Aktualizacja", c: [
        { t: "Fixed", e: "Fixed bug that prevented buttons from working for some players.", p: "Naprawiono blad uniemozliwiajacy dzialanie przyciskow u niektorych graczy." },
        { t: "Fixed", e: "Fixed missing textures.", p: "Naprawiono brakujace tekstury." }
    ]},
    { v: "1.0.0", e: "Initial Release", p: "Pierwsze wydanie", c: [
        { t: "Added", e: "Added standalone addon (ported from mQoL module).", p: "Wydano samodzielny addon, wczesniej dostepny jako modul w mQoL." }
    ]}
];

function renderDttChangelog(lang) {
    const container = document.getElementById('dtt-changelog-container');
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
            if (type === 'Removed') return '[Usunieto]';
        }
        return `[${type}]`;
    };

    const latestVersion = dttChangelog[0].v;
    const oldestVersion = dttChangelog[dttChangelog.length - 1].v;
    const allUpdatesLabel = lang === 'pl' ? 'Wszystkie zmiany' : 'All Updates';
    const releaseLabel = lang === 'pl' ? 'Wydanie' : 'Release';
    const latestLabel = lang === 'pl' ? 'Najnowsze wydanie' : 'Latest Release';

    let html = '';
    html += '<div class="border border-fuchsia-900/40 rounded-xl bg-card overflow-hidden">';
    html += '<button class="w-full px-5 py-4 flex justify-between items-center hover:bg-slate-800 transition-colors group" onclick="toggleChangelog(\'dtt-global\')">';
    html += '<div class="flex items-center gap-3">';
    html += '<span class="font-bold text-white group-hover:text-fuchsia-400 transition-colors">v' + oldestVersion + ' - v' + latestVersion + '</span>';
    html += '<span class="ml-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border border-fuchsia-500/50 text-fuchsia-300 bg-fuchsia-500/10">' + releaseLabel + '</span>';
    html += '<span class="text-xs text-fuchsia-200/50 px-2 py-1 bg-fuchsia-950/50 border border-fuchsia-900/50 rounded-md hidden sm:block">' + allUpdatesLabel + '</span>';
    html += '</div>';
    html += '<i class="fa-solid fa-chevron-down text-fuchsia-500/50 transition-transform duration-300" id="icon-dtt-global"></i>';
    html += '</button>';
    html += '<div class="px-5 pb-5 pt-2 hidden" id="content-dtt-global">';
    html += '<div class="space-y-6 border-l-2 border-slate-700/50 ml-2 pl-4 mt-2">';

    dttChangelog.forEach((entry, index) => {
        const isLatest = index === 0;
        const title = lang === 'pl' ? entry.p : entry.e;
        const dotColor = isLatest ? 'bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.5)]' : 'bg-slate-600';
        const titleColor = isLatest ? 'text-fuchsia-400' : 'text-slate-300';
        const listColor = isLatest ? 'text-slate-300' : 'text-slate-400';
        const releaseBadge = entry.release ? '<span class="text-[10px] font-bold uppercase tracking-wider text-fuchsia-300 bg-fuchsia-500/10 border border-fuchsia-500/20 px-2 py-0.5 rounded ml-2">' + latestLabel + '</span>' : '';

        html += '<div class="relative">';
        html += '<div class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full ' + dotColor + '"></div>';
        html += '<h4 class="' + titleColor + ' font-bold mb-2 flex items-center">v' + entry.v + ' - ' + title + releaseBadge + '</h4>';
        html += '<ul class="list-none space-y-1.5 text-sm ' + listColor + '">';
        entry.c.forEach((change) => {
            const text = lang === 'pl' ? change.p : change.e;
            html += '<li><span class="' + getTagColor(change.t) + ' font-bold mr-1">' + getTagTranslation(change.t, lang) + '</span> ' + text + '</li>';
        });
        html += '</ul></div>';
    });

    html += '</div></div></div>';
    container.innerHTML = html;
}
