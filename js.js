//Debug czy na pewno js się wczytał niech tutaj zostanie, bo 2 razy poświęcenone 30 min na dowiedzenie się że tak naprawdę js się nie wczytał to dosyć
console.log("Java scrpit się wczytuje");

/*
gracz aktywny to taki który bierze udział w rozgrywce
gracz wybrany to taki który ma obecnie turę
*/

//Deklaracja menedżera gry, który menedżeruje grą
const menedzer_gry = {
    indeks_wybranego: -1,
    rok_gry: 1,
    aktywni_gracze: [],
    runda: 0,
    ilosc_losowych_zdarzen: 0,
    koniec_tury: function () {
        if (this.indeks_wybranego == this.aktywni_gracze.length - 1) {
            this.indeks_wybranego = 0;
        }
        else {
            this.indeks_wybranego++;
        }

        sanity.value = this.aktywni_gracze[this.indeks_wybranego].sanity;
        iq.value = this.aktywni_gracze[this.indeks_wybranego].iq;
        zdane_lata.value = this.aktywni_gracze[this.indeks_wybranego].zdane_lata;
        obecny_rok.value = this.aktywni_gracze[this.indeks_wybranego].obecny_rok;

        for (let i = 0; i < this.aktywni_gracze[this.indeks_wybranego].ekwipunek.length; i++) {
            let imagePath = this.aktywni_gracze[this.indeks_wybranego].ekwipunek[i].id_obrazu;
            console.log("Ścieżka obrazu:", imagePath);
            ekwipunek[i].style.backgroundImage = "url('" + imagePath + "')";
        }

        let i = 0;
        while (i < this.aktywni_gracze.length) {
            nr_graczy[i].value = (i + this.indeks_wybranego) % this.aktywni_gracze.length;
            nazwy_gracza[i].value = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].nazwa;
            klasy_graczy[i].value = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].klasa;
            i++;
        }

        if (this.indeks_wybranego == 0) {
            this.runda++;
        }

        if (Math.floor(Math.random() * 2 /*daj se jakąś liczbę*/) == 0) {
            this.ilosc_losowych_zdarzen = 1;
        }
        else {
            this.ilosc_losowych_zdarzen = 0;
        }

        if (this.runda % 10 == 0) {
            this.rok_gry++;
            for (let i of this.aktywni_gracze) {
                //warunek
                i.zdane_lata++;
            }
        }
    }
};


//Deklaracja tablic z nazwami klas i danymi zewnętrznych indeksów
const liczba_graczy = 4;
const nazwy = ["test0", "test1", "test2"];
const avatary = ["avatary/gigachad.png", "avatary/kujon.png", "avatary/pala.png", "avatary/gigachad.png", "avatary/spóźniony.png"];
const klasy = ["klasa0", "klasa1", "klasa2", "klasa3"];


class gracz {//gracz i wszystkie jego parametry
    constructor(id_html, nazwa, id_nazwy, klasa, id_klasy, avatar, id_avatara, sanity, iq, zdane_lata, czy_aktywny, ekwipunek) {
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
    }
}

class przedmiot {
    constructor(nazwa, opis, id_obrazu, obraz) {
        this.nazwa = nazwa;
        this.opis = opis;
        this.id_obrazu = id_obrazu;
    }
}

let ziemniak = new przedmiot("Ziemniak", "Legendarna bulwa o niesamowitych właściwościach i wysmienitym smaku, którego nie da się zapomnieć. Powoduje pasywne +2 sanity na turę. Po zjedzeniu na surowo gracz traci 20 sanity.", 'ziemniak.png', 'ziemniak.png');

//Obiekty 4 graczy i ich domyślne warotści
let gracz1 = new gracz("gracz1", null, 0, null, 0, null, 0, 100, 100, 0, false, [ziemniak]);
let gracz2 = new gracz("gracz2", null, 0, null, 0, null, 0, 100, 100, 0, false, ["piwo"]);
let gracz3 = new gracz("gracz3", null, 0, null, 0, null, 0, 100, 100, 0, false, ["latarka"]);
let gracz4 = new gracz("gracz4", null, 0, null, 0, null, 0, 100, 100, 0, false, ["mikrofalówka"]);

const gracze = [gracz1, gracz2, gracz3, gracz4];

//menu wyboru gracza i wszystkie jego funcje
class menu_graczy {
    constructor(id_menu, id_rozwin, id_zwin, id_losuj_nazwe, id_nazwa, id_klasa_lewo, id_klasa, id_klasa_prawo, id_avatar_lewo, id_avatar, id_avatar_prawo) {
        // to coś powoduje można się odwoływać do tych elementów o wartościach dla konkretnych graczy wewnątrz obieków
        this.id_menu = id_menu;
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
    }
    //Strzałka w prawo zmienia klasę na następną w tablicy
    klasa_prawo(i) {
        if (gracze[i].id_klasy == klasy.length - 1) gracze[i].id_klasy = 0;
        else gracze[i].id_klasy += 1;
        let rezultat = klasy[gracze[i].id_klasy];
        document.getElementById(this.id_klasa).value = rezultat;
        gracze[i].klasa = rezultat;
    }
    //Strzałka w lewo zmienia klasę na poprzednią w tablicy
    klasa_lewo(i) {
        if (gracze[i].id_klasy == 0) gracze[i].id_klasy = klasy.length - 1;
        else gracze[i].id_klasy -= 1;
        let rezultat = klasy[gracze[i].id_klasy];
        document.getElementById(this.id_klasa).value = rezultat;
        gracze[i].klasa = rezultat;
    }
    //Strzałka w lewo zmienia avatar na poprzedni w tablicy
    avatar_lewo(i) {
        if (gracze[i].id_avatara == 0) gracze[i].id_avatara = avatary.length - 1;
        else gracze[i].id_avatara -= 1;
        let rezultat = avatary[gracze[i].id_avatara];
        document.getElementById(this.id_avatar).src = rezultat;
        gracze[i].avatar = rezultat;
    }
    //Strzałka w prawo zmienia avatar na następny w tablicy
    avatar_prawo(i) {
        if (gracze[i].id_avatara == avatary.length - 1) gracze[i].id_avatara = 0;
        else gracze[i].id_avatara += 1;
        let rezultat = avatary[gracze[i].id_avatara];
        document.getElementById(this.id_avatar).src = rezultat;
        gracze[i].avatar = rezultat;
    }
    //losowanie nazwy dla gracza z tablicy nazw
    losowanie_nazwy(i) {
        let losowa_liczba = Math.floor(Math.random() * nazwy.length);
        let wylosowane_imie = nazwy[losowa_liczba];
        document.getElementById(this.id_nazwa).value = wylosowane_imie;
        gracze[i].nazwa = wylosowane_imie;
        gracze[i].id_nazwy = losowa_liczba;
    }
    //Rozwijanie menu gracza po kliknięciu przycisku plus
    rozwin_menu(i) {
        document.getElementById(this.id_menu).style.display = 'block';
        document.getElementById(this.id_rozwin).style.display = 'none';
        gracze[i].czy_aktywny = true;
    }
    //Zwijanie menu gracza po kliknięciu przycisku X
    zwin_menu(i) {
        document.getElementById(this.id_menu).style.display = 'none';
        document.getElementById(this.id_rozwin).style.display = 'block';
        gracze[i].czy_aktywny = false;
    }
}

let menu_gracz1 = new menu_graczy('menu_gracza1', 'rozwin1', 'zwijanie1', 'los_nazwy1', 'nazwa_gracza1_menu', 'klasa_lewo1', 'klasa1_menu', 'klasa_prawo1', 'avatar_lewo1', 'avatar1_menu', 'avatar_prawo1');
let menu_gracz2 = new menu_graczy('menu_gracza2', 'rozwin2', 'zwijanie2', 'los_nazwy2', 'nazwa_gracza2_menu', 'klasa_lewo2', 'klasa2_menu', 'klasa_prawo2', 'avatar_lewo2', 'avatar2_menu', 'avatar_prawo2');
let menu_gracz3 = new menu_graczy('menu_gracza3', 'rozwin3', 'zwijanie3', 'los_nazwy3', 'nazwa_gracza3_menu', 'klasa_lewo3', 'klasa3_menu', 'klasa_prawo3', 'avatar_lewo3', 'avatar3_menu', 'avatar_prawo3');
let menu_gracz4 = new menu_graczy('menu_gracza4', 'rozwin4', 'zwijanie4', 'los_nazwy4', 'nazwa_gracza4_menu', 'klasa_lewo4', 'klasa4_menu', 'klasa_prawo4', 'avatar_lewo4', 'avatar4_menu', 'avatar_prawo4');

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
    obiekt.addEventListener("click", () => tablica_menu[i].rozwin_menu(i));
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_zwin);
    obiekt.addEventListener("click", () => tablica_menu[i].zwin_menu(i));
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_losuj_nazwe);
    obiekt.addEventListener("click", () => tablica_menu[i].losowanie_nazwy(i));
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_klasa_prawo);
    obiekt.addEventListener("click", () => tablica_menu[i].klasa_prawo(i));
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_klasa_lewo);
    obiekt.addEventListener("click", () => tablica_menu[i].klasa_lewo(i));
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_avatar_lewo);
    obiekt.addEventListener("click", () => tablica_menu[i].avatar_lewo(i));
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_menu[i].id_avatar_prawo);
    obiekt.addEventListener("click", () => tablica_menu[i].avatar_prawo(i));
}

//Przycisk Start
const przycisk_start = document.getElementById('start');
const ekran_startowy = document.getElementById('ekran_startowy');
const gra = document.getElementById('gra');

//Powoduje że menu znika i pojawia się ekran gry
function start_gry(ekran_znikajacy, ekran_pojawiajacy) {
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

    zmiana_ekranu(ekran_znikajacy, ekran_pojawiajacy);

    for (i of gracze) {
        let avatar = "url('" + i.avatar + "')";
        document.getElementById(i.id_html).style.backgroundImage = avatar;
    }

    slider_muzyka2.value = glosnosc_muzyki.value;
    glosnosc_muzyki2.value = glosnosc_muzyki.value;
    slider_sfx2.value = glosnosc_sfx.value;
    glosnosc_sfx2.value = glosnosc_sfx.value;

    menedzer_gry.koniec_tury();
}

//Event listner przycisku Start
przycisk_start.addEventListener('click', () => start_gry(ekran_startowy, gra));

const tresc = document.getElementById('tresc');
const odpowiedzi_przyciski = document.getElementsByClassName('odpowiedz');

class pytanie {
    constructor(tresc, odpowiedzi) {
        this.tresc = tresc;
        this.odpowiedzi = odpowiedzi;
        // odpowiedź na indeksie zerowym jest poprawna
    }
}



const pytanie_testowe = new pytanie('2 + 2 = ?', ['4', '2', '3', '5']);
const ekran_gry = document.getElementById("ekran_gry");
const ekran_pytania = document.getElementById("ekran_pytania");
const przejdz_dalej = document.getElementById("przejdz_dalej");
const ekran_nagrody = document.getElementById("ekran_nagrody");
const zakoncz_ture = document.getElementById('zakoncz_ture');

function pokaz_pytanie(pytanie, ekran_znikajacy, ekran_pojawiajacy) {
    zmiana_ekranu(ekran_znikajacy, ekran_pojawiajacy);

    tresc.innerHTML = pytanie.tresc;
    let mozliwe_indeksy = [0, 1, 2, 3];
    przemieszaj_tablice(mozliwe_indeksy);
    for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
        odpowiedzi_przyciski[i].innerHTML = '<span>' + odpowiedzi_przyciski[i].dataset.etykieta + '</span>' + pytanie.odpowiedzi[mozliwe_indeksy[i]];
        odpowiedzi_przyciski[i].dataset.czy_poprawna = (mozliwe_indeksy[i] == 0);
    }

    for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
        odpowiedzi_przyciski[i].addEventListener("click", () => czy_poprawna(i));
    }


    // do debugowania
    for (let przycisk of odpowiedzi_przyciski) {
        if (przycisk.dataset.czy_poprawna == 'true') {
            console.log(przycisk.dataset.etykieta);
        }
    }

}

function czy_poprawna(i) {
    let czy_poprawna = odpowiedzi_przyciski[i].dataset.czy_poprawna == 'true';
    if (czy_poprawna) {
        alert("GRanulacje kjhsdgafdjkhdsgadfkjhsdagfdkjdshgkhgfagfkhdgkjdafg");
    }
    else {
        alert("UwUaga Debil");
    }

    for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
        if (odpowiedzi_przyciski[i].dataset.czy_poprawna == 'true') {
            odpowiedzi_przyciski[i].style.backgroundColor = "green";
        }
        else {
            odpowiedzi_przyciski[i].style.backgroundColor = "red";
        }
    }

    function wyswietl_nagrode(czy_poprawna) {
        ekran_nagrody.style.visibility = "visible";
        ekran_nagrody.innerHTML = "Ilość pytań: 1 <br> Ilość poprawnych odpowiedzi: " + (czy_poprawna ? '1' : '0') + "<br> Procenty: " + (czy_poprawna ? '100%' : '0%') + "<br>Twoje sanity zmieniło się o " + pytanie.sanity;
        przejdz_dalej.innerHTML = 'Zakończ turę';
        przejdz_dalej.removeEventListener('click', () => wyswietl_nagrode(czy_poprawna));
        przejdz_dalej.addEventListener('click', () => odwroc_pokaz_pytanie());
    }
    przejdz_dalej.style.visibility = "visible";
    przejdz_dalej.addEventListener("click", () => wyswietl_nagrode(czy_poprawna));
}

function odwroc_pokaz_pytanie() {
    ekran_gry.style.display = 'flex';
    ekran_pytania.style.display = 'none';
    ekran_nagrody.style.visibility = 'hidden';
    przejdz_dalej.style.visibility = 'hidden';
    przejdz_dalej.innerHTML = 'Przejdź dalej';
    przejdz_dalej.removeEventListener('click', () => odwroc_pokaz_pytanie);
    for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
        odpowiedzi_przyciski[i].style.backgroundColor = "aquamarine";
        odpowiedzi_przyciski[i].removeEventListener("click", () => czy_poprawna(i));
    }
    menedzer_gry.koniec_tury();
}


function przemieszaj_tablice(tablica) {
    for (let i = tablica.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tablica[i], tablica[j]] = [tablica[j], tablica[i]];
    }
}


//setTimeout(() => pokaz_pytanie(pytanie_testowe, ekran_gry, ekran_pytania), 3000);


const ekran_logo = document.getElementById('ekran_logo');
const bruh = document.getElementById('audio_bruh');
const muzyka_menu = document.getElementById('muzyka_menu');

function pokaz_menu_startowe(ekran_znikajacy, ekran_pojawiajacy) {
    zmiana_ekranu(ekran_znikajacy, ekran_pojawiajacy);
    bruh.play(); //o tak sobie, później raczej usunąć
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



const otwarte_menu = { mapka: false, ustawienia: false, zdarzenie: false };
const mapa = document.getElementById("mapa");
const ustawienia2 = document.getElementById("ustawienia2");

function obsluga_mapy(ustawienia, mapa) {
    if (!otwarte_menu.zdarzenie) {
        if (!otwarte_menu.mapka) {
            if (otwarte_menu.ustawienia) {
                obsluga_ustawien(mapa, ustawienia);
            }
            pojawienie_ekranu(mapa);
            otwarte_menu.mapka = true;
        }
        else {
            znikniecie_ekranu(mapa);
            otwarte_menu.mapka = false;
        }
    }
}

const mapka = document.getElementById("przycisk_mapa");
mapka.addEventListener('click', () => obsluga_mapy(ustawienia2, mapa));
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function obsluga_ustawien(mapa, ustawienia) {
    if (!otwarte_menu.ustawienia) {
        if (otwarte_menu.mapka) {
            obsluga_mapy(ustawienia, mapa);
        }
        pojawienie_ekranu(ustawienia);
        otwarte_menu.ustawienia = true;
    }
    else {
        znikniecie_ekranu(ustawienia);
        otwarte_menu.ustawienia = false;
    }
}

const ustawienia = document.getElementById("ustawienia_menu_boczne");
ustawienia.addEventListener('click', () => obsluga_ustawien(mapa, ustawienia2));

function debug() {
    console.log("Debug się ładuje");
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

const ekran_sali = document.getElementById('ekran_sali');
const sala_przyciski = document.getElementsByClassName('przycisk_sala');
const mapa_przyciski = document.getElementsByClassName('przycisk_mapa');
const sala_obraz = document.getElementById('obraz_sala');

class sala {
    constructor(nr, sciezka_sali, pytania) {
        this.nr = nr;
        this.sciezka_sali = sciezka_sali;
        this.pytania = pytania;
    }

    pokaz_sale() {
        obsluga_mapy(ustawienia, mapa);
        zmiana_ekranu(ekran_gry, ekran_sali);
        sala_obraz.src = this.sciezka_sali;
        let rok = 'rok_' + (menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].zdane_lata + 1);
        let pytanie_kartkowka = this.pytania[rok][Math.floor(Math.random() * this.pytania[rok].length)];
        setTimeout(() => pokaz_pytanie(pytanie_kartkowka, ekran_sali, ekran_pytania), 3000);
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

const s101 = new sala('101', 'sale/101.png', new zestaw_pytan(
    [pytanie_testowe, new pytanie('W którym roku powstali czarni?', ['0', '100', '200', '300'])],
    [new pytanie('2 * 2 = ?', ['4', '5', '3', '2'])],
    [new pytanie('2 ^ 2 = ?', ['4', '5', '3', '2'])],
    [new pytanie('2 / 2 = ?', ['1', '4', '3', '2'])],
    [new pytanie('sqrt(2) = ?', ['sqrt(2)', '1', '4', '2'])]
));
const sale = [s101];

for (let i = 0; i < sale.length; i++) {
    sala_przyciski[i].sala = sale[i];
    sala_przyciski[i].addEventListener('click', () => sale[i].pokaz_sale());
}

function zmien_pietro(mapa_znikajaca, mapa_pojawiajaca, zdarzenia) {
    zmiana_ekranu(mapa_znikajaca, mapa_pojawiajaca);

    //losuje, czy zdarzenie ma wystąpić i jakie
    if (menedzer_gry.ilosc_losowych_zdarzen > 0) {
        let zdarzenie = zdarzenia[Math.floor(Math.random() * zdarzenia.length)];
        pokaz_zdarzenie(zdarzenie);
    }
}

const ekran_zdarzenia = document.getElementById('ekran_zdarzenia');
const nazwa = document.getElementById('nazwa');
const opis = document.getElementById('opis');
const przejdz_dalej2 = document.getElementById('przejdz_dalej2');

for (let przycisk of mapa_przyciski) {
    przycisk.addEventListener('click', () => zmien_pietro(przycisk.parentElement.parentElement, document.getElementById(przycisk.dataset.mapa), losowe_zdarzenia));
}

class zdarzenie {
    constructor(nazwa, opis) {
        this.nazwa = nazwa;
        this.opis = opis;
    }
}

const zdarzenie_testowe = new zdarzenie('Rozwiązany sprawdzian', 'Znalazłeś rozwiązany sprawdzian na podłodze. Możesz go wykorzystać, aby rozwiązać kartkówkę na 100%.');
const losowe_zdarzenia = [
    zdarzenie_testowe,
    new zdarzenie('Atak terrorystyczny', 'Terroryści atakują szkołę.')
];

function pokaz_zdarzenie(zdarzenie) {
    znikniecie_ekranu(ekran_gry);
    zmiana_ekranu(mapa, ekran_zdarzenia);
    otwarte_menu.mapka = false;
    otwarte_menu.zdarzenie = true;
    nazwa.innerHTML = zdarzenie.nazwa;
    opis.innerHTML = zdarzenie.opis;
}

function zniknij_zdarzenie() {
    zmiana_ekranu(ekran_zdarzenia, mapa);
    otwarte_menu.mapka = true;
    otwarte_menu.zdarzenie = false;
    pojawienie_ekranu(ekran_gry);
    menedzer_gry.ilosc_losowych_zdarzen--;
}

przejdz_dalej2.addEventListener('click', () => zniknij_zdarzenie());



























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

const sas = document.getElementById("start")

function jaki_gracz() {
    document.getElementById("nr_wybranego").innerText = gracze[0].id_html;
    document.getElementById("nazwa_wybranego").innerText = gracze[0].nazwa;
}

sas.addEventListener('click', () => jaki_gracz());























//ekwipunek 
