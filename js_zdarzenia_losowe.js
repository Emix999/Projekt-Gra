class zdarzenie {
    constructor(nazwa, opis, szansa, funkcja_zdarzenia, runda_startowa = 0, runda_koncowa = -1) {
        this.nazwa = nazwa;
        this.opis = opis;
        this.szansa = szansa;//szansa na wystąpienie zdarzenia
        this.funkcja_zdarzenia = funkcja_zdarzenia;//funkcja wywołana po zdarzeniu
        //Rok 1 trwa od rundy 1 do 10, rok 2 od 11 do 20 itd.
        this.runda_startowa = runda_startowa;//runda w której zdarzenie się zaczyna
        this.runda_koncowa = runda_koncowa;//runda w której zdarzenie się kończy runda_koncowa == -1 oznacza że zdarzenie trwa do końca gry
    }
}

function zarabiasz(zarobek){
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].hajs += zarobek;
    aktualizacja_menu_bocznego();
}

function zmiana_sanity2(zmana_sanity){
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].sanity += zmana_sanity;
    aktualizacja_menu_bocznego();
}

function wszyscy_zmiana_sanity(zmana_sanity){
    for(let i of menedzer_gry.aktywni_gracze){
        i.sanity += zmana_sanity;
    }
    aktualizacja_menu_bocznego();
}

function losowa_zmiana_sanity(min_zmiana_sanity, max_zmiana_sanity){
    zmiana_sanity2(Math.floor(Math.random() * (max_zmiana_sanity - min_zmiana_sanity + 1) + min_zmiana_sanity));
}

function zdajesz_maturalne(){
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdany_polski_i_angielski++;
}

function zdajesz_ogólne(){
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_ogolne;
}

function zdajesz_zawodowe(){
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_zawodowe++;
}

const darmowe_pieniadze = new zdarzenie('Darmowe pieniądze', 'Spacerując po korytarzu podczas przerwy, zauważasz coś błyszczącego pod ławką. To moneta — najwyraźniej nikt się po nią nie schyla. Chowasz ją szybko do kieszeni, zanim ktokolwiek inny zauważy. Zyskujesz 2 zł.', 100, () => zarabiasz(2));
const zapomniana_pozyczka = new zdarzenie('Zapomniana pożyczka', 'Kolega oddał ci 5 zł po 2 latach. Nagle podchodzi do ciebie znajomy z klasy i mówi: "Ej, pamiętasz, jak pożyczyłem od ciebie piątaka na hot-doga w pierwszej klasie? Masz, sory, że dopiero teraz oddaję." Zaskoczony, przyjmujesz monetę ze zdziwieniem — nie spodziewałeś się że ci ją odda.', 50, () => zarabiasz(5));
const dobry_biznes = new zdarzenie('Dobry biznes', 'Po lekcjach podchodzi do ciebie młodszy uczeń i pyta, czy masz podręcznik z biologii z pierwszej klasy. Wyciągasz go z plecaka, ustalacie cenę - 30 zł - i sprawa załatwiona. Prosty zysk!', 5, () => zarabiasz(30));
const dziwne_urzadzenie = new zdarzenie('Dziwne urządzenie', 'Grzebiąc z ciekawości w koszu przy pracowni informatycznej, zauważasz coś przypominającego miniaturowy komputer. Zanosząc to do domu, wrzucasz ogłoszenie w sieci na 50 zł. Ku twojemu zdziwieniu — ktoś to kupuje!', 2, () => zarabiasz(50));
const kosztowna_nieuwaga = new zdarzenie('Kosztowna nieuwaga', 'W pośpiechu na lekcję biegniesz przez schody. Dopiero na miejscu zauważasz, że brakuje ci piątaka w kieszeni. Raczej już go nie odzyskasz. Tracisz 5 zł.', 20, () => zarabiasz(-5));
const zmiana_w_planie_lekcji1 = new zdarzenie('Zmiana w planie lekcji', 'Siedząc zrezygnowany na przedostatniej lekcji, nagle słyszysz anielskie słowa z tyłu klasy: "Ej, słuchajcie, odwołali nam ostatnią lekcję." Świat znowu ma sens. Zyskujesz 5 sanity.', 100, () => zmiana_sanity2(5));
const zmiana_w_planie_lekcji2 = new zdarzenie('Zmiana w planie lekcji', 'Dzisiaj odwołali ci 3 ostatnie lekcje. Ktoś w sekretariacie musiał mieć dobry dzień — dzięki temu wracasz ko domu o 12.00. Zaczynasz podejrzewać, że nauczycielom też nie chciało się przychodzić do szkoły. Zyskujesz 10 sanity.', 30, () => zmiana_sanity2(10));
const wycieczka = new zdarzenie('Wycieczka', 'Nie ma lekcji, tylko autobus, słuchawki i fajnie spędzony czas z kolegami. Życie jest piękne (do czasu powrotu). Zyskujesz 30 sanity.', 10, () => zmiana_sanity2(30));
const dokonales_niemozliwego = new zdarzenie('Dokonałeś niemożliwego', 'Naprawiłeś XAMPPa w sali 102b. Nauczyciele od dwóch tygodni łamali sobie głowy, ale to ty, prosty uczeń, wskrzesiłeś martwego XAMPPa. Pani Cichowska poklepuje cię po ramieniu. Masz ochotę spisać to w CV. Zyskujesz 200 sanity i pochwałę dyrektora.', 1, () => zmiana_sanity2(200));
const to_bolalo = new zdarzenie('To bolało!', 'W pośpiechu ślizgasz się na rozlanym napoju. Lądujesz na ziemi jak worek ziemniaków, a echo śmiechu kolegów zostanie z tobą na zawsze. Tracisz 10 sanity.', 40, () => zmiana_sanity2(-10));
const chmura_dymu = new zdarzenie('Chmura dymu', 'Otwierasz drzwi do toalety... i nagle witasz się z chmurą nikotynowego smogu. Czujesz się jak mieszkaniec Krakowa. Tracisz 2 sanity.', 125, () => zmiana_sanity2(-2));
const uwaga = new zdarzenie('Uwaga', 'Jesteś na lekcji z waszą znienawidzoną nauczycielką, a tu nagle - PING z messengera. Nauczycielka wpatruje się w ciebie wzrokiem, który mógłby topić stal. Czujesz już tą uwagę w dzienniku. Tracisz 5 sanity.', 75, () => zmiana_sanity2(-5));
const smierc = new zdarzenie('Śmierć', "Psujesz XAMPP'a w sali 102b. Czeka cię publiczna egzekucja. Tracisz ∞ sanity.", 1, () => zmiana_sanity2(-200));
const rozluznienie = new zdarzenie('Rozluźnienie', 'Na grupie klasowej pojawił się bardzo śmieszny mem. Wszyscy leją z tego jakby to był najlepszy żart jaki kiedykolwiek usłyszeli. Wszyscy gracze odzyskują 10 sanity.', 30, () => wszyscy_zmiana_sanity(10));
const zmiana_nauczyciela = new zdarzenie('Zmiana nauczyciela', 'Wasza ulubiona nauczycielka od angielskiego została zwolniona, i w zamian niej przyszła jakaś natręta rura. Jeszcze wczoraj były żarty i luz, dziś nowa pani od angielskiego wprowadza „nowe zasady” i rozdaje kartkówki na wejściu do sali. Wszyscy gracze tracą 20 sanity.', 20, () => wszyscy_zmiana_sanity(-20));
const taktyczne_odmozdzanie = new zdarzenie('Taktyczne odmóżdżanie', 'Na przerwie scrollujesz... z jednej strony relaks, z drugiej czasopochłaniacz o niepewnym wpływie na psychikę. Zobaczymy, jaki wpływ na ciebie dzisiaj wywrze. Twoje sanity zmienia się losowo od -5 do +3.', 150, () => losowa_zmiana_sanity(-5, 3));
const posmiewisko = new zdarzenie('Pośmiewisko', 'Na grupie klasowej obrażacie ZSK. Grupowa beka z konkurencyjnej szkoły. Sypią się żarty, komentarze, a śmiech unosi się nad Messengerem. Moralność? Czym jest moralność? Odzyskujesz 20 sanity.', 15, () => zmiana_sanity2(20));
const dziwny_widok = new zdarzenie('Dziwny widok', 'Na korytarzu widzisz członków DnD (Drużyny Najgorszych Deweloperów). Spoglądasz, co robią, i widzisz, że piszą najbardziej heretyczny kod jaki kiedykolwiek widziałeś. Na ekranie: kod powtarza się 20 razy, zmienne długie na 50 znaków, a funkcje krzyczą o litość. To nie jest kod — to cyfrowe bluźnierstwo. Tracisz 50 sanity i zyskujesz ból oczu.', 1, () => zmiana_sanity2(-50));
const skarb_zycia = new zdarzenie('Skarb życia', 'Na środku korytarza dostrzegasz niesamowitą bulwę ziemniaka. Twoje wielkopolskie serce przepełnia się radością. To nie jest zwykły ziemniak. To symbol tradycji, siły i obiadu. Czujesz, jak energia ziemniaka wypełnia cię DETERMINACJĄ.', 1, () => dodawanie_przedmiotu_do_ekwipunku(ziemniak));
const rozwiazana_kartkowka_zdarzenie = new zdarzenie('Rozwiązana kartkówka', 'Na grupie klasowej pojawiły się zdjęcia jakieś kartkówki. Nie pytaj, skąd to przyszło. Liczy się tylko to, że teraz wiesz wszystko... przynajmniej do końca tej lekcji.', 30, () => dodawanie_przedmiotu_do_ekwipunku(rozwiazana_kartkowka));
const darmowe_zarcie = new zdarzenie('Darmowe żarcie', 'Znajdujesz gumę turbo. Leżała samotnie pod ławką - prawie zapomniana. Ale ty wiesz, że to legenda. Jeden kęs i... poczujesz się jak w 2005 roku.', 50, () => dodawanie_przedmiotu_do_ekwipunku(guma_predkosc));
const mala_pomylka1 = new zdarzenie('Mała pomyłka', 'Nauczycielka od polskiego wstawiła ci dobrą ocenę przez przypadek. Może przez brak snu, może przez podobne imiona. Nie musisz się o to upominać, i tak nikt nie zauważy, nie ma po co marudzić. +1 do zdanych przedmiotów maturalnych.', 5, () => zdajesz_maturalne());
const mala_pomylka2 = new zdarzenie('Mała pomyłka', 'Nauczycielka od historii wstawiła ci dobrą ocenę przez przypadek. Twój test z historią był bardziej fanfikiem o Napoleonie, ale pomyliła imiona. +1 do zdanych przedmiotów ogólnych.', 5, () => zdajesz_ogólne());
const mala_pomylka3 = new zdarzenie('Mała pomyłka', 'Nauczyciel od przedmiotu zawodowego wstawił ci dobrą ocenę przez przypadek. Nie wiesz, czy pomylił cię z kimś innym, czy miał halucynacje po trzech kawach. Nie dopominaj się i wszystko będzie piękne. +1 do zdanych przedmiotów zawodowych.', 5, () => zdajesz_zawodowe());
const znalezisko = new zdarzenie('Znalezisko', 'Znajdujesz losową wodę w głębinach swojego plecaka. To prawdziwa oaza w plecakowej pustyni. Ma idealną chłodnawą temperaturę.', 70, () => dodawanie_przedmiotu_do_ekwipunku(woda));
const ciekawe_znalezisko = new zdarzenie('Ciekawe znalezisko', 'Znajdujesz losowy termos z herbatą w głębinach swojego plecaka. Nie pamiętasz, kiedy go tam włożyłeś, ale herbata nadal ciepła. Czas na skupienie i logiczne myślenie.', 50, () => dodawanie_przedmiotu_do_ekwipunku(herbata));
const kawusia = new zdarzenie('Kawusia', 'Kupujesz kawę za 3 zł w automacie. Masz nadzieję, że to trochę pomoże przeżyć ciężki dzień. Automat brzęczy jakby się zastanawiał.', 70, () => {zarabiasz(-3), dodawanie_przedmiotu_do_ekwipunku(kawa)});
const klatwa_tiktokowa = new zdarzenie('Klątwa tiktokowa', 'Uzależniłeś się od TikToka. Zaczęło się niewinnie. Teraz potrafisz scrollować godzinami. Co turę twój stan psychiczny zmienia się szybciej, niż emocje w sejmie.', 5, () => dodawanie_przedmiotu_do_ekwipunku(uzaleznienie));
const typowa_usterka = new zdarzenie('Typowa usterka', 'Modidziennik stwierdził, że się zepsuje, przez co nie możesz sprawdzić swoich ocen. Klikasz, odświeżasz, nic. Pusto. Najwyraźniej jakiś programista wylał kawę na serwer. Nie znasz swoich statystyk przez 2 tury.', 75, () => zablokuj_mobidziennik(2));
const pechowa_sytuacja = new zdarzenie('Pechowa sytuacja', 'Rozładował ci się telefon. Zostałeś bez informacji, bez ocen, bez memów. 5 tur w cyfrowym niebycie.', 10, () => zablokuj_mobidziennik(5));
const dziwne_znalezisko = new zdarzenie('Dziwne znalezisko', 'W koszu na śmieci znajdujesz... pierogi? Bluźnierstwo. Jak ktoś mógł wyrzucić skarb polskiej kuchnii? Przygarniasz je z czułością.', 1, () => dodawanie_przedmiotu_do_ekwipunku(pierog, 5));