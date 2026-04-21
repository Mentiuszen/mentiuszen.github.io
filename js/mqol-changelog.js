const mqolChangelog = [
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

    // Struktura grupowania według patchów (zgodna z prośbą)
    const versionGroups = [
        { 
            id: 'v109', 
            nameEn: 'v1.0.9', namePl: 'Wersja 1.0.9', 
            descEn: 'Midnight Logic Update', descPl: 'Aktualizacje Midnight',
            startIdx: 0, endIdx: 0 // Build 67
        },
        { 
            id: 'v108', 
            nameEn: 'v1.0.8', namePl: 'Wersja 1.0.8', 
            descEn: 'BCC Support', descPl: 'Wsparcie BCC',
            startIdx: 1, endIdx: 1 // Build 66
        },
        { 
            id: 'v107', 
            nameEn: 'v1.0.7', namePl: 'Wersja 1.0.7', 
            descEn: 'MoP Classic Fixes & PvP Rewards', descPl: 'Poprawki Blizzarda (MoP) i PvP',
            startIdx: 2, endIdx: 15 // Builds 65-52
        },
        { 
            id: 'v106', 
            nameEn: 'v1.0.6', namePl: 'Wersja 1.0.6', 
            descEn: 'Major Database & Merger', descPl: 'Fuzja addonu i nowa Baza',
            startIdx: 16, endIdx: 25 // Builds 51-42
        },
        { 
            id: 'v105', 
            nameEn: 'v1.0.5', namePl: 'Wersja 1.0.5', 
            descEn: 'Retail & Mailbox fixes', descPl: 'Poprawki Poczty',
            startIdx: 26, endIdx: 29 // Builds 41-38
        },
        { 
            id: 'v104', 
            nameEn: 'v1.0.4', namePl: 'Wersja 1.0.4', 
            descEn: 'Mass Send Rewrite', descPl: 'Przebudowa Mass Send',
            startIdx: 30, endIdx: 40 // Builds 37-27
        },
        { 
            id: 'v103', 
            nameEn: 'v1.0.3', namePl: 'Wersja 1.0.3', 
            descEn: 'Bug Fixes', descPl: 'Szybka poprawka',
            startIdx: 41, endIdx: 41 // Build 26
        },
        { 
            id: 'v102', 
            nameEn: 'v1.0.2', namePl: 'Wersja 1.0.2', 
            descEn: 'View Distance Patch', descPl: 'Poprawki dystansu widzenia',
            startIdx: 42, endIdx: 42 // Build 25
        },
        { 
            id: 'v100', 
            nameEn: 'v1.0.0', namePl: 'Wersja 1.0.0', 
            descEn: 'Initial Release Journey', descPl: 'Historia wczesnych wersji',
            startIdx: 43, endIdx: 66 // Builds 24-1
        }
    ];

    let html = '';

    versionGroups.forEach((group, groupIndex) => {
        const isFirst = groupIndex === 0;
        
        html += '<div class="border ' + (isFirst ? 'border-emerald-900/40 bg-card' : 'border-slate-800 bg-dark') + ' rounded-xl overflow-hidden">';
        html += '<button class="w-full px-5 py-4 flex justify-between items-center hover:bg-slate-800 transition-colors group" onclick="toggleChangelog(\'mqol-' + group.id + '\')">';
        html += '<div class="flex items-center gap-3">';
        html += '<span class="font-bold ' + (isFirst ? 'text-white group-hover:text-emerald-400' : 'text-slate-400 group-hover:text-white') + ' transition-colors">' + (lang === 'pl' ? group.namePl : group.nameEn) + '</span>';
        html += '<span class="text-xs ' + (isFirst ? 'text-emerald-200/50 bg-emerald-950/50 border-emerald-900/50' : 'text-slate-500 bg-slate-900 border-slate-800') + ' px-2 py-1 border rounded-md">' + (lang === 'pl' ? group.descPl : group.descEn) + '</span>';
        html += '</div>';
        html += '<i class="fa-solid fa-chevron-down ' + (isFirst ? 'text-emerald-500/50' : 'text-slate-600') + ' transition-transform duration-300" id="icon-mqol-' + group.id + '"></i>';
        html += '</button>';
        html += '<div class="px-5 pb-5 pt-2 hidden" id="content-mqol-' + group.id + '">';
        html += '<div class="space-y-6 border-l-2 ' + (isFirst ? 'border-slate-700/50' : 'border-slate-800') + ' ml-2 pl-4 mt-2">';
        
        for(let i = group.startIdx; i <= group.endIdx; i++) {
            const b = mqolChangelog[i];
            const title = lang === 'pl' ? b.tp : b.te;
            const buildText = lang === 'pl' ? 'Kompilacja' : 'Build';
            const isLatestBuild = isFirst && i === 0;
            
            html += '<div class="relative">';
            html += '<div class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full ' + (isLatestBuild ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-600') + '"></div>';
            html += '<h4 class="' + (isLatestBuild ? 'text-emerald-400' : 'text-slate-400') + ' font-bold mb-2 flex items-center gap-2">' + buildText + ' ' + b.b + ' - ' + title + ' ' + (isLatestBuild ? '<span class="text-xs font-normal text-slate-500 bg-slate-800 px-2 rounded">Latest</span>' : '') + '</h4>';
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
