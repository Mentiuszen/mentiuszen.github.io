const dttChangelog = [
    {
        b: "10", type: "release", te: "Update 1.8.0 - Release", tp: "Aktualizacja 1.8.0 - Wydanie", c: [
            { t: "Added", e: "Added a popup dialog asking to teleport to the dungeon you joined or listed.", p: "Dodano wyskakujące okienko (popup) z zapytaniem o chęć teleportacji do lochu, do którego dołączyłeś lub który wystawiłeś." }
        ]
    },
    {
        b: "9", type: "release", te: "Update 1.7.0 - Release", tp: "Aktualizacja 1.7.0 - Wydanie", c: [
            { t: "Fixed", e: "Fixed broken artwork scaling in the Dungeon Teleports Tab.", p: "Naprawiono nieprawidłowe skalowanie grafik w zakładce Dungeon Teleports." },
            { t: "Added", e: "Added highlighting for the dungeon currently joined or listed by the player.", p: "Dodano podświetlanie lochu, do którego gracz dołączył lub który wystawił w wyszukiwarce." }
        ]
    },
    {
        b: "8", type: "hotfix", te: "Update 1.6.1 - Hotfix", tp: "Aktualizacja 1.6.1 - Hotfix", c: [
            { t: "Fixed", e: "Fixed the Seat of the Triumvirate teleport not working.", p: "Naprawiono błąd uniemożliwiający działanie teleportu do Seat of the Triumvirate." }
        ]
    },
    {
        b: "7", te: "Update 1.6.0 - Update", tp: "Aktualizacja 1.6.0 - Aktualizacja", c: [
            { t: "Added", e: "Added the missing Dawn of the Infinite teleport.", p: "Dodano brakujący teleport do Dawn of the Infinite." },
            { t: "Fixed", e: "Fixed the active dungeon teleports tab color.", p: "Naprawiono kolor aktywnej zakładki teleportów do lochów." }
        ]
    },
    {
        b: "6", te: "Update 1.5.0 - Update", tp: "Aktualizacja 1.5.0 - Aktualizacja", c: [
            { t: "Added", e: "Added support for Mists of Pandaria Classic.", p: "Dodano wsparcie dla Mists of Pandaria Classic." }
        ]
    },
    {
        b: "5", te: "Update 1.4.0 - Update", tp: "Aktualizacja 1.4.0 - Aktualizacja", c: [
            { t: "Fixed", e: "Fixed the incorrect Midnight Season 1 start date.", p: "Naprawiono błędną datę startu 1. Sezonu Midnight." },
            { t: "Removed", e: "Removed TWW season tables.", p: "Usunięto tabele sezonowe z dodatku TWW." }
        ]
    },
    {
        b: "4", te: "Update 1.3.0 - Update", tp: "Aktualizacja 1.3.0 - Aktualizacja", c: [
            { t: "Added", e: "Added support for season timers in other regions.", p: "Dodano obsługę czasów rozpoczęcia sezonów dla innych regionów." },
            { t: "Added", e: "Added season start and end information to the season header.", p: "Dodano informację o dacie rozpoczęcia i zakończenia sezonu w nagłówku." },
            { t: "Fixed", e: "Minor bug fixes.", p: "Drobne poprawki błędów." }
        ]
    },
    {
        b: "3", te: "Update 1.2.0 - Update", tp: "Aktualizacja 1.2.0 - Aktualizacja", c: [
            { t: "Fixed", e: "Fixed the Motherlode portal not working for Horde players.", p: "Naprawiono problem z niedziałającym portalem do Motherlode dla graczy Hordy." },
            { t: "Added", e: "Added a custom tooltip showing how to unlock each portal.", p: "Dodano niestandardowy tooltip z informacjami, jak odblokować każdy portal." },
            { t: "Added", e: "Added season start and end dates to the portal tooltip.", p: "Dodano informacje o dacie startu i zakończenia sezonu w tooltipie portalu." }
        ]
    },
    {
        b: "2", te: "Update 1.1.0 - Update", tp: "Aktualizacja 1.1.0 - Aktualizacja", c: [
            { t: "Fixed", e: "Fixed a bug that prevented buttons from working for some players.", p: "Naprawiono błąd uniemożliwiający działanie przycisków u niektórych graczy." },
            { t: "Fixed", e: "Fixed missing textures.", p: "Naprawiono brakujące tekstury." }
        ]
    },
    {
        b: "1", type: "release", te: "Update 1.0.0 - Initial Release", tp: "Aktualizacja 1.0.0 - Pierwsze wydanie", c: [
            { t: "Added", e: "Released the standalone version of the addon (ported from the mQoL module).", p: "Wydano samodzielny dodatek (wcześniej dostępny jako moduł w mQoL)." }
        ]
    }
];

const dttVersionGroups = [
    {
        id: "v180", status: "stable",
        nameEn: "v1.8.0", namePl: "Wersja 1.8.0",
        descEn: "Dungeon Teleport Popup", descPl: "Popup teleportu do dungeona",
        revStartIdx: 9 // Build 10
    },
    {
        id: "v170", status: "old",
        nameEn: "v1.7.0", namePl: "Wersja 1.7.0",
        descEn: "Dungeon Highlighting", descPl: "Podświetlanie lochów",
        revStartIdx: 8 // Build 9
    },
    {
        id: "v16x", status: "old",
        nameEn: "v1.6.0", namePl: "Wersja 1.6.0",
        descEn: "Fixes", descPl: "Poprawki",
        revStartIdx: 6 // Builds 7-8
    },
    {
        id: "v150", status: "old",
        nameEn: "v1.5.0", namePl: "Wersja 1.5.0",
        descEn: "MoP Classic support", descPl: "Obsługa MoP Classic",
        revStartIdx: 5 // Build 6
    },
    {
        id: "v140", status: "old",
        nameEn: "v1.4.0", namePl: "Wersja 1.4.0",
        descEn: "Midnight Season 1", descPl: "Midnight Sezon 1",
        revStartIdx: 4 // Build 5
    },
    {
        id: "v130", status: "old",
        nameEn: "v1.3.0", namePl: "Wersja 1.3.0",
        descEn: "Season Timers", descPl: "Czasomierze sezonu",
        revStartIdx: 3 // Build 4
    },
    {
        id: "v120", status: "old",
        nameEn: "v1.2.0", namePl: "Wersja 1.2.0",
        descEn: "Unlock Tooltips", descPl: "Opisy odblokowania",
        revStartIdx: 2 // Build 3
    },
    {
        id: "v110", status: "old",
        nameEn: "v1.1.0", namePl: "Wersja 1.1.0",
        descEn: "Bug Fixes", descPl: "Poprawki błędów",
        revStartIdx: 1 // Build 2
    },
    {
        id: "v100", status: "old",
        nameEn: "v1.0.0", namePl: "Wersja 1.0.0",
        descEn: "Initial Release", descPl: "Pierwsze wydanie",
        revStartIdx: 0 // Build 1
    }
];

function renderDttChangelog(lang) {
    renderChangelog('dtt-changelog-container', dttChangelog, dttVersionGroups, lang);
}
