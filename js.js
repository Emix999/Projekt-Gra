//Cały ten kod jest herezją, potężną herezją. Zdajemy sobie z tego sprawę. Z góry przepraszamy każdego kto będzie musiał na niego patrzeć. :(




//Debug czy na pewno js się wczytał niech tutaj zostanie, bo 2 razy poświęcenone 30 min na dowiedzenie się że tak naprawdę js się nie wczytał to dosyć
//console.log("Java scrpit się wczytuje");
let SAS = "Olek"; //OLEK MUSI BYĆ SASEM

/*
gracz aktywny to taki który bierze udział w rozgrywce
gracz wybrany to taki który ma obecnie turę
*/
const mapa = document.getElementById("mapa");
//debug funkcji
let ile_wywolan = 0;

//blokuje możliwość scrollowania
document.body.classList.add('no-scroll');

//definiuje efekty dźwiękowe i muzykę
const sfx_poprawnie = document.getElementById("audio_gratulacje");
const sfx_zle = document.getElementById("audio_debil");
const sfx_schody = document.getElementById('audio_schody');
const sfx_sklep = document.getElementById('audio_sklep');
const sfx_przedmiot = document.getElementById('audio_przedmiot');
const sfx_poczatek = document.getElementById('audio_poczatek');
const sfx_menu = document.getElementById('audio_menu');
const sfx_zdarzenie = document.getElementById('audio_zdarzenie');

const muzyka_menu = document.getElementById('muzyka_menu');
const muzyka_gra = document.getElementById('muzyka_gra');
const muzyka_pytanie = document.getElementById('muzyka_pytanie');
const muzyka_zdarzenie = document.getElementById('muzyka_zdarzenie');
const muzyka_matury = document.getElementById('muzyka_matury');
const muzyka_napisy_koncowe = document.getElementById('muzyka_napisy_koncowe');

const ekran_zdarzenia = document.getElementById('ekran_zdarzenia');
const nazwa_zdarzenia = document.getElementById('nazwa_zdarzenia');
const opis = document.getElementById('opis');
const przejdz_dalej_zdarzenie = document.getElementById('przejdz_dalej_zdarzenie');
const ekran_zdarzenia_nielosowego = document.getElementById('ekran_zdarzenia_nielosowego');
const opis_zdarzenia_nielosowego = document.getElementById('opis_zdarzenia_nielosowego');
const obraz_zdarzenia_nielosowego = document.getElementById('obraz_zdarzenia_nielosowego');
const przejdz_dalej_zdarzenie_nielosowe = document.getElementById('przejdz_dalej_zdarzenie_nielosowe');
const wylacz_zdarzenie_nielosowe = document.getElementById('wylacz_zdarzenie_nielosowe');
let szansa_zdarzenia_losowego = 2;// 1/szansa_zdarzenia_losowego to szansa na zdarzenie losowe

const losowe_zdarzenia = [
    darmowe_pieniadze,
    zapomniana_pozyczka,
    dobry_biznes,
    dziwne_urzadzenie,
    kosztowna_nieuwaga,
    zmiana_w_planie_lekcji1,
    zmiana_w_planie_lekcji2,
    wycieczka,
    dokonales_niemozliwego,
    to_bolalo,
    chmura_dymu,
    uwaga,
    smierc,
    rozluznienie,
    zmiana_nauczyciela,
    taktyczne_odmozdzanie,
    posmiewisko,
    dziwny_widok,
    skarb_zycia,
    rozwiazana_kartkowka_zdarzenie,
    darmowe_zarcie,
    mala_pomylka1,
    mala_pomylka2,
    mala_pomylka3,
    znalezisko,
    ciekawe_znalezisko,
    kawusia,
    klatwa_tiktokowa,
    typowa_usterka,
    pechowa_sytuacja,
    dziwne_znalezisko
];

class nielosowe_zdarzenie {
    constructor(nazwa, opis, runda, czy_przy_schodach, funkcja_wywołana, sciezka_dzwiekowa = null, obraz = null) {
        this.nazwa = nazwa;
        this.opis = opis;
        this.runda = runda;
        this.czy_przy_schodach = czy_przy_schodach;
        this.funkcja = funkcja_wywołana;
        this.dzwiek = sciezka_dzwiekowa;
        this.obraz = obraz;
    }
}

const przyjaciel_dla_jednego_gracza = new nielosowe_zdarzenie('Spotkanie przyjaciela', [
    'Rozpoczął się pierwszy rok.',
    'Spotykasz tyle nowych twarzy, ludzi których nie znasz.',
    'Na szczęście nie wszyscy są ci obcy.',
    'Twój przyjaciel z podstawówki Mikołaj jest z tobą w klasie.',
    'Znacie się już od wielu lat, wiesz że będzie z tobą na dobre i na złe.',
    'Będzie on towarzyszył ci we wszystkich przygodach jakie przeżyjesz w tym nowym niesamowitym miejscu.'
], 1, false, null, 'przyjaciel');

const rywalizacja_ZSK_1 = new nielosowe_zdarzenie('Wiadomość od dyrektora', [
    'W aplikacji mobidzennika czytacie wiadomość od dyrektora:',
    'Drodzy uczniowie, już w kwietniu odbędzie się drużynowy konkurs wiedzy między naszą szkołą a ZSK.',
    'Będzie on dotyczył wiedzy na temat Polski i zwyczajów jej obywateli.',
    'Poszukujemy drużyn 2-4 osobowych chętnych do wzięcia udziału w tym wydarzeniu.',
    'Niech zgłaszają się tylko osoby z najlepszą wiedzą na ten temat.',
    'Musimy pokazać tym z ZSK, że jesteśmy lepsi.',
    'Wygrany może być tylko jeden...',
    '...i będzie nim nasza złota szkoła!',
    'Wymieniacie między sobą porozumiewawcze spojrzenia.',
    'W końcu dochodzicie do wniosku, że nie możecie tego przegapić.',
    'Musicie się zgłosić do tego konkursu i pokazać kto jest mądrzejszy, w końcu wielu waszych kolegów poszło do tej szkoły, więc trzeba im pokazać, że przy rekrutacji mogli dokonać lepszego wyboru.',//do nagrania
    'Nie myśląc więcej i odpowiadacie na wiadomość, zapisując się na konkurs.'
], 4, false, null, 'ZSK 1');

const rywalizacja_ZSK_1_cz2 = new nielosowe_zdarzenie('Konkurs wiedzy o Polsce', [
    'Idziecie na konkurs, ubrani w strój galowy i piękne krawaty ZSŁ.',
    'Jesteście oczywiście przygotowani, przeciez pamiętaliście o konkursie i nikt musiał wam o nim przypominać w przeddzień.',
    'Spotkacie się z drużyną ZSK, która również przybyła na konkurs, wymieniając miedzy sobą spojrzenia pełne woli zwycięstwa.',//do nagrania
    'Siadacie i słyszycie głos prowadzącego: Niech test się rozpocznie!'
], 8, false, null, 'ZSK 1 cz2');

const rywalizacja_ZSK_1_cz2_wygrana = new nielosowe_zdarzenie('Koniec konkursu', [
    'Po napisaniu testu, czujecie się pewni siebie. Już za kilka minut dowiecie się, czy wygraliście.',
    'Po chwili prowadzący ogłasza wyniki:',
    'Wygranym wielkiego konkursu wiedzy o Polsce i jej obywatelach',
    'jest drużyna...',
    'Zespołu Szkół Łączności!',
    'Serdeczne Granulacje!',
    'Waszą nagrodą jest chwała dla Zespołu Szkół Łączności i okazja na pokazanie kto ma większą wiedzę na temat polskich zwyczajów.',//do nagrania
    'Oferujemy wam również nagrodę rzeczową, którą są pierogi',
    'Po powrocie do szkoły, jesteście witani jak bohaterowie. Wasza chwała nie mine nigdy. Gratulują wam nawet najsurowsi nauczyciele.'//do nagrania
], 8, false, null, 'ZSK 1 cz2 wygrana');

const rywalizacja_ZSK_1_cz2_przegrana = new nielosowe_zdarzenie('Koniec konkursu', [
    'Po napisaniu testu, czujecie się pewni siebie. Już za kilka minut dowiecie się, czy wygraliście.',
    'Po chwili prowadzący ogłasza wyniki:',
    'Wygranym wielkiego konkursu wiedzy o Polsce i jej obywatelach',
    'jest drużyna...',
    'Zespołu Szkół Komunikacji!',
    'Serdeczne Granulacje!',
    'Nagrodą jest chwała dla Zespołu Szkół Komunikacji i okazja na pokazanie kto ma większą wiedzę na temat polskich zwyczajów.',//do nagrania
    'Mamy dla was nagrodę pocieszenia, którą są sinkersy',
    'Po powrocie do szkoły, jesteście witani jako przegrani. Porażka jest dla was jednym z najsmutniejszy momentów. Rówieśnicy nie są zbyt chętni do nawiązywania z wami znajomości.'//do nagrania
], 8, false, null, 'ZSK 1 cz2 przegrana');

function konkurs(konkurs) {
    tura_wszystkich_pokaz();
    if (konkurs == konkurs_ZSK_1) {
        menedzer_gry.czy_jest_konkurs1 = true;
    }
    if (konkurs == konkurs_ZSK_2) {
        menedzer_gry.czy_jest_konkurs2 = true;
    }
    menedzer_gry.przedmiot_szkolny = konkurs;
    menedzer_gry.pytania_kandydujace = menedzer_gry.przedmiot_szkolny.pytania.rok_1;
    menedzer_gry.ilosc_pytan = menedzer_gry.przedmiot_szkolny.pytania.rok_1.length;
    zmiana_ekranu(ekran_zdarzenia_nielosowego, ekran_pytania);
    znikniecie_ekranu(mapa);
    menedzer_gry.czy_poprawne_odpowiedzi = [];
    menedzer_gry.ile_jeszcze_pytan = menedzer_gry.ilosc_pytan;
    pokaz_pytanie();
}

function koniec_konkursu() {
    menedzer_gry.czy_jest_konkurs1 = false;
    if (menedzer_gry.czy_konkurs1_wygrany) menedzer_gry.zdarzenie = rywalizacja_ZSK_1_cz2_wygrana;
    else menedzer_gry.zdarzenie = rywalizacja_ZSK_1_cz2_przegrana;
    pokaz_zdarzenie_nielosowe();
}
const rywalizacja_ZSK_2_jesli_terapia = new nielosowe_zdarzenie('Prośba dyrektora', [
    'Na początku lekcji WF-u prowadzonej przez dyrektora zaczyna on mówić na inny niż zwykle temat.',
    'Dyrektor mówi: Jak wiecie, w tym roku organizowany jest wielki konkurs z ZSK.',
    'Jego tematem jest gwara poznańska.',
    'Stawką jest chwała dla Zespołu Szkół Łączności, nasz status złotej szkoły od tego zależy.',
    'Dlatego musicie pomóc naszej szkole wygrać tą rywalizację, potrzebujemy chętnych.',
    'Dyrektor zwraca się do was: Słyszałem, że jesteście sprytni, co powiecie na wzięcie udziału?',
    'Można powiedzieć, że trochę zapomniałem o tym wydarzeniu, dlatego przygotujcie się proszę na jutro.',
    'Wierzę, iż dla takich geniuszy jak wy wygranie nie będzie żadnym problemem.',//do nagrania
    'Wymieniacie między sobą spojrzenia, czujecie się pewni siebie, po pochwałach od dyrektora żaden temat nie wydaje się zbyt trudny.'
], 32, false, null, 'rywalizacja_ZSK_2_jesli_terapia');

const rywalizacja_ZSK_2_jesli_wygrali = new nielosowe_zdarzenie('Prośba dyrektora', [
    'Na korytarzu podczas przerwy zostajecie zaczepieni przez dyrektora.',
    'Dyrektor mówi: Jak dobrze was widzieć, potrzebuję waszej pomocy.',
    'Jak wiecie, w tym roku po raz kolejny organizowany jest wielki konkurs z ZSK.',
    'Stawką jest chwała dla Zespołu Szkół Łączności, nasz status złotej szkoły od tego zależy.',
    'W tym roku tematem przewodnim jest gwara poznańska.',
    'Poprzednim razem wykazaliście się ogromną wiedzą i umiejętnościami, oprócz tego wasza pomoc dla tej szkoły jest nieoceniona.',
    'Dlatego to właśnie wy musicie pomóc naszej szkole wygrać tą rywalizację',
    'Można powiedzieć, że trochę zapomniałem o tym wydarzeniu, dlatego przygotujcie się proszę na jutro.',
    'Wierzę, iż dla takich geniuszy jak wy wygranie nie będzie żadnym problemem.',//powtórka z wyżej
    'Wymieniacie między sobą spojrzenia, czujecie się pewni siebie, żaden temat nie jest dla was zbyt trudny.'
], 32, false, null, 'rywalizacja_ZSK_2_jesli_wygrali');

const rywalizacja_ZSK_2_jesli_przegrali = new nielosowe_zdarzenie('Prośba dyrektora', [
    'Na korytarzu podczas przerwy zostajecie zaczepieni przez dyrektora.',
    'Dyrektor mówi: Jak dobrze was widzieć, potrzebuję waszej pomocy.',
    'Jak wiecie, w tym roku po raz kolejny organizowany jest wielki konkurs z ZSK.',
    'Stawką jest chwała dla Zespołu Szkół Łączności, nasz status złotej szkoły od tego zależy.',
    'W tym roku tematem przewodnim jest gwara poznańska.',
    'Mimo że, ostatnio nie poszło wam najlepiej to i tak macie obecnie największe doświadczenie, oprócz tego wasza pomoc dla tej szkoły jest nieoceniona.',
    'Dlatego to właśnie wy musicie pomóc naszej szkole wygrać tą rywalizację',
    'Można powiedzieć, że trochę zapomniałem o tym wydarzeniu, dlatego przygotujcie się proszę na jutro.',
    'Wierzę, iż wasza wiedza uzupełniona determinacją pozwoli wam wygrać bez najmniejszego problemu. :)',//do nagrania
    'Wymieniacie między sobą spojrzenia, czujecie trochę niepewności, ale wierzycie, że może wam się udać.'
], 32, false, null, 'rywalizacja_ZSK_2_jesli_przegrali');

const rywalizacja_ZSK_2_cz2_jesli_wygrali = new nielosowe_zdarzenie('Konkurs wiedzy o gwarze poznańskiej', [
    'Wchodzicie do tej samej co ostatnio sali konkursowej, ubrani oczywiście w krawaty ZSŁ',
    'Gotowi jak nigdy wcześniej (wczoraj każdy z was poświęcił przynajmniej 180 sekund na przygotowanie).',
    'Patrzycie wyższością na uczniów ZSK, w końcu wygraliście poprzedni konkurs',//do nagrania
    'Poznajecie, że są to te same osoby, które widzieliście tutaj poprzednim razem.',
    'Są oni gotowi poświęcić wszystko aby, tym razem pokazać, że ich wiedza jest większa.',//do nagrania
    'Siadacie i słyszycie głos prowadzącego: Niech test się rozpocznie!'
], 33, false, null, 'rywalizacja_ZSK_2_cz2_jesli_wygrali');

const rywalizacja_ZSK_2_cz2_jesli_przegrali = new nielosowe_zdarzenie('Konkurs wiedzy o gwarze poznańskiej', [
    'Wchodzicie do tej samej co ostatnio sali konkursowej, ubrani oczywiście w krawaty ZSŁ',
    'Gotowi jak nigdy wcześniej (wczoraj każdy z was poświęcił przynajmniej 180 sekund na przygotowanie).',
    'Patrzycie z uniżeniem na uczniów ZSK, w końcu ostanio was pokonali.',
    'Poznajecie, że są to te same osoby, które widzieliście tutaj poprzednim razem.',
    'Są oni gotowi poświęcić wiele, aby pokonać was ponownie. Ich spojrzenie wywołuje u was dreszcz stresu i strachu',//do nagrania
    'Siadacie i słyszycie głos prowadzącego: Niech test się rozpocznie!'
], 33, false, null, 'rywalizacja_ZSK_2_cz2_jesli_przegrali');

const rywalizacja_ZSK_2_cz2_jesli_terapia = new nielosowe_zdarzenie('Konkurs wiedzy o gwarze poznańskiej', [
    'Wchodzicie do sali konkursowej, ubrani oczywiście w krawaty ZSŁ',
    'Sala jest ogromna, szczególnie, że w konkursie bierze udział tylko kilka osób.',
    'Gotowi jak nigdy wcześniej (wczoraj każdy z was poświęcił przynajmniej 180 sekund na przygotowanie).',
    'Patrzycie z ciekawością na miejsce i waszych przeciwników.',
    'Są oni gotowi poświęcić wiele, aby was pokonać. Ich spojrzenie wywołuje u was dreszcz stresu i strachu',//już nagrane wyżej 
    'Siadacie i słyszycie głos prowadzącego: Niech test się rozpocznie!'
], 33, false, null, 'rywalizacja_ZSK_2_cz2_jesli_terapia');

const rywalizacja_ZSK_2_cz2_wygrana_jesli_przegrali_wczesniej = new nielosowe_zdarzenie('Koniec konkursu o gwarze poznańskiej', [
    'Po napisaniu testu, nie jesteście pewni czy udało wam się wygrać',
    'Czujecie nostaligię ogarniającą was, pamiętacię tą smutną chwilę z przed 3 lat jakby to było wczoraj.',
    'W końcu prowadzący odchrząkuje i mówi:',
    'Wygranym wielkiego konkursu wiedzy o gwarze poznańskiej',
    'jest drużyna...',
    'Zespołu Szkół Łączności!',
    'Waszą nagrodą jest status złotej szkoły dla ZSŁ i chwała dla was.',
    'Gratulacje! Udało wam się oczyścić wasze imiona z porażki sprzed kilku lat podczas konkursu wiedzy o Polsce.',//do nagrania
    'Tym razem zobaczycie jak wygląda nagroda główna, którą są pierogi.',
    'Wychodząc z sali konkursowej patrzycie na przegranych z wyższością.',
    'W szkole jesteście witani jak bohaterowie, dyrektor osobiście wam gratuluje.'
], 35, false, null, 'rywalizacja_ZSK_2_cz2_wygrana_jesli_przegrali_wczesniej');

const rywalizacja_ZSK_2_cz2_wygrana_jesli_wygrali_wczesniej = new nielosowe_zdarzenie('Koniec konkursu o gwarze poznańskiej', [
    'Po napisaniu testu, jesteście pewni że pokonaliście tych z ZSK.',//do nagrania
    'Czujecie nostaligię ogarniającą was, pamiętacię tą ekscytację, którą czuliście 3 lata temu, jakby to było wczoraj.',
    'W końcu prowadzący odchrząkuje i mówi:',
    'Wygranym wielkiego konkursu wiedzy o gwarze poznańskiej',
    'jest drużyna...',
    'Zespołu Szkół Łączności!',
    'Waszą nagrodą jest status złotej szkoły dla ZSŁ i chwała dla was.',
    'Granulacje! Udało wam się przedłużyć chwałę ogarniającą wasze imiona, jeszcze przez kolejne dziesiątki lat krążyć będą legendy na temat bohaterów, którzy ocalili status złotej szkoły dla ZSŁ.',
    'Tym razem nagrodą główną dla zwycięzców są ziemniaki.',
    'Wychodząc z sali konkursowej patrzycie na przegranych z wyższością, i wy i oni wiecie że zwycięzca był znany od samego początku.',
    'W szkole jesteście witani jak bohaterowie, dyrektor osobiście wam gratuluje.'
], 35, false, null, 'rywalizacja_ZSK_2_cz2_wygrana_jesli_wygrali_wczesniej');

const rywalizacja_ZSK_2_cz2_przegrana_jesli_przegrali_wczesniej = new nielosowe_zdarzenie('Koniec konkursu o gwarze poznańskiej', [
    'Po napisaniu testu, nie jesteście pewni czy udało wam się wygrać',
    'Czujecie nostaligię ogarniającą was, pamiętacię tą smutną chwilę z przed 3 lat jakby to było wczoraj.',
    'W końcu prowadzący odchrząkuje i mówi:',
    'Wygranym wielkiego konkursu wiedzy o gwarze poznańskiej',
    'jest drużyna...',
    'Zespołu Szkół Komunikacji!',
    'Nagrodą dla zwycięzców jest chwała dla ich szkoły i nagroda w postaci pierogów.',
    'Natomiast dla drużyny przegranej: ',
    'Po raz kolejny przegraliście, nie przynosząc sukcesu swojej szkole. Nie udało się wam poprawić po poprzedniej porażce...',//do nagrania
    'Tym razem nie ma dla was nawet nagrody pocieszenia. Może w kolejnych latach ZSŁ wystawi uczniów z większą wiedzą...',//do nagrania
    'Wychodząc z sali konkursowej czujecie to samo okropne uczucie wstydu co kilka lat temu. Przegraliście i była to wasza wina.',
    'Po powrocie do szkoły, nikt na was nie czeka, każdy wie już, że ZSK wygrało. Status złotej szkoły został utracony.'//do nagrania
], 35, false, null, 'rywalizacja_ZSK_2_cz2_przegrana_jesli_przegrali_wczesniej');

const rywalizacja_ZSK_2_cz2_przegrana_jesli_wygrali_wczesniej = new nielosowe_zdarzenie('Koniec konkursu o gwarze poznańskiej', [
    'Po napisaniu testu, jesteście pewni że pokonaliście tych z ZSK.',//już wyżej nagrane
    'Czujecie nostaligię ogarniającą was, pamiętacię tą ekscytację, którą czuliście 3 lata temu, jakby to było wczoraj.',
    'W końcu prowadzący odchrząkuje i mówi:',
    'Wygranym wielkiego konkursu wiedzy o gwarze poznańskiej',
    'jest drużyna...',
    'Zespołu Szkół Komunikacji!',
    'Nagrodą dla zwycięzców jest chwała dla ich szkoły i nagroda w postaci pierogów.',
    'Natomiast dla drużyny przegranej: ',
    //tutaj była linijka ale podczas cenzurowania ją wywaliłem 
    'Mamy dla was nagrodę pocieszenia, może ona ukoi choć trochę waszą rozpacz. Oto wyśmienita herbata rooibos.',
    'Wychodząc z sali konkursowej czujecie się zdruzgotani. Przegraliście i była to wasza wina. Długo sobie tego nie wybaczycie.',
    'Po powrocie do szkoły, nikt na was nie czeka, każdy wie już, że ZSK wygrało. Status złotej szkoły został utracony.'//to samo co wyżej
], 35, false, null, 'rywalizacja_ZSK_2_cz2_przegrana_jesli_wygrali_wczesniej');

const rywalizacja_ZSK_2_cz2_wygrana_jesli_terapia_wczesniej = new nielosowe_zdarzenie('Koniec konkursu o gwarze poznańskiej', [
    'Po napisaniu testu, jesteście pewni że pokonaliście tych z ZSK.',//już wyżej nagrane
    'W końcu prowadzący odchrząkuje i mówi:',
    'Wygranym wielkiego konkursu wiedzy o gwarze poznańskiej',
    'jest drużyna...',
    'Zespołu Szkół Łączności!',
    'Waszą nagrodą jest status złotej szkoły dla ZSŁ i chwała dla was.',
    'Gratulacje! Udało wam się ocalić status złotej szkoły.',
    'Nagordą główną dla zwycięzców są ziemniaki.',
    'Wychodząc z sali konkursowej patrzycie na przegranych z wyższością, i wy i oni wiecie że zwycięzca był znany od samego początku.',
    'W szkole jesteście witani jak bohaterowie, dyrektor osobiście wam gratuluje.'
], 35, false, null, 'rywalizacja_ZSK_2_cz2_wygrana_jesli_terapia_wczesniej');

const rywalizacja_ZSK_2_cz2_przegrana_jesli_terapia_wczesniej = new nielosowe_zdarzenie('Koniec konkursu o gwarze poznańskiej', [
    'Po napisaniu testu, jesteście pewni że pokonaliście tych z ZSK.',//już wyżej nagrane
    'W końcu prowadzący odchrząkuje i mówi:',
    'Wygranym wielkiego konkursu wiedzy o gwarze poznańskiej',
    'jest drużyna...',
    'Zespołu Szkół Komunikacji!',
    'Nagrodą dla zwycięzców jest chwała dla ich szkoły i nagroda w postaci pierogów.',
    'Natomiast dla drużyny przegranej: ',
    //tutaj była linijka ale podczas cenzurowania ją wywaliłem 
    'Mamy dla was nagrodę pocieszenia, może ona ukoi choć trochę waszą rozpacz. Oto wyśmienita herbata rooibos.',
    'Wychodząc z sali konkursowej czujecie się zdruzgotani. Przegraliście i była to wasza wina. Długo sobie tego nie wybaczycie.',
    'Po powrocie do szkoły, nikt na was nie czeka, każdy wie już, że ZSK wygrało. Status złotej szkoły został utracony.'//to samo co wyżej
], 35, false, null, 'rywalizacja_ZSK_2_cz2_przegrana_jesli_terapia_wczesniej');

//tutaj skończyłem cenzurować

function koniec_konkursu_gwary_poznanskiej() {
    menedzer_gry.czy_jest_konkurs1 = false;
    menedzer_gry.czy_jest_konkurs2 = false;
    if (menedzer_gry.czy_konkurs1_wygrany) {
        if (menedzer_gry.czy_konkurs2_wygrany) menedzer_gry.zdarzenie = rywalizacja_ZSK_2_cz2_wygrana_jesli_wygrali_wczesniej;
        else menedzer_gry.zdarzenie = rywalizacja_ZSK_2_cz2_przegrana_jesli_wygrali_wczesniej;
    }
    else if(!menedzer_gry.czy_rok1_byla_terapia){
        if (menedzer_gry.czy_konkurs2_wygrany) menedzer_gry.zdarzenie = rywalizacja_ZSK_2_cz2_wygrana_jesli_przegrali_wczesniej;
        else menedzer_gry.zdarzenie = rywalizacja_ZSK_2_cz2_przegrana_jesli_przegrali_wczesniej;
    }
    else{
        if (menedzer_gry.czy_konkurs2_wygrany) menedzer_gry.zdarzenie = rywalizacja_ZSK_2_cz2_wygrana_jesli_terapia_wczesniej;
        else menedzer_gry.zdarzenie = rywalizacja_ZSK_2_cz2_przegrana_jesli_terapia_wczesniej;
    }
    pokaz_zdarzenie_nielosowe();
}




const bufet1 = new nielosowe_zdarzenie('Zamknięcie Bufetu Łącznik', [
    'Nagle podczas lekcji słyszycie przez szkolne głośniki:',
    '"Uwaga uwaga. Drodzy uczniowie z przykrością informuję, że ze względu na wyjątkowe okoliczności już jutro bufet Łącznik..."',
    'ZAMYKA SIĘ NA ZAWSZE......   :(',
    '...'
], 13, false, null, 'bufet1');

const bufet1b = new nielosowe_zdarzenie('Zamknięcie Bufetu Łącznik', 'Na korytarzu słyszycie plotki: <br> Słyszeliście dlaczego zamykają bufet? Podobno prezydent chce mieć jego wyśmienite jedzenie na wyłączność. <br><br> Tak nie może być!!! <br> Musimy coś z tym zrobić!', 13, true, null);

const bufet2 = new nielosowe_zdarzenie('Przyjazd Prezydenta Adriana Dudu', [
    'Idąc korytarzem zauważacie, że wszyscy uczniowie są w szoku.',
    'Wasza uwaga zostaje skierowana na agentów specjalnych, którzy otaczają prezydenta Kazimierza Wielkiego. Eskortują go do Bufetu Łącznik.',//do nagrania
    'Przez tłum uczniów dostrzegacie, że prezydent Kazimierz wchodzi do bufetu i zjada wyśmienity obiadek.',//do nagrania
    'Pojawia się wiele robotników.',
    'Wynoszą oni cały sprzęt bufetu, jedzenie, napoje, stoły, krzesła i pracowników.',
    'Wszystko zostaje zamknięte w kontenerach gotowych do wywiezienia.',
    'Drzwi do bufetu zostają zamknięte na zawsze.',
    'Prezydent przyglądający się wcześniej całej sytuacji, zaczyna bez słowa kierować się w stronę wyjścia.',
    'Słychać krzyk: ',
    'To nie może się tak skończyć!',
    'Nie możemy stracić bufetu!',
    'Uczniowie zaczynają skandować:',
    'Niech żyje bufet Łącznik! Odzyskamy bufet Łącznik!',
    'Prawie cała szkoła zbiera się przed prezydentem. Wasza grupa wychodzi na czoło.',
    'Tłum krzyczy: Nie pozwolimy na zabranie naszego najsmaczniejszego we wszechświecie jedzenia! Prezydencie, musi pan pozwolić nam je zachować!',
    'Prezydent Kaziu odpowiada: A co mi zrobicie jak nie?',//do nagrania
    'Tłum odpowiada: Nie wiemy, ale na pewno nie pozwolimy na zabranie bufetu!',
    'Prezydent Kaziu mówi: Podziwiam waszą determinację i odwagę, myślę że możemy się jakoś dogadać, jeśli...',//do nagrania
    'Pytacie: Jeśli co?',
    'Prezydent Kaziu mówi: Jeśli po pierwsze, będę mógł się tutaj codziennie stołować, a po drugie poprawnie rozwiążecie ten test.'//do nagrania
], 14, false, null, 'bufet2');

const bufet3_zdany = new nielosowe_zdarzenie('Przyjazd Prezydenta Adriana Dudu', [
    'Rozwiązując test, czujecie jakbyście byli na egzaminie, ale pytania same w sobie nie stanowią większego problemu.',//do nagrania
    'W końcu po kilku wyczerpujących minutach myślenia, oddajecie test prezydentowi.',
    'Prezydent przypatruje się waszym odpowiedziom z zdziwieniem.',
    'Prezydent Kaziu mówi: No, macie szczęście, udało się wam zdać ten test!',//do nagrania
    'Dobrze wiedzieć że dzisiejsza młodzież nie jest tylko wpatrzona w te tiktaki i istagramy, ale ma też coś w głowie.',
    'Zgodnie z umową oddam wam bufet Łącznik, ale będę mógł się tutaj codziennie stołować.',
    'Miło mi było was poznać i zjeść tak wybitny posiłek, w zamian za to, że pokazaliście tak dużą determinację i uratowaliście bufet myślę że zasłużyliście na nagrodę.',
    'Każdy z was dostanie po trzy obiadki ze stołówki.',
    'A teraz do widzenia, muszę wracać do Warszawy mam umówione spotkanie z Władysławem Łokietkiem.',//do nagrania
    'Do zobaczenia w bufecie Łącznik!',
    'Na korytarzach widać wszechobecną radość z powodu uratowania bufetu. Nawet nastrój nauczycieli się poprawił.'
], 14, false, null, 'bufet3 zdany');

const bufet3_niezdany = new nielosowe_zdarzenie('Przyjazd Prezydenta Adriana Dudu', [
    'Prezydent patrzy na was podczas rozwiązywania testu.',
    'Jego twarz wyraża zdziwienie, zmieszanie i politowanie.',
    'Prezydent Kaziu mówi pod nosem: Te odpowiedzi są gorsze niż rapsy Dudy...',//do nagrania
    'Rozwiązując test, czujecie jakbyście byli na egzaminie, szczególnie po usłyszeniu tej reakcji jesteście jeszcze bardziej zestresowani.',
    'Na wasze szczęście stojący nieopodal nerd postanawia się odezwać:',
    'Mówi on: Umm actually, ja znam poprawną odpowiedź na pierwsze pytanie.',
    'Na drugie w sumie to też...',
    'Ja w sumie to znam odpowiedź na wszystkie pytania wy nieuki! Dajcie mi to.',
    'Nerd wyrywa wam z rąk test i zaczyna go rozwiązywać.',
    'Po chwili oddaje go prezydentowi i mówi: w przeciwieństwie do tych nieuków ja wiem co nie co o Polsce.',
    'Prezydent Kaziu mówi: Dobrze wiedzieć że nie cała dzisiejsza młodzież jest wpatrzona w te tiktaki i instagramy, ale chociaż jej część ma też coś w głowie.',//do nagrania
    'No, macie szczęście mimo problemów udało wam się zdać z pomocą kolegi nerda!',
    'Zgodnie z umową oddam wam bufet Łącznik, ale będę mógł się tutaj codziennie stołować.',
    'Miło mi było was poznać i zjeść tak wybitny posiłek, w zamian za to, że pokazaliście tak dużą determinację i uratowaliście bufet myślę że zasłużyliście na nagrodę.',
    'Każdy z was dostanie po trzy obiadki ze stołówki.',
    'A teraz do widzenia, muszę wracać do Warszawy mam umówione spotkanie z Władysławem Łokietkiem.',// już nagrane
    'Do zobaczenia w bufecie Łącznik!',
    'Na korytarzach widać wszechobecną radość z powodu uratowania bufetu. Nawet nastrój nauczycieli się poprawił.'
], 14, false, null, 'bufet3 niezdany');

function test_prezydenta() {
    tura_wszystkich_pokaz();
    menedzer_gry.czy_jest_prezydent = true;
    menedzer_gry.przedmiot_szkolny = prezydent;
    menedzer_gry.pytania_kandydujace = menedzer_gry.przedmiot_szkolny.pytania.rok_1;
    menedzer_gry.ilosc_pytan = menedzer_gry.przedmiot_szkolny.pytania.rok_1.length;
    zmiana_ekranu(ekran_zdarzenia_nielosowego, ekran_pytania);
    znikniecie_ekranu(mapa);
    menedzer_gry.czy_poprawne_odpowiedzi = [];
    menedzer_gry.ile_jeszcze_pytan = menedzer_gry.ilosc_pytan;
    pokaz_pytanie();
}

function koniec_sceny_prezydenta() {
    menedzer_gry.czy_jest_prezydent = false;
    if (menedzer_gry.czy_quiz_prezydenta_zdany) menedzer_gry.zdarzenie = bufet3_zdany;
    else menedzer_gry.zdarzenie = bufet3_niezdany;
    pokaz_zdarzenie_nielosowe();

}

const porwanie_czosnowskiego1 = new nielosowe_zdarzenie(null, [
    '- Jakiś random: "Hej, na wstępie mam do was pytanie"',
    '"Zdajecie z biologii nie tak jak cała reszta z tej szkoły?"',
    '"OCH JAK DOBRZE! To znaczy, że będziecie mogli mi pomóc"',
    '"Otóż widzicie...Pan Czosnowski zaginął"',//do nagrania
    '"No i jest to problem biorąc pod uwagę, że każdy jest zagrożony"',
    '"Krótko mówiąc: Jesteśmy ugotowani. I właśnie dlatego potrzebujemy kogoś kto nie został spisany na straty w oczach Pana Czosnowskiego"',//do nagrania
    '"Musicie go odszukać, bo tylko dzięki temu uczniowie tej szkoły unikną skreślenia z listy uczniów"',
    '"Oficjalnie mianuje Was "Drużyną Sierpienia", a teraz idźcie ocalić ZSŁ"'
], 25, false, () => pojdz_do_sali_017(), 'porwanie czosnowskiego1', 'url("grafiki/zsł.jpg")');
const porwanie_czosnowskiego2 = new nielosowe_zdarzenie(null, [
    '- Pan Czosnowski w piwnicy: "O, nareszcie ktoś łaskawie przyszedł na lekcje"',
    '"Nie widzieliście że jak nauczyciel gdzieś sobie pójdzie to w interesie klasy jest go odszukać, a nie na odwrót?"',
    '"ZARAZ WSZYSTKIM SPÓŹNIENIA POWPISUJE"',
    '"A jeszcze poprawkę im pozwoliłem napisać...jakiż to ja dobry dla nich jestem, czyż nie?"',
    '"No i również nie mogę nie wspomnieć o tym jak to jako nauczyciel biologii wykonuje największą pracę by kształcić..."',
    '"...I TO JA JESTEM PORYWANY"',
    '"KURZA TWARZ"',//do nagrania
    '"Zatem pomóżcie mi proszę stąd wyjść, a ja zajmę się tymi wszystkimi najsłabszymi ogniwami"',
    '"Dzięki Bogu, że ratuje mnie ktoś bardziej rozgarnięty'
], 25, false, null, 'porwanie czosnowskiego2', 'url("grafiki/sale/017.png")');
const porwanie_czosnowskiego3 = new nielosowe_zdarzenie(null, [
    '- Jakiś random: "Hej to wy!"',
    '"Dzięki w imieniu wszystkich za odnalezienie Pana Czosnowskiego"',
    '"Wszyscy już pisali poprawę, Pan Czosnowski właśnie je sprawdza, ocaliliście około 90% tej szkoły"',//do nagrania
    '"Zła wiadomość - Jestem jednym z 10%..."',//do nagrania
    '- Pan Czosnowski z tyłu: "NIECH CIĘ RĘKA BOSKA BRONI, MATKO ŚWIĘTA COŚ TY MI TU POWYPISYWAŁ..."',
    '"No to chyba tu nasze drogi się rozchodzą...przyszła pora bym stał się pierwszym prawdziwym członkiem drużyny sierpienia"',
    '"Ale powiem Wam jedno, jeśli w szkole znowu coś się zadzieje co powinno nastąpić niedługo i czegoś się dowiem..."',
    '"To udzielę wam potrzebnych informacji"',
    '"Przynajmniej tyle mogę zrobić w podzience za szansę pomocy"'
], 26, false, null, 'porwanie czosnowskiego3');

const zly_dyrektor1 = new nielosowe_zdarzenie(null, [
    '- Jakiś random: "Hej, udało mi się Was w końcu znaleźć"',
    '- "Skoro znowu się widzimy pewnie już wiecie, że coś znowu się odwaliło"',
    '- "Mam dla Was sprawdzone informacje z pierwszej półki"',
    '- "Otóż...nasz dyrektor się zwolnił..."',
    '- "Uznał, że przejdzie sobie na emeryturę, bo nie ma już zbytnio siły"',
    '- "I nie byłoby w tym nic złego gdyby nie fakt, że praktycznie chwilę po tym przyszedł ON"',
    '- "Białogór Zetska"',
    '- "Kuzyn demona...zmora wszechświatów..."',
    '- "Jeżeli pobędzie dyrektorem dłużej niż tydzień to ta szkoła zniknie z powierzchni ziemii, gwarantuję"',
    '- "Musimy temu zapobiec!"',
    '- "Czas stać się Specjalną Agencją Szkolną i razem uratować tą szkołę...znowu"',
    '- "Idźcie i spróbujcie odnaleźć naszego dyrektora, ja zajmę się znalezieniem brudów na tego łajdaka"',
    '- "Aż czuję, jak SAS się we mnie budzi"',
    '- "Do zobaczenia"'
], 43, false, null, 'zły dyrektor1');
const zly_dyrektor2 = new nielosowe_zdarzenie(null, [
    '- Zły dyrektor: "HAHAHAHAHAHAHA"',
    '- "Ah kretyńscy uczniowie, i pyk koleini skreśleni z listy uczniów, i myk uwaga za bycie uczniem"',
    '- Zauważa Was "O czyżbyście przyśli mnie błagać o litość?"',
    '- "Ach nie przecież to wy, ta słynna "Drużyna Sierpienia", która uratowała Pana Czosnowskiego...jakże wspaniale"',
    '- "Lepiej już idźcie bo zaraz skończycie tak jak ten tutaj"',
    '- "Miałem na myśli jak Ci źli uczniowie!"',
    '- "Dobrzy zresztą też..."',
    '- "No a teraz, idę powstawiać uwagi"',
    '- "Nigdzie się przede mną nie ukryjecie"',
    '- "..."',
    '- "No chyba, że w bibliotece"'
], 44, false, () => pojdz_do_biblioteki(), 'zły dyrektor2', 'url("grafiki/zsł.jpg")');
const zly_dyrektor3 = new nielosowe_zdarzenie(null, [
    '- Nasz dyrektor: "Yym, jakaż fascynująca lektura"',
    '- "Witajcie drodzy poszukiwacze wiedzy w tym spokojnym miejscu, czy jest coś szczególnego co Was sprowadza"',
    '- "Oj...rozumiem"',
    '- "Niestety nie mogę Wam w tym pomóc"',
    '- "Widzicie, przeszedłem na emeryturę dyrektorską, uznałem że nadszedł czas na czytanie w zaciszu biblioteki"',
    '- "Poza tym nowego dyrektora jeszcze nie ma więc jeśl-"',
    '- "..."',
    '- "Jak to już jest nowy dyrektor?"',
    '- "A gdzie głosowanie demokratyczne? Gdzie jakieś wybory?"',
    '- "Czy naprawdę każdy biernie patrzył jak roznosi się u nas totalitaryzm?"',
    '- "Eh, skoro sprawy tak się mają, myślę że to idealna pora na powrót do mojego urzędu"',
    '- "I tak miał być to tylko odpoczynek"',
    '- "Dobrze uczniowie spotkajcie się ze mną za kilka przerw, ja zbiorę nauczycieli i uczniów, wspólnie uda nam się obalić tego dyktatora"'
], 44, false, null, 'zły dyrektor3');
const zly_dyrektor4 = new nielosowe_zdarzenie(null, [
    '- Zły dyrektor: "O widzę, że wszyscy się zebraliście...idealnie"',
    '- "Idealna okazja by ogłosić wam nowy statut szkoły"',
    '- "Po pierwsze: Mam władzę absolutną"',
    '- "Po drugie: Za nieposłuszeństwo grozi skreślenie z listy uczniów"',
    '- "Po trzeci-"',//5
    '- Nasz dyrektor: "Nie tak prędko"',
    '- "Myśli Pan, że za taką samowolkę nikt Panu nie zwróci uwagi?"',
    '- Zły dyrektor: "HA, a co? Były dyrektor mi przeszkodzi?"',
    '- Nasz dyrektor: "Po pierwsze: byłem tylko na przerwie"',
    '- "Po drugie: proszę pokazać dokumenty świadczące o pełnieniu stanowiska dyrektora',//10
    '- Zły dyrektor: "Eee ż-że co mam pokazać?"',
    '- Nasz dyrektor: "Dokumentację"',
    '- Zły dyrektor wyciąga kartkę i pisze na niej: dYrEkT0r ZsK---tO zNacy Ł',
    '- Nasz dyrektor: "No przecież prawo jazdy w chipsach ma większą autentyczność niż to"',
    '- Zły dyrektor: "NIEWAŻNE, I TAK NIC NA MNIE NIE MACIE"',//15
    '- "DOPROWADZE TĄ SZKOŁĘ DO RUINY I NIKT MNIE NIE ZATRZY-"',
    '*Wchodzi jakiś random, a za nim Pan Czosnowski"',
    '- Jakiś random: "A właśnie, że mamy!"',
    '- "Tak się składa, że Pan jesteś zbrodniarz nie tylko z imienia i reputacji..."',
    '- "Ale też z prawa!"',//20
    '- Pan Czosnowski: "MYŚLAŁEŚ, ŻE JAK MNIE PORWIESZ TO ODPUSZCZĘ CI NIEZDANĄ KARTKÓWKĘ Z BIOLOGI!?"',
    '- "Oj kochany...PRZY TOBIE TO NAWET DADAM I GAROSZ WYPADAJĄ OBŁĘDNIE!"',
    '- Zły dyrektor: "C-chwila p-p-przecież n-nikt mnie t-t-tu nie uczy"',
    '- Pan Czosnowski: "Ależ ja wiem mój drogi...WYSTARCZY MI TYLKO SPOJRZENIE BY OKREŚLIĆ CZY ZDAJESZ, ZDAŁEŚ ALBO CZY BĘDZIESZ ZDAWAŁ Z BIOLOGI"',
    '- "MATKO ŚWIĘTA! CZY TY W OGÓLE WIESZ ILE MASZ CHROMOSOMÓW"',//25
    '- Zły dyrektor: "yyy aa yyyy aaa yyy aa yyy aa yyyy aaa yy aa"',
    '- "W ZSK tego nie uczyli"',
    'W tej chwili Pan Czosnowski przeszywa go wzrokiem i już przygotowuje swój atak',
    'Zły dyrektor ucieka',
    '- "Wszystko by mi się udało gdyby nie przeklęta "Drużyna Sierpienia" i ten SAS!"',//30
    '- Nasz dyrektor: "Dziękuje Wam drodzy uczniowie, dzięki Wam reszta uczniów z tej szkoły nie została skreślona z listy uczniów"',
    '- "To wielkie osiągniecie uratować całą szkołę. Gratuluje z całego serca"',
    '- Jakiś random: "Też Wam dziękuje, pomogliście nie tylko mi, ale także niejednemu uczniowi"',
    '- "Dobrze się z Wami współpracowało partnerzy. Abyśmy byli kwita, proszę weźcie tę rozwiązaną kartkówkę"',
    '- "Wierzę, że Wam się przyda"',
    '- "A teraz idę przedyskutować kwestie 5 niezdanych lat z biologii"',
    '- Pan Czosnowski: "Eh, skoro okazało się, że NIE jesteś najgorszym uczniem biologii jakiego widziałem, myślę że możesz zdać"',
    '- Jakiś random: "JEEEST! No to w takim razie do zobaczenia koledzy. Niech wiatr Wam sprzyja i powodzenia na maturze!"'
], 45, false, null, 'zły dyrektor4');

const nielosowe_zdarzenia_nie_schody = [porwanie_czosnowskiego1, porwanie_czosnowskiego3, bufet1, bufet2, rywalizacja_ZSK_1, rywalizacja_ZSK_1_cz2, rywalizacja_ZSK_2_cz2_jesli_przegrali, rywalizacja_ZSK_2_cz2_jesli_wygrali, zly_dyrektor1, zly_dyrektor2, zly_dyrektor4,rywalizacja_ZSK_2_jesli_terapia,rywalizacja_ZSK_2_jesli_wygrali, rywalizacja_ZSK_2_jesli_przegrali];
const nielosowe_zdarzenia_schody = [bufet1b];


function pokaz_zdarzenie() {
    zmiana_ekranu(mapa, ekran_zdarzenia);
    nazwa_zdarzenia.innerHTML = menedzer_gry.zdarzenie.nazwa;
    opis.innerHTML = menedzer_gry.zdarzenie.opis;
}

function zniknij_zdarzenie() {
    zmiana_ekranu(ekran_zdarzenia, mapa);
    menedzer_gry.ilosc_losowych_zdarzen--;
    if(menedzer_gry.zdarzenie.funkcja_zdarzenia!=null)menedzer_gry.zdarzenie.funkcja_zdarzenia();
}

function pokaz_zdarzenie_nielosowe() {
    tura_wszystkich_pokaz();
    pojawienie_ekranu(ekran_zdarzenia_nielosowego);
    opis_zdarzenia_nielosowego.innerHTML = menedzer_gry.zdarzenie.opis[0];
    menedzer_gry.indeks_opisu_zdarzenia_nielosowego = 0;
    if (menedzer_gry.zdarzenie.opis.length == 1) {
        zmiana_ekranu(przejdz_dalej_zdarzenie_nielosowe, wylacz_zdarzenie_nielosowe);
    }
    if(menedzer_gry.zdarzenie.obraz != null){
        obraz_zdarzenia_nielosowego.style.backgroundImage = menedzer_gry.zdarzenie.obraz;
        obraz_zdarzenia_nielosowego.style.backgroundColor = '';
    }
    else{
        obraz_zdarzenia_nielosowego.style.backgroundImage = '';
        obraz_zdarzenia_nielosowego.style.backgroundColor = 'transparent';
    }
    menedzer_gry.glosowka = new Audio('dźwięki/sfx/Fabuła ZSŁTale/' + menedzer_gry.zdarzenie.dzwiek + '/1.mp3');
    menedzer_gry.glosowka.volume = slider_sfx.value / 100;
    menedzer_gry.glosowka.play();
    muzyka_gra.pause();
    muzyka_zdarzenie.play();
}

function przewin_opis_zdarzenia_nielosowego() {
    menedzer_gry.indeks_opisu_zdarzenia_nielosowego++;
    opis_zdarzenia_nielosowego.innerHTML = menedzer_gry.zdarzenie.opis[menedzer_gry.indeks_opisu_zdarzenia_nielosowego];
    if (menedzer_gry.indeks_opisu_zdarzenia_nielosowego == menedzer_gry.zdarzenie.opis.length - 1) {
        zmiana_ekranu(przejdz_dalej_zdarzenie_nielosowe, wylacz_zdarzenie_nielosowe);
    }
    menedzer_gry.glosowka.pause();
    menedzer_gry.glosowka.currentTime = 0;
    menedzer_gry.glosowka = new Audio('dźwięki/sfx/Fabuła ZSŁTale/' + menedzer_gry.zdarzenie.dzwiek + '/' + (menedzer_gry.indeks_opisu_zdarzenia_nielosowego + 1) + '.mp3');
    menedzer_gry.glosowka.volume = slider_sfx.value / 100;
    menedzer_gry.glosowka.play();
}

function zniknij_zdarzenie_nielosowe() {
    tura_wszystkich_schowaj();
    zmiana_ekranu(wylacz_zdarzenie_nielosowe, przejdz_dalej_zdarzenie_nielosowe);
    znikniecie_ekranu(ekran_zdarzenia_nielosowego);
    menedzer_gry.glosowka.pause();
    menedzer_gry.glosowka.currentTime = 0;
    if (menedzer_gry.zdarzenie == rywalizacja_ZSK_1_cz2_wygrana) {
        for (let i of menedzer_gry.aktywni_gracze) {
            dodawanie_przedmiotu_do_ekwipunku(pierog, 1, i);
        }
    }
    if (menedzer_gry.zdarzenie == rywalizacja_ZSK_1_cz2_przegrana) {
        for (let i of menedzer_gry.aktywni_gracze) {
            dodawanie_przedmiotu_do_ekwipunku(baton_sinkers, 1, i);
        }
    }
    if (menedzer_gry.zdarzenie == rywalizacja_ZSK_2_cz2_wygrana_jesli_przegrali_wczesniej) {
        for (let i of menedzer_gry.aktywni_gracze) {
            dodawanie_przedmiotu_do_ekwipunku(pierog, 1, i);
        }
    }
    if (menedzer_gry.zdarzenie == rywalizacja_ZSK_2_cz2_wygrana_jesli_wygrali_wczesniej||menedzer_gry.zdarzenie == rywalizacja_ZSK_2_cz2_wygrana_jesli_terapia_wczesniej) {
        for (let i of menedzer_gry.aktywni_gracze) {
            dodawanie_przedmiotu_do_ekwipunku(ziemniak, 1, i);
        }
    }
    if (menedzer_gry.zdarzenie == rywalizacja_ZSK_2_cz2_przegrana_jesli_wygrali_wczesniej||menedzer_gry.zdarzenie == rywalizacja_ZSK_2_cz2_przegrana_jesli_terapia_wczesniej) {
        for (let i of menedzer_gry.aktywni_gracze) {
            dodawanie_przedmiotu_do_ekwipunku(herbata, 1, i);
        }
    }
    if (menedzer_gry.zdarzenie == bufet2) {
        test_prezydenta();
    }
    if (menedzer_gry.zdarzenie == rywalizacja_ZSK_1_cz2) {
        konkurs(konkurs_ZSK_1);
    }
    if (menedzer_gry.zdarzenie == rywalizacja_ZSK_2_cz2_jesli_przegrali || menedzer_gry.zdarzenie == rywalizacja_ZSK_2_cz2_jesli_wygrali || menedzer_gry.zdarzenie == rywalizacja_ZSK_2_cz2_jesli_terapia) {
        konkurs(konkurs_ZSK_2);
    }
    if (menedzer_gry.zdarzenie == bufet3_zdany || menedzer_gry.zdarzenie == bufet3_niezdany) {
        for (let i of menedzer_gry.aktywni_gracze) {
            dodawanie_przedmiotu_do_ekwipunku(obiadek, 3, i);
        }
    }
    if(menedzer_gry.zdarzenie == zly_dyrektor4){
        for (let i of menedzer_gry.aktywni_gracze) {
            dodawanie_przedmiotu_do_ekwipunku(rozwiazana_kartkowka, 1, i);
        }
    }
    if (menedzer_gry.zdarzenie == porwanie_czosnowskiego2) {
        for (let i of sala_przyciski) {
            if (i.id != 'SCEM') {
                pojawienie_ekranu(i);
            }
        }
        for (let i of mapa_przyciski) {
            pojawienie_ekranu(i);
        }
        znikniecie_ekranu(document.getElementById('017'));
        menedzer_gry.czy_otwarto_017 = false;
    }
    if (menedzer_gry.zdarzenie == zly_dyrektor3) {
        for (let i of sala_przyciski) {
            if (i.id != '017') {
                pojawienie_ekranu(i);
            }
        }
        for (let i of mapa_przyciski) {
            pojawienie_ekranu(i);
        }
        znikniecie_ekranu(document.getElementById('SCEM'));
        menedzer_gry.czy_otwarto_biblioteke = false;
    }
    menedzer_gry.zdarzenie_nielosowe=null;
    muzyka_zdarzenie.pause();
    muzyka_zdarzenie.currentTime = 0;
    muzyka_gra.play();
}

przejdz_dalej_zdarzenie.addEventListener('click', () => zniknij_zdarzenie());
przejdz_dalej_zdarzenie_nielosowe.addEventListener('click', () => przewin_opis_zdarzenia_nielosowego());
wylacz_zdarzenie_nielosowe.addEventListener('click', () => zniknij_zdarzenie_nielosowe());

//Deklaracja menedżera gry, który menedżeruje grą
const menedzer_gry = {
    ostatni_pokazany_przedmiot: null,
    indeks_wybranego: -1,
    rok_gry: 1,
    aktywni_gracze: [],
    runda: 0,
    ilosc_losowych_zdarzen: 0,
    runda_egzamin: false,
    indeksy_aktywnych_egzamin: [],
    zdarzenie: null,
    zdarzenie_nielosowe: null,
    indeks_opisu_zdarzenia_nielosowego: 0,
    kolejny_rok: false,
    czy_koniec_gry: false,
    indeks_gracza_ktory_dostaje_dialog_nielosowy: null,
    dialog: null,
    dialog_nielosowy: null,
    pytania_kandydujace: null,
    pytanie: null,
    ilosc_pytan: 0,
    ile_jeszcze_pytan: 0,
    czy_odpowiedziano: false,
    czy_poprawne_odpowiedzi: null,
    przedmiot_szkolny: null,
    indeks_gracza_ktory_dostaje_zdarzenie_nielosowe: null,
    zdarzenie_nielosowe_schody: null,
    czy_otwarto_017: false,
    pietro: document.getElementById('schemat_parter'),
    czy_wszyscy_na_terapii: true,
    suma_szans_zdarzen: 0,
    czy_jest_prezydent: false,
    czy_quiz_prezydenta_zdany: false,
    czy_jest_konkurs1: false,
    czy_jest_konkurs2: false,
    czy_konkurs1_wygrany: false,
    czy_konkurs2_wygrany: false,
    czy_otwarto_biblioteke: false,
    czy_rok1_byla_terapia:false,
    glosowka: null,
    poczatek_tury: function () {
        SAS = 'Olek';
        while (SAS != 'Olek') {
            alert('Olek to nie SAS');//OLEK MUSI BYĆ SASEM!!!!!!!
        }

        //console.log("runda egazmin:" + this.runda_egzamin);//debug
        if (this.runda_egzamin) {
            this.poczatek_tury_egzamin();
        }
        else {
            this.suma_szans_zdarzen = 0;
            for (let i of losowe_zdarzenia) {
                if (this.runda >= i.runda_startowa && (this.runda <= i.runda_koncowa || i.runda_koncowa == -1)) {
                    this.suma_szans_zdarzen += i.szansa;
                }
            }



            //czy wszyscy są na terapii
            this.czy_wszyscy_na_terapii = true;
            for (let i of this.aktywni_gracze) {
                if (!i.czy_na_terapii) {
                    this.czy_wszyscy_na_terapii = false;
                    break;
                }
            }
            if (this.czy_wszyscy_na_terapii) {
                if(this.runda<10)this.czy_rok1_byla_terapia=true;
                //ile_wywolan++;//debug

                this.indeks_wybranego = -1;
                if (!(this.runda % 10 == 0)) {
                    this.runda += 10 - (this.runda % 10);
                }
                this.runda_egzamin = false;
                this.indeksy_aktywnych_egzamin = [];
                for (let i of this.aktywni_gracze) {
                    i.czy_na_terapii = false;
                    i.sanity = 100;
                    i.podszedl_do_egzaminu = [];
                }

                this.poczatek_tury();
                return 2;
            }

            do {
                if (this.indeks_wybranego == this.aktywni_gracze.length - 1) {
                    this.indeks_wybranego = 0;
                }
                else {
                    this.indeks_wybranego++;
                }

                if (this.aktywni_gracze[this.indeks_wybranego].ilosc_rund_blokady_mobidziennika > 0) {
                    this.aktywni_gracze[this.indeks_wybranego].ilosc_rund_blokady_mobidziennika--;
                }

                //kolejna runda

                if (this.indeks_wybranego == 0) {
                    this.runda++;
                    for (let i = 0; i < this.aktywni_gracze[this.indeks_wybranego].ekwipunek.length; i++) {
                        if (this.aktywni_gracze[this.indeks_wybranego].ekwipunek[i].nazwa == sklep.arsenal[3].nazwa) {
                            this.aktywni_gracze[this.indeks_wybranego].sanity++;
                        }
                        if (this.aktywni_gracze[this.indeks_wybranego].ekwipunek[i].nazwa == uzaleznienie.nazwa) {
                            losowa_zmiana_sanity(-5, 3);
                        }
                        if (this.aktywni_gracze[this.indeks_wybranego].ekwipunek[i].nazwa == ziemniak.nazwa) {
                            zmiana_sanity2(3);
                        }
                    }

                    for (let i of this.aktywni_gracze) {
                        if (!i.czy_na_terapii && i.ile_rund_temu_byl_na_terapii >= 1) {
                            i.ile_rund_temu_byl_na_terapii++;
                        }
                    }

                    if (this.aktywni_gracze[this.indeks_wybranego].sanity <= 0) {
                        this.aktywni_gracze[this.indeks_wybranego].czy_na_terapii = true;
                    }

                    if (this.aktywni_gracze.length == 1 && this.runda == 1) {//herezja o 23 w w przeddzień terminu. Przepraszam
                        this.zdarzenie = przyjaciel_dla_jednego_gracza;
                        pokaz_zdarzenie_nielosowe();
                    }

                    for (let i of nielosowe_zdarzenia_nie_schody) {
                        if (i.runda == this.runda) {
                            if(i==rywalizacja_ZSK_2_jesli_przegrali||i==rywalizacja_ZSK_2_jesli_terapia||i==rywalizacja_ZSK_2_jesli_wygrali){
                                if (this.czy_konkurs1_wygrany) {
                                    this.zdarzenie = rywalizacja_ZSK_2_jesli_wygrali;
                                    //console.log("540");
                                }
                                else if(this.czy_rok1_byla_terapia){
                                    this.zdarzenie = rywalizacja_ZSK_2_jesli_terapia;
                                    //console.log("543");
                                }
                                else{
                                    this.zdarzenie = rywalizacja_ZSK_2_jesli_przegrali;
                                }
                            }

                            //console.log("536");
                            else if (i == rywalizacja_ZSK_2_cz2_jesli_przegrali || i == rywalizacja_ZSK_2_cz2_jesli_wygrali||i == rywalizacja_ZSK_2_cz2_jesli_terapia) {
                                //console.log("538");
                                if (this.czy_konkurs1_wygrany) {
                                    this.zdarzenie = rywalizacja_ZSK_2_cz2_jesli_wygrali;
                                    //console.log("540");
                                }
                                else if(!this.czy_rok1_byla_terapia){
                                    this.zdarzenie = rywalizacja_ZSK_2_cz2_jesli_przegrali;
                                    //console.log("543");
                                }
                                else{
                                    this.zdarzenie = rywalizacja_ZSK_2_cz2_jesli_terapia;
                                }
                            }
                            else {
                                this.zdarzenie = i;
                                if (i.funkcja != null) i.funkcja();
                            }
                            pokaz_zdarzenie_nielosowe();
                            break;
                        }
                    }
                    this.indeks_gracza_ktory_dostaje_zdarzenie_nielosowe = null;
                    for (let i of nielosowe_zdarzenia_schody) {

                        if (menedzer_gry.runda == i.runda) {
                            //console.log("tego napisu tu nie powinno być zdarzenie:"+i.nazwa);
                            this.zdarzenie_nielosowe_schody = i;
                            this.indeks_gracza_ktory_dostaje_zdarzenie_nielosowe = Math.floor(Math.random() * this.aktywni_gracze.length);
                            //console.log("Indeks tego gracza: "+this.indeks_gracza_ktory_dostaje_zdarzenie_nielosowe);
                            break;
                        }
                    }
                    this.indeks_gracza_ktory_dostaje_dialog_nielosowy = null;
                    for (let i of dialogi_nielosowe) {
                        this.dialog_nielosowy = i;
                        this.indeks_gracza_ktory_dostaje_dialog_nielosowy = Math.floor(Math.random() * this.aktywni_gracze.length);
                        break;
                    }
                    if (this.czy_otwarto_017) {
                        this.runda_017();
                    }
                    if (this.czy_otwarto_biblioteke) {
                        this.runda_biblioteka();
                    }
                    if ((this.runda - 1) % 10 == 0 && this.runda != 1) {
                        this.kolejny_rok = true;
                    }
                }
            } while (this.aktywni_gracze[this.indeks_wybranego].zdane_lata == 5 || this.aktywni_gracze[this.indeks_wybranego].czy_na_terapii || this.aktywni_gracze[this.indeks_wybranego].sanity <= 0);

            //ustala, które piętro pokazać
            zmiana_ekranu(this.pietro, this.aktywni_gracze[this.indeks_wybranego].pietro)
            this.pietro = this.aktywni_gracze[this.indeks_wybranego].pietro;

            //sprawdza, czy jest runda egzaminacyjna
            if (this.kolejny_rok) {
                //egzamin zawodowy
                this.indeksy_aktywnych_egzamin = [];
                for (let i = 0; i < this.aktywni_gracze.length; i++) {
                    if (this.aktywni_gracze[i].zdane_lata == 3 && this.aktywni_gracze[i].podszedl_do_egzaminu.length < 1) {
                        this.indeksy_aktywnych_egzamin.push(i);
                    }
                }
                if (this.indeksy_aktywnych_egzamin.length > 0) {
                    alert("Nadeszła pora na wyczekiwany egzamin zawodowy! Idź do swojej sali zawodowej.");
                    this.runda_egzamin = true;
                    this.runda--;
                    this.poczatek_tury();
                    return 0;
                }

                //matura
                this.indeksy_aktywnych_egzamin = [];
                for (let i = 0; i < this.aktywni_gracze.length; i++) {
                    if (this.aktywni_gracze[i].czy_na_terapii) {
                        continue;
                    }
                    if (this.aktywni_gracze[i].zdane_lata == 4 && this.aktywni_gracze[i].podszedl_do_egzaminu.length < 3 && !this.aktywni_gracze[i].czy_na_terapii) {
                        this.indeksy_aktywnych_egzamin.push(i);
                    }
                }
                if (this.indeksy_aktywnych_egzamin.length > 0) {
                    this.runda_egzamin = true;
                    if (this.runda_egzamin) {
                        //debug3
                        this.runda--;
                        alert("Nadeszła pora na wyczekiwaną przez wszystkich maturę! Idź do sali od polskiego, matematyki i angielskiego.");
                        //console.log("matura woła poczotek tury");
                        this.poczatek_tury();
                        return 0;
                    }
                }
            }

            //zwiększa rok gry
            if (this.kolejny_rok) {
                this.kolejny_rok = false;
                this.rok_gry++;



                zmiana_ekranu(mapa, document.getElementById('ekran_kolejnego_roku'));
                tura_wszystkich_pokaz();
                let j = 0;
                for (let i of this.aktywni_gracze) {
                    document.getElementsByClassName('imie_zdanego')[j].value = i.nazwa;
                    document.getElementsByClassName('gracz_zdal')[j].style.backgroundColor = 'gray';
                    document.getElementsByClassName('avatar_koniec_roku')[j].src=i.avatar;
                    if (i.zdane_lata != 5) {
                        if (i.zdana_matematyka + i.zdany_polski_i_angielski >= 2 && i.zdane_ogolne >= 2 && i.zdane_zawodowe >= 2 && !i.czy_na_terapii && i.czy_zdaje) {
                            document.getElementsByClassName('zdal')[j].value = 'ZDANE';
                            document.getElementsByClassName('gracz_zdal')[j].style.backgroundColor = '#22B14C';
                            i.zdane_lata++;
                        }
                        else {
                            if (Math.floor(Math.random() * 20) == 0) {
                                document.getElementsByClassName('zdal')[j].value = 'SKILL ISSUE';
                            }
                            else {
                                document.getElementsByClassName('zdal')[j].value = 'OBLANE';
                            }
                            document.getElementsByClassName('gracz_zdal')[j].style.backgroundColor = '#FA1E27';
                        }
                    }
                    i.podszedl_do_egzaminu = [];
                    j++;
                }

                for (let i of this.aktywni_gracze) {
                    if (i.czy_na_terapii) {
                        i.czy_na_terapii = false;
                        i.sanity = 100;
                    }
                }
                // to musi być po sprawdzeniu czy gracz zdaje!!!
                for (let i of gracze) {
                    i.hajs += 30;
                    i.zdana_matematyka = 0;
                    i.zdane_ogolne = 0;
                    i.zdane_zawodowe = 0;
                    i.zdany_polski_i_angielski = 0;
                    i.czy_zdaje = true;
                }
            }

            //zdarzenia losowe
            if (Math.floor(Math.random() * szansa_zdarzenia_losowego) == 0) {
                this.ilosc_losowych_zdarzen = 1;
            }
            else {
                this.ilosc_losowych_zdarzen = 0;
            }

            this.wypisz_informacje_graczy();
        }
    },
    poczatek_tury_egzamin: function () {
        if (this.indeksy_aktywnych_egzamin.length == 0) {
            this.runda_egzamin = false;
            this.indeks_wybranego = -1;
            this.poczatek_tury();
            return 0;
        }

        this.ilosc_losowych_zdarzen = 0;
        this.indeks_wybranego = this.indeksy_aktywnych_egzamin[0];
        if (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_lata != 4) {
            this.aktywni_gracze[this.indeks_wybranego].podszedl_do_egzaminu.push('zawodowy');
        }
        this.indeksy_aktywnych_egzamin.shift();

        //ustala, które piętro pokazać
        zmiana_ekranu(this.pietro, this.aktywni_gracze[this.indeks_wybranego].pietro)
        this.pietro = this.aktywni_gracze[this.indeks_wybranego].pietro;

        this.wypisz_informacje_graczy();
    },
    wypisz_informacje_graczy: function () {
        aktualizacja_menu_bocznego();

        let i = 0;
        while (i < this.aktywni_gracze.length) {
            nr_graczy[i].value = ((i + this.indeks_wybranego) % this.aktywni_gracze.length) + 1;
            nr_graczy[i].style.color = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].kolor_gracza;
            nazwy_gracza[i].value = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].nazwa;
            nazwy_gracza[i].style.color = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].kolor_gracza;
            klasy_graczy[i].value = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].klasa.nazwa;
            klasy_graczy[i].style.color = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].kolor_gracza;
            i++;
        }
    },
    koniec_gry: function () {
        muzyka_gra.pause();
        muzyka_napisy_koncowe.play();
        zmiana_ekranu(gra, ekran_koncowy);
        napisy_koncowe.style.animationPlayState = 'running';
        setTimeout(() => this.koniec_gry_naprawde(), 82000);
    },
    koniec_gry_naprawde: function () {
        zmiana_ekranu(ekran_koncowy, ekran_koncowy_naprawde);
    },
    runda_017: function () {
        zmiana_ekranu(this.pietro, document.getElementById('schemat_drugi_budynek'));
        this.pietro = document.getElementById('schemat_drugi_budynek');
        for(let i of this.aktywni_gracze){
            i.pietro = document.getElementById('schemat_drugi_budynek');
        }
        for (let i of sala_przyciski) {
            znikniecie_ekranu(i);
        }
        for (let i of mapa_przyciski) {
            znikniecie_ekranu(i);
        }
        pojawienie_ekranu(document.getElementById('017'));
        this.indeks_wybranego = 0;
    },
    runda_biblioteka: function () {
        zmiana_ekranu(this.pietro, document.getElementById('schemat_drugi_budynek'));
        this.pietro = document.getElementById('schemat_drugi_budynek');
        for(let i of this.aktywni_gracze){
            i.pietro = document.getElementById('schemat_drugi_budynek');
        }
        for (let i of sala_przyciski) {
            znikniecie_ekranu(i);
        }
        for (let i of mapa_przyciski) {
            znikniecie_ekranu(i);
        }
        pojawienie_ekranu(document.getElementById('SCEM'));
        this.indeks_wybranego = 0;
    },
    //funkcja do testowania
    test_matura: function () {
        this.indeks_wybranego = -1;
        this.runda = 10;
        for (let i of this.aktywni_gracze) {
            i.zdane_lata = 4;
        }
        this.poczatek_tury();
    },
    zniknij_ekran_konca_roku: function () {
        tura_wszystkich_schowaj();
        zmiana_ekranu(document.getElementById('ekran_kolejnego_roku'), mapa);
        //zakończenie gry
        this.czy_koniec_gry = true;
        for (let i of this.aktywni_gracze) {
            if (i.zdane_lata != 5) {
                this.czy_koniec_gry = false;
                break;
            }
        }
        if (this.czy_koniec_gry) {
            this.koniec_gry();
            return 1;
        }
    }
};



//Deklaracja tablic z nazwami klas i danymi zewnętrznych indeksów
const liczba_graczy = 4;
const nazwy = [
    "Adam", "Adrian", "Aleksander", "Andrzej", "Antoni", "Artur", "Bartłomiej", "Błażej",
    "Bogdan", "Bogumił", "Bożydar", "Bogusław", "Bolesław", "Bronisław", "Cezary", "Czesław",
    "Damian", "Daniel", "Dariusz", "Dawid", "Dominik", "Edward", "Emil", "Ferdynand", "Filip",
    "Franciszek", "Fryderyk", "Gabriel", "Gerard", "Gracjan", "Grzegorz", "Gustaw", "Henryk",
    "Herbert", "Hubert", "Ignacy", "Igor", "Ireneusz", "Jacek", "Jakub", "Jan", "Janusz",
    "Jarosław", "Jerzy", "Joachim", "Józef", "Julian", "Juliusz", "Justyn", "Kacper", "Kajetan",
    "Karol", "Kazimierz", "Konrad", "Krystian", "Krzysztof", "Lech", "Leon", "Leszek", "Lucjan",
    "Ludwik", "Łukasz", "Maciej", "Maksymilian", "Marcel", "Marcin", "Marek", "Mariusz",
    "Mateusz", "Michał", "Mieczysław", "Mirosław", "Nikodem", "Oskar", "Patryk", "Paweł",
    "Piotr", "Przemysław", "Radosław", "Rafał", "Robert", "Roman", "Ryszard", "Sebastian",
    "Stanisław", "Stefan", "Szymon", "Tadeusz", "Tomasz", "Tymon", "Wacław", "Waldemar",
    "Wiesław", "Wiktor", "Władysław", "Włodzimierz", "Zbigniew", "Zenon", "Zygmunt", "Mździungwa",
    "Ziemniak", "Sans", "Barnaba", "Nie wiem", "Brum brum"
];
const avatary = ["grafiki/avatary/gigachad.png", "grafiki/avatary/kujon.png", "grafiki/avatary/pala.png", "grafiki/avatary/spóźniony.png"];
// const klasy = ["klasa0", "klasa1", "klasa2", "klasa3"];


class gracz {//gracz i wszystkie jego parametry
    constructor(id_html, nazwa, id_nazwy, klasa, id_klasy, avatar, id_avatara, sanity, iq, zdane_lata, czy_aktywny, ekwipunek, kolor_gracza) {
        this.id_html = id_html;
        this.nazwa = nazwa;
        this.id_nazwy = id_nazwy;
        this.klasa = klasa;
        this.id_klasy = id_klasy;
        this.avatar = avatar;
        this.id_avatara = id_avatara;
        this.sanity = sanity;
        this.iq = iq;
        this.zdane_lata = zdane_lata;
        this.czy_aktywny = czy_aktywny;
        this.ekwipunek = ekwipunek;
        this.podszedl_do_egzaminu = [];
        this.hajs = 30;
        this.czy_na_terapii = false;
        this.zdane_zawodowe = 0;
        this.zdane_ogolne = 0;
        this.zdany_polski_i_angielski = 0;
        this.zdana_matematyka = 0;
        this.czy_zdaje = true;
        this.ile_rund_temu_byl_na_terapii = 0;
        this.kolor_gracza = kolor_gracza;
        this.ilosc_rund_blokady_mobidziennika = 0;
        this.pietro = document.getElementById('schemat_parter');
    }
}

class klasa {
    constructor(nazwa) {
        this.nazwa = nazwa;
    }
}

const klasa_a = new klasa('automatyk');
const klasa_e = new klasa('elektronik');
const klasa_f = new klasa('fotograf');
const klasa_i = new klasa('informatyk');
const klasa_p = new klasa('programista');
const klasa_r = new klasa('robotyk');
const klasa_t = new klasa('teleinformatyk');
const klasy = [klasa_a, klasa_e, klasa_f, klasa_i, klasa_p, klasa_r, klasa_t];

//Obiekty 4 graczy i ich domyślne warotści
const gracz1 = new gracz("gracz1", null, 0, klasa_a, 0, null, 0, 100, 100, 0, false, [], "#FA1E27");
const gracz2 = new gracz("gracz2", null, 0, klasa_a, 0, null, 0, 100, 100, 0, false, [], '#00A2E8');
const gracz3 = new gracz("gracz3", null, 0, klasa_a, 0, null, 0, 100, 100, 0, false, [], '#22B14C');
const gracz4 = new gracz("gracz4", null, 0, klasa_a, 0, null, 0, 100, 100, 0, false, [], '#FFF200');

const gracze = [gracz1, gracz2, gracz3, gracz4];

//menu wyboru gracza i wszystkie jego funcje
class menu_graczy {
    constructor(id_menu, id_gracza, id_rozwin, id_zwin, id_losuj_nazwe, id_nazwa, id_klasa_lewo, id_klasa, id_klasa_prawo, id_avatar_lewo, id_avatar, id_avatar_prawo) {
        // to coś powoduje można się odwoływać do tych elementów o wartościach dla konkretnych graczy wewnątrz obieków
        this.id_menu = id_menu;
        this.id_gracza = id_gracza;
        this.id_rozwin = id_rozwin;
        this.id_zwin = id_zwin;
        this.id_losuj_nazwe = id_losuj_nazwe;
        this.id_nazwa = id_nazwa;
        this.id_klasa_lewo = id_klasa_lewo;
        this.id_klasa = id_klasa;
        this.id_klasa_prawo = id_klasa_prawo;
        this.id_avatar_lewo = id_avatar_lewo;
        this.id_avatar = id_avatar;
        this.id_avatar_prawo = id_avatar_prawo;

        let losowa_liczba = Math.floor(Math.random() * nazwy.length);
        let wylosowane_imie = nazwy[losowa_liczba];
        document.getElementById(this.id_nazwa).value = wylosowane_imie;
        gracze[this.id_gracza].nazwa = wylosowane_imie;
        gracze[this.id_gracza].id_nazwy = losowa_liczba;

        let rezultat = avatary[gracze[this.id_gracza].id_avatara];
        document.getElementById(this.id_avatar).src = rezultat;
        gracze[this.id_gracza].avatar = rezultat;

        document.getElementById(this.id_klasa).value = gracze[this.id_gracza].klasa.nazwa;
    }
    //Strzałka w prawo zmienia klasę na następną w tablicy
    klasa_prawo() {
        if (gracze[this.id_gracza].id_klasy == klasy.length - 1) gracze[this.id_gracza].id_klasy = 0;
        else gracze[this.id_gracza].id_klasy += 1;
        let rezultat = klasy[gracze[this.id_gracza].id_klasy];
        document.getElementById(this.id_klasa).value = rezultat.nazwa;
        gracze[this.id_gracza].klasa = rezultat;
        sfx_menu.play();
    }
    //Strzałka w lewo zmienia klasę na poprzednią w tablicy
    klasa_lewo() {
        if (gracze[this.id_gracza].id_klasy == 0) gracze[this.id_gracza].id_klasy = klasy.length - 1;
        else gracze[this.id_gracza].id_klasy -= 1;
        let rezultat = klasy[gracze[this.id_gracza].id_klasy];
        document.getElementById(this.id_klasa).value = rezultat.nazwa;
        gracze[this.id_gracza].klasa = rezultat;
        sfx_menu.play();
    }
    //Strzałka w lewo zmienia avatar na poprzedni w tablicy
    avatar_lewo() {
        if (gracze[this.id_gracza].id_avatara == 0) gracze[this.id_gracza].id_avatara = avatary.length - 1;
        else gracze[this.id_gracza].id_avatara -= 1;
        let rezultat = avatary[gracze[this.id_gracza].id_avatara];
        document.getElementById(this.id_avatar).src = rezultat;
        gracze[this.id_gracza].avatar = rezultat;
        sfx_menu.play();
    }
    //Strzałka w prawo zmienia avatar na następny w tablicy
    avatar_prawo() {
        if (gracze[this.id_gracza].id_avatara == avatary.length - 1) gracze[this.id_gracza].id_avatara = 0;
        else gracze[this.id_gracza].id_avatara += 1;
        let rezultat = avatary[gracze[this.id_gracza].id_avatara];
        document.getElementById(this.id_avatar).src = rezultat;
        gracze[this.id_gracza].avatar = rezultat;
        sfx_menu.play();
    }
    //losowanie nazwy dla gracza z tablicy nazw
    losowanie_nazwy() {
        let losowa_liczba = Math.floor(Math.random() * nazwy.length);
        let wylosowane_imie = nazwy[losowa_liczba];
        document.getElementById(this.id_nazwa).value = wylosowane_imie;
        gracze[this.id_gracza].nazwa = wylosowane_imie;
        gracze[this.id_gracza].id_nazwy = losowa_liczba;
        sfx_menu.play();
    }
    //Rozwijanie menu gracza po kliknięciu przycisku plus
    rozwin_menu() {
        document.getElementById(this.id_menu).style.display = 'block';
        document.getElementById(this.id_rozwin).style.display = 'none';
        gracze[this.id_gracza].czy_aktywny = true;
        sfx_menu.play();
    }
    //Zwijanie menu gracza po kliknięciu przycisku X
    zwin_menu() {
        document.getElementById(this.id_menu).style.display = 'none';
        document.getElementById(this.id_rozwin).style.display = 'block';
        gracze[this.id_gracza].czy_aktywny = false;
        sfx_menu.play();
    }
}

const menu_gracz1 = new menu_graczy('menu_gracza1', 0, 'rozwin1', 'zwijanie1', 'los_nazwy1', 'nazwa_gracza1_menu', 'klasa_lewo1', 'klasa1_menu', 'klasa_prawo1', 'avatar_lewo1', 'avatar1_menu', 'avatar_prawo1');
const menu_gracz2 = new menu_graczy('menu_gracza2', 1, 'rozwin2', 'zwijanie2', 'los_nazwy2', 'nazwa_gracza2_menu', 'klasa_lewo2', 'klasa2_menu', 'klasa_prawo2', 'avatar_lewo2', 'avatar2_menu', 'avatar_prawo2');
const menu_gracz3 = new menu_graczy('menu_gracza3', 2, 'rozwin3', 'zwijanie3', 'los_nazwy3', 'nazwa_gracza3_menu', 'klasa_lewo3', 'klasa3_menu', 'klasa_prawo3', 'avatar_lewo3', 'avatar3_menu', 'avatar_prawo3');
const menu_gracz4 = new menu_graczy('menu_gracza4', 3, 'rozwin4', 'zwijanie4', 'los_nazwy4', 'nazwa_gracza4_menu', 'klasa_lewo4', 'klasa4_menu', 'klasa_prawo4', 'avatar_lewo4', 'avatar4_menu', 'avatar_prawo4');

const tablica_menu = [menu_gracz1, menu_gracz2, menu_gracz3, menu_gracz4];

/*
function dodaj_sluchacza(przycisk,funkcja){
    for (let i = 0; i < liczba_graczy; i++) {
        let obiekt = document.getElementById(tablica_menu[i].przycisk);
        obiekt.addEventListener("click", () => tablica_menu[i].funkcja());
    }
}
*/


//Dodanie event listenerów do przycisków w menu graczy

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_rozwin);
    obiekt.addEventListener("click", () => tablica_menu[i].rozwin_menu());
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_zwin);
    obiekt.addEventListener("click", () => tablica_menu[i].zwin_menu());
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_losuj_nazwe);
    obiekt.addEventListener("click", () => tablica_menu[i].losowanie_nazwy());
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_klasa_prawo);
    obiekt.addEventListener("click", () => tablica_menu[i].klasa_prawo());
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_klasa_lewo);
    obiekt.addEventListener("click", () => tablica_menu[i].klasa_lewo());
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_avatar_lewo);
    obiekt.addEventListener("click", () => tablica_menu[i].avatar_lewo());
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_avatar_prawo);
    obiekt.addEventListener("click", () => tablica_menu[i].avatar_prawo());
}

//Przycisk Start
const przycisk_start = document.getElementById('start');
const ekran_startowy = document.getElementById('ekran_startowy');
const gra = document.getElementById('gra');

const czarniejacy_ekran1 = document.getElementById('czarniejacy_ekran1');

let czy_kliknieto = false;

//Powoduje że menu znika i pojawia się ekran gry
function start_gry(ekran_znikajacy, ekran_pojawiajacy) {
    if (!czy_kliknieto) {
        //Tworzy tabelę aktywnych graczy
        for (let i of gracze) {
            if (i.czy_aktywny) {
                menedzer_gry.aktywni_gracze.push(i);
            }
        }

        //Sprawdza czy przynajmniej jeden gracz jest aktywny
        if (!menedzer_gry.aktywni_gracze.length) {
            alert("Musi być przynajmniej jeden gracz");
            return 0;
        }

        czy_kliknieto = true;

        for (i of gracze) {
            let avatar = "url('" + i.avatar + "')";
            document.getElementById(i.id_html).style.backgroundImage = avatar;
        }

        slider_muzyka2.value = glosnosc_muzyki.value;
        glosnosc_muzyki2.value = glosnosc_muzyki.value;
        slider_sfx2.value = glosnosc_sfx.value;
        glosnosc_sfx2.value = glosnosc_sfx.value;

        czarniejacy_ekran1.style.zIndex = 1;
        czarniejacy_ekran1.style.animationPlayState = 'running';
        muzyka_menu.pause();
        muzyka_menu.currentTime = 0;
        setTimeout(() => start_gry_naprawde(ekran_znikajacy, ekran_pojawiajacy), 3000);
    }
}

function start_gry_naprawde(ekran_znikajacy, ekran_pojawiajacy) {
    znikniecie_ekranu(tlo_menu_glowne);
    zmiana_ekranu(ekran_znikajacy, ekran_pojawiajacy);
    muzyka_gra.play()
    menedzer_gry.poczatek_tury();
}
const menu_statystyk = document.getElementById('menu_statystyk');
const tura_wszystkich_ekran = document.getElementById('wszyscy_gracze');

function tura_wszystkich_pokaz() {
    tura_wszystkich_ekran.style.display = 'flex';
    menu_statystyk.style.filter = 'blur(3px)';
}

function tura_wszystkich_schowaj() {
    tura_wszystkich_ekran.style.display = 'none';
    menu_statystyk.style.filter = 'none';
}

//Event listner przycisku Start
przycisk_start.addEventListener('click', () => start_gry(ekran_startowy, gra));

const tresc = document.getElementById('tresc');
const odpowiedzi_przyciski = Array.prototype.slice.call(document.getElementsByClassName('odpowiedz'));




const pytanie_testowe = new pytanie('2 + 2 = ?', ['4', '2', '3', '5']);
const ekran_gry = document.getElementById("ekran_gry");
const ekran_pytania = document.getElementById("ekran_pytania");
const ekran_nagrody = document.getElementById("ekran_nagrody");
const ilosc_pytan = document.getElementById("ilosc_pytan");
const ilosc_poprawnych_odpowiedzi = document.getElementById("ilosc_poprawnych_odpowiedzi");
const ocena = document.getElementById("ocena");
const zmiana_sanity = document.getElementById("zmiana_sanity");
const zakoncz_ture = document.getElementById('zakoncz_ture');
const przejdz_dalej_pytanie = document.getElementById('przejdz_dalej_pytanie');

function rozpocznij_pytania() {
    if(!menedzer_gry.czy_jest_konkurs1 && !menedzer_gry.czy_jest_konkurs2 && !menedzer_gry.czy_jest_prezydent){
        muzyka_gra.pause();
        if(menedzer_gry.runda_egzamin){
            muzyka_matury.play();
        }
        else{
            muzyka_pytanie.play();
        }
    }
    zmiana_ekranu(ekran_dialogu, ekran_pytania);
    menedzer_gry.czy_poprawne_odpowiedzi = [];
    menedzer_gry.ile_jeszcze_pytan = menedzer_gry.ilosc_pytan;
    pokaz_pytanie();
}

function pokaz_pytanie() {
    //console.log(menedzer_gry.pytania_kandydujace);
    menedzer_gry.czy_odpowiedziano = false;
    let indeks_pytania = Math.floor(Math.random() * menedzer_gry.pytania_kandydujace.length);
    menedzer_gry.pytanie = menedzer_gry.pytania_kandydujace[indeks_pytania];
    menedzer_gry.pytania_kandydujace.splice(indeks_pytania, 1);
    menedzer_gry.ile_jeszcze_pytan--;

    tresc.innerHTML = menedzer_gry.pytanie.tresc;
    let mozliwe_indeksy = [0, 1, 2, 3];
    przemieszaj_tablice(mozliwe_indeksy);
    for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
        odpowiedzi_przyciski[i].innerHTML = menedzer_gry.pytanie.odpowiedzi[mozliwe_indeksy[i]];
        odpowiedzi_przyciski[i].dataset.czy_poprawna = (mozliwe_indeksy[i] == 0);
    }

    for (let i of odpowiedzi_przyciski) {
        i.style.color = '';
    }

    // do debugowania
    for (let przycisk of odpowiedzi_przyciski) {
        if (przycisk.dataset.czy_poprawna == 'true') {
            console.log(przycisk.dataset.etykieta);
            break;
        }
    }
}

function kolejne_pytanie(i) {
    if (!menedzer_gry.czy_odpowiedziano) {
        if (odpowiedzi_przyciski[i].dataset.czy_poprawna == 'true') {
            menedzer_gry.czy_poprawne_odpowiedzi.push(true);
        }
        else {
            menedzer_gry.czy_poprawne_odpowiedzi.push(false);
        }
        if (menedzer_gry.ile_jeszcze_pytan == 0) {
            koniec_pytan();
        }
        else {
            pokaz_pytanie();
        }
    }
}

function koniec_pytan() {
    if (menedzer_gry.ilosc_pytan == 1) {
        menedzer_gry.czy_odpowiedziano = true;
        for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
            if (odpowiedzi_przyciski[i].dataset.czy_poprawna == 'true') {
                odpowiedzi_przyciski[i].style.color = "lightgreen";
            }
            else {
                odpowiedzi_przyciski[i].style.color = "red";
            }
        }
        przejdz_dalej_pytanie.style.display = 'block';
    }
    else {
        tresc.style.display = 'none';
        for (let i of odpowiedzi_przyciski) {
            i.style.display = 'none';
        }
        wyswietl_ekran_nagrody();
    }

    if(!menedzer_gry.czy_jest_konkurs1 && !menedzer_gry.czy_jest_konkurs2 && !menedzer_gry.czy_jest_prezydent){
        muzyka_gra.play();
        if(menedzer_gry.runda_egzamin){
            muzyka_matury.pause();
            muzyka_matury.currentTime = 0;
        }
        else{
            muzyka_pytanie.pause();
            muzyka_pytanie.currentTime = 0;
        }
    }
}

function wyswietl_ekran_nagrody() {
    ekran_nagrody.style.visibility = "visible";
    ilosc_pytan.value = menedzer_gry.ilosc_pytan;
    ilosc_poprawnych_odpowiedzi.value = menedzer_gry.czy_poprawne_odpowiedzi.filter(x => x == true).length;
    wypisywana_ocena = menedzer_gry.czy_poprawne_odpowiedzi.filter(x => x == true).length * 100 / menedzer_gry.ilosc_pytan;
    if (menedzer_gry.runda_egzamin) {
        if (wypisywana_ocena < 50) {
            menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].czy_zdaje = false;
        }
    }
    if (wypisywana_ocena >= 50) {
        if (menedzer_gry.przedmiot_szkolny.nazwa == polski.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == angielski.nazwa) {
            menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdany_polski_i_angielski++;
        }
        if (menedzer_gry.przedmiot_szkolny.nazwa == matematyka.nazwa) {
            menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdana_matematyka++;
        }
        if (menedzer_gry.przedmiot_szkolny.nazwa == geografia.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == biologia.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == informatyka.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == fizyka.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == chemia.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == historia.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == niemiecki.nazwa) {
            menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_ogolne++;
        }
        if (menedzer_gry.przedmiot_szkolny.nazwa == programista.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == elektronik.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == automatyk.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == teleinformatyk.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == robotyk.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == fotograf.nazwa || menedzer_gry.przedmiot_szkolny.nazwa == informatyk.nazwa) {
            menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_zawodowe++;
        }
        if (menedzer_gry.czy_jest_prezydent && wypisywana_ocena >= 60) {
            menedzer_gry.czy_quiz_prezydenta_zdany = true;
        }
        if (menedzer_gry.czy_jest_konkurs1 && wypisywana_ocena >= 60) {
            menedzer_gry.czy_konkurs1_wygrany = true;
        }
        if (menedzer_gry.czy_jest_konkurs2 && wypisywana_ocena >= 60) {
            menedzer_gry.czy_konkurs2_wygrany = true;
        }
        sfx_poprawnie.play();
    }
    else{
        sfx_zle.play();
    }
    ocena.value = wypisywana_ocena + '%';
    if (!menedzer_gry.czy_jest_prezydent && !menedzer_gry.czy_jest_konkurs1 && !menedzer_gry.czy_jest_konkurs2) zmiana_sanity.value = (menedzer_gry.czy_poprawne_odpowiedzi.filter(x => x == true).length) * 5 + (menedzer_gry.czy_poprawne_odpowiedzi.filter(x => x == false).length) * (-30);
    else zmiana_sanity.value = 0;
    /*
ekran_nagrody.innerHTML = "Ilość pytań: 1 <br> Ilość poprawnych odpowiedzi: " + (czy_poprawna_odpowiedz ? '1' : '0') + "<br> Procenty: " + (czy_poprawna_odpowiedz ? '100%' : '0%') + "<br>Twoje sanity zmieniło się o " + (czy_poprawna_odpowiedz ? '+10' : '-20');*/
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].sanity += Number(zmiana_sanity.value);
    zaktualizuj_sanity();
    zmiana_sanity.value = (zmiana_sanity.value >= 0 ? '+' : '') + zmiana_sanity.value;
    zakoncz_ture.style.display = 'block';
    przejdz_dalej_pytanie.style.display = 'none';
}

function odwroc_pokaz_pytanie() {//ukrywa pytanie
    zmiana_ekranu(ekran_pytania, mapa);
    ekran_nagrody.style.visibility = 'hidden';
    zakoncz_ture.style.display = 'none';
    tresc.style.display = 'block';
    for (let i of odpowiedzi_przyciski) {
        i.style.display = 'block';
        i.style.color = "white";
    }
    if (menedzer_gry.czy_jest_prezydent) koniec_sceny_prezydenta();
    else if (menedzer_gry.czy_jest_konkurs1) koniec_konkursu();
    else if (menedzer_gry.czy_jest_konkurs2) koniec_konkursu_gwary_poznanskiej();
    else menedzer_gry.poczatek_tury();


}

function przemieszaj_tablice(tablica) {
    for (let i = tablica.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tablica[i], tablica[j]] = [tablica[j], tablica[i]];
    }
}

for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
    odpowiedzi_przyciski[i].addEventListener("click", () => kolejne_pytanie(i));
}
zakoncz_ture.addEventListener("click", () => odwroc_pokaz_pytanie());
przejdz_dalej_pytanie.addEventListener('click', () => wyswietl_ekran_nagrody())

//setTimeout(() => pokaz_pytanie(pytanie_testowe, ekran_gry, ekran_pytania), 3000);

const tlo_ekran_poczatkowy = document.getElementById('tlo_ekran_poczatkowy');
const ekran_logo = document.getElementById('ekran_logo');

let czy_kliknieto2 = false;

function pokaz_menu_startowe(ekran_znikajacy, ekran_pojawiajacy) {
    for (let i of muzyka) i.volume = 0.1;
    for (let i of sfx) i.volume = 0.1;
    sfx_poczatek.play();
    if (!czy_kliknieto2) {
        czy_kliknieto2 = true;
        ekran_znikajacy.style.animationPlayState = 'running';
        setTimeout(() => pokaz_menu_naprawde(ekran_znikajacy, ekran_pojawiajacy), 3000);
    }
}

function pokaz_menu_naprawde(ekran_znikajacy, ekran_pojawiajacy) {
    pojawienie_ekranu(tlo_menu_glowne);
    zmiana_ekranu(ekran_znikajacy, ekran_pojawiajacy);
    tlo_ekran_poczatkowy.style.display = "none";
    muzyka_menu.play();
}

ekran_logo.addEventListener('click', () => pokaz_menu_startowe(ekran_logo, ekran_startowy));

//audio definiuje się w html'u:
//<audio id = "audio_id">
//  <source src="sfx/Bruh sound effect.ogg" type="audio/ogg">
//  <source src="sfx/Bruh sound effect.mp3" type="audio/mpeg">
//</audio>
//(oczywiście trzeba jeszcze wstawić plik dźwiękowy do folderu gry)

//żeby zdefiniować audio zapętlone, daje się parametr loop do definicji audio w html'u:
//<audio id = "audio_id" loop>
//  <source src="sfx/Bruh sound effect.ogg" type="audio/ogg">
//  <source src="sfx/Bruh sound effect.mp3" type="audio/mpeg">
//</audio>

//element audio do javascript'a można wziąć po id
//audio1 = document.getElementById('audio_id');

//żeby wystartować audio:
//audio1.play();

//żeby zatrzymać audio:
//audio1.pause();
//audio1.currentTime = 0; (powoduje cofnięcie audio do początku)

//żeby zmienić audio można użyć dwóch powyższych:
//audio1.pause();
//audio1.currentTime = 0;
//audio2.play();

//żeby zmienić głośność można użyć:
//audio.volume = wartość
//gdzie 1 w wartości to 100%, a 0 - 0%

const sanity = document.getElementById('sanity');
const iq = document.getElementById('iq');
const zdane_lata = document.getElementById('zdane_lata');
const obecny_rok = document.getElementById('obecny_rok');
const nr_graczy = document.getElementsByClassName('nr_gracza');
const nazwy_gracza = document.getElementsByClassName('nazwa_gracza');
const klasy_graczy = document.getElementsByClassName('klasa_gracza');
const ekwipunek = document.getElementsByClassName('ekwipunek');
const pieniadze = document.getElementById('pieniadze');
const zdane_zawodowe = document.getElementById('obecnie_zdane_zawodowe');
const zdane_ogolne = document.getElementById('obecnie_zdane_ogolne');
const zdane_maturalne = document.getElementById('obecnie_zdane_maturalne');

const otwarte_menu = { statystyki: false, ustawienia: false };
const ustawienia2 = document.getElementById("ustawienia2");
const statystyki = document.getElementById('ekran_statystyk');

function obsluga_ustawien(statystyki, ustawienia) {
    if (!otwarte_menu.ustawienia) {
        zmiana_ekranu(statystyki, ustawienia);
        otwarte_menu.ustawienia = true;
        otwarte_menu.statystyki = false;
    }
    else {
        znikniecie_ekranu(ustawienia);
        otwarte_menu.ustawienia = false;
    }
}

const ustawienia = document.getElementById("ustawienia_menu_boczne");
ustawienia.addEventListener('click', () => obsluga_ustawien(statystyki, ustawienia2));

function obsluga_statystyk(ustawienia, statystyki) {
    if (!otwarte_menu.statystyki) {
        if (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ilosc_rund_blokady_mobidziennika <= 0) {
            zmiana_ekranu(ustawienia, statystyki);
            otwarte_menu.statystyki = true;
            otwarte_menu.ustawienia = false;
        }
        else {
            alert('mobidziennik jest zablokowany');
        }

    }
    else {
        znikniecie_ekranu(statystyki);
        otwarte_menu.statystyki = false;
    }
}



const statystyki_przycisk = document.getElementById("przycisk_statystyki");
statystyki_przycisk.addEventListener('click', () => obsluga_statystyk(ustawienia2, statystyki));

function debug() {
    //console.log("Debug się ładuje");
}


/*
let muzyka_glosnosc = 50;
function muzyka_zwieksz(){
    document.getElementById("audio_bruh").volume = muzyka_glosnosc/100;
}

function muzyka_zmniejsz(){
    document.getElementById("audio_bruh").volume = muzyka_glosnosc/100;
}
*/

const slider_muzyka = document.getElementById("muzyka_slider");
const glosnosc_muzyki = document.getElementById("muzyka_glosnosc");
glosnosc_muzyki.value = slider_muzyka.value;

const slider_sfx = document.getElementById("sfx_slider");
const glosnosc_sfx = document.getElementById("sfx_glosnosc");
glosnosc_sfx.value = slider_sfx.value;

const sfx = document.querySelectorAll(".sfx");
const muzyka = document.querySelectorAll(".muzyka");

slider_muzyka.oninput = function slider_muzyka_update() {
    glosnosc_muzyki.value = slider_muzyka.value;
    for (let i of muzyka) {
        i.volume = slider_muzyka.value / 100;
    }
}

slider_sfx.oninput = function slider_sfx_update() {
    glosnosc_sfx.value = slider_sfx.value;
    for (let i of sfx) {
        i.volume = slider_sfx.value / 100;
    }
}


const slider_muzyka2 = document.getElementById("muzyka_slider2");
const glosnosc_muzyki2 = document.getElementById("muzyka_glosnosc2");
const slider_sfx2 = document.getElementById("sfx_slider2");
const glosnosc_sfx2 = document.getElementById("sfx_glosnosc2");

slider_muzyka2.oninput = function slider_muzyka_update2() {
    glosnosc_muzyki2.value = slider_muzyka2.value;
    for (let i of muzyka) {
        i.volume = slider_muzyka2.value / 100;
    }
}

slider_sfx2.oninput = function slider_sfx_update2() {
    glosnosc_sfx2.value = slider_sfx2.value;
    for (let i of sfx) {
        i.volume = slider_sfx2.value / 100;
    }
}

function zmiana_ekranu(ekran_znikajacy, ekran_pojawiajacy) {
    znikniecie_ekranu(ekran_znikajacy);
    pojawienie_ekranu(ekran_pojawiajacy);
}

function pojawienie_ekranu(ekran_pojawiajacy) {
    ekran_pojawiajacy.style.display = "flex";
}

function znikniecie_ekranu(ekran_znikajacy) {
    ekran_znikajacy.style.display = "none";
}

const sala_przyciski = document.getElementsByClassName('przycisk_sala');
const mapa_przyciski = document.getElementsByClassName('przycisk_mapa');

class przedmiot_szkolny {
    constructor(nazwa, pytania, pytania_egzamin, dialogi) {
        this.nazwa = nazwa;
        this.pytania = pytania;
        this.pytania_egzamin = pytania_egzamin;
        this.dialogi = dialogi;
    }
}

class sala {
    constructor(nr, klasa = null, przedmiot, rodzaj_sali) {
        this.nr = nr;
        this.klasa = klasa; //klasa jest tylko do sala zawodowych
        this.przedmiot = przedmiot;
        this.rodzaj_sali = rodzaj_sali;
    }

    pokaz_sale() {
        let rok = 'rok_' + (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_lata + 1);
        if (menedzer_gry.runda_egzamin) {
            if (this.przedmiot.pytania_egzamin[rok] != null && (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].klasa.nazwa == this.klasa || menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_lata == 4) && !menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].podszedl_do_egzaminu.includes(this.przedmiot.nazwa)) {
                if (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_lata == 4) {
                    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].podszedl_do_egzaminu.push(this.przedmiot.nazwa);
                }
                this.pokaz_sale_naprawde(this.przedmiot.pytania_egzamin, rok);
            }
            else {
                alert('egzamin - nie wchodzić, jeśli nie zdajesz tutaj');
            }
        }
        else {
            if (this.rodzaj_sali == 'zawodowa') {
                if (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].klasa.nazwa == this.klasa) {
                    this.pokaz_sale_naprawde(this.przedmiot.pytania, rok);
                }
                else {
                    alert('sala zawodowa - nie wchodzić, jeśli nie jesteś odpowiedniego zawodu');
                }
            }
            else {
                this.pokaz_sale_naprawde(this.przedmiot.pytania, rok);
            }
        }
    }

    pokaz_sale_naprawde(pytania, rok) {
        menedzer_gry.przedmiot_szkolny = this.przedmiot;
        menedzer_gry.pytania_kandydujace = pytania[rok].slice(0);
        menedzer_gry.ilosc_pytan = (!menedzer_gry.runda_egzamin ? 1 : (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_lata == 3 ? 5 : 7));
        if (menedzer_gry.runda_egzamin) {
            znikniecie_ekranu(mapa);
            rozpocznij_pytania();
        }
        else {
            pokaz_dialog();
        }
    }
}

class zestaw_pytan {
    constructor(rok_1, rok_2, rok_3, rok_4, rok_5) {
        this.rok_1 = rok_1;
        this.rok_2 = rok_2;
        this.rok_3 = rok_3;
        this.rok_4 = rok_4;
        this.rok_5 = rok_5;
    }
}

class zestaw_pytan_egzamin {
    constructor(rok_4 = null, rok_5 = null) {
        this.rok_4 = rok_4;
        this.rok_5 = rok_5;
    }
}

class dialog_nielosowy {
    constructor(opis) {
        this.opis = opis;
    }
};

const programista = new przedmiot_szkolny('programista', new zestaw_pytan(
    rok1_programista, rok2_programista, rok3_programista, rok4_programista, rok5_programista
), new zestaw_pytan_egzamin(
    egzamin_programista, null
), dialogi_programista);
const elektronik = new przedmiot_szkolny('elektronik', new zestaw_pytan(
    rok1_elektronik, rok2_elektronik, rok3_elektronik, rok4_elektronik, rok5_elektronik
), new zestaw_pytan_egzamin(
    egzamin_elektronik, null
), dialogi_elektronik);
const automatyk = new przedmiot_szkolny('automatyk', new zestaw_pytan(
    rok1_automatyk, rok2_automatyk, rok3_automatyk, rok4_automatyk, rok5_automatyk
), new zestaw_pytan_egzamin(
    egzamin_automatyk, null
), dialogi_automatyk);
const fotograf = new przedmiot_szkolny('fotograf', new zestaw_pytan(
    rok1_fotograf, rok2_fotograf, rok3_fotograf, rok4_fotograf, rok5_fotograf
), new zestaw_pytan_egzamin(
    egzamin_fotograf, null
), dialogi_fotograf);
const teleinformatyk = new przedmiot_szkolny('teleinformatyk', new zestaw_pytan(
    rok1_teleinformatyk, rok2_teleinformatyk, rok3_teleinformatyk, rok4_teleinformatyk, rok5_teleinformatyk
), new zestaw_pytan_egzamin(
    egzamin_teleinformatyk, null
), dialogi_teleinformatyk);
const informatyk = new przedmiot_szkolny('informatyk', new zestaw_pytan(
    rok1_informatyk, rok2_informatyk, rok3_informatyk, rok4_informatyk, rok5_informatyk
), new zestaw_pytan_egzamin(
    egzamin_informatyk, null
), dialogi_informatyk);
const robotyk = new przedmiot_szkolny('robotyk', new zestaw_pytan(
    rok1_robotyk, rok2_robotyk, rok3_robotyk, rok4_robotyk, rok5_robotyk
), new zestaw_pytan_egzamin(
    egzamin_robotyk, null
), dialogi_robotyk);
const matematyka = new przedmiot_szkolny('matematyka', new zestaw_pytan(
    rok1_matematyka, rok2_matematyka, rok3_matematyka, rok4_matematyka, rok5_matematyka
), new zestaw_pytan_egzamin(
    null, egzamin_matematyka
), dialogi_matematyka);
const geografia = new przedmiot_szkolny('geografia', new zestaw_pytan(
    rok1_geografia, rok2_geografia, rok3_geografia, rok4_geografia, rok5_geografia
), new zestaw_pytan_egzamin(), dialogi_geografia);
const biologia = new przedmiot_szkolny('biologia', new zestaw_pytan(
    rok1_biologia, rok2_biologia, rok3_biologia, rok4_biologia, rok5_biologia
), new zestaw_pytan_egzamin(), dialogi_biologia);
const polski = new przedmiot_szkolny('polski', new zestaw_pytan(
    rok1_polski, rok2_polski, rok3_polski, rok4_polski, rok5_polski
), new zestaw_pytan_egzamin(
    null, egzamin_polski
), dialogi_polski);
const informatyka = new przedmiot_szkolny('informatyka', new zestaw_pytan(
    rok1_informatyka, rok2_informatyka, rok3_informatyka, rok4_informatyka, rok5_informatyka
), new zestaw_pytan_egzamin(), dialogi_informatyka);
const historia = new przedmiot_szkolny('historia', new zestaw_pytan(
    rok1_historia, rok2_historia, rok3_historia, rok4_historia, rok5_historia
), new zestaw_pytan_egzamin(), dialogi_historia);
const angielski = new przedmiot_szkolny('angielski', new zestaw_pytan(
    rok1_angielski, rok2_angielski, rok3_angielski, rok4_angielski, rok5_angielski
), new zestaw_pytan_egzamin(
    null, egzamin_angielski
), dialogi_angielski);
const niemiecki = new przedmiot_szkolny('niemiecki', new zestaw_pytan(
    rok1_niemiecki, rok2_niemiecki, rok3_niemiecki, rok4_niemiecki, rok5_niemiecki
), new zestaw_pytan_egzamin(), dialogi_niemiecki);
const chemia = new przedmiot_szkolny('chemia', new zestaw_pytan(
    rok1_chemia, rok2_chemia, rok3_chemia, rok4_chemia, rok5_chemia
), new zestaw_pytan_egzamin(), dialogi_chemia);
const fizyka = new przedmiot_szkolny('fizyka', new zestaw_pytan(
    rok1_fizyka, rok2_fizyka, rok3_fizyka, rok4_fizyka, rok5_fizyka
), new zestaw_pytan_egzamin(), dialogi_fizyka);
const prezydent = new przedmiot_szkolny('prezydent', new zestaw_pytan(prezydent_pytania), new zestaw_pytan_egzamin(), [new dialog(['Dialog prezydent który nie powinien się wyświetlać'])]);
const konkurs_ZSK_1 = new przedmiot_szkolny('prezydent', new zestaw_pytan(konkurs_ZSK_1_pytania), new zestaw_pytan_egzamin(), [new dialog(['Dialog prezydent który nie powinien się wyświetlać'])]);
const konkurs_ZSK_2 = new przedmiot_szkolny('prezydent', new zestaw_pytan(konkurs_ZSK_2_pytania), new zestaw_pytan_egzamin(), [new dialog(['Dialog prezydent który nie powinien się wyświetlać'])]);

const s_018 = new sala('018', 'programista', programista, 'zawodowa');
const s_030 = new sala('030', 'elektronik', elektronik, 'zawodowa');
const s_029 = new sala('029', 'automatyk', automatyk, 'zawodowa');
const s_026 = new sala('026', 'fotograf', fotograf, 'zawodowa');
const s_013 = new sala('013', 'teleinformatyk', teleinformatyk, 'zawodowa');
const s_015 = new sala('015', 'informatyk', informatyk, 'zawodowa');
const s_021 = new sala('021', 'robotyk', robotyk, 'zawodowa',);
const s_206 = new sala('206', null, matematyka, 'ogólna');
const s_202 = new sala('202', null, geografia, 'ogólna');
const s_201 = new sala('201', null, biologia, 'ogólna');
const s_103 = new sala('103', null, polski, 'ogólna');
const s_102a = new sala('102a', null, informatyka, 'ogólna');
const s_19 = new sala('19', null, historia, 'ogólna');
const s_036 = new sala('036', null, angielski, 'ogólna');
const s_22 = new sala('22', null, niemiecki, 'ogólna');
const s_211 = new sala('211', null, chemia, 'ogólna');
const s_210 = new sala('210', null, fizyka, 'ogólna');
const sale = [s_018, s_030, s_029, s_026, s_013, s_015, s_021, s_206, s_202, s_201, s_103, s_102a, s_19, s_036, s_22, s_211, s_210];



for (let i = 0; i < sale.length; i++) {
    for (let j = 0; j < sala_przyciski.length; j++) {
        if (sala_przyciski[j].id == sale[i].nr) {
            sala_przyciski[j].sala = sale[i];
            sala_przyciski[j].addEventListener('click', () => sale[i].pokaz_sale());
            break;
        }
    }
}

const ekran_dialogu = document.getElementById('ekran_dialogu');
const tekst_dialogu = document.getElementById('tekst_dialogu');
const przejdz_dalej_dialog = document.getElementById('przejdz_dalej_dialog');
const przejdz_dalej_nowy_rok = document.getElementById('przejdz_dalej_ekran_roku');
const zakoncz_dialog = document.getElementById('zakoncz_dialog');
const dialogi_nielosowe = [];


przejdz_dalej_nowy_rok.addEventListener('click', () => menedzer_gry.zniknij_ekran_konca_roku());



function pokaz_dialog() {
    if (menedzer_gry.indeks_gracza_ktory_dostaje_dialog_nielosowy != menedzer_gry.indeks_wybranego) {
        menedzer_gry.dialog = menedzer_gry.przedmiot_szkolny.dialogi[Math.floor(Math.random() * menedzer_gry.przedmiot_szkolny.dialogi.length)];
    }
    else {
        menedzer_gry.dialog = menedzer_gry.dialog_nielosowy;
    }
    zmiana_ekranu(mapa, ekran_dialogu);
    tekst_dialogu.innerHTML = menedzer_gry.dialog.opis;
}

function zniknij_dialog() {
    rozpocznij_pytania();
}

zakoncz_dialog.addEventListener('click', () => zniknij_dialog());

function zmien_pietro(mapa_znikajaca, mapa_pojawiajaca, zdarzenia) {
    zmiana_ekranu(mapa_znikajaca, mapa_pojawiajaca);
    menedzer_gry.pietro = mapa_pojawiajaca;
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].pietro = mapa_pojawiajaca;

    //sprawdza, czy zdarzenie ma wystąpić i jakie
    if (menedzer_gry.indeks_wybranego == menedzer_gry.indeks_gracza_ktory_dostaje_zdarzenie_nielosowe) {
        //console.log(menedzer_gry.zdarzenie_nielosowe_schody);
        menedzer_gry.zdarzenie = menedzer_gry.zdarzenie_nielosowe_schody;
        pokaz_zdarzenie();
        menedzer_gry.indeks_gracza_ktory_dostaje_zdarzenie_nielosowe = null;
        sfx_zdarzenie.play();
    }
    else if (menedzer_gry.ilosc_losowych_zdarzen > 0) {
        let losowa_liczba_zdarzenie = Math.floor(Math.random() * menedzer_gry.suma_szans_zdarzen);
        let suma = 0;
        for (let i of zdarzenia) {
            if (menedzer_gry.runda >= i.runda_startowa && (menedzer_gry.runda <= i.runda_koncowa || i.runda_koncowa == -1)) {
                suma += i.szansa;
                if (suma > losowa_liczba_zdarzenie) {
                    menedzer_gry.zdarzenie = i;
                    break;
                }
            }
        }
        pokaz_zdarzenie();
        sfx_zdarzenie.play();
    }
    else{
        sfx_schody.play();
    }
}

for (let przycisk of mapa_przyciski) {
    przycisk.addEventListener('click', () => zmien_pietro(przycisk.parentElement.parentElement, document.getElementById(przycisk.dataset.mapa), losowe_zdarzenia));
}

//let losowa_liczba_losowa = 0;

const sklep_przycisk = document.getElementById('przycisk_sklep');
const ekran_sklepu = document.getElementById('ekran_sklepu');
const sklep_obrazy_arsenalu = document.getElementsByClassName('sklep_arsenal_obraz');
const sklep_nazwy_arsenalu = document.getElementsByClassName('sklep_arsenal_nazwa');
const sklep_ceny_arsenalu = document.getElementsByClassName('sklep_arsenal_cena');
const sklep_kup = document.getElementsByClassName('sklep_kup')
const wyjdz_ze_sklepu = document.getElementById('wyjdz_ze_sklepu');

const sklep = {
    arsenal: [
        obiadek,
        baton_sinkers,
        guma_predkosc,
        sok_tymbork,
        paluszki,
        chipsy_gays
    ],
    pokaz: function () {
        zmiana_ekranu(mapa, ekran_sklepu);
    },
    kup: function (id_produktu) {
        if (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].hajs >= this.arsenal[id_produktu].cena) {
            menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].hajs -= this.arsenal[id_produktu].cena;
            alert('pomyślnie kupiono produkt');
            dodawanie_przedmiotu_do_ekwipunku(this.arsenal[id_produktu]);
            sfx_sklep.play();
        }
        else {
            alert('złodzieju, nie złodziejuj');
        }
    },
    znikniecie: function () {
        zmiana_ekranu(ekran_sklepu, mapa);
    }
}

sklep_przycisk.addEventListener('click', () => sklep.pokaz());
//setTimeout(() => sklep.pokaz(), 3000);

for (let i = 0; i < sklep.arsenal.length; i++) {
    sklep_obrazy_arsenalu[i].style.backgroundImage = 'url("' + sklep.arsenal[i].id_obrazu + '")';
    sklep_nazwy_arsenalu[i].innerHTML = sklep.arsenal[i].nazwa;
    sklep_ceny_arsenalu[i].innerHTML = sklep.arsenal[i].cena;
    sklep_kup[i].addEventListener('click', () => sklep.kup(i));
}

wyjdz_ze_sklepu.addEventListener('click', () => sklep.znikniecie());

function zmien_sanity() {
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].sanity += menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek[menedzer_gry.ostatni_pokazany_przedmiot].sanity;
    usun_przedmiot();
}

function sciagaj() {
    if (ekran_pytania.style.display == 'flex' && (ekran_nagrody.style.display == 'none' || odpowiedzi_przyciski[0].style.color == 'white' || odpowiedzi_przyciski[0].style.color == '' || odpowiedzi_przyciski[1].style.color == '' || odpowiedzi_przyciski[2].style.color == '' || odpowiedzi_przyciski[3].style.color == '')) {
        for (let i of odpowiedzi_przyciski) {
            if (i.dataset.czy_poprawna == 'true') {
                i.style.color = 'lightgreen';
            }
            else {
                i.style.color = 'red';
            }
        }
        usun_przedmiot();
    }
    else {
        alert("nie możesz teraz użyć tego przedmiotu");
    }
}

function usun_odpowiedzi(ilosc_odpowiedzi) {
    if (ekran_pytania.style.display == 'flex' && (ekran_nagrody.style.display == 'none' || (odpowiedzi_przyciski[0].style.color == '' && odpowiedzi_przyciski[1].style.color == '' && odpowiedzi_przyciski[2].style.color == '' && odpowiedzi_przyciski[3].style.color == ''))) {
        const odpowiedzi_kandydujace = odpowiedzi_przyciski.slice(0).filter(x => x.dataset.czy_poprawna == 'false');
        przemieszaj_tablice(odpowiedzi_kandydujace);
        for (let i = 0; i < ilosc_odpowiedzi; i++) {
            odpowiedzi_kandydujace[i].style.color = 'red';
        }
        usun_przedmiot();
    }
    else {
        alert("nie możesz teraz użyć tego przedmiotu");
    }
}

function losowe_usun_odpowiedzi(min_ilosc_odpowiedzi, max_ilosc_odpowedzi) {
    usun_odpowiedzi(Math.floor(Math.random() * (max_ilosc_odpowedzi - min_ilosc_odpowiedzi + 1) + min_ilosc_odpowiedzi))
}

function zablokuj_mobidziennik(ilosc_rund) {
    if (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ilosc_rund_blokady_mobidziennika < ilosc_rund) {
        menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ilosc_rund_blokady_mobidziennika = ilosc_rund;
        aktualizacja_menu_bocznego();
    }
}

function dodawanie_przedmiotu_do_ekwipunku(przedmiot, ilosc = 1, gracz_obdarowany = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego]) {
    for (let i = 0; i < ilosc; i++) {
        if (gracz_obdarowany.ekwipunek.length <= 8) {
            gracz_obdarowany.ekwipunek.push(przedmiot);
            zaktualizuj_ekwipunek();
            aktualizacja_menu_bocznego();
        }
        else {
            alert('Nie możesz mieć więcej niż 9 przedmiotów w ekwipunku, było ci za ciężko, więc wyrzyciłeś przedmiot do śmietnika');
            break;
        }
    }
}

function zaktualizuj_ekwipunek() {
    for (let i = 0; i < menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek.length; i++) {
        let sciezka = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek[i].id_obrazu;
        ekwipunek[i].style.backgroundImage = "url('" + sciezka + "')";
    }
}

function zaktualizuj_sanity() {
    let wartosc_sanity = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].sanity;
    sanity.style.color = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].kolor_gracza;

    if (wartosc_sanity <= 0) {
        wartosc_sanity = 0;
        menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].sanity = 0;
        alert('musisz pójść na terapię');
        menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].czy_na_terapii = true;
        menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ile_rund_temu_byl_na_terapii = 1;
        sanity.value = wartosc_sanity;
        if(ekran_pytania.style.display != 'flex'){ //naprawia jeden błąd
            menedzer_gry.poczatek_tury();
        }
    }
    else if (wartosc_sanity > 200) {
        wartosc_sanity = 200;
        menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].sanity = 200;
        sanity.value = wartosc_sanity;
    }
    else{
        sanity.value = wartosc_sanity;
    }
}

const ekran_koncowy = document.getElementById('ekran_koncowy');
const napisy_koncowe = document.getElementById('napisy_koncowe');
const ekran_koncowy_naprawde = document.getElementById('ekran_koncowy_naprawde');

function pojdz_do_sali_017() {
    menedzer_gry.czy_otwarto_017 = true;
    sfx_schody.play();
}

function wejdz_do_sali_017() {
    menedzer_gry.zdarzenie = porwanie_czosnowskiego2;
    pokaz_zdarzenie_nielosowe();
    sfx_schody.play();
}

function pojdz_do_biblioteki() {
    menedzer_gry.czy_otwarto_biblioteke = true;
    sfx_schody.play();
}

function wejdz_do_biblioteki() {
    menedzer_gry.zdarzenie = zly_dyrektor3;
    pokaz_zdarzenie_nielosowe();
}

document.getElementById('017').addEventListener('click', () => wejdz_do_sali_017());
document.getElementById('SCEM').addEventListener('click', () => wejdz_do_biblioteki());

const jak_grac = document.getElementById('jak_grac');
const ekran_jak_grac = document.getElementById('ekran_jak_grac');
const tak = document.getElementById('tak');//tak (tak)
const opis_jak_grac = document.getElementById('opis_jak_grac');
const przejdz_dalej_jak_grac = document.getElementById('przejdz_dalej_jak_grac')
const wylacz_jak_grac = document.getElementById('wylacz_jak_grac');
const tresc_jak_grac = ["url('grafiki/jak_grac/jak_grac1.png')", "url('grafiki/jak_grac/jak_grac2.png')", "url('grafiki/jak_grac/jak_grac3.png')", "url('grafiki/jak_grac/jak_grac4.png')", "url('grafiki/jak_grac/jak_grac5.png')", "url('grafiki/jak_grac/jak_grac6.png')", "url('grafiki/jak_grac/jak_grac7.png')"];
let indeks_tresci;

function otworz_jak_grac() {
    zmiana_ekranu(ekran_startowy, tak);
    ekran_jak_grac.style.backgroundImage = tresc_jak_grac[0];
    indeks_tresci = 0;
}

function przewin_jak_grac() {
    indeks_tresci++;
    ekran_jak_grac.style.backgroundImage = tresc_jak_grac[indeks_tresci];
    if (indeks_tresci >= tresc_jak_grac.length - 1) {
        zmiana_ekranu(przejdz_dalej_jak_grac, wylacz_jak_grac);
    }
}

function zamknij_jak_grac() {
    zmiana_ekranu(wylacz_jak_grac, przejdz_dalej_jak_grac);
    zmiana_ekranu(tak, ekran_startowy);
}

jak_grac.addEventListener('click', () => otworz_jak_grac());
przejdz_dalej_jak_grac.addEventListener('click', () => przewin_jak_grac());
wylacz_jak_grac.addEventListener('click', () => zamknij_jak_grac());

function usun_przedmiot() {
    znikniecie_szczegolow_przedmiotu();
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek.splice(menedzer_gry.ostatni_pokazany_przedmiot, 1);
    sfx_przedmiot.play();
    aktualizacja_menu_bocznego();
}

































const szczegoly_przedmiotu = document.getElementById("statystyki_przedmiotu");


for (let i = 0; i < ekwipunek.length; i++) {
    ekwipunek[i].addEventListener("click", () => pokaz_szczegoly_przedmiotu(i));
}

document.getElementById("zamknij_dokladny_opis_przedmiotu_w_ekwipunku_wybranego_gracza_majacego_teraz_ture_i_majacego_otwarte_menu_szegolow_przedmiotu").addEventListener("click", () => znikniecie_szczegolow_przedmiotu());

function znikniecie_szczegolow_przedmiotu() {
    znikniecie_ekranu(szczegoly_przedmiotu);
    pojawienie_ekranu(document.getElementById("caly_ekwipunek"));
}

function pokaz_szczegoly_przedmiotu(slot) {
    let wybrany_przedmiot = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek[slot];
    try {
        if (wybrany_przedmiot.id_obrazu != undefined) {
            znikniecie_ekranu(document.getElementById('caly_ekwipunek'));
            pojawienie_ekranu(szczegoly_przedmiotu);
            let nazwa = document.getElementById("nazwa_przedmiotu");
            let opis = document.getElementById("opis_przedmiotu");
            nazwa.innerHTML = wybrany_przedmiot.nazwa;
            opis.innerHTML = wybrany_przedmiot.opis;
            menedzer_gry.ostatni_pokazany_przedmiot = slot;
        }
    }
    catch { };
}

document.getElementById("uzyj_przedmiotu").addEventListener("click", () => uzyj_przedmiotu());


function uzyj_przedmiotu() {
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek[menedzer_gry.ostatni_pokazany_przedmiot].funkcja();
}

//Nie dotykać bo działa i nie wiemy dlaczego działa
//Łatwo zepsusć
function aktualizacja_menu_bocznego() {
    sklep.arsenal[2].sanity = Math.floor(Math.random() * 11) - 5;
    sklep.arsenal[4].sanity = Math.floor(Math.random() * 12);
    sklep.arsenal[5].sanity = (Math.random() > 1 / 2 ? 75 : -50);
    zaktualizuj_sanity();
    zdane_lata.value = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_lata;
    zdane_lata.style.color = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].kolor_gracza;
    pieniadze.value = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].hajs;
    pieniadze.style.color = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].kolor_gracza;
    obecny_rok.value = menedzer_gry.rok_gry;
    obecny_rok.style.color = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].kolor_gracza;


    zdane_ogolne.value = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_ogolne;
    zdane_zawodowe.value = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_zawodowe;
    zdane_maturalne.value = menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdany_polski_i_angielski + menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdana_matematyka;

    for (let i = 0; i < ekwipunek.length; i++) {
        if (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek.length > i) {
            ekwipunek[i].style.backgroundImage = "url('" + menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek[i].id_obrazu + "')";
        }
        else {
            ekwipunek[i].style.backgroundImage = '';
        }
    }
}




const ruch = {
    predkosc: 1,
    skok: function () {
        /*
        function klatka(gracz_id, cel, predkosc=10) {
            let gracz = document.getElementById(gracz_id);
            let cel_gora=parseFloat(cel.getBoundingClientRect().top);
            let cel_lewo=parseFloat(cel.getBoundingClientRect().left);
            let gracz_gora=parseFloat(gracz.getBoundingClientRect().top);
            let gracz_lewo=parseFloat(gracz.getBoundingClientRect().left);
            let akcja=false;

            let skok=1;
            if(gracz_lewo>cel_lewo){
                let x=(gracz_lewo-skok)+'px';
                gracz.style.left = x;
                akcja=true;
            }

            if (gracz_lewo < cel_lewo) {
                let x=(gracz_lewo+skok)+'px';
                gracz.style.left = x;
                akcja=true;
            }

            if (gracz_gora > cel_gora) {
                let y=(gracz_gora-skok)+'px';
                gracz.style.top = y;
                akcja=true;
            }

            if (gracz_gora < cel_gora) {
                let y=(gracz_gora+skok)+'px';
                gracz.style.top = y;
                akcja=true;

            }
            if(akcja)setTimeout(()=>(klatka(gracz_id, cel)),predkosc);

        }
        let przyciski=document.querySelectorAll(".sala");

        for(let i of przyciski){
            i.addEventListener("click",()=>(klatka("gracz1",i)));
        }
        */
    }
}



/*


function klatka(gracz_id, cel, predkosc=10) {
    let gracz = document.getElementById(gracz_id);
    let cel_gora=parseFloat(cel.getBoundingClientRect().top);
    let cel_lewo=parseFloat(cel.getBoundingClientRect().left);
    let gracz_gora=parseFloat(gracz.getBoundingClientRect().top);
    let gracz_lewo=parseFloat(gracz.getBoundingClientRect().left);
    let akcja=false;

    let skok=1;
    if(gracz_lewo>cel_lewo){
        gracz.style.left = (gracz_lewo-skok)+'px';
        akcja=true;
    }

    if (gracz_lewo < cel_lewo) {
        gracz.style.left = (gracz_lewo+skok)+'px';
        akcja=true;
    }

    if (gracz_gora > cel_gora) {
        gracz.style.top = (gracz_gora-skok)+'px';
        akcja=true;
    }

    if (gracz_gora < cel_gora) {
        gracz.style.top = (gracz_gora+skok)+'px';
        akcja=true;
    }
    if(akcja)setTimeout(()=>(klatka(gracz_id, cel)),predkosc);
}

*/



/*
let przyciski=document.querySelectorAll(".sala");

for(let i of przyciski){
    i.addEventListener("click",()=>(klatka("gracz1",i)));
}
*/



//co to ma być za heretyczny kod

//zgadzam się herezja po całości...

const sas = document.getElementById("start")

function jaki_gracz() {
    document.getElementById("nr_wybranego").innerText = gracze[0].id_html;
    document.getElementById("nazwa_wybranego").innerText = gracze[0].nazwa;
}

sas.addEventListener('click', () => jaki_gracz());