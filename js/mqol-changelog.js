const mqolChangelog = [
    { b: "229", te: "Changes and Test", tp: "Zmiany i Testy", c: [
        { t: "Changed", e: "Changed the internal release vendor tag to 'test'.", p: "Zmieniono wewnętrzny znacznik wersji z wydania głównego na 'test'." },
        { t: "Changed", e: "Renamed 'MythicPlus' references to 'Dungeons' inside the Weekly Reward Viewer.", p: "Zmieniono nazewnictwo z 'MythicPlus' na 'Dungeons' wewnątrz podglądu cotygodniowych nagród." },
        { t: "Fixed", e: "Fixed a Lua error on the Legion client caused by incorrectly assigning the 'Auto Push Spell To Action Bar' CVAR.", p: "Naprawiono błąd Lua na kliencie Legion, który wynikał z błędnego przypisania niedostępnej zmiennej CVAR 'Auto Push Spell To Action Bar'." },
        { t: "Added", e: "Added foundational loot tables for Legion Season 1 and Season 2 (system integration still WiP).", p: "Dodano tabelki z lootem dla 1. i 2. sezonu na Legionie (system czeka na pełne spięcie)." }
    ]},
    { b: "228", te: "Vault & Home Screen Fixes", tp: "Poprawki Skarbca i Ekranu Głównego", c: [
        { t: "Fixed", e: "Fixed a Lua error related to raid progress in the Vault preview window.", p: "Naprawiono błąd Lua wyskakujący w związku z danymi o rajdach przy podglądzie skarbca (Vault)." },
        { t: "Fixed", e: "Fixed scroll frame issues on the Home screen.", p: "Naprawiono problemy z ramką przewijania (scrollframe) na ekranie startowym." }
    ]},
    { b: "227", te: "Profession Display Fix", tp: "Poprawka profesji", c: [
        { t: "Fixed", e: "Fixed a display rendering bug occurring when a character only had one primary profession learned.", p: "Naprawiono błąd układu wizualnego, który pojawiał się, gdy postać posiadała wyuczoną tylko jedną główną profesję zamiast dwóch." }
    ]},
    { b: "226", te: "Account Overview & Vault Polish", tp: "Polerowanie Przeglądu Konta i Skarbca", c: [
        { t: "Changed", e: "Polished the Vault Viewer layout to be a flawless 1:1 replica of the original Blizzard UI.", p: "Wyszlifowano wygląd Vault Viewera, tak aby przypominał oryginalny interfejs Blizzarda w proporcjach 1:1." },
        { t: "Changed", e: "Redesigned the Account Overview panel to better match the overall mQoL aesthetic style.", p: "Przeprojektowano cały panel przeglądu konta (Account Overview), by idealnie pasował do nowego, mrocznego stylu mQoL." }
    ]},
    { b: "225", te: "Vault Viewer", tp: "Podgląd Skarbca", c: [
        { t: "Added", e: "Added the Vault Viewer, accessible by clicking the current vault progress in the Account Overview.", p: "Dodano pełnoprawny podgląd skarbca (Vault Viewer), który otwiera się po kliknięciu paska postępu w Przeglądzie Konta." },
        { t: "Added", e: "The Viewer dynamically generates a brand-new window mimicking the default Blizzard Vault, populated entirely with addon-saved data.", p: "System generuje od zera nowe okno imitujące skarbiec z oryginalnej gry, uzupełniając je danymi zebranymi i zapisanymi w tle przez addon." }
    ]},
    { b: "224", te: "Weekly Rewards Module", tp: "Cotygodniowe Nagrody (Vault)", c: [
        { t: "Added", e: "Added a new core file: mQoL_WeeklyRewardsUtils.lua, responsible for extracting Vault data from the current character.", p: "Dodano nowy plik mQoL_WeeklyRewardsUtils.lua, w którym siedzi logika wyciągania danych z Great Vault dla obecnej postaci." },
        { t: "Added", e: "Implemented basic display of currently completed Vault tiers for a specific character.", p: "Wdrożono bazowe wyświetlanie ilości ukończonych poziomów w skarbcu (Vault) na podglądzie konta." }
    ]},
    { b: "223", te: "Account Overview Fixes", tp: "Poprawki przeglądu konta", c: [
        { t: "Fixed", e: "Fixed a bug preventing the addon from accurately retrieving profession skill points from older expansions.", p: "Naprawiono wadliwy system, który nie potrafił poprawnie odczytać punktów umiejętności (skill points) z poprzednich dodatków." }
    ]},
    { b: "222", te: "Code Cleanup", tp: "Czyszczenie kodu", c: [
        { t: "Removed", e: "Purged redundant and unnecessary code from the Account Overview module.", p: "Wyczyszczono moduł Account Overview ze starych, niepotrzebnych skryptów." },
        { t: "Removed", e: "Purged redundant code from the Utils module.", p: "Zrobiono solidne porządki w kodzie systemowym modułu Utils." }
    ]},
    { b: "221", te: "Account Overview Changes", tp: "Rozwój przeglądu konta", c: [
        { t: "Added", e: "Added full synchronization of profession data whenever the profession window is opened.", p: "Zaimplementowano pełną, nieinwazyjną synchronizację danych profesji uruchamianą zaraz po otwarciu okna profesji." },
        { t: "Changed", e: "Moved profession synchronization code into an isolated mQoL_ProfessionsUtils module.", p: "Odizolowano i przeniesiono cały kod zajmujący się profesjami do osobnego pliku mQoL_ProfessionsUtils." },
        { t: "Changed", e: "Moved utility functions (like text formatting and string normalization) into mQoL_Utils.", p: "Oczyszczono rdzeń, wrzucając funkcje pomocnicze (np. formatowanie, ucinanie tekstu) do osobnego pliku mQoL_Utils." },
        { t: "Added", e: "Added support for tracking and saving profession skill levels from older expansions.", p: "Wdrożono obsługę śledzenia i zapisywania poziomu profesji w rozbiciu na klasyczne (starsze) dodatki." }
    ]},
    { b: "220", te: "Fast Autoloot & Home Panel", tp: "Szybki Autoloot i Panel Startowy", c: [
        { t: "Changed", e: "Replaced the standard CVAR looting logic with a fully custom 'Fast Autoloot' module.", p: "Porzucono wbudowany system CVAR do lootowania i zastąpiono go niezwykle prędkim, autorskim systemem szybkiego podnoszenia przedmiotów." },
        { t: "Changed", e: "Updated the Home panel to reflect new version 1.2.0 information instead of outdated 1.1.0 data.", p: "Zaktualizowano ekran powitalny Huba – usunięto stare wzmianki o łatce 1.1.0 zastępując je chwaleniem się wersją 1.2.0." },
        { t: "Changed", e: "Made minor visual adjustments to the Characters view in the Account Overview panel.", p: "Wprowadzono drobne modyfikacje w tabelce z listą postaci na przeglądzie konta." }
    ]},
    { b: "219", te: "Party Keystones Fixes", tp: "Poprawki Kluczy M+", c: [
        { t: "Fixed", e: "Fixed a bug where the Party Keystones button would not work the first time it was clicked.", p: "Naprawiono błąd przez który przycisk Party Keystones nie chciał się wcisnąć za pierwszym razem." },
        { t: "Changed", e: "Reduced the excessively large width of the Playstyles dropdown menu.", p: "Zmniejszono zbyt mocno rozciągniętą listę rozwijaną stylów gry (Playstyles)." },
        { t: "Fixed", e: "Fixed a bug where selected playstyles were not saved between game sessions.", p: "Naprawiono błąd powodujący brak zapisu wybranego Playstyle'a po ponownym uruchomieniu gry." }
    ]},
    { b: "218", te: "Addon Overall Changes", tp: "Ogólne zmiany systemowe", c: [
        { t: "Added", e: "Introduced a new core module: mQoL_Utils.lua to centralize helper functions.", p: "Dodano nowy systemowy plik mQoL_Utils.lua by zgromadzić wszystkie małe, pomocnicze funkcje w jednym miejscu." },
        { t: "Changed", e: "Replaced the intricate intro animation with a simpler, cleaner version.", p: "Zastąpiono złożoną animację powitalną znacznie prostszą i szybszą w odbiorze wersją." }
    ]},
    { b: "217", te: "Party Keystones Returns", tp: "Powrót Kluczy Party M+", c: [
        { t: "Added", e: "Added the MythicPlusListing.lua module, allowing players to view party members' keystones and quick-list them.", p: "Wdrożono ogromny powrót modułu MythicPlusListing.lua, pozwalającego widzieć klucze całej grupy i wystawiać je szybko w wyszukiwarce LFG." },
        { t: "Added", e: "The Party Keystones interface now indicates if a keystone is depleted/resilient and offers a quick listing option.", p: "Interfejs obok wyświetlenia klucza pokazuje, czy zdążył już on zepsuć/zubożyć oraz pozwala opublikować go 1 kliknięciem." }
    ]},
    { b: "216", te: "Account Overview Changes", tp: "Zmiany w Przeglądzie Konta", c: [
        { t: "Fixed", e: "Fixed a structural gap in the Gold Chart that accidentally left the scrollframe active behind it.", p: "Naprawiono przerwę w wykresie złota, przez którą niechcący dało się klikać na aktywną za nią ramkę przewijania." },
        { t: "Changed", e: "Adjusted gold text formatting to show greater precision for minor changes (e.g., 2.6m to 2.61m).", p: "Poprawiono formatowanie skrótów złota (przy bliskich zmianach gra pokaże teraz np. 2.61m zamiast w kółko zaokrąglać do 2.6m)." },
        { t: "Fixed", e: "Fixed multiple underlying issues with the 'Overall' gold chart plotting.", p: "Naprawiono serię mniejszych błędów z punktowaniem na głównym wykresie uśrednionego zysku (Overall)." }
    ]},
    { b: "215", te: "Account Overview Bug Fixes", tp: "Poprawki wykresów złota", c: [
        { t: "Fixed", e: "Fixed a bug where missing old data defaulted to the current gold value instead of the oldest available record.", p: "Załatano błąd, w którym brak starych danych zrównywał się na wykresie z aktualnym złotem zamiast z pierwszą, najstarszą dostępną próbką." },
        { t: "Fixed", e: "Fixed a bug that forcibly switched the active tab back to 'Overall' involuntarily.", p: "Naprawiono uciążliwy błąd, który na siłę przełączał podgląd na 'Overall' wbrew woli użytkownika." },
        { t: "Fixed", e: "Fixed a visual bug causing the active tab color to incorrectly shift from gold to white.", p: "Naprawiono błąd graficzny odbarwiający świecący, złoty napis wybranej zakładki na szary, wyblakły biały." }
    ]},
    { b: "214", te: "Account Overview", tp: "Przegląd Całego Konta", c: [
        { t: "Added", e: "Added the massive 'Account Overview' panel to track all character statistics.", p: "Wdrożono nową, potężną zakładkę Przeglądu Konta (Account Overview), trzymającą statystyki z całego konta WoW." },
        { t: "Added", e: "Added a comprehensive data table tracking Characters, Classes, Levels, Professions, Time Played, and Gold.", p: "Stworzono zaawansowaną tabelę wyświetlającą: Postacie / Klasę / Poziom / Profesję / Czas w grze / Złoto." },
        { t: "Added", e: "Implemented an interactive 'Gold Chart' that collects and graphs wealth data for the player's reference.", p: "Zbudowano interaktywny Wykres Złota (Gold Chart), który kolekcjonuje wartości i rysuje piękny wykres ewolucji majątku w czasie!" }
    ]},
    { b: "213", te: "New CVARs", tp: "Nowe opcje CVAR", c: [
        { t: "Added", e: "Added control for the autoLootRate CVAR, allowing custom autoloot speeds from 1ms to 100ms per item.", p: "Dodano kontrolę na poziomie opcji dla autoLootRate, pozwalając graczom zmieniać prędkość lootowania co 1ms do maksymalnie 100ms na przedmiot." },
        { t: "Added", e: "Added control for the AutoPushSpellToActionBar CVAR, letting users stop new spells from cluttering their action bars.", p: "Odblokowano kontrolę nad AutoPushSpellToActionBar – od teraz sam decydujesz, czy nowe spelle mają z automatu wyskakiwać na wolnych miejscach na pasku." },
        { t: "Added", e: "Added control for the autoSelfCast CVAR, determining if spells should target the player when no target is selected.", p: "Dodano kontrolkę autoSelfCast, by włączyć bądź wyłączyć zrzucanie z automatu skilla na siebie, gdy nie zaznaczyliśmy żadnego potwora." }
    ]},
    { b: "212", te: "Dungeon Teleports Changes", tp: "Lepsze zarzadzanie teleportami", c: [
        { t: "Added", e: "Added specific support for Mists of Pandaria Classic.", p: "Włączono pełne wsparcie dla klienta Mists of Pandaria Classic." },
        { t: "Added", e: "The addon now dynamically recognizes if a low-level character possesses a portal without requiring high levels.", p: "Zaimplementowano inteligentne rozpoznawanie, czy nisko-levelowa postać na koncie odblokowała wcześniej w grze dany portal do lochów." },
        { t: "Added", e: "The teleport tab now clearly displays the required minimum level to use a specific portal.", p: "Od teraz zakładka na kafelku jasno i przejrzyście raportuje, na jakim poziomie gracz może fizycznie użyć danego wejścia." }
    ]},
    { b: "204", te: "Dungeon Teleports Hotfixes", tp: "Gorące poprawki Teleportów", c: [
        { t: "Added", e: "Added a safeguard to dynamically clear UI attributes, ensuring teleports remain fully clickable without locking.", p: "Wdrożono zabezpieczenia (safeguard) regularnie czyszczące atrybuty UI, co gwarantuje, że teleporty zawsze będą w pełni klikalne." },
        { t: "Added", e: "Included missing textures specifically for the standalone version of the addon.", p: "Uzupełniono brakujące pliki z teksturami wewnątrz paczki w wariancie 'standalone'." }
    ]},
    { b: "203", te: "Update 1.2.0 - Dungeon Teleports Fixes", tp: "Aktualizacja 1.2.0 - Ochrona Combat Taint", c: [
        { t: "Fixed", e: "Fixed a bug where the teleports tab threw Lua errors immediately upon entering combat.", p: "Załatano wkurzający błąd, gdzie ukryta zakładka teleportów pluła błędami Lua od razu przy wejściu w walkę." },
        { t: "Fixed", e: "Fixed a bug where the addon severely caused the entire Group Finder panel to glitch during combat.", p: "Naprawiono błąd przez który ukryte skrypty addonu dosłownie rozsadzały działanie głównego panelu Group Findera podczas walki." },
        { t: "Added", e: "Added a strict safeguard to protect default Blizzard frames from combat 'taints' caused by the addon.", p: "Dodano twarde zabezpieczenia do kodu chroniące oficjalne ramki Blizzarda przed tzw. 'Combat Taint'." },
        { t: "Changed", e: "The Dungeon Teleports tab now safely locks and disables itself during combat, reactivating when it ends.", p: "Zakładka teleportów całkowicie i bezpiecznie blokuje/dezaktywuje się podczas starcia, włączając się z powrotem dopiero po walce." },
        { t: "Fixed", e: "Fixed separator rendering code for dropdown menus in mQoL_Styles.", p: "Poprawiono wadliwy kod renderujący paski oddzielające (separatory) na listach z mQoL_Styles." }
    ]},
    { b: "202", te: "Update 1.2.0 - Dungeon Teleports Changes", tp: "Aktualizacja 1.2.0 - Modyfikacje Wizualne", c: [
        { t: "Changed", e: "Adjusted teleport tile ratios (65/35 instead of 35/65) and improved overall formatting for a better look.", p: "Wyprostowano formatowanie kafelków teleportów i podmieniono ich proporcje z 35/65 na 65/35 dla znacznie ładniejszego wyglądu." },
        { t: "Changed", e: "Replaced old dungeon representations with high-quality, easily distinguishable textures.", p: "Wyrzucono stare obrazki lochów, zastępując je nowymi teksturami wysokiej jakości, które od razu łatwo rozpoznać." },
        { t: "Changed", e: "Replaced the default dropdown menu with a stylized one from the custom styles template.", p: "Podmieniono domyślną listę rozwijaną Blizzarda na stylizowaną z paczki mQoL_Styles." },
        { t: "Added", e: "Added dynamic visual cooldown sweeps (clock animation) alongside numeric cooldown timers.", p: "Dodano pełnoprawne nakładki na ikony informujące o cooldownie (animacja uciekającego zegara) obok samego tekstu odliczającego minuty." },
        { t: "Fixed", e: "Fixed invalid spell IDs that mistakenly teleported players to incorrect instances.", p: "Naprawiono całkowicie pomieszane ID niektórych spelli, które wcześniej teleportowały graczy pod złe lochy." }
    ]},
    { b: "201", te: "Update 1.2.0 - Dungeon Teleports", tp: "Aktualizacja 1.2.0 - Logika Przycisków", c: [
        { t: "Added", e: "Added a visual tile-based layout for teleport buttons.", p: "Stworzono kaflowy (okienkowy) układ przycisków wewnątrz panelu." },
        { t: "Added", e: "Clicking a tile will now properly cast the teleport spell to the chosen dungeon.", p: "Ustawiono logikę interakcji – od teraz kliknięcie na dany kafelek fizycznie używa skilla teleportacji do lochu." },
        { t: "Added", e: "Added a basic dropdown menu allowing players to filter teleports by expansion or current season.", p: "Dodano podstawowe menu rozwijane u góry okna do sortowania i filtrowania teleportów ze względu na dodatki lub sezony." }
    ]},
    { b: "200", te: "Update 1.2.0 - Dungeon Teleports", tp: "Aktualizacja 1.2.0 - Panel Dungeon Teleports", c: [
        { t: "Added", e: "Added a brand new 'Dungeon Teleports' tab to the official Group Finder window (currently Retail only).", p: "Dodano kompletnie nową, autorską zakładkę 'Dungeon Teleports' bezpośrednio do oficjalnego okna Group Findera Blizzarda (na tę chwilę tylko w wersji Retail)." },
        { t: "Added", e: "Set up baseline formatting and title structures for the newly integrated window.", p: "Ustawiono fundamenty nowego okna (tytuły, osadzenie, podstawowe ramki)." }
    ]},
    { b: "193", te: "Patch 1.1.1 - Code Improvements", tp: "Patch 1.1.1 - Usprawnienia użyteczności", c: [
        { t: "Added", e: "Input box popups now automatically grab typing focus (cursor) right after opening.", p: "Od teraz popup z polem tekstowym automatycznie przejmuje fokus klawiatury od razu po otwarciu, by pisać bez klikania." },
        { t: "Added", e: "Pressing the ESC key now dynamically closes 'Save Raid Profile' and 'Manage Raid Profiles' popups.", p: "Klawisz ESC na klawiaturze od teraz poprawnie zamyka wszystkie aktywne okienka związane z profilami rajdowymi." }
    ]},
    { b: "192", te: "Patch 1.1.1 - Code Changes", tp: "Patch 1.1.1 - Porządki", c: [
        { t: "Changed", e: "Cleaned up and refactored the terribly unorganized hook settings panel script for Pandaria Classic.", p: "Kompletnie przepisano od zera chaotyczny skrypt podpinania panelu ustawień na wersji Pandaria Classic." },
        { t: "Changed", e: "Rewrote the logic disabling 'Auto Activate On' in Raid Profiles to strictly prevent it from being bypassed.", p: "Przerobiono logikę wyłączającą 'Auto Activate On' dla profili rajdowych tak mocno, żeby użytkownik nie dał już rady tego zbugować i wymusić." }
    ]},
    { b: "191", te: "Patch 1.1.1 - Few Changes and Fixes", tp: "Patch 1.1.1 - Zmiany i poprawki", c: [
        { t: "Added", e: "Added a 'no-spec' baseline mode for Advanced Edit Profiles to allow fresh, unspecced characters to force Edit Mode.", p: "Dodano wariant 'bez specjalizacji' (no-spec) do systemu profili zaawansowanych, by niskopoziomowe postacie bez wybranego drzewka mogły wymuszać Profile UI." },
        { t: "Fixed", e: "Fixed a bug preventing the 'Save raid profile to mQoL' button from appearing on Burning Crusade Classic.", p: "Naprawiono poważny błąd na kliencie BCC, przez który w oknie gry brakowało w ogóle przycisku zapisu profilu rajdowego." }
    ]},
    { b: "190", te: "Patch 1.1.1 - Overview", tp: "Patch 1.1.1 - Nowy Panel 'Overview'", c: [
        { t: "Added", e: "Added a brand new 'Overview' category to the Hub.", p: "Utworzono całkowicie nową, główną kategorię 'Overview' w menu." },
        { t: "Changed", e: "Relocated the 'Home' panel directly into the new 'Overview' category.", p: "Przesunięto istniejący panel domowy (Home) jako podsekcję nowego działu Overview." },
        { t: "Added", e: "Created a new 'About' panel featuring direct links for bug reporting and project info.", p: "Stworzono panel 'About', wypchany linkami ułatwiającymi raportowanie błędów i zgłaszanie uwag." },
        { t: "Added", e: "Added a new 'underline' attribute to dropdown options, visually highlighting elements like 'Use Situational Instead'.", p: "Rozszerzono możliwości graficzne list rozwijanych (dropdown) o opcję pokreślenia (underline) konkretnych, ważnych napisów (np. 'Use Situational Instead')." }
    ]},
    { b: "189", te: "Patch 1.1.1 - Advanced Edit Mode", tp: "Patch 1.1.1 - Zaawansowany Tryb Edycji", c: [
        { t: "Added", e: "Added an Advanced setup tier to Edit Mode Profiles.", p: "Wprowadzono tryb 'Zaawansowany' (Advanced) do przypisywania profili Edit Mode." },
        { t: "Added", e: "Added a Situational setup tier to Edit Mode Profiles.", p: "Dodano tryb 'Sytuacyjny' (Situational) dla profili Edit Mode (zmiana zależna od rodzaju grupy)." },
        { t: "Fixed", e: "Fixed a major bug where the Druid class was totally missing from lists on Classic and Burning Crusade Classic.", p: "Załatano potworny błąd przez który we wszystkich listach na Classic i BCC zupełnie brakowało klasy Druida." },
        { t: "Removed", e: "Removed the 'None' profile option and seamlessly migrated existing configurations to 'Disabled'.", p: "Usunięto z list opcję sztucznego profilu 'None'. Addon teraz bezpiecznie w jej miejsce migruje graczy w stan 'Disabled' (Wyłączony)." }
    ]},
    { b: "188", te: "Patch 1.1.1 - Edit Mode", tp: "Patch 1.1.1 - Tryb Edycji", c: [
        { t: "Fixed", e: "Fixed a bug preventing Edit Mode profiles from being forcefully applied when changing class specs.", p: "Załatano usterkę, która nie wymuszała zapisanego profilu interfejsu (Edit Mode) w momencie, gdy gracz przełączał specjalizację (spec)." },
        { t: "Changed", e: "The welcome Intro no longer plays automatically after minor addon updates (e.g., from 1.1.0 to 1.1.1).", p: "Intro powitalne przy uruchomieniu gry nie będzie już dręczyć gracza po małych i szybkich aktualizacjach (typu przejście z 1.1.0 na 1.1.1)." }
    ]},
    { b: "187", te: "Patch 1.1.1 - Optimizations", tp: "Patch 1.1.1 - Optymalizacje procesora", c: [
        { t: "Changed", e: "Changed heavy frame-by-frame loop checking events to highly optimized OnEventUpdate structures.", p: "W trosce o FPSy usunięto najcięższe nasłuchiwacze odświeżające się co ułamek sekundy i zastąpiono je zoptymalizowanymi wywołaniami OnEventUpdate." }
    ]},
    { b: "186", te: "Update 1.1 - Post Release Hotfix", tp: "Aktualizacja 1.1 - Poprawka po wydaniu", c: [
        { t: "Fixed", e: "Fixed a bug where raid frames did not refresh when someone left the party during combat.", p: "Naprawiono błąd, przez który ramki rajdowe nie odświeżały się po wyjściu kogoś z grupy podczas walki." }
    ]},
    { b: "185", te: "Update 1.1 - Hotfixes", tp: "Aktualizacja 1.1 - Gorące poprawki", c: [
        { t: "Fixed", e: "Fixed a bug where situational profiles were not applied immediately upon selection.", p: "Naprawiono błąd, przez który profile sytuacyjne nie aktywowały się natychmiast po zaznaczeniu." },
        { t: "Fixed", e: "Fixed an issue where Mercenary Mode was not detected correctly during Battlegrounds.", p: "Naprawiono błąd uniemożliwiający prawidłowe wykrywanie Trybu Najemnika (Mercenary Mode) na BG." }
    ]},
    { b: "184", te: "Update 1.1 - Release", tp: "Aktualizacja 1.1 - Pełne Wydanie", c: [
        { t: "Changed", e: "Replaced the explanation frame with a more detailed one, better describing options and potential issues.", p: "Zastąpiono ramkę z wyjaśnieniami bardziej szczegółową wersją, lepiej opisującą opcje i potencjalne skutki uboczne." },
        { t: "Fixed", e: "Fixed a bug where advanced mode raid frames would overflow the panel when the explanation box was active.", p: "Naprawiono błąd, przez który ramki rajdowe w trybie zaawansowanym wychodziły poza okno przy włączonym panelu wyjaśnień." },
        { t: "Fixed", e: "Fixed a bug with the World Map fix that prevented zooming out while the mouse was hovering over the navigation box.", p: "Naprawiono usterkę poprawki mapy świata, która blokowała oddalanie widoku (zoom out), gdy kursor znajdował się nad panelem nawigacji." }
    ]},
    { b: "183", te: "Update 1.1 - Cleanup", tp: "Aktualizacja 1.1 - Czyszczenie i poprawki", c: [
        { t: "Removed", e: "Cleaned up code comments and removed unused functions.", p: "Wyczyszczono kod ze zbędnych komentarzy oraz usunięto nieużywane funkcje." },
        { t: "Changed", e: "Standardized all codebase comments to 100% English.", p: "Ujednolicono wszystkie komentarze w kodzie, przechodząc w 100% na język angielski." },
        { t: "Fixed", e: "Fixed a bug allowing players to click through the mailbox side panel.", p: "Naprawiono błąd pozwalający klikać w elementy interfejsu znajdujące się pod panelem bocznym poczty." },
        { t: "Removed", e: "Removed the mailbox category debugger.", p: "Usunięto debugger kategorii na poczcie." },
        { t: "Fixed", e: "Fixed a bug on the Legion client involving an incorrect format for addon chat commands.", p: "Naprawiono błąd na kliencie Legion używający niewłaściwego formatu komend na ukrytym kanale addonu." },
        { t: "Fixed", e: "Fixed the bugged 'Always Show Action Bars' CVAR on Legion by recreating its functionality with a custom script.", p: "Naprawiono zepsuty CVAR 'Always Show Action Bars' na Legionie, odtwarzając jego mechanikę własnym skryptem." },
        { t: "Fixed", e: "Fixed a bug where 'Always Show Action Bars' set to Hide would incorrectly revert to Disable on login.", p: "Naprawiono błąd przez który opcja 'Always Show Action Bars' ustawiona na Hide zmieniała się samoistnie na Disable po zalogowaniu." },
        { t: "Fixed", e: "Fixed a checksum bug that allowed action bar settings to apply when they shouldn't have.", p: "Naprawiono błąd z sumami kontrolnymi, który pozwalał na nałożenie ustawień pasków akcji w niedozwolonych momentach." },
        { t: "Added", e: "Added a 0.5s delay to ApplyNameplatesSettings so the addon successfully overrides a Blizzard bug with friendly nameplates.", p: "Dodano 0.5s opóźnienia do ładowania pasków zdrowia, aby addon skutecznie nadpisywał natywny błąd Blizzarda z przyjaznymi paskami." }
    ]},
    { b: "182", te: "Update 1.1 - Fixes and Changes", tp: "Aktualizacja 1.1 - Poprawki i Zmiany", c: [
        { t: "Fixed", e: "Fixed a bug causing incorrect dropdown menu sizing.", p: "Naprawiono błąd powodujący nieprawidłowe rozmiary list rozwijanych." },
        { t: "Fixed", e: "Fixed a bug where dropdown menus remained open even after closing the Hub window.", p: "Naprawiono błąd pozostawiający rozwinięte listy opcji po zamknięciu głównego okna Huba." },
        { t: "Changed", e: "The main Hub window scaling now dynamically applies to auxiliary windows (e.g., Version panel, Raid Profiles manager).", p: "Skalowanie głównego okna Hub obejmuje teraz także pozostałe okna (np. panel wersji czy zarządzanie profilami rajdowymi)." },
        { t: "Changed", e: "Improved the window opacity logic.", p: "Poprawiono logikę odpowiedzialną za przezroczystość (opacity) okna." },
        { t: "Changed", e: "Adjusted the base colors for the sidebar and top bar.", p: "Skorygowano bazowe kolory dla panelu bocznego (sidebar) oraz paska tytułowego (topbar)." }
    ]},
    { b: "181", te: "Update 1.1 - Full Refactor of Gaps and Separators", tp: "Aktualizacja 1.1 - Refaktoryzacja Przerw i Separatorów", c: [
        { t: "Added", e: "Added global templates for gaps and separators.", p: "Dodano szablony (templates) dla przerw i separatorów do globalnego użycia." },
        { t: "Added", e: "Introduced new separator types: Top, Bottom, and Warning.", p: "Wprowadzono nowe typy separatorów: Top, Bottom oraz Warning." },
        { t: "Added", e: "Introduced new gap types: Standard and Additional.", p: "Wprowadzono nowe typy przerw dystansowych: Standard i Additional." },
        { t: "Changed", e: "Reworked panel code to strictly rely on templates instead of hardcoded manual gaps.", p: "Przepisano kod paneli, by w 100% korzystał z szablonów zamiast ręcznego wstawiania pustych przestrzeni." }
    ]},
    { b: "180", te: "Update 1.1 - Midnight Fixes", tp: "Aktualizacja 1.1 - Poprawki Midnight", c: [
        { t: "Fixed", e: "Blocked the addon Hub from inappropriately attempting to read internal Blizzard secret values.", p: "Zablokowano próby nieprawidłowego odczytania tajnych wartości (secret values) Blizzarda przez Hub addonu." },
        { t: "Fixed", e: "Fixed a bug where FirstSetup failed to process all settings, causing the Database Safety script to misfire.", p: "Naprawiono błąd przez który Pierwsza Konfiguracja (FirstSetup) pomijała niektóre opcje, przypadkowo aktywując mechanizmy bezpieczeństwa bazy." }
    ]},
    { b: "179", te: "Update 1.1 - Database Safety", tp: "Aktualizacja 1.1 - Bezpieczeństwo Bazy Danych", c: [
        { t: "Added", e: "Introduced a new core file: mQoL_DatabaseSafety.lua, dedicated to safely populating data in newer versions.", p: "Utworzono nowy plik mQoL_DatabaseSafety.lua, czuwający nad bezpiecznym uzupełnianiem danych na nowszych klientach." },
        { t: "Changed", e: "Extracted Mailbox configuration into an isolated database (mQoL_Mailbox_DB) for better readability.", p: "Przeniesiono dane poczty do odizolowanej bazy danych (mQoL_Mailbox_DB), drastycznie poprawiając jej przejrzystość." },
        { t: "Added", e: "Implemented a smooth migration script to transition old mailbox configurations to the new mQoL_Mailbox_DB.", p: "Napisano skrypt bezpiecznie migrujący stare dane ze skrzynki pocztowej do nowej bazy mQoL_Mailbox_DB." },
        { t: "Fixed", e: "Fixed a critical bug that caused characters to disappear from the mailbox recipient list.", p: "Naprawiono krytyczny błąd, który powodował niewyświetlanie się postaci gracza na liście odbiorców." },
        { t: "Changed", e: "Smoothed out the introductory boot animations for a better user experience.", p: "Wygładzono i zoptymalizowano animacje powitalne (Intro) podczas pierwszego uruchomienia." }
    ]},
    { b: "178", te: "Update 1.1 - Midnight Fixes", tp: "Aktualizacja 1.1 - Poprawki Midnight", c: [
        { t: "Added", e: "Split Friendly Nameplates into multiple sub-categories introduced with the Midnight expansion.", p: "Rozbito ustawienia Przyjaznych Pasków Zdrowia na zaawansowane podkategorie wprowadzone w Midnight." },
        { t: "Added", e: "Split Enemy Nameplates into multiple sub-categories introduced with the Midnight expansion.", p: "Rozbito ustawienia Wrogich Pasków Zdrowia na zaawansowane podkategorie z Midnight." },
        { t: "Added", e: "Added extra overarching Nameplate customization options for most supported game versions.", p: "Dodano szeroki wachlarz dodatkowych opcji do pasków zdrowia na większości wspieranych wersji gry." }
    ]},
    { b: "177", te: "Update 1.1 - Pre-Release Fixes", tp: "Aktualizacja 1.1 - Gruntowne porządki", c: [
        { t: "Changed", e: "Performed a complete structural refactor of RaidProfiles.lua.", p: "Wykonano gruntowną, strukturalną refaktoryzację całego pliku RaidProfiles.lua." },
        { t: "Changed", e: "Rewrote profile detection logic to be significantly more reliable in determining which profile to activate.", p: "Całkowicie przepisano logikę decydującą o aktywacji profili, czyniąc system niezwykle bezawaryjnym." },
        { t: "Fixed", e: "Fixed communication bugs encountered when verifying game versions using the /mqv command.", p: "Zlikwidowano błędy komunikacji podczas ręcznego weryfikowania wersji gry komendą /mqv." },
        { t: "Fixed", e: "Fixed a critical bug where Raid Profiles attempted to perform unauthorized actions while the player was in combat.", p: "Naprawiono niebezpieczny błąd z modułem Raid Profiles próbującym wykonywać zmiany podczas walki (combat)." }
    ]},
    { b: "176", te: "Update 1.1 - Fixes", tp: "Aktualizacja 1.1 - Poprawki i optymalizacje", c: [
        { t: "Fixed", e: "Fixed a bug preventing the intro animation from triggering on the Legion client.", p: "Naprawiono błąd przez który animacja Intro w ogóle nie uruchamiała się na kliencie Legionu." },
        { t: "Fixed", e: "Fixed a logic failure where unsupported modules were automatically enabling themselves.", p: "Zabezpieczono kod przed włączaniem modułów na wersjach gry, do których w ogóle nie zostały przystosowane." },
        { t: "Added", e: "Added legacy code to properly save raid profiles into the database on Legion.", p: "Dodano przestarzały kod ratunkowy pozwalający zapisać profile rajdowe na starym kliencie Legionu." },
        { t: "Fixed", e: "Fixed a bug causing raid profiles to incorrectly save per-character rather than globally.", p: "Usunięto błąd powodujący przypisywanie profili rajdowych tylko do konkretnej postaci zamiast globalnie." }
    ]},
    { b: "175", te: "Update 1.1 - Core Class Logic", tp: "Aktualizacja 1.1 - Detekcja Klas", c: [
        { t: "Changed", e: "Rewrote class detection logic to query WoW directly for available classes/specs per game version.", p: "Całkowicie przepisano wykrywanie klas - od teraz addon odpytuje bezpośrednio grę o to, jakie klasy i specki w niej istnieją." },
        { t: "Fixed", e: "Fixed a bug generating duplicate Shaman and Paladin class entries on Era and BCC clients.", p: "Wyeliminowano problem duplikujących się klas Szamana i Paladyna na wersjach Classic Era i BCC." },
        { t: "Added", e: "Added faction-based logic checks ensuring a specific class is actually playable by the user's faction on Classic Era.", p: "Dodano zabezpieczenia do weryfikacji, czy wybrana klasa jest w ogóle dostępna dla wybranej frakcji na serwerach Classic Era." }
    ]},
    { b: "174", te: "Update 1.1 - Fixes", tp: "Aktualizacja 1.1 - Detale i limity", c: [
        { t: "Added", e: "Added missing logic to support Action Bars 5-7 specifically for BCC.", p: "Dodano brakujące wsparcie dla dodatkowych pasków akcji (5-7) na kliencie BCC." },
        { t: "Fixed", e: "Increased the maximum permissible Nameplates distance limit from a flawed 20 to the correct 41 yards.", p: "Skorygowano maksymalny zasięg wyświetlania pasków zdrowia, podbijając wymuszony błąd z 20 z powrotem na poprawne 41 metrów." }
    ]},
    { b: "173", te: "Update 1.1 - Core Adjustments", tp: "Aktualizacja 1.1 - Globalne fundamenty", c: [
        { t: "Changed", e: "Rolled back all vreg changes down to version 1.0.8 standards for better stability.", p: "Cofnięto wszystkie ulepszenia systemu vreg do standardów wersji 1.0.8 z uwagi na stabilność." },
        { t: "Changed", e: "Replaced several old icons with modern aesthetic ones.", p: "Zastąpiono wiele starych ikon całkowicie nowymi grafikami." },
        { t: "Removed", e: "Removed obsolete Edit Mode references residing within the RaidProfiles module.", p: "Wyczyszczono RaidProfiles z pozostałości po starych odniesieniach do EditMode." },
        { t: "Added", e: "Enabled support for the Raid Profiles module on Classic Era and BCC clients.", p: "Udostęniono potężny system Raid Profiles graczom na serwerach Classic Era oraz BCC." },
        { t: "Changed", e: "Migrated standalone mailbox database configurations directly into the main database.lua file.", p: "Wcielono niezależne logiki bazy z poczty wprost do globalnego pliku database.lua." },
        { t: "Added", e: "Added global functions for reliably fetching Character and Server names into database.lua.", p: "Zaimplementowano globalne, scentralizowane metody pozyskiwania Imienia oraz Serwera gracza." }
    ]},
    { b: "172", te: "Update 1.1 - Blizzard Fixes and Changes", tp: "Aktualizacja 1.1 - Porządki u Blizzarda", c: [
        { t: "Removed", e: "Removed Blizzard UI bugfixes that were officially resolved by the developers (2 out of 9).", p: "Wyczyszczono z addonu poprawki do interfejsu Blizzarda, które deweloperzy w końcu załatali sami (aż dwie z dziewięciu)." },
        { t: "Changed", e: "Improved the intro sequence triggered upon running the addon for the very first time.", p: "Dopracowano wizualnie sekwencję początkową przy pierwszym uruchamianiu paczki." },
        { t: "Added", e: "Added missing informational texts into the Home panel.", p: "Uzupełniono luki w panelu Startowym (Home) o brakujące komunikaty." },
        { t: "Changed", e: "Relocated MoP UI fixes into a dedicated 'BlizzardFixes/PandariaClassic' directory.", p: "Odsunięto dedykowane poprawki do Pandarii do specjalnie utworzonego podkatalogu 'PandariaClassic'." },
        { t: "Added", e: "Created a new 'BlizzardFixes/Retail' directory strictly for Midnight expansion fixes.", p: "Dodano osobny katalog z łatkami na błędy oficjalnego klienta dla najnowszego dodatku Midnight." }
    ]},
    { b: "171", te: "Update 1.1 - Changes", tp: "Aktualizacja 1.1 - Wizualia", c: [
        { t: "Changed", e: "Upgraded the initial intro sequence to a heavily themed visual motif.", p: "Przebudowano intro startowe wprowadzając mocno tematyczny, unikalny motyw wizualny." },
        { t: "Fixed", e: "Fixed a major bug rendering the window opacity slider completely non-functional.", p: "Załatano irytujący błąd uniemożliwiający zmianę przezroczystości całego huba." }
    ]},
    { b: "170", te: "Update 1.1 - Some look changes", tp: "Aktualizacja 1.1 - Estetyka", c: [
        { t: "Added", e: "Added missing popup UI elements when saving active profiles.", p: "Uzupełniono brakujący interfejs pop-up pojawiający się podczas próby nadpisywania profilu." },
        { t: "Changed", e: "Unified the visual design of title bars across all addon panels.", p: "Zunifikowano wygląd górnych belek (pasków tytułowych) we wszystkich panelach powiązanych z addonem." },
        { t: "Changed", e: "Lightly tweaked the color palette of the sidebar for better contrast.", p: "Delikatnie zmodyfikowano kolor tła bocznego panelu ulepszając kontrast." },
        { t: "Added", e: "Added the ability to rename previously saved Raid Profiles.", p: "Dodano bardzo przydatną możliwość ręcznej zmiany nazwy już zapisanego profilu rajdowego." }
    ]},
    { b: "169", te: "Update 1.1 - Event Handler Rework", tp: "Aktualizacja 1.1 - Przebudowa Event Handlera", c: [
        { t: "Changed", e: "Merged Basic, Advanced, and Situational event handlers into a single, universal loop.", p: "Skompresowano oddzielne event handlery (podstawowy, zaawansowany i sytuacyjny) w jedną uniwersalną całość." },
        { t: "Changed", e: "Optimized PLAYER_SPECIALIZATION_CHANGED to trigger solely when the player actually switches specs.", p: "Ograniczono nadużywanie eventu zmiany specjalizacji, aby triggerował tylko przy fizycznej zmianie, oszczędzając zasoby." },
        { t: "Added", e: "Introduced advanced zone tracking to properly detect and apply BG and Arena profiles.", p: "Wprowadzono zaawansowane sprawdzanie obecnej lokacji do bezpiecznej aktywacji ukrytych profili na Arena i BG." }
    ]},
    { b: "168", te: "Update 1.1 - Code Cleanup", tp: "Aktualizacja 1.1 - Optymalizacje RaidProfiles", c: [
        { t: "Removed", e: "Cleared out massive chunks of redundant and junk comments in mQoL_RaidProfiles.lua.", p: "Oczyszczono plik mQoL_RaidProfiles.lua z masy porzuconych komentarzy i zapisków." },
        { t: "Fixed", e: "Fixed a logical loop bug directly tied to the CompactRaidFrame UI element.", p: "Wyłapano i załatano błąd logiczny powiązany z blizzardowską ramką CompactRaidFrame." },
        { t: "Fixed", e: "Fixed a critical save issue where the physical coordinates of the Raid Profiles window were failing to save and load.", p: "Naprawiono duży błąd uniemożliwiający poprawne zapisywanie na dysku (i wczytywanie) współrzędnych okna Profili Rajdowych." }
    ]},
    { b: "167", te: "Update 1.1 - Fixes", tp: "Aktualizacja 1.1 - Odświeżanie logiki", c: [
        { t: "Changed", e: "Replaced the ZONE_CHANGED_NEW_AREA event with UPDATE_BATTLEFIELD_STATUS to massively reduce spam triggers.", p: "Zamieniono nasłuchiwanie zdarzenia ZONE_CHANGED na UPDATE_BATTLEFIELD_STATUS, co ogromnie zredukowało spamowanie kodu." },
        { t: "Added", e: "Added a warning popup on Classic clients when players hit the 5 profile limit.", p: "Wprowadzono wyraźne powiadomienie (popup) dla graczy na Classic, gdy zapełnią 5 slotów profili (wymóg usunięcia)." },
        { t: "Fixed", e: "Fixed a bug where the 'Available' list failed to visually refresh after deleting a profile.", p: "Naprawiono listę w interfejsie, która nie chciała się odświeżyć po udanym usunięciu profilu." },
        { t: "Changed", e: "Profiles now instantly live-update upon making any changes in Basic or Advanced modes.", p: "Wymuszono automatyczne odświeżanie okna przy absolutnie każdej zmianie wprowadzanej w sekcjach podstawowej oraz zaawansowanej." },
        { t: "Changed", e: "Blocked the Advanced mode from refreshing its data when actively editing an off-spec profile.", p: "Wstrzymano odświeżanie logiki w trybie zaawansowanym w trakcie konfigurowania profilów dla innych klas." }
    ]},
    { b: "166", te: "Update 1.1 - Raid Profiles Extended", tp: "Aktualizacja 1.1 - Rozszerzone Profile Rajdowe", c: [
        { t: "Added", e: "Added Support for 'Situational Profiles', permitting dedicated setups for 5-man parties, huge raids, and arenas separately.", p: "Wdrożono ogromny moduł Profili Sytuacyjnych, pozwalając graczowi spersonalizować osobny UI na dungeony, rajdy oraz pvp." },
        { t: "Changed", e: "Replaced ambiguous Right-Click deletion in Advanced mode with a dedicated delete Icon.", p: "Ulepszono UX – zmieniono ukryte usuwanie Prawym Kliknięciem na jawną ikonkę kosza w trybie zaawansowanym." },
        { t: "Added", e: "Added a 'Use Raid Frames in 5-man Party' configuration toggle.", p: "Zaimplementowano popularną opcję: 'Używaj stylistyki Raid Frames podczas 5-osobowych lochów'." }
    ]},
    { b: "165", te: "Update 1.1 - Fixes", tp: "Aktualizacja 1.1 - Szybkie Poprawki", c: [
        { t: "Fixed", e: "Fixed a bug rendering the spec dropdown completely empty on the Pandaria Classic client.", p: "Naprawiono błąd wyświetlający całkowicie pustą listę specjalizacji u graczy na Pandaria Classic." },
        { t: "Fixed", e: "Restored missing visual dropdowns for the Show Head/Show Cloak logic.", p: "Przywrócono zaginione, graficzne listy rozwijane dla funkcji wyświetlania hełmu oraz peleryny." },
        { t: "Fixed", e: "Fixed a bug preventing the automatic background switching of Raid Profiles when changing specs on Pandaria Classic.", p: "Naprawiono usterkę przez którą addon nie wychwytywał zmiany talentów i nie zmieniał automatycznie przypisanego do niego okna w Pandarii." }
    ]},
    { b: "164", te: "Update 1.1 - Edit Mode and Raid Profiles", tp: "Aktualizacja 1.1 - Edit Mode i Profile", c: [
        { t: "Added", e: "Created a dedicated 'Edit Mode' configuration tab.", p: "Utworzono całkowicie nową, rozbudowaną zakładkę 'Edit Mode'." },
        { t: "Changed", e: "Relocated the 'Forced Edit Mode Profile' option seamlessly into the new Edit Mode tab.", p: "Przeniesiono logikę wymuszania trybu edycji ze starych zbiorczych opcji do nowej, odosobnionej zakładki." },
        { t: "Added", e: "Created a dedicated 'Raid Profiles' configuration tab.", p: "Utworzono wielką, nową zakładkę 'Raid Profiles'." },
        { t: "Added", e: "Implemented account-wide functionality for saving, binding, and selecting custom profiles.", p: "Zaimplementowano globalne zapisywanie profili działające na wszystkie postaci przypięte do tego samego konta WoW." },
        { t: "Added", e: "Introduced an advanced selection wizard adapting profiles dynamically to distinct classes and specs.", p: "Wprowadzono zaawansowany kreator dopasowujący layout profilu pod wybraną klasę oraz zdaną pod to specjalizację." }
    ]},
    { b: "163", te: "Update 1.1 - Fixes and Changes", tp: "Aktualizacja 1.1 - Restrykcje Paneli", c: [
        { t: "Added", e: "Added a 'hasMarkers' validation flag to accurately calculate maximum panel lengths.", p: "Wdrożono flagę 'hasMarkers', ułatwiając znacznie precyzyjniejszą kalkulację limitu renderowania panelu w dół." },
        { t: "Changed", e: "Standardized universal settings alignment across all graphical UI panels.", p: "Ujednolicono siatki ułożenia komponentów w obrębie każdego dostępnego modułu." },
        { t: "Changed", e: "Optimized the processing behavior of internal window containers.", p: "Zoptymalizowano zachowanie i wydajność wewnętrznych zbiorników UI (Containers)." },
        { t: "Added", e: "Added a strict hard-lock mechanic to the module controller preventing features from being activated on inherently unsupported clients.", p: "Utworzono bezwzględną blokadę (hardlock) w sercu modułów – nie da się już aktywować funkcji sprzecznych z mechanikami Twojej wersji gry." }
    ]},
    { b: "162", te: "Update 1.1 - Templates and Fixes", tp: "Aktualizacja 1.1 - Szablony i poprawki", c: [
        { t: "Removed", e: "Removed all dependencies on Blizzard's default UI templates, replacing them with custom templates.", p: "Usunięto wszystkie odniesienia do domyślnych szablonów UI Blizzarda i zastąpiono je własnymi rozwiązaniami." },
        { t: "Fixed", e: "Improved formatting inside the Modules panel.", p: "Poprawiono formatowanie interfejsu w panelu modułów (Modules)." },
        { t: "Fixed", e: "Fixed a bug that prevented the 'decorate name' feature from being used.", p: "Naprawiono błąd przez który funkcja 'decorate name' (dekorowanie imion) była niedostępna do użycia." }
    ]},
    { b: "161", te: "Update 1.1 - Modules Panel and 1.0.8 Port", tp: "Aktualizacja 1.1 - Panel modułów i port 1.0.8", c: [
        { t: "Added", e: "Added a brand new panel for managing addon modules.", p: "Dodano całkowicie nowy panel służący do zarządzania modułami addonu." },
        { t: "Changed", e: "Modules can now be activated at will and are no longer restricted to specific WoW versions.", p: "Moduły można teraz aktywować dobrowolnie, nie są już na siłę blokowane przez specyficzne wersje WoWa." },
        { t: "Fixed", e: "Fixed bugs in AvailableModules that prevented modules from activating properly on correct game versions.", p: "Naprawiono błędy w AvailableModules, które blokowały aktywowanie modułów na ich docelowych wersjach gry." },
        { t: "Added", e: "Ported and added full support for TBC Classic (The Burning Crusade).", p: "Skompletowano porting i dodano pełne wsparcie dla klienta TBC Classic." },
        { t: "Changed", e: "Swapped out Blizzard's BackdropTemplate in favor of a custom-built BackdropTemplate.", p: "Zamieniono systemowe użycie BackdropTemplate Blizzarda na autorskie rozwiązanie (custom BackdropTemplate)." }
    ]},
    { b: "160", te: "Update 1.1 - Bug Fixes", tp: "Aktualizacja 1.1 - Krytyczne poprawki", c: [
        { t: "Fixed", e: "Fixed a bug where the mandatory /reload prompt failed to appear during the first login.", p: "Naprawiono błąd, przez który okienko wymuszające /reload nie pojawiało się przy pierwszym zalogowaniu na postać." },
        { t: "Fixed", e: "Fixed Consolidated Buffs bugs where tooltips wouldn't show and buffs couldn't be dispelled.", p: "Naprawiono skonsolidowane buffy – od teraz prawidłowo wyświetlają opis (tooltip) oraz dają się wyłączać (dispel)." },
        { t: "Fixed", e: "Fixed a UI bug where hovering off a Consolidated Buff would permanently break subsequent tooltips.", p: "Naprawiono poważny błąd interfejsu, przez który zjechanie myszką z jednego buffa całkowicie psuło kolejne dymki z opisami." },
        { t: "Fixed", e: "Fixed an issue where character lists (Alts, Guild, Friends) wouldn't highlight when actively searching for them.", p: "Naprawiono błąd braku podświetlenia (highlightu) dla list postaci, gildii oraz znajomych przy ich wyszukiwaniu." }
    ]},
    { b: "159", te: "Update 1.1 - Popups and Fixes", tp: "Aktualizacja 1.1 - Pop-upy i poprawki", c: [
        { t: "Fixed", e: "Fixed the Action Bars popup which stopped appearing after changing the option from a checkbox to a tri-state dropdown.", p: "Naprawiono komunikat z pasków akcji, który przestał wyskakiwać po zamianie checkboxa na opcję z 3 stanami." },
        { t: "Added", e: "Added a new popup style matching the modern 1.1.0 aesthetics.", p: "Wprowadzono nowy, zmodernizowany wygląd okienek (popupów) dopasowany do stylu 1.1.0." },
        { t: "Added", e: "Added a new universal backdrop template.", p: "Dodano nowy, uniwersalny szablon tła (backdrop template)." },
        { t: "Fixed", e: "Fixed text wrapping issues within the InfoSection.", p: "Naprawiono zawijanie wierszy (text wrap) wewnątrz okien InfoSection." },
        { t: "Fixed", e: "Fixed incorrect margin values on dropdown menus.", p: "Poprawiono błędne ułożenie marginesów na listach rozwijanych." },
        { t: "Added", e: "Introduced a new ApplyAnimation template.", p: "Wdrożono nowy system szablonów animacji: ApplyAnimation." },
        { t: "Changed", e: "Moved Version Detection logic out of the Hub and into a standalone mQoL_VersionDetection.lua file.", p: "Wyciągnięto mechanikę rozpoznawania wersji z Hubu do dedykowanego pliku mQoL_VersionDetection.lua." }
    ]},
    { b: "158", te: "Update 1.1 - Panel Structure", tp: "Aktualizacja 1.1 - Struktura Paneli", c: [
        { t: "Added", e: "Implemented smart validation in the Panel Structure to check if a specific panel is supported on the current game client.", p: "Wdrożono inteligentne sprawdzanie w strukturze paneli, weryfikujące czy dany panel jest dostępny na używanej wersji gry." },
        { t: "Changed", e: "Unsupported panels are now automatically hidden instead of showing an 'unavailable' message.", p: "Panele nieobsługiwane na danej wersji gry są teraz całkowicie ukrywane, zamiast wyświetlania wielkiego okna 'Funkcja Niedostępna'." }
    ]},
    { b: "157", te: "Update 1.1 - Important Fixes", tp: "Aktualizacja 1.1 - Ważne Poprawki", c: [
        { t: "Fixed", e: "Fixed a misaligned separator graphic in the Home panel.", p: "Poprawiono i wyrównano rozjechany separator (kreskę oddzielającą) w panelu Home." },
        { t: "Fixed", e: "Fixed a Nil error occurring specifically on Pandaria Classic.", p: "Załatano błąd o wartości Nil (pustej), psujący grę na Pandaria Classic." },
        { t: "Fixed", e: "Fixed a bug where Max Distance markers in the Graphics options overlapped onto the next slider.", p: "Naprawiono błąd graficzny, przez który znaczniki (markery) maksymalnego dystansu nakładały się brzydko na kolejny suwak pod spodem." },
        { t: "Fixed", e: "Fixed misalignment issues within the General QoL options.", p: "Naprawiono widoczne gołym okiem rozjechanie się opcji w dziale General QoL." },
        { t: "Fixed", e: "Fixed an issue preventing the Blizzard Fixes panel from being accessed on Pandaria Classic.", p: "Naprawiono usterkę blokującą dostęp do panelu Blizzard Fixes na wersji Pandaria Classic." }
    ]},
    { b: "156", te: "Update 1.1 - Final Touches", tp: "Aktualizacja 1.1 - Ostatnie Szlify Części 2", c: [
        { t: "Changed", e: "Decreased vertical spacing between all options by roughly 33%.", p: "Zmniejszono pionowe przerwy (spacing) między wszystkimi opcjami o około 33%, zagęszczając widok." },
        { t: "Changed", e: "Expanded the Home panel layout to present a much richer content experience.", p: "Wzbogacono nowy panel Home, aby wyświetlał znacznie więcej przydatnej treści." },
        { t: "Changed", e: "Renamed the 'Advanced Settings' category to 'Custom Features'.", p: "Zmieniono nazwę kategorii 'Advanced Settings' na 'Custom Features'." },
        { t: "Fixed", e: "Fixed a severe bug preventing files from loading correctly on Pandaria, Era, and Legacy clients.", p: "Naprawiono bardzo poważny błąd, który całkowicie blokował wczytywanie się plików na wersjach Pandaria, Era oraz Legacy." }
    ]},
    { b: "155", te: "Update 1.1 - Mailbox and Home Panel", tp: "Aktualizacja 1.1 - Poczta i panel startowy (Home)", c: [
        { t: "Changed", e: "Upgraded the Mailbox options panel to conform to the modern 1.1.0 standards.", p: "Przerobiono od zera stary panel opcji poczty, aby był w 100% zgodny ze standardami 1.1.0." },
        { t: "Changed", e: "Upgraded the Mailbox side panel interface to match the modern 1.1.0 aesthetic.", p: "Zmodernizowano całkowicie wygląd bocznego panelu obsługującego pocztę." },
        { t: "Added", e: "Implemented full functionality for the Guild list, which was previously just a placeholder.", p: "Uruchomiono pełnoprawną listę gildii na poczcie, która wcześniej służyła jedynie za atrapę (placeholder)." },
        { t: "Added", e: "Introduced a new 'Home' panel that showcases the latest addon news and version features.", p: "Wprowadzono na sam szczyt listy nowy panel 'Home' (Start), który przyjemnie informuje gracza o wszelkich nowościach." }
    ]},
    { b: "154", te: "Update 1.1 - Known Issues Fixes", tp: "Aktualizacja 1.1 - Znane Problemy (Wyszukiwarka)", c: [
        { t: "Fixed", e: "Fixed a bug preventing the icon state from updating on dropdown menus.", p: "Naprawiono błąd graficzny, przez który ikona rozwiniętej listy (strzałka) nie zmieniała swojego stanu." },
        { t: "Fixed", e: "Fixed the search menu highlight feature not triggering properly.", p: "Naprawiono funkcję podświetlania (highlight) opcji z wyszukiwarki, która całkowicie przestała działać." },
        { t: "Added", e: "Updated the Search Index with missing fields and removed obsolete elements.", p: "Uzupełniono rdzeń wyszukiwarki o brakujące pola i wyczyszczono te, które odsyłały do usuniętych opcji." },
        { t: "Fixed", e: "Searched options will no longer appear in the results list if they are unavailable on the player's game client.", p: "Opcje wyszukane przez gracza nie pojawią się już na liście wyników, jeżeli aktualny klient gry (np. Classic) w ogóle ich nie wspiera." }
    ]},
    { b: "153", te: "Update 1.1 - Random Fixes and Panel Changes", tp: "Aktualizacja 1.1 - Zmiany Paneli i Scrollbar", c: [
        { t: "Fixed", e: "Fixed severe formatting issues within the Version panel.", p: "Zlikwidowano fatalne błędy formatowania widoczne wewnątrz panelu Wersji." },
        { t: "Fixed", e: "Fixed a bug making the custom scrollbar invisible outside of the search menu.", p: "Naprawiono błąd przez który własny pasek przewijania (scrollbar) robił się niewidzialny we wszystkich miejscach oprócz wyszukiwarki." },
        { t: "Added", e: "Added up/down buttons to the scrollbar track for manual scrolling.", p: "Rozszerzono możliwości paska przewijania, dodając na jego końcach interaktywne przyciski góra/dół." },
        { t: "Added", e: "Deployed the custom scrollbar across all existing UI panels.", p: "Wdrożono system pasków przewijania natywnie dla absolutnie każdego okna w addonie." },
        { t: "Changed", e: "Realigned interface buttons specifically to accommodate scrollbar widths.", p: "Przesunięto delikatnie interfejs i przyciski, by zrobić miejsce na nowo dodane paski przewijania z boku." }
    ]},
    { b: "152", te: "Update 1.1 - Version Panel and Checksum fixes", tp: "Aktualizacja 1.1 - Panel Wersji i Sumy Kontrolne", c: [
        { t: "Fixed", e: "Fixed a discrepancy where opening the Version panel via chat command displayed differently than clicking the minimap icon.", p: "Ujednolicono okno – naprawiono błąd przez który wywołanie panelu Wersji przez komendę dawało inny efekt wizualny niż wywołanie go myszką." },
        { t: "Changed", e: "Rewrote the entire database checksum logic; checksums are now exclusively active on Retail.", p: "Praktycznie napisano od nowa logikę odpowiedzialną za generowanie sumy kontrolnej. Od teraz funkcjonują one wyłącznie na wersji Retail." }
    ]},
    { b: "151", te: "Update 1.1 - 1.0.7 Port and Fixes", tp: "Aktualizacja 1.1 - Potężny port z 1.0.7 i naprawy", c: [
        { t: "Changed", e: "Started an immensely complex port of massive features from version 1.0.7 into 1.1.0.", p: "Wykonano niezwykle skomplikowany, wręcz morderczy port mnóstwa funkcji ze starej gałęzi 1.0.7 do nowej 1.1.0." },
        { t: "Fixed", e: "Fixed an issue preventing the Blizzard Fixes tab from registering properly in the Hub.", p: "Naprawiono błąd przez który kluczowa zakładka 'Blizzard Fixes' w ogóle nie chciała się zarejestrować w panelu." },
        { t: "Changed", e: "Synced mQoL_Graphics.lua to be 100% compliant with the 1.0.7 codebase.", p: "Odtworzono mQoL_Graphics.lua w taki sposób, aby w 100% zgadzał się logicznie z wersją 1.0.7." },
        { t: "Changed", e: "Adjusted mQoL_Database.lua to safely accommodate 1.1.0 changes.", p: "Zmodyfikowano mQoL_Database.lua tak, aby baza danych nie wybuchała po starciu z nowościami z 1.1.0." },
        { t: "Changed", e: "Adjusted mQoL_FirstSetup.lua to support changes spanning from 1.1.0.", p: "Dostosowano mQoL_FirstSetup.lua z myślą o procesie wstępnej konfiguracji na łatce 1.1." },
        { t: "Changed", e: "Updated mQoL_Main.lua to actively embrace changes ported from 1.0.7.", p: "Poprawiono kod inicjujący w mQoL_Main.lua, aby obsługiwał zasady wdrożone w 1.0.7." },
        { t: "Added", e: "Restored missing Action Bars checksums originally drafted in 1.0.7 to core files.", p: "Skopiowano i wdrożono zagubione sumy kontrolne dla pasków akcji wprost z łatki 1.0.7." },
        { t: "Fixed", e: "Resolved a massive cascade of undocumented bugs caused directly by the aggressive 1.0.7 port integration.", p: "Załatano gigantyczną kaskadę mniejszych i większych problemów, które zrodziły się z siłowego wrzucania starego kodu w nowe ramy UI." }
    ]},
    { b: "150", te: "Update 1.1 - Version Panel Changes", tp: "Aktualizacja 1.1 - Modyfikacje Panelu Wersji", c: [
        { t: "Changed", e: "Increased the Version panel size bounds from 350x300px to 400x600px.", p: "Powiększono gabaryty okna wyświetlającego wersję z ciasnego 350x300px na 400x600px." },
        { t: "Added", e: "Added scrollability to the Version panel preventing overflowing data.", p: "Wprowadzono funkcjonalność przewijania (scrollowania) dla okna Wersji zapobiegając ucinaniu tekstu." },
        { t: "Fixed", e: "Fixed various text formatting discrepancies.", p: "Załatano wiele pomniejszych problemów z ładnym formatowaniem wyświetlanego w nim tekstu." },
        { t: "Added", e: "Added a 'Vendor' argument displaying the addon's release channel.", p: "Dodano nowy dopisek 'Vendor', który jasno komunikuje kanał aktualizacji/sprzedawcy addonu." },
        { t: "Fixed", e: "Fixed a bug where the Version panel rendered completely empty if opened via the minimap.", p: "Naprawiono kuriozalny błąd okna Wersji, które po kliknięciu z minimapy wyświetlało tylko bezkresną pustkę." }
    ]},
    { b: "149", te: "Update 1.1 - Additional Panel Changes", tp: "Aktualizacja 1.1 - Modyfikacje Paneli", c: [
        { t: "Removed", e: "Discontinued the MentOne panel and abandoned all future plans for it.", p: "Usunięto z addonu panel MentOne i całkowicie porzucono plany dotyczące jego dalszego rozwoju." },
        { t: "Added", e: "Introduced two new panels: 'Home' and 'Modules', officially replacing MentOne.", p: "W miejsce usuniętego pomysłu dodano dwa nowe, rewelacyjne panele: 'Home' (Główny) oraz 'Modules'." },
        { t: "Changed", e: "The minimap icon and chat command now automatically open the 'Home' panel instead of Display.", p: "Rozszerzono zachowanie ikony minimapy i komendy tekstowej - od teraz natywnie kierują gracza wprost do panelu 'Home'." },
        { t: "Fixed", e: "Ported a fix from build 89 resolving missing thousands separators in the total gold collected text (e.g. 11,595g).", p: "Skompletowano i wprowadzono poprawkę (znaną z builda 89) odpowiadającą za wstawianie separatorów tysięcy w zysku z poczty (np. 11,595g)." }
    ]},
    { b: "148", te: "Update 1.1 - Advanced Panels Changes Part 2 - Blizzard Fixes", tp: "Aktualizacja 1.1 - Poprawki Blizzarda", c: [
        { t: "Changed", e: "Relocated MentiuszenBlizzard.lua from Modules directly to the Hub core.", p: "Przeniesiono MentiuszenBlizzard.lua z dodatkowych modułów prosto do jądra Hubu." },
        { t: "Changed", e: "Revamped the legacy Blizzard Fixes panel to match the modern General QoL visual layout.", p: "Przerobiono stary panel z oficjalnymi poprawkami, by wyglądał jak nowa zakładka General QoL." }
    ]},
    { b: "147", te: "Update 1.1 - AddOptionRow Changes and Inputbox hotfixes", tp: "Aktualizacja 1.1 - Gorące poprawki układu i okien tekstowych", c: [
        { t: "Changed", e: "Decreased general UI spacing from 50px to 20px.", p: "Zmniejszono luki pomiędzy elementami (spacing) z 50px na 20px." },
        { t: "Changed", e: "Increased labelWidth from 150px to 180px.", p: "Zwiększono szerokość opisów (label) z 150px na 180px." },
        { t: "Changed", e: "Increased maxControlWidth from 350px to 380px.", p: "Zwiększono limit szerokości kontrolek (maxControlWidth) z 350px na 380px." },
        { t: "Added", e: "Added the missing 'Save' button to the Auto Mailbox Subject option.", p: "Dodano zaginiony przycisk 'Save' przy opcji automatycznego tematu wiadomości." },
        { t: "Changed", e: "Completely refactored CreateCustomSlider, eliminating all known bugs.", p: "Zrobiono kompletną refaktoryzację kodu tworzącego suwaki (CreateCustomSlider), przy okazji łatając absolutnie wszystkie błędy." },
        { t: "Fixed", e: "Fixed a visual glitch where 1px of the background bar leaked out when the thumb was at maximum value.", p: "Naprawiono brzydki błąd wizualny, przez który wystawał 1px tła paska, gdy uchwyt był na samym jego końcu." }
    ]},
    { b: "146", te: "Update 1.1 - Custom Slider Fixes", tp: "Aktualizacja 1.1 - Poprawki własnych suwaków", c: [
        { t: "Changed", e: "Moved min/max value labels from -2px to -6px below the slider to avoid colliding with the thumb.", p: "Przesunięto teksty min/max z -2px na -6px poniżej suwaka, aby nie nakładały się na uchwyt." },
        { t: "Added", e: "Added missing slider elements: an input box and an apply button.", p: "Uzupełniono suwaki o brakujące elementy: ręczne pole wpisywania wartości i przycisk zatwierdzenia." },
        { t: "Removed", e: "Removed distance unit mapping in favor of checkpoints.", p: "Usunięto klasyczne mapowanie jednostek odległości i zastąpiono je checkpointami." },
        { t: "Fixed", e: "Fixed the Window Scale Slider to snap properly after manually typing a value into the input box.", p: "Zmuszono suwak wielkości okna do automatycznego przeskakiwania po ręcznym wpisaniu wartości w pole." },
        { t: "Changed", e: "Integrated legacy SetupCheckpointInputBox and FindClosestIndex functions into the new SetupCheckpointSlider.", p: "Zintegrowano stare funkcje do sprawdzania checkpointów i znajdowania indeksów w jedną nową funkcję SetupCheckpointSlider." },
        { t: "Fixed", e: "Fixed a bug preventing the slider thumb position from updating after pressing Enter in the input box.", p: "Naprawiono brak odświeżania pozycji suwaka po zatwierdzeniu nowej wartości Enterem." },
        { t: "Fixed", e: "Fixed inconsistent line thickness for slider markers.", p: "Wyrównano i naprawiono linie znaczników (markerów) pod suwakiem, które potrafiły mieć różne szerokości." },
        { t: "Fixed", e: "Fixed alignment issues between slider markers and the actual thumb position.", p: "Skalibrowano linie markerów, które potrafiły być lekko rozjechane względem faktycznej fizycznej pozycji uchwytu suwaka." }
    ]},
    { b: "145", te: "Update 1.1 - Advanced Panels Changes Part 1 - Graphics", tp: "Aktualizacja 1.1 - Ustawienia Grafiki i Markery", c: [
        { t: "Changed", e: "Revamped the legacy Graphics panel to match the modern General QoL visual layout.", p: "Przerobiono stary panel Grafiki, by dopasować go do najnowszych wytycznych panelu QoL." },
        { t: "Added", e: "Added a new 'Markers' condition parameter to the AddOptionRow logic for sliders.", p: "Wprowadzono nowy parametr 'Markers' przy tworzeniu rzędów opcji (AddOptionRow) specjalnie dla suwaków." },
        { t: "Added", e: "Added native support for Markers inside the CreateCustomSlider stylesheet.", p: "Dodano natywne wsparcie dla wyżej wspomnianych znaczników w pliku ze stylami tworzącymi suwaki." }
    ]},
    { b: "144", te: "Update 1.1 - editableList Massive Fixes", tp: "Aktualizacja 1.1 - Poprawki List Edytowalnych (editableList)", c: [
        { t: "Added", e: "Added numerous new controllers for managing editableList layouts.", p: "Wprowadzono masę kontrolnych mechanizmów do układania list, z którymi użytkownik wchodzi w interakcję." },
        { t: "Fixed", e: "Fixed an issue where two side-by-side lists were misaligned on the Y-axis.", p: "Wyrównano i naprawiono listy, które mogły renderować się na dwóch różnych płaszczyznach wysokości (oś Y)." },
        { t: "Fixed", e: "Fixed list titles floating excessively high above the actual lists.", p: "Obniżono nazwy list, które uciekały zdecydowanie zbyt wysoko od samych elementów." },
        { t: "Added", e: "Added configuration controls for setting height and length bounds of editableList fields.", p: "Dodano narzędzia ustalające maksymalne wysokości i szerokości okien pod listy." },
        { t: "Fixed", e: "Restored the missing 'Save' button for these lists.", p: "Cudownie odnaleziono i naprawiono brakujący przycisk zapisywania (Save) list." }
    ]},
    { b: "143", te: "Update 1.1 - QoL Panels Changes Part 2", tp: "Aktualizacja 1.1 - Paski, Nameplates i Poczta", c: [
        { t: "Changed", e: "Revamped the Nameplates panel to match the General QoL design.", p: "Przerobiono panel pasków zdrowia na wzór General QoL." },
        { t: "Added", e: "Added InfoSection support to the Nameplates panel.", p: "Rozszerzono panel pasków zdrowia o nową sekcję informacyjną." },
        { t: "Changed", e: "Revamped the Action Bars panel to match the General QoL design.", p: "Przerobiono panel Pasków Akcji na wzór General QoL." },
        { t: "Added", e: "Added InfoSection support with new tooltips to the Action Bars panel.", p: "Rozszerzono panel Pasków Akcji o nową sekcję z dedykowanymi objaśnieniami." },
        { t: "Added", e: "Updated AddOptionRow logic with a new 'editableList' condition constraint.", p: "Podbito kod pętli tworzącej rzędy o zupełnie nowy wariant obsługujący listy edytowalne." },
        { t: "Changed", e: "Revamped the Mailbox panel to match the General QoL design.", p: "Przerobiono stary panel obsługi poczty (Mailbox) na wzór z General QoL." },
        { t: "Added", e: "Added InfoSection support with a new description to the Mailbox panel.", p: "Rozszerzono pocztę o piękną sekcję informacyjną objaśniającą jej innowacyjne działanie." }
    ]},
    { b: "142", te: "Update 1.1 - QoL Panels Changes Part 1", tp: "Aktualizacja 1.1 - Przebudowa paneli", c: [
        { t: "Changed", e: "Completely overhauled the legacy General QoL panel to mirror the modern MentiuszenHub aesthetics.", p: "Całkowicie przerobiono stary panel General QoL, aby podążał za estetycznymi wytycznymi z nowego MentiuszenHuba." },
        { t: "Added", e: "Integrated full InfoSection support with comprehensive feature explanations.", p: "Zaimplementowano pełne wsparcie dla sekcji informacyjnej ze szczegółowymi wytycznymi opcji." },
        { t: "Fixed", e: "Corrected the addon load order for Mainline clients.", p: "Poprawiono błędną kolejność ładowania się modułów i plików dla klientów Mainline (Retail)." },
        { t: "Fixed", e: "Resolved visual glitches with Dropdown menus residing inside MentiuszenHubStyles.", p: "Załatano błędy z rozwijanymi listami siedzącymi w stylach huba." }
    ]},
    { b: "141", te: "Update 1.1 - MentOne and Profiles Panels Changes", tp: "Aktualizacja 1.1 - MentOne i Profile", c: [
        { t: "Changed", e: "Reworked the legacy Profiles panel to provide better context regarding current unavailability.", p: "Przerobiono panel Profili tak, by dużo przyjaźniej tłumaczył graczowi dlaczego aktualnie funkcja jest jeszcze niedostępna." },
        { t: "Added", e: "Added InfoSection support to both the Profiles and MentOne panels.", p: "Dołożono wsparcie okna informacyjnego InfoSection dla paneli MentOne i Profilów." },
        { t: "Changed", e: "Rewrote the InitializeMinimap function to be cleaner and to natively trigger MentOne.", p: "Oczyszczono i przepisano funkcję obsługującą kod ikony z minimapy, ułatwiając przy tym przywoływanie opcji MentOne." },
        { t: "Added", e: "Introduced a foundational MentOne panel clarifying feature restrictions.", p: "Wdrożono i spięto podstawowy kod podstrony MentOne (z komunikatem o wyłączeniu)." }
    ]},
    { b: "140", te: "Update 1.1 - CreateVersionPanel Changes", tp: "Aktualizacja 1.1 - Zmiany paneli Wersji", c: [
        { t: "Changed", e: "Upgraded the old version panel by adding the standard title bar inherited from the main window.", p: "Podniesiono standard starego panelu Wersji, doczepiając mu standardowy dla huba górny pasek tytułowy." },
        { t: "Added", e: "Implemented a column-based Name/Version/Build grid instead of dynamically generating flat strings like 'Version 1.1.0'.", p: "Zbudowano elegancki system kolumnowy wypisujący Nazwę/Wersję/Build zamieniając to z płaskiego generowanego ułomnie tekstu." },
        { t: "Fixed", e: "Improved overall formatting making the panel look significantly neater than its original iteration.", p: "Oszlifowano krawędzie panelu tak, że finalnie wygląda znacznie czyściej i profesjonalniej." },
        { t: "Fixed", e: "Fixed frame STRATA (layering) conflicts by elevating the Hub window by 50 levels to prevent UI bleeding.", p: "Podbito wskaźnik STRATA dla głównego okna o dodatkowe 50 pięter, zapobiegając zlewaniu się go z UI pod spodem." }
    ]},
    { b: "139", te: "Update 1.1 - Know Issues Fixes", tp: "Aktualizacja 1.1 - Rozwiązane błędy", c: [
        { t: "Fixed", e: "Fixed a Lua error triggering a 'Nil value' upon typing into an input box.", p: "Naprawiono straszliwy błąd Lua wyrzucający 'Nil value' po wpisaniu dosłownie czegokolwiek w pole tekstowe." },
        { t: "Fixed", e: "Fixed a bug allowing input boxes to accept invalid values such as letters.", p: "Zablokowano wpisywanie liter do pól, które oczekują wartości stałych/numerycznych." },
        { t: "Fixed", e: "Fixed a bug allowing input boxes to accept out-of-bounds values.", p: "Zablokowano wpisywanie wartości, które wychodziły absolutnie poza wyobraźnię dozwolonego limitu." },
        { t: "Changed", e: "Window Scale and Opacity adjustments now only trigger after explicitly pressing Enter in the input box.", p: "Od teraz suwaki przezroczystości i skali zachowują się taktownie i aplikują zmiany dopiero po wpisaniu ich ręcznie i wciśnięciu Enter." }
    ]},
    { b: "138", te: "Update 1.1 - InfoSection Changes", tp: "Aktualizacja 1.1 - Modyfikacje Sekcji Informacyjnej", c: [
        { t: "Added", e: "Added an inner container to the display panel enabling downward shifting when InfoSection expands.", p: "Umieszczono w kodzie dodatkowy kontener do spychania okna DisplayPanelu w dół, by dać miejsce rozwijającej się InfoSection." },
        { t: "Added", e: "Enabled color customization for both headers and explanation texts.", p: "Otworzono opcję zmiany kolorów dowolnego nagłówka oraz samego tekstu z informacjami z panelu u góry." },
        { t: "Added", e: "Implemented slide down/up animations synchronized with the container shift for InfoSection.", p: "Zaimplementowano połączone animacje - podczas rozwijania się tekstu na górze, reszta okna pod nim płynnie zjeżdża w dół." },
        { t: "Changed", e: "Polished the text expansion rendering animation within InfoSection.", p: "Znacznie upłynniono klatki animacji rozwijanego tekstu z dodatkowymi opisami." }
    ]},
    { b: "137", te: "Update 1.1 - Final Display Panel", tp: "Aktualizacja 1.1 - Finisz okna wyświetlania", c: [
        { t: "Added", e: "Added a slider to control overall window opacity (ranging from 0.5 to 1.0, defaulting to 0.75).", p: "Dodano kontroler sterujący przezroczystością huba (skala od 0.5 do 1.0 - z domyślnym 0.75)." },
        { t: "Changed", e: "Temporarily forced side panel and mainframe base opacities to 1.0 to resolve child-slider bugs (default visual layout remains effectively 0.75).", p: "Wymuszono na chwilę pełną nieprzezroczystość paneli do załatania błędów z kalkulacją przez kontroler." },
        { t: "Fixed", e: "Fixed the 'betweenOptionsSpacing' logic by introducing a local 'nextIsSeparator' variable for seamless separator stacking.", p: "Naprawiono logikę luk pomiędzy opcjami z użyciem 'nextIsSeparator', aby ładniej generować separatory sekcji." },
        { t: "Added", e: "Attached the Info Section interface into the main Display Panel.", p: "Doczepiono Sekcję Informacyjną na stałe do panelu głównego Display Panel." },
        { t: "Fixed", e: "Corrected the alignment of the button used to expand the Info Section.", p: "Naprawiono pozycjonowanie przycisku odpowiadającego za pokazanie lub ukrycie opisów funkcji z panelu u góry." }
    ]},
    { b: "136", te: "Update 1.1 - Button Fixes", tp: "Aktualizacja 1.1 - Poprawki przycisków", c: [
        { t: "Added", e: "Added the ability to rename buttons beyond the standard 'Apply'.", p: "Dodano możliwość zmiany nazwy przycisku poza standardowe 'Apply'." },
        { t: "Added", e: "Added the ability to manually resize buttons from within the panel code.", p: "Dodano opcję pozwalającą na zmianę rozmiaru przycisku w kodzie panelu." }
    ]},
    { b: "135", te: "Update 1.1 - Display Panel Changes and Styles", tp: "Aktualizacja 1.1 - Panele i Stylizacje", c: [
        { t: "Changed", e: "Rewrote parts of the DisplayPanel codebase for better layout and offset management.", p: "Przepisano znaczną część kodu DisplayPanel, aby ulepszyć zarządzanie elementami i odstępami (offset)." },
        { t: "Changed", e: "Rewrote portions of AddOptionRow to allow easy UI element resizing.", p: "Zrefaktoryzowano kod AddOptionRow w celu ułatwienia zmiany rozmiarów pojedynczych elementów UI." },
        { t: "Fixed", e: "Fixed the slider thumb code in CreateCustomSlider so it scales proportionally.", p: "Poprawiono kod uchwytu (thumb) w suwakach, by skalował się proporcjonalnie do całości." },
        { t: "Added", e: "Created a new file: MentiuszenHubTemplates.lua to store project templates.", p: "Utworzono nowy plik MentiuszenHubTemplates.lua służący jako baza szablonów." },
        { t: "Added", e: "Added visual frames for checkboxes, input boxes, and buttons.", p: "Dodano nową ramkę wizualną okalającą checkboxy, inputboxy oraz przyciski." },
        { t: "Fixed", e: "Fixed rendering issues related to input box colors.", p: "Naprawiono problemy z renderowaniem kolorów w polach tekstowych (input boxach)." }
    ]},
    { b: "134", te: "Update 1.1 - New Function and Fixes", tp: "Aktualizacja 1.1 - Nowe funkcje i łatki", c: [
        { t: "Added", e: "Introduced a new globally accessible function: AddOptionRow.", p: "Dodano nową funkcję AddOptionRow do globalnego użytku w całym addonie." },
        { t: "Changed", e: "Updated Display Panel logic to utilize the new AddOptionRow format.", p: "Zaktualizowano kod Display Panelu, by swobodnie obsługiwał funkcję AddOptionRow." },
        { t: "Fixed", e: "Improved user interface formatting inside AddOptionRow and Display Panel.", p: "Poprawiono formatowanie interfejsu w AddOptionRow oraz w oknie wyświetlacza." },
        { t: "Fixed", e: "Fixed a bug that broke the scale slider functionality.", p: "Naprawiono błąd przez który suwak skali (scale slider) przestał działać." },
        { t: "Fixed", e: "Fixed an issue allowing maxControlWidth to exceed the 300px limit.", p: "Poprawiono błąd przez który element maxControlWidth wykraczał poza limit 300px." }
    ]},
    { b: "133", te: "Update 1.1 - Sidepanel button and Display Panel", tp: "Aktualizacja 1.1 - Przycisk boczny", c: [
        { t: "Added", e: "Added proper default button highlighting logic within the side panel.", p: "Dodano poprawne podświetlanie domyślnego przycisku w panelu bocznym." },
        { t: "Changed", e: "The highlighted button now dynamically changes to match a searched option.", p: "Dodano funkcję zmiany podświetlonego przycisku po udanym wyszukaniu konkretnej opcji." },
        { t: "Changed", e: "Expanded the display panel to occupy the entire available window area.", p: "Powiększono główny panel wyświetlania (display panel), aby zajmował całą dostępną przestrzeń okna." }
    ]},
    { b: "132", te: "Update 1.1 - Panel Sizes Changes", tp: "Aktualizacja 1.1 - Rozmiary Okien (Korekta)", c: [
        { t: "Changed", e: "Decreased the side panel width from 300px to 250px.", p: "Zmniejszono szerokość bocznego panelu z 300px na 250px." },
        { t: "Changed", e: "Decreased the version text font size from 14 to 12.", p: "Zmniejszono wielkość czcionki tekstu wersji addonu z 14 na 12." },
        { t: "Changed", e: "Decreased the master container width from 1200px to 1100px.", p: "Zmniejszono całkowitą szerokość głównego kontenera z 1200px na 1100px." },
        { t: "Changed", e: "Decreased the main panel width from 900px to 850px.", p: "Zmniejszono szerokość głównego panelu z 900px na 850px." },
        { t: "Changed", e: "Decreased the search bar width from 280px to 230px.", p: "Zmniejszono szerokość wyszukiwarki z 280px na 230px." },
        { t: "Changed", e: "Decreased the master container height from 675px to 600px.", p: "Zmniejszono całkowitą wysokość kontenera z 675px na 600px." }
    ]},
    { b: "131", te: "Update 1.1 - SidePanel Changes and Fixes", tp: "Aktualizacja 1.1 - Boczny Panel (SidePanel)", c: [
        { t: "Changed", e: "Increased search bar size from 180x32 to 280x40.", p: "Powiększono rozmiar wyszukiwarki z 180x32 na 280x40." },
        { t: "Added", e: "Fixed the search bar text size to a static 14px.", p: "Zablokowano rozmiar tekstu wewnątrz wyszukiwarki na sztywnych 14px." },
        { t: "Changed", e: "Renamed the polish translation for 'Wyszukaj' to the generic 'Search'.", p: "Zmieniono polskie tłumaczenie 'Wyszukaj' na uniwersalne 'Search'." },
        { t: "Changed", e: "Rewrote offset handling logic inside the local UpdateLayout function.", p: "Przepisano logikę odpowiadającą za zarządzanie odstępami w funkcji UpdateLayout." },
        { t: "Fixed", e: "Improved the visual spacing between specific categories.", p: "Poprawiono luki/przerwy występujące między kategoriami na liście." },
        { t: "Fixed", e: "Fixed the gap between the Search Bar and the first category.", p: "Poprawiono odstęp między wyszukiwarką a pierwszą kategorią na samej górze." }
    ]},
    { b: "130", te: "Update 1.1 - Panel Sizes Changes", tp: "Aktualizacja 1.1 - Rozmiary Okien", c: [
        { t: "Changed", e: "Decreased the main panel width from 975px to 900px.", p: "Zmniejszono szerokość głównego okna z 975px na 900px." },
        { t: "Changed", e: "Increased the side panel width from 220px to 300px.", p: "Zwiększono szerokość panelu bocznego z 220px na 300px." },
        { t: "Fixed", e: "Fixed a bug that caused the window to get stuck to the right edge of the screen.", p: "Naprawiono błąd przez który okno opcji addonu potrafiło przykleić się do prawej krawędzi ekranu." }
    ]},
    { b: "129", te: "Update 1.1 - TriState, Formatting & Minimap", tp: "Aktualizacja 1.1 - TriState i Minimapa", c: [
        { t: "Added", e: "Added the local NormalizeTriState variable to stabilize CreateGeneralPanel.", p: "Wdrożono zmienną lokalną NormalizeTriState, ratując mocno niestabilny kod CreateGeneralPanel." },
        { t: "Added", e: "Added the CreateDropdownThreeState function for Nameplates and ActionBars panels.", p: "Dodano funkcję CreateDropdownThreeState dla paneli Nameplates i ActionBars." },
        { t: "Fixed", e: "Fixed yOffset usage calculations inside CreateDropdownThreeState.", p: "Poprawiono nieprawidłowe naliczanie przesunięcia yOffset wewnątrz CreateDropdownThreeState." },
        { t: "Changed", e: "Updated the InitializeMinimap function to process three mouse button clicks (Left, Right, Middle).", p: "Rozszerzono działanie ikony na minimapie, obsługując 3 różne kliknięcia myszką." },
        { t: "Added", e: "Added quick shortcuts on the minimap icon for MentOne and Version Checking.", p: "Dodano skróty na ikonie minimapy otwierające MentOne oraz Sprawdzanie Wersji." }
    ]},
    { b: "128", te: "Update 1.1 - Known Issues Fixes", tp: "Aktualizacja 1.1 - Znane Problemy", c: [
        { t: "Fixed", e: "Fixed the UpdateResultHighlight function that was incorrectly returning 'nil'.", p: "Naprawiono funkcję UpdateResultHighlight, która nie wiedzieć czemu zwracała 'nil'." },
        { t: "Fixed", e: "Fixed UpdateResultHighlight logic to not freeze the search bar when searching with an empty field.", p: "Poprawiono kod UpdateResultHighlight tak, aby nie blokował wyszukiwarki przy wyszukiwaniu po pustym polu." }
    ]},
    { b: "127", te: "Update 1.1 - Massive Fixes", tp: "Aktualizacja 1.1 - Duże poprawki", c: [
        { t: "Added", e: "Added the missing MH.tga asset texture.", p: "Dodano brakującą teksturę zasobu MH.tga." },
        { t: "Fixed", e: "Fixed database initialization which could sporadically return a 'nil' value.", p: "Naprawiono inicjalizację bazy danych, która mogła okazyjnie zwracać pustą wartość (nil)." },
        { t: "Fixed", e: "Improved Minimap Button integration logic.", p: "Poprawiono obsługę przycisku na minimapie." },
        { t: "Removed", e: "Removed duplicate logic declarations inside the Side Panel.", p: "Usunięto podwójne, zbędne deklaracje wewnątrz panelu bocznego." },
        { t: "Changed", e: "Fully rewrote the ShowPanel function to be immune to crashing when loading MentiuszenModules panels.", p: "Przepisano w całości funkcję ShowPanel, czyniąc ją odporną na błędy wywoływane przez moduły." },
        { t: "Added", e: "Added safeguards to the Smooth Height animation system.", p: "Zabezpieczono animację Smooth Height przed awariami." },
        { t: "Added", e: "Added codebase safeguards to UpdateScrollbar and HideList inside MentiuszenHubStyles.lua.", p: "Dodano dodatkowe zabezpieczenia w UpdateScrollbar i HideList w pliku stylów." },
        { t: "Fixed", e: "Fixed CustomCheckbox state updating issues in MentiuszenHubStyles.lua.", p: "Poprawiono odświeżanie wizualnego statusu (state) dla CustomCheckboxów." }
    ]},
    { b: "126", te: "Update 1.1 - Missing DB Variables", tp: "Aktualizacja 1.1 - Brakujące Zmienne DB", c: [
        { t: "Added", e: "Added the missing SavedVariables definition for MentiuszenGraphicsDB.", p: "Zadeklarowano brakujące wpisy do zapisywania bazy danych MentiuszenGraphicsDB." },
        { t: "Fixed", e: "Fixed a bug interpreting custom View Distance settings as 'Obsolete'.", p: "Naprawiono błąd traktujący dowolne własne (niedomyślne) wartości dystansu widzenia jako przestarzałe/obsolete." }
    ]},
    { b: "125", te: "Update 1.1 - MentiuszenHub Fixes", tp: "Aktualizacja 1.1 - Poprawki MentiuszenHub", c: [
        { t: "Fixed", e: "Fixed the broken layout in CreateMainPanel.", p: "Zrekonstruowano rozwalony kod w module CreateMainPanel." },
        { t: "Removed", e: "Removed the standalone ClearContent logic and integrated it cleanly into CreateMainPanel.", p: "Usunięto osobną funkcję ClearContent, asymilując ją wewnątrz CreateMainPanel." },
        { t: "Changed", e: "Safeguarded unstable MentiuszenBlizzard.lua code to prevent it from crashing the rest of the addon.", p: "Zabezpieczono niestabilny kod w MentiuszenBlizzard.lua, by ewentualne błędy nie blokowały działania reszty addonu." },
        { t: "Changed", e: "Rewrote 80% of MentiuszenBlizzard.lua to eliminate fatal execution hangs.", p: "Przepisano 80% kodu w MentiuszenBlizzard.lua zapobiegając całkowitym zawieszeniom skryptów." }
    ]},
    { b: "124", te: "Update 1.1 - Patch 1.0.4 and 1.0.5 Port", tp: "Aktualizacja 1.1 - Port Zmian (Patch 1.0.4/1.0.5)", c: [
        { t: "Changed", e: "Completed porting MentiuszenHub changes from patch 1.0.4.", p: "Ukończono proces portowania najnowszych usprawnień MentiuszenHub z dawnej łaty 1.0.4." },
        { t: "Changed", e: "Switched to using the updated MentiuszenMailbox from patch 1.0.4.", p: "Zmieniono MentiuszenMailbox na ten znany z aktualizacji 1.0.4." },
        { t: "Changed", e: "Completed porting MentiuszenHub.lua changes from patch 1.0.5.", p: "Ukończono proces portowania kodu MentiuszenHub.lua wprost z najnowszej łatki 1.0.5." },
        { t: "Fixed", e: "Fixed a bug where the entire MentiuszenHub panel was aggressively overwritten by MentiuszenBlizzard.", p: "Załatano wkurzający błąd, gdzie MentiuszenBlizzard nadpisywał całego huba (nie ładując jego UI)." }
    ]},
    { b: "123", te: "Update 1.1 - Lua Files Changes", tp: "Aktualizacja 1.1 - Zmiany w plikach Lua", c: [
        { t: "Changed", e: "Renamed the 'MentiuszenBlizzard' module to 'MentiuszenGraphics'.", p: "Zmieniono nazwę modułu MentiuszenBlizzard na MentiuszenGraphics." },
        { t: "Added", e: "Created a brand-new MentiuszenBlizzard module specifically dedicated to fixing default Blizzard UI bugs.", p: "Stworzono od nowa moduł MentiuszenBlizzard z zamiarem naprawiania wyłącznie oficjalnych błędów z interfejsu Blizzarda." }
    ]},
    { b: "122", te: "Update 1.1 - Version and Build", tp: "Aktualizacja 1.1 - Wersje i Kompilacje", c: [
        { t: "Removed", e: "Removed the addon version display from the title bar.", p: "Usunięto tekst wyświetlający wersję addonu z belki tytułowej okna." },
        { t: "Added", e: "Added the addon version and build number to the bottom of the side panel.", p: "Dodano informacje o wersji oraz numerze buildu na samym dole panelu bocznego." },
        { t: "Added", e: "Registered a new event: CHAT_MSG_ADDON.", p: "Zarejestrowano nowy event gry do nasłuchiwania: CHAT_MSG_ADDON." },
        { t: "Added", e: "Added commands that allow the addon to auto-reply with its current version in chat.", p: "Dodano komendy odblokowujące autoodpowiedź addonu ze swoją wersją w locie (na czacie)." },
        { t: "Added", e: "Registered missing chat events: CHAT_MSG_PARTY, CHAT_MSG_RAID, CHAT_MSG_WHISPER.", p: "Zarejestrowano pakiety brakujących eventów nasłuchu (Party, Raid, Whisper)." },
        { t: "Fixed", e: "Fixed a bug preventing the addon from properly identifying in-game chat commands.", p: "Naprawiono usterkę przez którą addon nie był w stanie zarejestrować, że ktoś go wzywa na czacie." }
    ]},
    { b: "121", te: "Update 1.1 - InfoSection", tp: "Aktualizacja 1.1 - Sekcja Informacyjna", c: [
        { t: "Added", e: "Implemented a new global InfoSection function.", p: "Zaimplementowano nową globalną funkcję InfoSection." },
        { t: "Changed", e: "Moved the existing Explanation code into the new InfoSection.", p: "Przeniesiono obecny kod (Explanation) do nowej struktury InfoSection." },
        { t: "Added", e: "Made the InfoSection function globally accessible within MentiuszenHub.", p: "Udostępniono funkcję InfoSection globalnie na poziomie MentiuszenHub." }
    ]},
    { b: "120", te: "Update 1.1 - Dropdown Option Changes", tp: "Aktualizacja 1.1 - Zmiany w listach rozwijanych", c: [
        { t: "Added", e: "Introduced a new global CreateDropdownOptions function.", p: "Dodano nową globalną funkcję CreateDropdownOptions." },
        { t: "Changed", e: "Migrated the majority of the CreateShowHideDisableDropdown logic into the new function.", p: "Przeniesiono większość logiki CreateShowHideDisableDropdown do nowej funkcji globalnej." },
        { t: "Fixed", e: "Fixed all formatting and alignment errors across dropdown menus.", p: "Poprawiono wszystkie błędy związane z formatowaniem i wyrównywaniem list rozwijanych." },
        { t: "Fixed", e: "Fixed a bug that caused all dropdown menus to open simultaneously.", p: "Naprawiono błąd powodujący otwieranie się wszystkich list rozwijanych naraz." }
    ]},
    { b: "119", te: "Update 1.1 - General QoL Formatting Fixes", tp: "Aktualizacja 1.1 - Poprawki Formatowania QoL", c: [
        { t: "Fixed", e: "Fixed the positioning of labels relative to dropdown menus.", p: "Poprawiono pozycjonowanie opisów (label) względem list rozwijanych." },
        { t: "Added", e: "Added dynamic detection of available options to properly align dropdown menus with visible labels.", p: "Dodano system rozpoznawania aktualnie dostępnych opcji, co wymusza idealne, równe układanie się list w pionie." },
        { t: "Fixed", e: "Fixed a Lua error related to the resultsFrame.", p: "Naprawiono błąd Lua powiązany z resultsFrame." }
    ]},
    { b: "118", te: "Update 1.1 - Fixes and Changes", tp: "Aktualizacja 1.1 - Poprawki i Zmiany", c: [
        { t: "Changed", e: "Swapped 'MentiuszenHub.clientInfo' for 'clientInfo' inside CreateActionBarsPanel.", p: "Zamieniono MentiuszenHub.clientInfo na uproszczone clientInfo w CreateActionBarsPanel." },
        { t: "Fixed", e: "Fixed the internal code positioning for optionsLabels.", p: "Poprawiono pozycjonowanie elementu optionsLabels w strukturze kodu." },
        { t: "Changed", e: "Renamed old headers like 'MentiuszenQoL - General' to descriptive titles like 'General Quality of Life Settings'.", p: "Zamieniono stare tytuły zakładek na pełne, opisowe warianty (np. 'General Quality of Life Settings')." },
        { t: "Changed", e: "Replaced hardcoded 'panel:SetSize' values with 'panel:SetPoint' to anchor elements dynamically to their parent.", p: "Zamieniono panel:SetSize na panel:SetPoint, by okna dynamicznie dziedziczyły rozmiar zamiast sztywno narzuconego limitu." },
        { t: "Added", e: "Added an 'Explanation' dropdown containing info details about the current menu.", p: "Dodano pole 'Explanation' zawierające cenne wyjaśnienia i szczegóły dotyczące aktualnie przeglądanego menu." }
    ]},
    { b: "117", te: "Update 1.1 - ApplySettings Changes", tp: "Aktualizacja 1.1 - Zmiany w ApplySettings", c: [
        { t: "Added", e: "Added a new 'applyCVar' helper function to significantly shorten code across ApplySettings.", p: "Dodano nową funkcję pomocniczą 'applyCVar', by drastycznie skrócić rozmiar kodu w innych obszarach." },
        { t: "Added", e: "Added numeric values support for the new applyCVar function.", p: "Dodano obsługę wartości numerycznych dla nowej funkcji applyCVar." },
        { t: "Changed", e: "Rewrote ApplySettings to correctly handle true, false, and disable states.", p: "Przepisano mechanikę ApplySettings tak, aby prawidłowo uwzględniała 3 stany: true, false oraz disable." },
        { t: "Removed", e: "Removed the redundant nameplateMaxDistanceDefault=40 declaration.", p: "Usunięto zbędną deklarację wartości domyślnej dla dystansu rysowania (nameplateMaxDistanceDefault)." }
    ]},
    { b: "116", te: "Update 1.1 - Defaults and Local ApplySettings Fixes", tp: "Aktualizacja 1.1 - Poprawki Ustawień Domyślnych", c: [
        { t: "Fixed", e: "Fixed a bug that incorrectly interpreted the 'false' variable and replaced it with 'disable'.", p: "Poprawiono błąd, przez który skrypt źle interpretował wartość 'false' i traktował ją jako 'disable'." },
        { t: "Fixed", e: "Fixed a poorly declared variable preventing the 'disable' logic from properly triggering.", p: "Naprawiono źle zadeklarowaną zmienną powiązaną ze statusem 'disable'." }
    ]},
    { b: "115", te: "Update 1.1 - Disable Function Fixes", tp: "Aktualizacja 1.1 - Usprawnienia funkcji 'Wyłącz'", c: [
        { t: "Fixed", e: "Fixed the 'disable' variable not saving correctly into the .wtf configuration file.", p: "Naprawiono zapisywanie zmiennej blokującej (disable) w pliku konfiguracyjnym .wtf." },
        { t: "Changed", e: "The addon no longer force-changes critical WoW settings by default.", p: "Addon nie wymusza już zmiany poważniejszych i ingerujących w grę ustawień z automatu." },
        { t: "Changed", e: "Most core options now default to 'Disable' until the user manually changes them.", p: "Większość kluczowych opcji jest domyślnie zablokowana na 'Disable', dopóki użytkownik sam ich nie włączy." },
        { t: "Fixed", e: "Fixed the Search Index logic following function renaming.", p: "Naprawiono logiczny Index wyszukiwania po masowej zmianie nazw funkcji." },
        { t: "Changed", e: "Optimized settings application by allowing individual functions to update instead of firing them all at once.", p: "Zoptymalizowano działanie skryptów, pozwalając na aktualizowanie pojedynczych funkcji zamiast odpalania wszystkiego naraz." },
        { t: "Added", e: "Injected corresponding variables into CreateGeneralPanel, CreateNameplatesPanel, and CreateActionBarsPanel.", p: "Wprowadzono i wstrzyknięto odpowiednie zmienne pod w/w moduły w odpowiednich plikach budujących panel." }
    ]},
    { b: "114", te: "Update 1.1 - MentiuszenQoL Fixes", tp: "Aktualizacja 1.1 - Poprawki QoL", c: [
        { t: "Removed", e: "Removed 'nil' as a valid argument due to it causing multiple script errors.", p: "Usunięto traktowanie argumentu 'nil' jako poprawnego (powodowało to lawinę błędów)." },
        { t: "Added", e: "Introduced a new 'disable' argument as a solid replacement for nil.", p: "Wprowadzono silny argument 'disable', który od teraz służy jako poprawny zamiennik zablokowania." },
        { t: "Fixed", e: "Fixed a bug where the 'Disable' function was incorrectly acting like 'Hide'.", p: "Naprawiono błąd przez który użycie opcji 'Disable' fizycznie ukrywało elementy zamiast je wyłączać." },
        { t: "Fixed", e: "Fixed checkbox state updating logic in the QoL module.", p: "Naprawiono aktualizacje graficznego stanu zaznaczonego Checkboxa w QoL." }
    ]},
    { b: "113", te: "Update 1.1 - Global MentiuszenQoL Changes", tp: "Aktualizacja 1.1 - Globalne zmiany QoL", c: [
        { t: "Changed", e: "Replaced specific checkboxes with dropdown menus to allow players to bypass forced addon options.", p: "Zastąpiono część surowych checkboxów listami rozwijanymi, aby dać graczom możliwość ignorowania i omijania funkcji." },
        { t: "Changed", e: "Modified MigrateDatabase to accept 'nil' as a valid configuration argument.", p: "Zmodyfikowano skrypt bazy danych tak, aby początkowo pozwalał na wartości ujemne w bazie (później wycofano)." },
        { t: "Changed", e: "Adjusted ApplySettings strictly to support the new dropdown structure.", p: "Dostosowano całe ApplySettings do zasilania nowych rozwijanych opcji." }
    ]},
    { b: "112", te: "Update 1.1 - Search Menu", tp: "Aktualizacja 1.1 - Menu Wyszukiwania", c: [
        { t: "Added", e: "Added scrollbar animations.", p: "Dodano animację paska przewijania." },
        { t: "Added", e: "Implemented keyboard arrow navigation within the search results menu.", p: "Wdrożono możliwość nawigowania po wynikach wyszukiwania bezpośrednio za pomocą strzałek na klawiaturze." },
        { t: "Fixed", e: "Fixed a bug forcing the first button to turn yellow.", p: "Naprawiono błąd z pierwszym zaznaczonym przyciskiem, który irytująco świecił na żółto." },
        { t: "Fixed", e: "Fixed a bug allowing arrow keys to target invisible 'phantom' buttons.", p: "Naprawiono dziwny błąd w którym strzałki klawiatury pozwalały przeskakiwać na ukryte przyciski-widma." },
        { t: "Fixed", e: "Fixed a bug preventing the list from scrolling when navigating with arrow keys.", p: "Naprawiono błąd powodujący zacięcie przewijania menu w dół po dojechaniu tam strzałkami klawiatury." },
        { t: "Fixed", e: "Fixed general scrollbar conflict issues when arrow navigation is active.", p: "Naprawiono ogólny konflikt scrollbaru ze sterowaniem z klawiatury." }
    ]},
    { b: "111", te: "Update 1.1 - Dropdown Menu Animations", tp: "Aktualizacja 1.1 - Animacje Menu", c: [
        { t: "Added", e: "Added a Fade animation for expanding dropdown lists.", p: "Dodano świetną animację zanikania/pojawiania (Fade) dla rozwijanych list." },
        { t: "Added", e: "Added color highlighting for the currently selected option in lists.", p: "Dodano dynamiczną zmianę koloru, by podświetlać aktualnie aktywne opcje na liście." },
        { t: "Added", e: "Added hover-color changes for items inside dropdowns.", p: "Dodano podświetlenia najeżdżania na pojedynczy punkt na otwartej liście." }
    ]},
    { b: "110", te: "Update 1.1 - Fixes", tp: "Aktualizacja 1.1 - Poprawki Wejścia", c: [
        { t: "Fixed", e: "Fixed a bug that failed to release typing focus after pressing ENTER.", p: "Naprawiono bardzo drażniący błąd nie zwalniający fokusu klawiatury po wciśnięciu klawisza ENTER." },
        { t: "Fixed", e: "Fixed Window Scale setting failing to apply upon pressing ENTER.", p: "Naprawiono błąd z suwakiem powiększania okna ignorującym wciśnięcie ENTER dla zastosowania." },
        { t: "Fixed", e: "Fixed a bug causing option lists to incorrectly display as empty.", p: "Poprawiono usterkę przez którą listy wyświetlały się graczowi jako całkowicie puste." },
        { t: "Fixed", e: "Fixed a visual bug rendering icons as the missing green block.", p: "Naprawiono brakującą referencję do zasobu, która generowała zielony, rażący obiekt graficzny." }
    ]},
    { b: "109", te: "Update 1.1 - Other Checkboxes Fixes", tp: "Aktualizacja 1.1 - Poprawki Checkboxów", c: [
        { t: "Fixed", e: "Fixed an invalid declaration for db.minimap which incorrectly contained a trailing dot.", p: "Poprawiono błędną deklarację nazwy db.minimap, która niepotrzebnie zawierała kropkę na końcu." },
        { t: "Changed", e: "Replaced the traditional checkbox checkmark with a modern cross icon.", p: "Dodano nowoczesny krzyżyk zamiast klasycznego 'ptaszka' przy zaznaczaniu checkboxa." },
        { t: "Added", e: "Added fade animations when checking and unchecking boxes.", p: "Dodano animacje przenikania przy zaznaczaniu i odznaczaniu opcji." },
        { t: "Changed", e: "Scaled down the checkmark cross to 80% of the checkbox size.", p: "Pomniejszono krzyżyk zaznaczenia do 80% wielkości kwadratu checkboxa." }
    ]},
    { b: "108", te: "Update 1.1 - Templates, Buttons, Checkbox", tp: "Aktualizacja 1.1 - Szablony, Przyciski, Checkboxy", c: [
        { t: "Removed", e: "Removed incorrectly implemented default Blizzard templates from the code.", p: "Usunięto z kodu wszystkie niepoprawnie zaimplementowane szablony Blizzarda." },
        { t: "Added", e: "Added a new base button design.", p: "Dodano nowy podstawowy wygląd przycisków." },
        { t: "Added", e: "Added a new checkbox design.", p: "Dodano nowy wygląd checkboxów." },
        { t: "Fixed", e: "Fixed the state-changing logic for the 'Hide Minimap Button' option.", p: "Poprawiono zmienianie stanu (State) przycisku dla opcji Hide Minimap Button." }
    ]},
    { b: "107", te: "Update 1.1 - New Slider", tp: "Aktualizacja 1.1 - Nowy Suwak", c: [
        { t: "Added", e: "Implemented a new 'Modern Slider' to be used across the entire addon.", p: "Dodano nowy, nowoczesny suwak (Modern Slider) do użytku w całym addonie." },
        { t: "Fixed", e: "Fixed bugs related to updating the thumb (draggable knob) position.", p: "Naprawiono problemy z prawidłową aktualizacją pozycji 'uchwytu' suwaka." },
        { t: "Fixed", e: "Fixed an issue that prevented adding a visual gap between the thumb, the background, and the progress bar.", p: "Naprawiono błąd, który uniemożliwiał stworzenie estetycznej przerwy między uchwytem a tłem i paskiem postępu." }
    ]},
    { b: "106", te: "Update 1.1 - Bug Fixes", tp: "Aktualizacja 1.1 - Poprawki Błędów", c: [
        { t: "Fixed", e: "Fixed a bug preventing the MentiuszenHubStyles.lua file from loading properly.", p: "Naprawiono błąd uniemożliwiający poprawne wczytanie pliku MentiuszenHubStyles.lua." },
        { t: "Fixed", e: "Fixed an issue where local style names were read incorrectly.", p: "Naprawiono błąd z błędnym odczytywaniem lokalnych nazw stylów." },
        { t: "Removed", e: "Removed improperly used Blizzard Templates from the styling code.", p: "Usunięto z kodu stylów błędnie użyte szablony UI (Templates)." }
    ]},
    { b: "105", te: "Update 1.1 - Code Cleanup and New Files", tp: "Aktualizacja 1.1 - Czyszczenie Kodu i Nowe Pliki", c: [
        { t: "Removed", e: "Removed unnecessary DB_VERSION and QoLDB.Version declarations from the Event Handler in MentiuszenHub.", p: "Usunięto niepotrzebną deklarację 'local DB_VERSION' oraz 'QoLDB.Version' z Event Handlera w głównym Hubie." },
        { t: "Removed", e: "Removed the unnecessary QoLDB.Version declaration from the MentiuszenModulesQoL Event Handler.", p: "Usunięto niepotrzebną deklarację QoLDB.Version z Event Handlera w MentiuszenModulesQoL." },
        { t: "Added", e: "Introduced a new MentiuszenHubStyles.lua file to consolidate all custom addon styles.", p: "Dodano nowy plik MentiuszenHubStyles.lua, który gromadzi wszystkie własne (custom) style używane w addonie." },
        { t: "Added", e: "Added global custom styles for Buttons, Dropdown Menus, Sliders, Input Boxes, and Checkboxes.", p: "Dodano nowe, globalne style elementów interfejsu (Przyciski, Listy, Suwaki, Pola Tekstowe, Checkboxy) do wykorzystania w całym kodzie." }
    ]},
    { b: "104", te: "Update 1.1 - Scrollbar and Searchbox", tp: "Aktualizacja 1.1 - Scrollbar i Wyszukiwarka", c: [
        { t: "Added", e: "Added a custom, minimalist scrollbar used globally across the project.", p: "Dodano niestandardowy, minimalistyczny pasek przewijania (scrollbar) globalnie dla całego projektu." },
        { t: "Fixed", e: "Fixed multiple issues related to scrollbar behavior.", p: "Poprawiono masę problemów z zachowaniem paska przewijania." },
        { t: "Changed", e: "Replaced placeholder graphics with real interface icons.", p: "Podmieniono zastępcze grafiki (placeholdery) prawdziwymi ikonami." },
        { t: "Added", e: "Added highlight animations for options actively being searched.", p: "Dodano podświetlanie opcji wyszukiwanej aktualnie w oknie." },
        { t: "Changed", e: "Decreased main window opacity from 85% to 75% for a sleeker look.", p: "Zmieniono przezroczystość głównego okna z 85% na 75%." },
        { t: "Fixed", e: "Added missing code references required for the search bar.", p: "Uzupełniono brakujące odniesienia kodu dotyczące wyszukiwarki." }
    ]},
    { b: "103", te: "Update 1.1 - Searchbox", tp: "Aktualizacja 1.1 - Wyszukiwarka Opcji", c: [
        { t: "Added", e: "Implemented full search logic for addon options.", p: "Zaimplementowano pełną logikę służącą do wyszukiwania danych opcji." },
        { t: "Added", e: "Added a simple dropdown list showing search results.", p: "Dodano prostą listę wyświetlającą znalezione wyniki." },
        { t: "Fixed", e: "Fixed an issue allowing users to click interface buttons hidden beneath the search results list.", p: "Naprawiono błąd pozwalający na klikanie w ukryte pod listą wyników przyciski z opcjami." },
        { t: "Changed", e: "Capped the visible search results list length to 4 items.", p: "Ograniczono długość wyświetlanej listy wyników do 4 pozycji." },
        { t: "Added", e: "Added logic for the ESC key to clear search text and close the search box.", p: "Dodano logikę dla klawisza ESC, by wymazywał tekst i ukrywał okienko wyszukiwania." },
        { t: "Changed", e: "Reformatted the CreateSidePanel codebase for logical structuring.", p: "Poprawiono formatowanie kodu funkcji CreateSidePanel tak, aby wszystko było logicznie uporządkowane." }
    ]},
    { b: "102", te: "Update 1.1 - Fixes and Changes", tp: "Aktualizacja 1.1 - Poprawki i Zmiany", c: [
        { t: "Removed", e: "Removed placeholder buttons from empty spaces.", p: "Usunięto puste, testowe przyciski zajmujące wolne miejsca." },
        { t: "Added", e: "Added the new 'MentOne' button.", p: "Dodano nowy przycisk 'MentOne'." },
        { t: "Fixed", e: "Fixed an issue allowing players to click buttons located within collapsed categories.", p: "Naprawiono problem, który umożliwiał interakcję z przyciskami nawet gdy kategoria była ukryta/zwinięta." },
        { t: "Changed", e: "Updated hide/show animations for buttons to be much smoother.", p: "Zmieniono i doszlifowano animacje chowania oraz pokazywania przycisków, aby działały płynniej." }
    ]},
    { b: "101", te: "Update 1.1 - MentiuszenHub Fixes", tp: "Aktualizacja 1.1 - Poprawki MentiuszenHub", c: [
        { t: "Fixed", e: "Fixed text alignment issues caused by the addition of category icons.", p: "Naprawiono problemy z wyrównywaniem tekstu po dodaniu nowych ikon." },
        { t: "Changed", e: "Reduced the font size for category names.", p: "Zmniejszono rozmiar tekstu nazw poszczególnych kategorii." },
        { t: "Fixed", e: "Fixed UI scaling logic so that all options resize correctly.", p: "Poprawiono logikę skalowania, łatając błąd, przez który jedna z opcji nie ulegała przeskalowaniu." },
        { t: "Added", e: "Added the ability to collapse and expand buttons within categories.", p: "Dodano nową mechanikę pozwalającą na zwijanie i rozwijanie przycisków w kategoriach." },
        { t: "Fixed", e: "Adjusted the placement and padding of category names and buttons.", p: "Poprawiono umiejscowienie nazw kategorii oraz samych przycisków." },
        { t: "Added", e: "Added smooth collapsing and expanding animations for categories.", p: "Dodano animowane, płynne zwijanie i rozwijanie kategorii." },
        { t: "Changed", e: "Improved the reactivity of other categories when one is collapsed/expanded.", p: "Poprawiono czas reakcji (przesunięcia) innych kategorii na ukrywanie/odkrywanie sąsiadujących sekcji." }
    ]},
    { b: "100", te: "Update 1.1 - MentiuszenHub First Changes", tp: "Aktualizacja 1.1 - Pierwsze Zmiany", c: [
        { t: "Changed", e: "Separated the Main Window and Side Panel in the codebase.", p: "Rozdzielono w strukturze kodu Główne Okno od bocznego panelu (Side Panel)." },
        { t: "Added", e: "Added visual icons to category names.", p: "Dodano zgrabne ikony przy nazwach kategorii." },
        { t: "Removed", e: "Removed the button background color change when hovering.", p: "Usunięto zmianę tła przycisku podczas najeżdżania na niego myszką." },
        { t: "Added", e: "Added a text color change effect when hovering over buttons.", p: "Dodano zmianę koloru tekstu w momencie najechania myszką na przycisk." },
        { t: "Added", e: "Added highlighting logic for the currently active button.", p: "Dodano stałe podświetlenie dla obecnie aktywnego/klikniętego przycisku." },
        { t: "Added", e: "Implemented the visual interface for an options search bar (logic to be added later).", p: "Dodano wizualną wyszukiwarkę opcji (logika została dodana w kolejnych łatkach)." }
    ]},
    { b: "67", te: "Patch 1.0.9 - Last Fixes", tp: "Patch 1.0.9 - Końcowe poprawki", c: [
        { t: "Fixed", e: "Fixed friendly nameplates logic (updated for Midnight expansion changes).", p: "Naprawiono logikę wyświetlania przyjaznych pasków zdrowia (dostosowano do zmian z Midnight)." },
        { t: "Fixed", e: "Fixed an issue where the database checksum was not generated if the user chose to keep their settings during the first setup.", p: "Naprawiono brak generowania sumy kontrolnej po wyborze własnych ustawień podczas pierwszej konfiguracji." },
        { t: "Removed", e: "Disabled database checksum validation on game versions other than Retail.", p: "Wyłączono weryfikację sumy kontrolnej bazy danych dla klientów innych niż Retail." },
        { t: "Fixed", e: "Fixed a bug where the addon attempted to read a secret internal Blizzard value.", p: "Naprawiono błąd przez który addon bezprawnie próbował odczytać tajną wartość systemową gry." }
    ]},
    { b: "66", te: "Patch 1.0.8 - BCC", tp: "Patch 1.0.8 - Burning Crusade Classic", c: [
        { t: "Added", e: "Added official support for the Burning Crusade Classic client.", p: "Dodano oficjalne wsparcie dla klienta Burning Crusade Classic." },
        { t: "Fixed", e: "Fixed functional issues with UI sliders.", p: "Naprawiono usterki techniczne związane z suwakami opcji." }
    ]},
    { b: "65", te: "Patch 1.0.7 - Hotfix 4", tp: "Patch 1.0.7 - Szybka poprawka 4", c: [
        { t: "Fixed", e: "Permanently resolved the addon interference preventing players from changing talents.", p: "Tym razem definitywnie załatano problem blokady zmiany talentów powodowanej przez addon." }
    ]},
    { b: "64", te: "Patch 1.0.7 - Hotfix 3", tp: "Patch 1.0.7 - Szybka poprawka 3", c: [
        { t: "Fixed", e: "Finally fixed the critical 'taint' issue affecting the Special Ability Button.", p: "Ostatecznie naprawiono błąd taintujący przycisk Specjalnej Umiejętności." },
        { t: "Added", e: "Added a mandatory UI reload popup upon logging into a character for the very first time.", p: "Dodano powiadomienie wymuszające /reload przy pierwszym w życiu logowaniu na nową postać." },
        { t: "Changed", e: "Separated Action Bars applying logic from ApplySettings into its own ApplyBarsSettings function.", p: "Rozdzielono funkcję nakładającą ustawienia pasków do nowej instancji ApplyBarsSettings." },
        { t: "Changed", e: "ApplyBarsSettings now triggers strictly on the first login or when detecting bar changes.", p: "Logika pasków od teraz aktywuje się wyłącznie na start lub kiedy addon wykryje realną zmianę ustawień." }
    ]},
    { b: "63", te: "Patch 1.0.7 - Hotfix 2", tp: "Patch 1.0.7 - Szybka poprawka 2", c: [
        { t: "Fixed", e: "Fixed a bug where the addon sporadically blocked users from swapping talents.", p: "Naprawiono problem, przez który addon sporadycznie blokował możliwość zmiany talentów." }
    ]},
    { b: "62", te: "Patch 1.0.7 - Test Version Fixes #1", tp: "Patch 1.0.7 - Poprawki wersji testowej #1", c: [
        { t: "Changed", e: "Relocated vreg.lua from the Hub directory to the Core.", p: "Przeniesiono plik vreg.lua z katalogu Hub do jądra (Core)." },
        { t: "Fixed", e: "Fixed Lua errors stemming from the transition from char.lua to vreg.lua.", p: "Naprawiono błędy Lua występujące po podmianie starego char.lua na vreg.lua." }
    ]},
    { b: "61", te: "Patch 1.0.7 - Code Fixes", tp: "Patch 1.0.7 - Poprawki Kodu", c: [
        { t: "Added", e: "Added missing buff IDs into the consolidated buffs logic.", p: "Uzupełniono kody ID dla brakujących buffów w systemie ich grupowania." },
        { t: "Fixed", e: "Fixed a visual bug causing consolidated buffs to display incorrect remaining durations.", p: "Naprawiono błąd przez który zgrupowane wzmocnienia pokazywały błędny pozostały czas trwania." },
        { t: "Changed", e: "Replaced the legacy char.lua module with a new vreg.lua module.", p: "Stary plik char.lua został całkowicie wyparty przez nowy system vreg.lua." }
    ]},
    { b: "60", te: "Patch 1.0.7 - Even More Pandaria Fixes", tp: "Patch 1.0.7 - Jeszcze więcej poprawek Pandarii", c: [
        { t: "Added", e: "Added an extra layer of protection for protected Blizzard UI frames during settings application.", p: "Wdrożono zaawansowaną warstwę chroniącą oryginalne panele Blizzarda podczas ładowania opcji." },
        { t: "Fixed", e: "Fixed an original Blizzard bug showing duplicate corpse map icons after dying.", p: "Naprawiono oryginalny błąd gry powodujący rysowanie dwóch ikon trupa po śmierci." },
        { t: "Changed", e: "Improved the handling of difficulty markers on the minimap.", p: "Poprawiono skrypt odpowiadający za poprawne rysowanie poziomu trudności na minimapie." },
        { t: "Fixed", e: "Fixed a Blizzard UI bug where changing the raid difficulty occasionally failed to apply.", p: "Naprawiono błąd z oryginalnego UI uniemożliwiający zmianę poziomu trudności rajdu." },
        { t: "Fixed", e: "Fixed a Blizzard UI bug causing both Dungeon Journal tabs to appear active on first open.", p: "Naprawiono błąd oryginalnego klienta pokazujący dwie zakładki aktywne w Dungeon Journalu naraz." },
        { t: "Changed", e: "Completely remade the default Blizzard consolidated buffs frame.", p: "Przebudowano od zera blizzardowską ramkę trzymającą zgrupowane buffy." }
    ]},
    { b: "59", te: "Patch 1.0.7 - More Pandaria Fixes", tp: "Patch 1.0.7 - Więcej poprawek dla Pandarii", c: [
        { t: "Added", e: "Added missing navigation maps between zones in Pandaria, including level requirements.", p: "Dodano brakujące mapy nawigacji między strefami na Pandarii wraz z wymaganiami poziomowymi." },
        { t: "Fixed", e: "Fixed an issue with invisible World Boss icons on the map.", p: "Naprawiono problem powodujący niewidzialne ikony World Bossów na mapie." }
    ]},
    { b: "58", te: "Patch 1.0.7 - DB, Code Refactoring", tp: "Patch 1.0.7 - Refaktoryzacja i Baza Danych", c: [
        { t: "Changed", e: "Refactored mQoL_FixPvPRewards.lua, reducing code length from 1200 to 600 lines.", p: "Przeprowadzono refaktoryzację pliku mQoL_FixPvPRewards.lua, skracając kod z 1200 do 600 linijek." },
        { t: "Changed", e: "Separated PvP rewards tracking into its own database (mQoL_PvPRewards_DB).", p: "Wydzielono śledzenie nagród PvP do nowej, odrębnej bazy danych (mQoL_PvPRewards_DB)." },
        { t: "Added", e: "Implemented comprehensive PvP event logging (wins, losses, and errors).", p: "Dodano system logowania zdarzeń PvP (wygrane, przegrane, błędy)." },
        { t: "Fixed", e: "Fixed all issues related to detecting wins and losses in Arenas.", p: "Naprawiono wszelkie problemy z detekcją wygranej/przegranej na arenach." }
    ]},
    { b: "57", te: "Patch 1.0.7 - RBG, Daily Reset", tp: "Patch 1.0.7 - RBG i Codzienny Reset", c: [
        { t: "Fixed", e: "Fixed a bug where RBG matches always returned nil, causing them to be recorded as a draw.", p: "Naprawiono błąd przez który mecze RBG zawsze zwracały nil, co było interpretowane jako remis." },
        { t: "Changed", e: "Updated the daily reset system to fetch times dynamically from the game rather than relying on a flat UTC hour.", p: "Zmieniono system codziennego resetu, by pobierał czas z gry zamiast sztywnej godziny UTC." }
    ]},
    { b: "56", te: "Patch 1.0.7 - Rewards Rewrite", tp: "Patch 1.0.7 - Przebudowa Nagród", c: [
        { t: "Changed", e: "Completely rewrote the rewards data table to allow for open future modifications.", p: "Całkowicie przepisano tabelę z nagrodami, umożliwiając łatwe modyfikacje w przyszłości." },
        { t: "Removed", e: "Removed large amounts of old, unused legacy code.", p: "Usunięto masywną ilość przestarzałego, nieużywanego kodu." },
        { t: "Changed", e: "Improved overall code readability.", p: "Zoptymalizowano i poprawiono ogólną czytelność kodu." },
        { t: "Removed", e: "Removed redundant event handler triggers that were duplicating queries.", p: "Usunięto zbędne wywołania w event handlerze, które duplikowały zapytania." }
    ]},
    { b: "55", te: "Patch 1.0.7 - Dynamic Level Rewards", tp: "Patch 1.0.7 - Dynamiczne Nagrody Zależne od Poziomu", c: [
        { t: "Added", e: "Implemented dynamic PvP reward display based on the character's current level.", p: "Wdrożono dynamiczne wyświetlanie nagród PvP bazując na obecnym poziomie postaci." },
        { t: "Fixed", e: "Fixed a formatting error in the Random Battleground reward display.", p: "Naprawiono błąd z uciętym formatowaniem przy nagrodzie za Random Battleground." }
    ]},
    { b: "54", te: "Patch 1.0.7 - BG Winner Detection Fixes", tp: "Patch 1.0.7 - Detekcja Wygranej BG", c: [
        { t: "Changed", e: "Reduced the time required to detect Battleground winners to 0.2s.", p: "Zmniejszono czas nasłuchiwania na przechwycenie zwycięzcy BG do 0.2s." },
        { t: "Added", e: "Implemented a fallback mechanic to detect winners even if primary systems fail.", p: "Dodano mechanizm zastępczy (fallback), który wykrywa wygraną nawet jeśli główne systemy zawiodą." }
    ]},
    { b: "53", te: "Patch 1.0.7 - PvP Reward Restoration changes", tp: "Patch 1.0.7 - Przywracanie Nagród PvP", c: [
        { t: "Changed", e: "Overhauled the reset detection logic to base it directly on quest resets.", p: "Zmieniono cały mechanizm weryfikacji resetów opierając go bezpośrednio na resecie questów." },
        { t: "Changed", e: "Updated player faction detection logic to account for faction-changing buffs (e.g., Mercenary Mode).", p: "Zaktualizowano logikę wykrywania frakcji, by poprawnie czytała buffy zmiany frakcji (np. Tryb Najemnika)." }
    ]},
    { b: "52", te: "Patch 1.0.7 - Pandaria Classic Blizzard Fixes", tp: "Patch 1.0.7 - Poprawki Blizzarda w Pandarii", c: [
        { t: "Fixed", e: "Fixed an official Blizzard Lua error related to LFG Challenge Mode groups (mouseover bug).", p: "Naprawiono oryginalny błąd Lua Blizzarda związany z wyświetlaniem LFG przy grupach Challenge Mode." },
        { t: "Fixed", e: "Fixed Lua errors in the character list when inviting players to Challenge Mode groups.", p: "Naprawiono błąd Lua pojawiający się na liście podczas zapraszania graczy do Challenge Mode." },
        { t: "Added", e: "Restored missing reward displays for Battlegrounds, Arenas, and RBGs.", p: "Przywrócono i dodano brakujące panele nagród za BG, Areny oraz RBG." },
        { t: "Changed", e: "Adjusted Challenge Mode fixes to ensure they don't overlap or interfere with normal non-Challenge group code.", p: "Poprawiono kod łatek Challenge Mode, by upewnić się, że nie psują kodu zwykłych grup." }
    ]},
    { b: "51", te: "Patch 1.0.6 - Remix Fixes", tp: "Patch 1.0.6 - Poprawki Remix", c: [
        { t: "Fixed", e: "Fixed a bug on Retail where the extra ability action bar was blocked (Visions and MoP Remix).", p: "Naprawiono zablokowany extra ability action bar na kliencie Retail (dotyczy Visions oraz Remix)." },
        { t: "Added", e: "Added internal vendor naming checks for future features.", p: "Dodano deweloperskie sprawdzanie nazw vendorów na poczet przyszłych funkcji." }
    ]},
    { b: "50", te: "Patch 1.0.6 - Fixes, Cleanup", tp: "Patch 1.0.6 - Poprawki i Porządki", c: [
        { t: "Fixed", e: "Fixed a bug where the addon incorrectly attempted to toggle Show Head/Cloak options on Retail and Legion.", p: "Naprawiono błąd próbujący zmieniać ustawienia wyświetlania hełmu/peleryny na kliencie Retail i Legion." },
        { t: "Fixed", e: "Fixed a bug where the addon attempted to alter action bars 6-8 on clients other than Retail.", p: "Naprawiono błąd próbujący modyfikować paski akcji 6-8 na klientach starszych niż Retail." },
        { t: "Fixed", e: "Fixed display issues with the Show Changes frame on the Legion client.", p: "Naprawiono błąd renderowania ramki pokazującej zmiany na kliencie Legion." },
        { t: "Changed", e: "Performed structural code cleanup in mQoL_FirstSetup.lua.", p: "Przeprowadzono gruntowne porządki w kodzie pliku mQoL_FirstSetup.lua." }
    ]},
    { b: "49", te: "Patch 1.0.6 - FirstSetupPanel Fixes", tp: "Patch 1.0.6 - Poprawki Panelu Pierwszego Uruchomienia", c: [
        { t: "Fixed", e: "Patched a potential flaw in CleanupModules that could clear the firstSetupDone flag.", p: "Poprawiono potencjalną lukę w funkcji CleanupModules, która mogła resetować flagę pierwszego uruchomienia." },
        { t: "Changed", e: "The addon no longer forces view distance, but retrieves the player's existing settings instead.", p: "Addon nie wymusza już zmiany dystansu rysowania, a zamiast tego pobiera obecne ustawienia gracza." },
        { t: "Changed", e: "Moved FirstAddonSetup code from Database to a dedicated FirstSetup file.", p: "Przeniesiono kod pierwszej konfiguracji z bazy danych do osobnego pliku." },
        { t: "Added", e: "Implemented defaultSettingsMap to allow different default settings tailored to each WoW version.", p: "Dodano defaultSettingsMap, co pozwala ustawiać osobne, domyślne opcje dla każdej z wersji WoWa." },
        { t: "Added", e: "Added base logic for the 'Use My Current Settings' functionality.", p: "Dodano podstawowy kod do obsługi opcji 'Użyj moich aktualnych ustawień'." },
        { t: "Added", e: "Added additional safeguards when attempting to select 'Use Addon Defaults'.", p: "Dodano dodatkowe zabezpieczenia przy wybieraniu opcji domyślnych addonu." },
        { t: "Fixed", e: "Fixed a bug where settings were applied prematurely before the first setup was completed.", p: "Naprawiono błąd z ustawieniami zmieniającymi się, zanim gracz zakończył konfigurację początkową." },
        { t: "Fixed", e: "Resolved the 'Default options are not always same as template' issue from the bug tracker.", p: "Rozwiązano problem, w którym domyślne ustawienia nie pokrywały się z zaplanowanym szablonem." },
        { t: "Fixed", e: "Fixed an issue where the addon incorrectly read show head/cloak configurations when keeping user settings.", p: "Naprawiono błędne wczytywanie ustawień wyświetlania hełmu/peleryny przy wyborze opcji zachowania własnych ustawień." },
        { t: "Added", e: "Added an explicit list to the First Setup panel displaying exactly what will change when using addon defaults.", p: "Dodano do panelu czytelną listę pokazującą, co dokładnie się zmieni po wybraniu domyślnych ustawień addonu." }
    ]},
    { b: "48", te: "Patch 1.0.6 - Code Cleanup & First Setup", tp: "Patch 1.0.6 - Optymalizacja i Pierwsze Uruchomienie", c: [
        { t: "Changed", e: "Cleaned up obsolete and junk code from the repository.", p: "Zrobiono generalne porządki w kodzie, usuwając śmieci." },
        { t: "Removed", e: "Removed legacy default addon configurations.", p: "Usunięto stare konfiguracje domyślne addonu." },
        { t: "Added", e: "Introduced the FirstSetupPanel, prompting the user to choose between their existing settings or the addon defaults.", p: "Dodano funkcję ekranu startowego, która pozwala graczowi wybrać pomiędzy pozostawieniem własnych ustawień, a użyciem tych z addonu." }
    ]},
    { b: "47", te: "Patch 1.0.6 - Pre-Release Fixes", tp: "Patch 1.0.6 - Ostatnie poprawki przed wydaniem", c: [
        { t: "Fixed", e: "Fixed an issue on Classic Era servers allowing nameplate distance to exceed intended hardcaps.", p: "Naprawiono błąd na serwerach Classic Era, który pozwalał ustawić renderowanie pasków zdrowia powyżej określonego limitu." },
        { t: "Fixed", e: "Fixed character name formatting specific to TauriWoW realms.", p: "Naprawiono formatowanie znaków charakterystyczne dla serwerów TauriWoW." },
        { t: "Fixed", e: "Fixed a bug where the /mqv command would fail to generate a response.", p: "Naprawiono komendę /mqv, na którą addon przestał odpowiadać." }
    ]},
    { b: "46", te: "Patch 1.0.6 - Database Overhaul", tp: "Patch 1.0.6 - Przebudowa bazy danych", c: [
        { t: "Changed", e: "Replaced the legacy action-bar control method with modern Blizzard source logic specifically for Legion.", p: "Zastąpiono starą metodę sterującą paskami akcji nowym systemem z oryginalnego kodu Blizzarda z czasów Legionu." },
        { t: "Fixed", e: "Fixed random Lua errors originating from the Mailbox module on Retail.", p: "Naprawiono losowe błędy Lua występujące podczas korzystania z poczty na kliencie Retail." },
        { t: "Removed", e: "Removed the fragmented, per-module MigrateDatabase logic.", p: "Usunięto stary system, w którym każdy moduł osobno zajmował się migracją swojej bazy danych." },
        { t: "Added", e: "Introduced mQoL_Database.lua to serve as the unified, centralized database manager for the entire addon.", p: "Stworzono scentralizowany plik mQoL_Database.lua, odpowiadający za bazę całego addonu." },
        { t: "Changed", e: "Rewrote all addon components to strictly rely on the new unified DB migration system.", p: "Przepisano wszystkie pliki tak, aby wykorzystywały wyłącznie nowy, centralny system bazy danych." },
        { t: "Fixed", e: "Resolved multiple post-migration inconsistencies introduced by the database overhaul.", p: "Załatano mnóstwo drobnych problemów wynikających z przeniesienia się na nową architekturę bazy danych." }
    ]},
    { b: "45", te: "Patch 1.0.6 - Bug Fixes", tp: "Patch 1.0.6 - Poprawki Błędów", c: [
        { t: "Fixed", e: "Fixed an issue preventing settings panels loaded from secondary .lua files from displaying.", p: "Naprawiono problem, przez który okna z zakładkami opcji z dodatkowych plików .lua nie chciały się wyrenderować." },
        { t: "Fixed", e: "Fixed a bug forcing View and Fog distances to instantly default to maximum values.", p: "Naprawiono błąd wymuszający automatyczne maksymalizowanie dystansu widzenia po zalogowaniu." },
        { t: "Fixed", e: "Fixed a logic error marking active features from non-Hub panels as obsolete settings.", p: "Naprawiono błąd skryptu oznaczający świeże opcje z pobocznych modułów jako przestarzałe/nieaktualne (obsolete)." },
        { t: "Removed", e: "Discontinued active support for minor patches 11.2.7 and 5.5.2.", p: "Usunięto bezpośrednie wsparcie dla małych łatek 11.2.7 i 5.5.2." },
        { t: "Fixed", e: "Fixed total collected gold not properly displaying thousands separators (e.g., 11,595g).", p: "Naprawiono formatowanie tekstu, dzięki czemu złoto wyświetla się teraz ze separatorami (np. 11,595g)." }
    ]},
    { b: "44", te: "Patch 1.0.6 - Project Merge & Rename", tp: "Patch 1.0.6 - Fuzja Projektu i Zmiana Nazwy", c: [
        { t: "Changed", e: "Fully merged the MentiuszenHub and MentiuszenQoL codebases into one entity.", p: "Skompresowano i scalono oddzielne struktury MentiuszenHub oraz MentiuszenQoL w jeden solidny pakiet." },
        { t: "Changed", e: "Officially renamed the addon to 'mQoL' (formerly MentiuszenHub/MentiuszenQoL).", p: "Oficjalnie zmieniono długą nazwę addonu na krótszą i docelową: 'mQoL'." },
        { t: "Changed", e: "Renamed internal file prefixes from MentiuszenHub/MentiuszenQoL/MentiuszenBlizzard to mQoL_.", p: "Skrócono prefiksy wszystkich systemowych modułów do mQoL_." },
        { t: "Changed", e: "Renamed the lua module from MentiuszenBlizzard to MentiuszenGraphics.", p: "Zmieniono nazwę pliku lua modyfikującego ustawienia systemowe na MentiuszenGraphics." },
        { t: "Changed", e: "Completely rewrote all event handler loops.", p: "Przepisano całkowicie od zera logikę wszystkich nasłuchiwaczy zdarzeń (Event Handlers)." }
    ]},
    { b: "43", te: "Patch 1.0.6 - Era Support & Fixes", tp: "Patch 1.0.6 - Wsparcie dla Era i Poprawki", c: [
        { t: "Added", e: "Added minimal baseline support for Classic Vanilla (TOC 11507) as the ERA version.", p: "Wdrożono bazowe, lekkie wsparcie dla klienta Classic Vanilla (oznaczonego jako ERA)." },
        { t: "Fixed", e: "Fixed a missing 'minimapPos' default array that flagged active profiles as obsolete.", p: "Uzupełniono brakującą tablicę 'minimapPos', która psuła profil domyślny." },
        { t: "Added", e: "Updated framework to officially support WoW patch 11.2.5.", p: "Zaktualizowano pliki pod poprawne wsparcie aktualizacji 11.2.5." }
    ]},
    { b: "42", te: "Patch 1.0.6 - Directory Restructure", tp: "Patch 1.0.6 - Restrukturyzacja Plików", c: [
        { t: "Removed", e: "Deleted legacy folders: Assets, Fonts, and Libs_Legacy.", p: "Skasowano przestarzałe katalogi: Assets, Fonts oraz Libs_Legacy." },
        { t: "Added", e: "Created a unified 'Media' directory containing Fonts, Sounds, and Textures.", p: "Utworzono pojedynczy katalog 'Media' trzymający czcionki, dźwięki i tekstury." },
        { t: "Changed", e: "Consolidated all libraries under a single directory path, branching logically into 'legacy' and 'modern'.", p: "Ujednolicono katalogi z bibliotekami - od teraz posiadają wspólną ścieżkę z podziałem wewnątrz." },
        { t: "Removed", e: "Removed MentiuszenHub.xml permanently as it has been unused since early development.", p: "Finalnie wykasowano plik MentiuszenHub.xml, który leżał pusty od wczesnych stadiów projektu." },
        { t: "Removed", e: "Removed MentiuszenHub_Cata.toc due to Cataclysm Classic support being discontinued.", p: "Wykasowano specyficzny plik TOC dla Cataclysm, w związku z porzuceniem wsparcia dla tej wersji." },
        { t: "Changed", e: "Updated core .toc files to support the 5.5.1 patch on Classic Mists of Pandaria.", p: "Podbito numery wspieranej wersji (TOC) dla środowiska Classic MoP do łatki 5.5.1." }
    ]},
    { b: "41", te: "Update 1.0.5 - Final Fixes & Release", tp: "Patch 1.0.5 - Wydanie stabilne", c: [
        { t: "Fixed", e: "Fixed an issue duplicating /mhv chat replies with the realm name appended incorrectly.", p: "Poprawiono błąd dublujący automatyczną odpowiedź addonu, co kończyło się spamem nazwy serwera." },
        { t: "Changed", e: "Performed a global codebase cleanup across all active files.", p: "Przeprowadzono gruntowne sprzątanie i wyrównanie we wszystkich plikach lua." },
        { t: "Fixed", e: "Fixed a Mailbox bug preventing the recipient's name from staying populated after sending the first parcel.", p: "Naprawiono błąd pamięci poczty (nick odbiorcy ginął po wysłaniu pierwszej paczki z masowej kolejki)." }
    ]},
    { b: "40", te: "Patch 1.0.5 - Hub Fixes", tp: "Patch 1.0.5 - Poprawki okna głównego", c: [
        { t: "Fixed", e: "Fixed a scaling glitch making the Hub window a few pixels wider on Legion compared to Retail/Classic.", p: "Ujednolicono ramki – okno na kliencie Legionu miało kilka pikseli narzutu względem nowych wersji WoW." },
        { t: "Added", e: "Added an auxiliary command '?MentiuszenHubVersion' specifically as a fallback for Legion.", p: "Zaimplementowano pomocniczą komendę weryfikującą '?MentiuszenHubVersion' na starym kliencie." },
        { t: "Changed", e: "Replaced generic placeholder graphics with the official addon icon.", p: "Podmieniono zastępcze tekstury na docelową, ładną ikonę addonu." },
        { t: "Added", e: "Added the /mhv command to broadcast current addon versions to Party/Raid chat members.", p: "Dodano polecenie /mhv skanujące z kim z grupy masz tę samą wersję addonu." }
    ]},
    { b: "39", te: "Patch 1.0.5 - Mailbox Changes", tp: "Patch 1.0.5 - Zmiany na poczcie", c: [
        { t: "Added", e: "Added a functional toggle button directly within the Mailbox UI to hide/show the side panel.", p: "Wdrożono fizyczny przycisk doczepiony do okna poczty pozwalający dynamicznie chować nowy panel." },
        { t: "Changed", e: "Renamed 'Enable Mailbox Side Panel' to 'Automatically Open Mailbox Side Panel' for clarity.", p: "Zmieniono mylącą nazwę opcji na 'Automatycznie otwieraj panel skrzynki pocztowej'." },
        { t: "Added", e: "Added dynamic state-text updates reflecting option changes immediately on buttons.", p: "Włączono dynamiczne odświeżanie napisów na przyciskach pod wpływem klikania opcji." },
        { t: "Removed", e: "Removed all legacy PlaySound debugger functions.", p: "Usunięto irytujące, systemowe dźwięki używane we wczesnej fazie testowej." }
    ]},
    { b: "38", te: "Patch 1.0.5 - Retail 11.2.0 Patch", tp: "Patch 1.0.5 - Aktualizacja 11.2.0", c: [
        { t: "Changed", e: "Updated the .toc structure for addon versions 1.0 and 1.1 to target build 110200.", p: "Zmieniono parametry w plikach .toc pod najnowszą wersję gry (110200)." },
        { t: "Changed", e: "Updated minimum TOC detection logic in MentiuszenHub to 110200.", p: "Podbito logikę detekcji klienta z minimalnej 110107 do 110200." }
    ]},
    { b: "37", te: "Patch 1.0.4 - Release Build", tp: "Patch 1.0.4 - Wydanie stabilne", c: [
        { t: "Removed", e: "Removed 90% of development debuggers.", p: "Usunięto 90% logów służących do debugowania." },
        { t: "Changed", e: "Localized remaining Polish variables/names to English.", p: "Podmieniono nazwy wewnętrzne na angielskie." },
        { t: "Changed", e: "Standardized the Database Migration system in MentiuszenMailbox and MentiuszenHub to match MentiuszenQoL.", p: "Zastąpiono system migracji bazy danych w modułach Mailbox i Hub systemem z MentiuszenQoL." }
    ]},
    { b: "36", te: "Patch 1.0.4 - Known Issues Fixes", tp: "Patch 1.0.4 - Poprawki znanych błędów", c: [
        { t: "Fixed", e: "Fixed Edit Mode layout not applying immediately upon first configuration without a /reload.", p: "Naprawiono brak natychmiastowej zmiany layoutu Edit Mode przy pierwszym użyciu bez /reload." },
        { t: "Fixed", e: "Fixed an issue where the auto-subject text disappeared after sending the first mail.", p: "Naprawiono błąd przez który auto-temat wiadomości znikał po wysłaniu pierwszego maila." },
        { t: "Fixed", e: "Fixed the excessively large 'MentiuszenModules - Mailbox' title size.", p: "Zmniejszono zbyt duży tytuł okna 'MentiuszenModules - Mailbox'." },
        { t: "Fixed", e: "Fixed a bug attempting to send item types in Pandaria Classic that are no longer soulbound in Retail.", p: "Naprawiono błąd z wysyłaniem itemów w Pandarii Classic, które na Retailu nie są już Soulbound." },
        { t: "Added", e: "Added fallback code for Legion to replace unavailable functions with their older equivalents.", p: "Dodano kod zastępczy z funkcjami kompatybilnymi ze starym klientem Legionu." }
    ]},
    { b: "35", te: "Patch 1.0.4 - Mass Send Rewrite", tp: "Patch 1.0.4 - Przebudowa masowego wysyłania", c: [
        { t: "Changed", e: "Completely rewrote the Mass Send logic.", p: "Całkowicie przepisano kod masowego wysyłania przedmiotów pocztą." },
        { t: "Changed", e: "Replaced the C_Timer ProcessSendQueue with an Instant Loop approach.", p: "Zastąpiono C_Timer ProcessSendQueue pętlą Instant Loop." },
        { t: "Removed", e: "Removed unused and obsolete legacy functions.", p: "Usunięto nieużywane, przestarzałe funkcje." },
        { t: "Fixed", e: "Fixed the debugger tool which broke during the code rewrite.", p: "Naprawiono debugger, który popsuł się podczas przepisywania kodu." }
    ]},
    { b: "34", te: "Patch 1.0.4 - Mass Send Fixes", tp: "Patch 1.0.4 - Poprawki masowego wysyłania", c: [
        { t: "Changed", e: "Rewrote mailbox item placement functions to prevent generating 'phantom' or 'ghost' items.", p: "Przepisano funkcje wkładania itemów do poczty, aby nie generowały niewidzialnych itemów (widmo)." },
        { t: "Added", e: "Added various stop events when attempting to insert invalid items.", p: "Dodano zabezpieczenia (stop events) powstrzymujące wysyłanie nieprawidłowych rzeczy." },
        { t: "Fixed", e: "Fixed a critical bug classifying Soulbound items as valid to send.", p: "Naprawiono błąd oznaczający przedmioty Soulbound jako prawidłowe do wysyłki." },
        { t: "Added", e: "Added item name filters ('Soulbound', 'Binds when picked up') to block sending untradable gear.", p: "Dodano filtry po nazwach by zablokować przedmioty, którymi nie można handlować." },
        { t: "Added", e: "Added a safeguard preventing duplicate insertion attempts for items already in the mailbox.", p: "Dodano zabezpieczenie blokujące ponowne wrzucanie itemów, które już są w koszyku." }
    ]},
    { b: "33", te: "Patch 1.0.4 - Gold Summary Visuals", tp: "Patch 1.0.4 - Podsumowanie złota", c: [
        { t: "Added", e: "Added an audio cue (sound) upon successfully calculating collected gold.", p: "Dodano powiadomienie dźwiękowe po udanym podliczeniu odebranego golda." },
        { t: "Added", e: "Added custom [gold], [silver], and [copper] visual icons.", p: "Dodano wizualne ikony [gold], [silver] oraz [copper]." },
        { t: "Added", e: "Added an input box to customize the automated mailbox subject.", p: "Dodano pole tekstowe do samodzielnego ustawienia domyślnego tematu maila." },
        { t: "Added", e: "Implemented a mass item send functionality grouped by item categories.", p: "Dodano funkcję masowego wysyłania podzieloną na kategorie przedmiotów." }
    ]},
    { b: "32", te: "Patch 1.0.4 - Mailbox Gold Summary", tp: "Patch 1.0.4 - Śledzenie odbieranego złota", c: [
        { t: "Added", e: "Implemented logic to calculate total gold looted from the mailbox.", p: "Dodano kod odpowiedzialny za śledzenie i liczenie złota zebranego ze skrzynki." },
        { t: "Added", e: "Registered MAIL_SHOW, PLAYER_INTERACTION_MANAGER_FRAME_HIDE, and MAIL_INBOX_UPDATE events.", p: "Podpięto pod zdarzenia MAIL_SHOW, PLAYER_INTERACTION_MANAGER_FRAME_HIDE i MAIL_INBOX_UPDATE." }
    ]},
    { b: "31", te: "Patch 1.0.4 - Mailbox Mass Bug Fixes", tp: "Patch 1.0.4 - Szereg poprawek poczty", c: [
        { t: "Changed", e: "Optimized profile initialization for faster load times.", p: "Zoptymalizowano (skrócono) zbyt długi proces inicjalizacji profili." },
        { t: "Removed", e: "Removed the unnecessary 'dataList' variable.", p: "Usunięto niepotrzebną zmienną 'dataList'." },
        { t: "Changed", e: "Refactored the Event Handler to support better debugging.", p: "Poprawiono Event Handler w celu łatwiejszego debugowania kodu." },
        { t: "Fixed", e: "Fixed a bug causing Mass Send icons to randomly appear on the screen outside of the Mailbox UI.", p: "Naprawiono błąd przez który ikony mass send pojawiały się na ekranie gry poza pocztą." },
        { t: "Changed", e: "Fully refactored the CreateRecipientListContainer code.", p: "Przeprowadzono pełną refaktoryzację kodu CreateRecipientListContainer." },
        { t: "Changed", e: "Fully refactored the RefreshRecipientLists code.", p: "Przeprowadzono pełną refaktoryzację kodu RefreshRecipientLists." }
    ]},
    { b: "30", te: "Patch 1.0.4 - Mailbox, Sidepanel and Bugs", tp: "Patch 1.0.4 - Poczta, Panel Boczny i Błędy", c: [
        { t: "Fixed", e: "Fixed an issue leaving text highlighted while editing the character list.", p: "Poprawiono błąd z pozostawianiem zaznaczonego tekstu podczas edycji listy postaci." },
        { t: "Added", e: "Divided Friends and Alts lists logically by SERVER and FACTION.", p: "Wprowadzono podział list znajomych i altów z uwzględnieniem Serwera oraz Frakcji." },
        { t: "Changed", e: "Switched static recipient lists to dynamic Containers.", p: "Zamieniono statyczne listy na dynamiczny Contener." },
        { t: "Fixed", e: "Fixed lists failing to refresh automatically after modifying options.", p: "Naprawiono błąd powodujący brak odświeżania listy od razu po edycji." },
        { t: "Fixed", e: "Fixed a bug where all character selection buttons would disappear.", p: "Naprawiono znikające przyciski wyboru postaci." },
        { t: "Changed", e: "Rewrote significant parts of the Sidepanel code for improved stability.", p: "Przepisano sporą część kodu panelu bocznego dla lepszego działania i stabilności." },
        { t: "Removed", e: "Removed duplicated functions that were only used for debugging.", p: "Usunięto powielone funkcje służące jako debuggery." }
    ]},
    { b: "29", te: "Mailbox fixes", tp: "Poprawki poczty", c: [
        { t: "Fixed", e: "Fixed button alignment in the recipient selection menu.", p: "Poprawiono ustawienie przycisków w menu wyboru odbiorcy." },
        { t: "Fixed", e: "Fixed a bug where CreateSidePanel was incorrectly declared as a local function.", p: "Poprawiono błąd z nieprawidłową deklaracją CreateSidePanel jako local function zamiast function." },
        { t: "Removed", e: "Removed duplicated code.", p: "Usunięto duplikaty w kodzie." },
        { t: "Changed", e: "Refactored CreateSidePanel code for better stability.", p: "Zrefaktoryzowano kod funkcji CreateSidePanel." },
        { t: "Fixed", e: "Replaced invalid child:Destroy() calls with proper WoW API frame clearing logic.", p: "Zastąpiono nieistniejące child:Destroy() poprawnym kodem API gry." },
        { t: "Fixed", e: "Fixed a Lua error occurring during character list editing.", p: "Naprawiono błąd Lua wyskakujący podczas edycji listy postaci." }
    ]},
    { b: "28", te: "MentiuszenMailbox.lua Changes", tp: "Zmiany w MentiuszenMailbox.lua", c: [
        { t: "Removed", e: "Removed the showGuildRecipients checkbox.", p: "Usunięto checkbox showGuildRecipients." },
        { t: "Added", e: "Added an enableMailboxSidePanel checkbox.", p: "Dodano checkbox enableMailboxSidePanel." },
        { t: "Changed", e: "Replaced the legacy Mailbox Database Migration tool with the one from MentiuszenHub.", p: "Zastąpiono Legacy MigrateDatabase narzędziem prosto z MentiuszenHub." },
        { t: "Changed", e: "Updated Event Handler logic and relocated it within the codebase.", p: "Zaktualizowano działanie Event Handlera i przesunięto go w strukturze kodu." },
        { t: "Added", e: "Added an option to disable automatic opening of the mailbox side panel.", p: "Dodano możliwość wyłączenia automatycznego otwierania panelu bocznego poczty." },
        { t: "Changed", e: "Decreased side panel opening delay from 0.1s to 0.01s.", p: "Zmniejszono opóźnienie ładowania panelu z 0.1s do 0.01s (znaczne przyspieszenie)." },
        { t: "Removed", e: "Removed remnants of the old migration system and unused code snippets.", p: "Usunięto resztki starego systemu migracji oraz nieużywany kod." },
        { t: "Added", e: "Added the ability to edit the list of alts and friends directly from the options menu.", p: "Dodano możliwość edycji listy altów i znajomych z poziomu menu opcji." },
        { t: "Fixed", e: "Fixed UI code formatting issues to ensure proper element overlay.", p: "Poprawiono formatowanie kodu UI dla prawidłowego nakładania się elementów." }
    ]},
    { b: "27", te: "Version and Build updates", tp: "Aktualizacje Wersji", c: [
        { t: "Removed", e: "Removed the addon version display from the title bar.", p: "Usunięto wyświetlanie wersji addonu z paska tytułowego." },
        { t: "Added", e: "Added addon version and build number display to the bottom-left corner of the main panel.", p: "Dodano wersję oraz build addona w lewym dolnym rogu głównego panelu." },
        { t: "Added", e: "Registered a new event: CHAT_MSG_ADDON.", p: "Zarejestrowano nowy event nasłuchujący: CHAT_MSG_ADDON." },
        { t: "Added", e: "Added chat commands that reply with the current addon version.", p: "Dodano komendy, na które addon automatycznie odpowiada swoją aktualną wersją na czacie." },
        { t: "Added", e: "Registered missing events: CHAT_MSG_PARTY, CHAT_MSG_RAID, CHAT_MSG_WHISPER.", p: "Zarejestrowano brakujące eventy czatu (Party, Raid, Whisper)." },
        { t: "Fixed", e: "Fixed a bug preventing the addon from recognizing commands in chat.", p: "Naprawiono błąd, który uniemożliwiał rozpoznawanie komend wpisywanych na czacie." }
    ]},
    { b: "26", te: "Cloak/Head Fix", tp: "Opcje hełmu i peleryny", c: [
        { t: "Fixed", e: "Fixed a bug causing configuration save issues for Show/Hide Cloak and Head.", p: "Naprawiono błąd powodujący problemy z zapisem konfiguracji ukrywania Hełmu i Peleryny." }
    ]},
    { b: "25", te: "View Distance & Fog Fixes", tp: "Dystans widzenia i mgła", c: [
        { t: "Fixed", e: "Adjusted View Distance Level 3 from 2000 to 2112 units (Classic default).", p: "Poprawiono 3 poziom dystansu widzenia z 2000 na 2112 jednostek (domyślna wartość Classic)." },
        { t: "Fixed", e: "Adjusted Fog Distance Level 3 from 800 to 777 units (Classic default).", p: "Poprawiono 3 poziom dystansu mgły z 800 na 777 jednostek (domyślna wartość Classic)." },
        { t: "Changed", e: "Changed the base level of View and Fog Distance from 1 to 3.", p: "Zmieniono startowy, bazowy poziom dystansu widzenia i mgły z 1 na 3." }
    ]},
    { b: "24", te: "Release", tp: "Premiera", c: [
        { t: "Added", e: "Added maximum fog distance identifiers for Pandaria zones.", p: "Dodano oznaczenia maksymalnego dystansu mgły dla stref w Pandarii." },
        { t: "Added", e: "Added version branding for MentiuszenHub.", p: "Dodano oznaczenia wersji dla MentiuszenHub." },
        { t: "Removed", e: "Removed all references to the old 'Forward' naming scheme from all files.", p: "Zmieniono nazewnictwo w całym kodzie, usuwając resztki odniesień do starej nazwy 'Forward'." }
    ]},
    { b: "23", te: "MoP Pre-Patch Fixes", tp: "Poprawki dla MoP Pre-Patch", c: [
        { t: "Changed", e: "Modified Action Bars logic for Legion (7.3.5) to respect UI options.", p: "Zmieniono kod pasków akcji dla Legionu, aby uwzględniał opcje UI." },
        { t: "Fixed", e: "Fixed a bug causing one action bar to disappear during the MoP Pre-Patch.", p: "Naprawiono błąd powodujący niepojawianie się jednego paska akcji w pre-patchu MoP." },
        { t: "Fixed", e: "Fixed a bug failing to update the interface options list in the default Blizzard UI on MoP Pre-Patch.", p: "Naprawiono brak aktualizacji w liście standardowych opcji interfejsu gry na pre-patchu MoP." },
        { t: "Fixed", e: "Fixed a bug failing to update the interface options list on Retail.", p: "Naprawiono brak aktualizacji w liście standardowych opcji interfejsu na kliencie Retail." },
        { t: "Changed", e: "Completely overhauled the Action Bars management system across all supported expansions.", p: "Kompletnie zmieniono i przeprojektowano system zarządzania paskami akcji dla każdego dodatku." }
    ]},
    { b: "22", te: "New Module and Graphics", tp: "Nowy moduł i ustawienia Grafiki", c: [
        { t: "Added", e: "Added the MentiuszenBlizzard module.", p: "Dodano nowy moduł MentiuszenBlizzard." },
        { t: "Added", e: "Added a Graphics tab to the Advanced Settings in MentiuszenHub.", p: "Dodano nową zakładkę Grafiki w Zaawansowanych Ustawieniach." },
        { t: "Added", e: "Added Max View Distance control options.", p: "Dodano opcję kontrolującą maksymalny dystans widzenia." },
        { t: "Added", e: "Added Max Fog Distance control options.", p: "Dodano opcję kontrolującą maksymalny dystans rysowania mgły." }
    ]},
    { b: "21", te: "Cata Classic Fixes & MoP Support", tp: "Poprawki Cataclysm i MoP Classic", c: [
        { t: "Fixed", e: "Fixed an issue with Action Bars resetting automatically upon character login.", p: "Naprawiono resetujące się paski akcji po zalogowaniu na postać." },
        { t: "Added", e: "Added references for build 50500 (Pandaria Classic) to the ClientInfo logic.", p: "Rozszerzono działanie logiki klienta o rozpoznawanie builda 50500 (Pandaria Classic)." },
        { t: "Fixed", e: "Fixed a bug capping MaxNameplateDistance at 60 instead of the allowed 41 in Classic.", p: "Naprawiono błąd wymuszający dystans renderowania pasków na 60 zamiast dopuszczalnego limitu 41." }
    ]},
    { b: "20", te: "Retail Fixes & Missing Options", tp: "Poprawki dla klienta Retail i opcje", c: [
        { t: "Fixed", e: "Fixed the 'Always Show Action Bars' checkbox appearing on Retail where the feature no longer exists.", p: "Ukryto przestarzałą opcję 'Always Show Action Bars' na kliencie Retail." },
        { t: "Fixed", e: "Fixed Action Bars functionality on Retail servers.", p: "Naprawiono działanie pasków akcji na kliencie Retail." },
        { t: "Added", e: "Added Edit Mode profile selection for automatic activation per character.", p: "Dodano możliwość przypisania profilu Edit Mode, aby włączał się sam przy logowaniu." }
    ]},
    { b: "19", te: "Migration System Changes", tp: "Zmiany w systemie migracji danych", c: [
        { t: "Removed", e: "Removed the hard reset mechanic for .wtf files older than v3.", p: "Usunięto system twardego usuwania i resetowania plików .wtf, jeśli ich wersja była starsza niż 3." },
        { t: "Added", e: "Added a .wtf file integrity check upon every startup.", p: "Wdrożono system ciągłego sprawdzania integralności konfiguracji na starcie." },
        { t: "Added", e: "Added non-destructive patching, adding, and removing of modified options inside .wtf during updates.", p: "Rozbudowano system o nieinwazyjne łatanie, dopisywanie i usuwanie zmian w pliku w ramach aktualizacji." }
    ]},
    { b: "18", te: "Missing QoL & Fixes", tp: "Brakujące opcje QoL i poprawki", c: [
        { t: "Added", e: "Added missing Hide Head and Cloak options.", p: "Dodano brakujące opcje ukrywania hełmu oraz peleryny." },
        { t: "Added", e: "Added Script Error (LUA Error) display control.", p: "Dodano kontrolę wyświetlania błędów skryptów (LUA Error)." },
        { t: "Changed", e: "Cleaned up and reorganized all TOC files for better structure.", p: "Uporządkowano i zoptymalizowano strukturę wszystkich plików TOC." },
        { t: "Changed", e: "Optimized Default Settings in MentiuszenQoL to reduce code length.", p: "Zoptymalizowano kod domyślnych ustawień w MentiuszenQoL." },
        { t: "Added", e: "Included Show Cloak/Head options into the Database Migration system.", p: "Dodano obsługę opcji hełmu/peleryny do systemu migracji bazy danych." }
    ]},
    { b: "17", te: "Profiles and Lang", tp: "Profile i Języki", c: [
        { t: "Added", e: "Added a new Profiles tab.", p: "Dodano nową zakładkę z profilami." },
        { t: "Fixed", e: "Fixed formatting issues within the Profiles tab.", p: "Naprawiono problemy z formatowaniem w zakładce profili." },
        { t: "Added", e: "Added custom fonts with support for Polish characters.", p: "Dodano niestandardowe czcionki obsługujące polskie znaki." }
    ]},
    { b: "16", te: "Addon Name Changes & Version Detection", tp: "Zmiany nazw i detekcja wersji", c: [
        { t: "Changed", e: "Renamed the core addons to MentiuszenHub and MentiuszenFunctions.", p: "Zmieniono nazwę rdzenia na MentiuszenHub oraz MentiuszenFunctions." },
        { t: "Removed", e: "Removed local version detection logic from MentiuszenFunctions.", p: "Usunięto lokalną logikę wykrywania wersji w MentiuszenFunctions." },
        { t: "Added", e: "Centralized global WoW client version detection into MentiuszenHub.", p: "Scentralizowano globalną logikę wykrywania wersji w MentiuszenHub." },
        { t: "Changed", e: "Separated .wtf configuration files for MentiuszenModules.", p: "Rozdzielono pliki konfiguracyjne .wtf dla modułów." },
        { t: "Added", e: "Implemented independent version tracking for MentiuszenMailbox.", p: "Wdrożono niezależne śledzenie wersji dla modułu Mailbox." }
    ]},
    { b: "15", te: "Mailbox and Bug Fixes", tp: "Poczta i poprawki błędów", c: [
        { t: "Changed", e: "Refactored and improved the Mailbox codebase.", p: "Przepisano i ulepszono kod modułu Mailbox." },
        { t: "Added", e: "Added versioning support to ForwardQoLMailbox.", p: "Dodano wsparcie wersjonowania dla modułu poczty." },
        { t: "Changed", e: "Moved the Mailbox options button from General Settings to QoL Settings.", p: "Przeniesiono przycisk opcji poczty z ustawień ogólnych do ustawień QoL." },
        { t: "Fixed", e: "Fixed issues related to the addon versioning system.", p: "Naprawiono problemy z systemem wersjonowania addonu." },
        { t: "Fixed", e: "Fixed a bug preventing the Hub window from closing via the ESC key.", p: "Naprawiono błąd uniemożliwiający zamykanie okna klawiszem ESC." },
        { t: "Fixed", e: "Fixed Mailbox options failing to display.", p: "Naprawiono błąd, przez który opcje poczty się nie wyświetlały." },
        { t: "Fixed", e: "Fixed an issue causing the Hub window to visually glitch or teleport.", p: "Naprawiono błąd powodujący skakanie (teleportowanie) okna ustawień." }
    ]},
    { b: "14", te: "Project Version System", tp: "System wersji projektu", c: [
        { t: "Added", e: "Implemented a versioning system for ForwardHub and ForwardQoL to prevent .wtf file corruption.", p: "Wdrożono system wersjonowania dla ForwardHub i ForwardQoL, aby zapobiec korupcji plików .wtf." },
        { t: "Changed", e: "Refactored ForwardQoL architecture.", p: "Zrefaktoryzowano architekturę modułu ForwardQoL." },
        { t: "Changed", e: "Improved .wtf file structures for better readability.", p: "Poprawiono strukturę plików .wtf w celu zwiększenia ich czytelności." }
    ]},
    { b: "13", te: "Bug fixes on all versions", tp: "Poprawki błędów na wszystkich wersjach", c: [
        { t: "Fixed", e: "Fixed an issue with a missing CallbackHandler library.", p: "Naprawiono problem z brakującą biblioteką CallbackHandler." },
        { t: "Fixed", e: "Fixed Action Bars functionality across all supported game versions.", p: "Naprawiono działanie pasków akcji we wszystkich wspieranych wersjach gry." },
        { t: "Fixed", e: "Corrected Action Bars configuration to reference bars 2-8 instead of 1-8.", p: "Poprawiono konfigurację pasków akcji (odniesienie do pasków 2-8 zamiast 1-8)." },
        { t: "Changed", e: "Improved Hub window scaling logic.", p: "Ulepszono logikę skalowania okna ustawień." },
        { t: "Fixed", e: "Fixed an issue preventing the Hub window scale setting from saving.", p: "Naprawiono błąd uniemożliwiający zapisanie skali okna." }
    ]},
    { b: "12", te: "Hub Changes", tp: "Zmiany w ForwardHub", c: [
        { t: "Changed", e: "Standardized Hub codebase to function identically across all game versions.", p: "Ujednolicono kod głównego huba, aby działał identycznie na wszystkich wersjach gry." },
        { t: "Changed", e: "Unified the visual appearance of the Hub window across all versions.", p: "Ujednolicono wygląd okna na wszystkich wersjach." },
        { t: "Added", e: "Added UI scaling support for the Hub window.", p: "Dodano wsparcie dla skalowania interfejsu okna opcji." },
        { t: "Changed", e: "Renamed the 'WoW Settings' category to 'Advanced Settings'.", p: "Zmieniono nazwę kategorii 'WoW Settings' na 'Advanced Settings'." },
        { t: "Added", e: "Added a quick access button for Mailbox settings.", p: "Dodano przycisk szybkiego dostępu do ustawień poczty." }
    ]},
    { b: "11", te: "Retail Patch & Version Changes", tp: "Wsparcie Retail i zarządzanie wersjami", c: [
        { t: "Changed", e: "Updated TOC version for Retail.", p: "Zaktualizowano wersję pliku TOC dla klienta Retail." },
        { t: "Fixed", e: "Fixed TOC structural issues for Retail, ensuring proper Lua file execution.", p: "Naprawiono błędy strukturalne w plikach TOC dla Retaila (poprawne ładowanie plików Lua)." },
        { t: "Removed", e: "Dropped support for obsolete client versions, keeping Legion, Retail, and Classic.", p: "Porzucono wsparcie dla starych klientów (pozostawiono Legion, Retail oraz Classic)." },
        { t: "Changed", e: "Maintained Mists of Pandaria (5.4.8) support by leveraging the Legion codebase.", p: "Utrzymano wsparcie dla Mists of Pandaria (5.4.8) bazując na kodzie z Legionu." },
        { t: "Added", e: "Implemented internal self-versioning detection for the Hub.", p: "Wdrożono system wewnętrznego śledzenia własnej wersji huba." }
    ]},
    { b: "10", te: "Client ID & Cata Classic Fixes", tp: "Rozpoznawanie klienta i poprawki Cata Classic", c: [
        { t: "Changed", e: "Replaced legacy WOW_PROJECT_ID checks with dynamic TOC version detection.", p: "Zastąpiono przestarzałe sprawdzanie WOW_PROJECT_ID dynamiczną detekcją na podstawie wersji TOC." },
        { t: "Added", e: "Overhauled client detection logic to universally identify and adapt to any WoW version.", p: "Całkowicie przebudowano logikę detekcji klienta gry (obsługa dowolnej wersji WoW)." },
        { t: "Fixed", e: "Fixed version authentication issues specific to Cataclysm Classic.", p: "Naprawiono problemy z uwierzytelnianiem wersji specyficzne dla Cataclysm Classic." },
        { t: "Fixed", e: "Fixed ForwardQoLMailbox compatibility spanning pre- and post-Shadowlands versions.", p: "Naprawiono kompatubility modułu poczty dla wersji sprzed oraz po dodatku Shadowlands." },
        { t: "Removed", e: "Removed the Default Recipient Name feature.", p: "Usunięto funkcję domyślnego odbiorcy poczty." }
    ]},
    { b: "9", te: "Massive Bug Fixes and Code Cleanup", tp: "Ogromne poprawki błędów i czyszczenie kodu", c: [
        { t: "Fixed", e: "Fixed multiple invalid declarations in ForwardHub and ForwardQoL.", p: "Naprawiono szereg błędnych deklaracji w kodzie ForwardHub i ForwardQoL." },
        { t: "Changed", e: "Improved internal communication logic between modules.", p: "Usprawniono komunikację wewnętrzną pomiędzy głównymi modułami." },
        { t: "Fixed", e: "Fixed a problematic Event Handler causing errors.", p: "Naprawiono problematyczny Event Handler powodujący błędy." },
        { t: "Removed", e: "Removed an invalid file inclusion from the TOC file.", p: "Usunięto błędną deklarację ładowania pliku z TOC." },
        { t: "Fixed", e: "Eliminated duplicate 'Loaded' debug outputs.", p: "Wyeliminowano podwójne wiadomości debugowania o załadowaniu." },
        { t: "Fixed", e: "Fixed double registration of addon modules.", p: "Naprawiono błąd polegający na podwójnej rejestracji modułów addonu." },
        { t: "Removed", e: "Removed an unnecessary deferredModules declaration.", p: "Usunięto zbędną deklarację deferredModules." },
        { t: "Fixed", e: "Fixed a UI rendering bug preventing options from displaying in their designated areas.", p: "Naprawiono błąd renderowania UI uniemożliwiający pojawianie się opcji na swoich miejscach." },
        { t: "Fixed", e: "Fixed the registration logic for the General Option Display tab.", p: "Poprawiono logikę rejestracji zakładki ogólnych ustawień." },
        { t: "Added", e: "Added missing descriptions to dropdown menus.", p: "Dodano brakujące opisy w menu rozwijanym." }
    ]},
    { b: "8", te: "Libs Fixes", tp: "Poprawki bibliotek (Libs)", c: [
        { t: "Changed", e: "Restructured library folders (separated active Libs from Libs_Legacy).", p: "Uporządkowano strukturę bibliotek (rozdzielono aktywne Libs i Libs_Legacy)." },
        { t: "Removed", e: "Removed obsolete and unused library files.", p: "Usunięto przestarzałe i nieużywane pliki bibliotek." },
        { t: "Fixed", e: "Fixed formatting and structural issues in XML files.", p: "Poprawiono problemy strukturalne w plikach XML." },
        { t: "Fixed", e: "Fixed a specific Lua error occurring at line 94.", p: "Naprawiono specyficzny błąd Lua występujący w linii 94." }
    ]},
    { b: "7", te: "Hub Code Integration", tp: "Integracja i rozwój Huba", c: [
        { t: "Changed", e: "Integrated HubPanel directly into ForwardHub.", p: "Zintegrowano HubPanel bezpośrednio z ForwardHub." },
        { t: "Changed", e: "Refactored significant portions of legacy code to improve stability.", p: "Zrefaktoryzowano duże fragmenty przestarzałego kodu w celu poprawy stabilności." },
        { t: "Added", e: "Introduced a new category view system for better organization.", p: "Wprowadzono nowy system widoku kategorii dla lepszej organizacji." },
        { t: "Added", e: "Assigned configuration options to their newly designated categories.", p: "Przypisano opcje konfiguracyjne do ich odpowiednich kategorii." }
    ]},
    { b: "6", te: "Mailbox & Hub Fixes", tp: "Poprawki Huba i Skrzynki Pocztowej", c: [
        { t: "Added", e: "Added an advanced user interface for the Mailbox (Cataclysm Classic only).", p: "Dodano zaawansowany interfejs skrzynki pocztowej (wyłącznie w Cataclysm Classic)." },
        { t: "Fixed", e: "Fixed an issue causing the title bar to appear excessively large.", p: "Naprawiono błąd powodujący wyświetlanie nienaturalnie powiększonego paska tytułowego." }
    ]},
    { b: "5", te: "Libs & ToC Fixes", tp: "Poprawki ToC i bibliotek", c: [
        { t: "Fixed", e: "Resolved dependencies and loading issues related to addon Libs.", p: "Rozwiązano problemy z ładowaniem i zależnościami bibliotek." },
        { t: "Changed", e: "Separated libraries into Legacy and Mainline versions to avoid conflicts.", p: "Podzielono biblioteki na wersje Legacy oraz Mainline, aby uniknąć konfliktów." },
        { t: "Fixed", e: "Corrected the Mainline version target in the TOC file.", p: "Poprawiono błędnie wskazaną wersję Mainline w pliku TOC." },
        { t: "Added", e: "Added dynamic client version recognition features.", p: "Dodano funkcję dynamicznego rozpoznawania uruchomionej wersji klienta." }
    ]},
    { b: "4", te: "Hub Changes", tp: "Zmiany wyglądu Huba", c: [
        { t: "Changed", e: "Updated the settings window aspect ratio from 4:3 to 16:9.", p: "Zmieniono proporcje okna ustawień z 4:3 na 16:9." },
        { t: "Changed", e: "Increased default window resolution from 600x400 to 1200x675.", p: "Zwiększono domyślną rozdzielczość okna z 600x400 na 1200x675." },
        { t: "Fixed", e: "Fixed layout issues with the internal taskbar.", p: "Naprawiono problemy z układem wewnętrznego paska zadań." }
    ]},
    { b: "3", te: "New QoL Options", tp: "Nowe opcje QoL", c: [
        { t: "Fixed", e: "Fixed a bug preventing action bars from rendering correctly.", p: "Naprawiono błąd uniemożliwiający poprawne renderowanie pasków akcji." },
        { t: "Added", e: "Added a new 'Always Show Action Bars' option.", p: "Dodano opcję 'Zawsze pokazuj paski akcji'." },
        { t: "Added", e: "Added the ability to configure ally and enemy Nameplates independently.", p: "Dodano możliwość niezależnej konfiguracji pasków zdrowia dla sojuszników i wrogów." },
        { t: "Added", e: "Added a slider to control the render distance of Nameplates (20m to 100m).", p: "Dodano suwak pozwalający kontrolować dystans renderowania pasków zdrowia (od 20m do 100m)." }
    ]},
    { b: "2", te: "QoL Fixes & New Modules", tp: "Poprawki QoL i nowe moduły", c: [
        { t: "Added", e: "Added previously missing Quality of Life options.", p: "Dodano brakujące opcje Quality of Life." },
        { t: "Changed", e: "Migrated certain QoL functions into hidden background processes.", p: "Przeniesiono część funkcji QoL do ukrytych procesów w tle." },
        { t: "Added", e: "Added the ForwardSettings core module.", p: "Dodano główny moduł ForwardSettings." },
        { t: "Fixed", e: "Fixed the registration logic for the ForwardQoL module.", p: "Naprawiono logikę rejestracji modułu ForwardQoL." }
    ]},
    { b: "1", te: "Refresh, ForwardHub, QoL Module", tp: "Nowy start, ForwardHub i moduł QoL", c: [
        { t: "Changed", e: "Restarted development from scratch, restructuring code into separate functional sections.", p: "Rozpoczęto prace od nowa, restrukturyzując kod na niezależne sekcje." },
        { t: "Removed", e: "Dropped XAML dependency entirely.", p: "Całkowicie porzucono korzystanie z języka XAML." },
        { t: "Added", e: "Implemented the global ForwardHub menu for centralized module configuration.", p: "Wdrożono globalne menu ForwardHub do centralnej konfiguracji wszystkich modułów." },
        { t: "Added", e: "Added the core Quality of Life (QoL) module.", p: "Dodano główny moduł Quality of Life (QoL)." },
        { t: "Fixed", e: "Fixed a visual bug causing duplicate option buttons to appear.", p: "Naprawiono błąd wizualny powodujący podwójne wyświetlanie przycisków opcji." }
    ]}
];

function renderMqolChangelog(lang) {
    const container = document.getElementById('mqol-changelog-container');
    if(!container) return;
    
    const getTagColor = (type) => {
        if(type === 'Added') return 'text-emerald-400';
        if(type === 'Fixed') return 'text-red-400';
        if(type === 'Changed') return 'text-blue-400';
        if(type === 'Removed') return 'text-orange-400';
        return 'text-slate-400';
    };

    const getTagTranslation = (type, lang) => {
        if(lang === 'pl') {
            if(type === 'Added') return '[Dodano]';
            if(type === 'Fixed') return '[Naprawiono]';
            if(type === 'Changed') return '[Zmieniono]';
            if(type === 'Removed') return '[Usunięto]';
        }
        return `[${type}]`;
    };

    // Struktura grupowania według patchów
    const versionGroups = [
        { 
            id: 'v120', status: 'beta',
            nameEn: 'v1.2.0', namePl: 'Wersja 1.2.0', 
            descEn: 'Account Overview & Vault', descPl: 'Skarbiec i Przegląd Konta',
            revStartIdx: 161 // Builds 200+
        },
        { 
            id: 'v111', status: 'stable',
            nameEn: 'v1.1.1', namePl: 'Wersja 1.1.1', 
            descEn: 'Optimization & Advanced Modes', descPl: 'Optymalizacja i Zaawansowane Opcje',
            revStartIdx: 154 // Builds 187-193
        },
        { 
            id: 'v110', status: 'old',
            nameEn: 'v1.1.0', namePl: 'Wersja 1.1.0', 
            descEn: 'Major Hub Rework', descPl: 'Przebudowa UI',
            revStartIdx: 67 // Builds 100-186
        },
        { 
            id: 'v109', status: 'old',
            nameEn: 'v1.0.9', namePl: 'Wersja 1.0.9', 
            descEn: 'Midnight Logic Update', descPl: 'Aktualizacje Midnight',
            revStartIdx: 66 // Build 67
        },
        { 
            id: 'v108', status: 'old',
            nameEn: 'v1.0.8', namePl: 'Wersja 1.0.8', 
            descEn: 'BCC Support', descPl: 'Wsparcie BCC',
            revStartIdx: 65 // Build 66
        },
        { 
            id: 'v107', status: 'old',
            nameEn: 'v1.0.7', namePl: 'Wersja 1.0.7', 
            descEn: 'MoP Classic Fixes & PvP Rewards', descPl: 'Poprawki Blizzarda (MoP) i PvP',
            revStartIdx: 51 // Builds 52-65
        },
        { 
            id: 'v106', status: 'old',
            nameEn: 'v1.0.6', namePl: 'Wersja 1.0.6', 
            descEn: 'Major Database & Merger', descPl: 'Fuzja addonu i nowa Baza',
            revStartIdx: 41 // Builds 42-51
        },
        { 
            id: 'v105', status: 'old',
            nameEn: 'v1.0.5', namePl: 'Wersja 1.0.5', 
            descEn: 'Retail & Mailbox fixes', descPl: 'Poprawki Poczty',
            revStartIdx: 37 // Builds 38-41
        },
        { 
            id: 'v104', status: 'old',
            nameEn: 'v1.0.4', namePl: 'Wersja 1.0.4', 
            descEn: 'Mass Send Rewrite', descPl: 'Przebudowa Mass Send',
            revStartIdx: 26 // Builds 27-37
        },
        { 
            id: 'v103', status: 'old',
            nameEn: 'v1.0.3', namePl: 'Wersja 1.0.3', 
            descEn: 'Bug Fixes', descPl: 'Szybka poprawka',
            revStartIdx: 25 // Build 26
        },
        { 
            id: 'v102', status: 'old',
            nameEn: 'v1.0.2', namePl: 'Wersja 1.0.2', 
            descEn: 'View Distance Patch', descPl: 'Poprawki dystansu widzenia',
            revStartIdx: 24 // Build 25
        },
        { 
            id: 'v100', status: 'old',
            nameEn: 'v1.0.0', namePl: 'Wersja 1.0.0', 
            descEn: 'Initial Release Journey', descPl: 'Historia wczesnych wersji',
            revStartIdx: 0 // Builds 1-24
        }
    ];

    let html = '';
    const totalBuilds = mqolChangelog.length;

    versionGroups.forEach((group, groupIndex) => {
        const isFirst = groupIndex === 0;
        
        let statusBadge = '';
        if (group.status === 'beta') {
            statusBadge = '<span class="ml-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border border-amber-500/50 text-amber-400 bg-amber-500/10">Beta</span>';
        } else if (group.status === 'stable') {
            statusBadge = '<span class="ml-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border border-emerald-500/50 text-emerald-400 bg-emerald-500/10">Release</span>';
        }

        html += '<div class="border ' + (isFirst ? 'border-emerald-900/40 bg-card' : 'border-slate-800 bg-dark') + ' rounded-xl overflow-hidden">';
        html += '<button class="w-full px-5 py-4 flex justify-between items-center hover:bg-slate-800 transition-colors group" onclick="toggleChangelog(\'mqol-' + group.id + '\')">';
        html += '<div class="flex items-center gap-3">';
        html += '<span class="font-bold ' + (isFirst ? 'text-white group-hover:text-emerald-400' : 'text-slate-400 group-hover:text-white') + ' transition-colors">' + (lang === 'pl' ? group.namePl : group.nameEn) + '</span>';
        html += statusBadge;
        html += '<span class="text-xs ' + (isFirst ? 'text-emerald-200/50 bg-emerald-950/50 border-emerald-900/50' : 'text-slate-500 bg-slate-900 border-slate-800') + ' px-2 py-1 border rounded-md hidden sm:block">' + (lang === 'pl' ? group.descPl : group.descEn) + '</span>';
        html += '</div>';
        html += '<i class="fa-solid fa-chevron-down ' + (isFirst ? 'text-emerald-500/50' : 'text-slate-600') + ' transition-transform duration-300" id="icon-mqol-' + group.id + '"></i>';
        html += '</button>';
        html += '<div class="px-5 pb-5 pt-2 hidden" id="content-mqol-' + group.id + '">';
        html += '<div class="space-y-6 border-l-2 ' + (isFirst ? 'border-slate-700/50' : 'border-slate-800') + ' ml-2 pl-4 mt-2">';
        
        let revEndIdx;
        if (groupIndex === 0) {
            revEndIdx = totalBuilds - 1;
        } else {
            revEndIdx = versionGroups[groupIndex - 1].revStartIdx - 1;
        }
        
        const actualStartIdx = totalBuilds - 1 - revEndIdx;
        const actualEndIdx = totalBuilds - 1 - group.revStartIdx;
        
        for(let i = actualStartIdx; i <= actualEndIdx; i++) {
            const b = mqolChangelog[i];
            const title = lang === 'pl' ? b.tp : b.te;
            const buildText = lang === 'pl' ? 'Kompilacja' : 'Build';
            
            let isLatestBuild = false;
            let buildBadge = '';
            let dotColor = 'bg-slate-600';
            let titleColor = 'text-slate-400';

            if (i === actualStartIdx) {
                if (group.status === 'beta') {
                    isLatestBuild = true;
                    dotColor = 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]';
                    titleColor = 'text-amber-400';
                    buildBadge = '<span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded ml-2">' + (lang === 'pl' ? 'Najnowsza Beta' : 'Latest Beta') + '</span>';
                } else if (group.status === 'stable') {
                    isLatestBuild = true;
                    dotColor = 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
                    titleColor = 'text-emerald-400';
                    buildBadge = '<span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded ml-2">' + (lang === 'pl' ? 'Najnowsza Stabilna' : 'Latest Stable') + '</span>';
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
