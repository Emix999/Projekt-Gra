//Debug czy na pewno js się wczytał niech tutaj zostanie, bo 2 razy poświęcenone 30 min na dowiedzenie się że tak naprawdę js się nie wczytał to dosyć
console.log("Java scrpit się wczytuje");

/*
gracz aktywny to taki który bierze udział w rozgrywce
gracz wybrany to taki który ma obecnie turę
*/

//Deklaracja menedżera gry, który menedżeruje grą
const menedzer_gry = {
    indeks_wybranego: 0,
    rok_gry: 1,
    aktywni_gracze: [],
    koniec_tury: function(){
        if(this.indeks_wybranego == this.aktywni_gracze.length - 1){
            this.indeks_wybranego = 0;
        }
        else{
            this.indeks_wybranego++;
        }
    
        sanity.value = this.aktywni_gracze[this.indeks_wybranego].sanity;
        iq.value = this.aktywni_gracze[this.indeks_wybranego].iq;
        zdane_lata.value = this.aktywni_gracze[this.indeks_wybranego].zdane_lata;
        obecny_rok.value  = this.aktywni_gracze[this.indeks_wybranego].obecny_rok;
    
        let i = 0;
        while(i < this.aktywni_gracze.length){
            nr_graczy[i].value = (i + this.indeks_wybranego) % this.aktywni_gracze.length;
            nazwy_gracza[i].value = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].nazwa;
            klasy_graczy[i].value = this.aktywni_gracze[(i + this.indeks_wybranego) % this.aktywni_gracze.length].klasa;
            i++;
        }
    }
};


//Deklaracja tablic z nazwami klas i danymi zewnętrznych indeksów
const liczba_graczy = 4;
const nazwy = ["test0", "test1", "test2"];
const avatary = ["avatary/gigachad.png", "avatary/kujon.png", "avatary/pala.png", "avatary/gigachad.png", "avatary/spóźniony.png"];
const klasy = ["klasa0", "klasa1", "klasa2", "klasa3"];


class gracz {//gracz i wszystkie jego parametry
    constructor(id_html,nazwa, id_nazwy, klasa, id_klasy, avatar, id_avatara, sanity, iq, zdane_lata, czy_aktywny, ekwipunek) {
        this.id_html=id_html;
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

//Obiekty 4 graczy i ich domyślne warotści
let gracz1 = new gracz("gracz1",null, 0, null, 0, null, 0, 100, 100, 0, false, ["soczek"]);
let gracz2 = new gracz("gracz2",null, 0, null, 0, null, 0, 100, 100, 0, false, ["piwo"]);
let gracz3 = new gracz("gracz3",null, 0, null, 0, null, 0, 100, 100, 0, false, ["latarka"]);
let gracz4 = new gracz("gracz4",null, 0, null, 0, null, 0, 100, 100, 0, false, ["mikrofalówka"]);

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
function start_gry(div_do_znikniecia, div_do_pojawienia) {
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

    div_do_znikniecia.style.display = 'none';
    div_do_pojawienia.style.display = 'flex';
    
    for(i of gracze){
        let avatar="url('"+i.avatar+"')";
        document.getElementById(i.id_html).style.backgroundImage=avatar;
    }
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


//to daje jakiś błąd, kiedy się odpowiedziało
//chyba nie ma elementu o id "ekran_nagrody"
function pokaz_pytanie(pytanie) {
    let elementy_do_znikniecia = document.getElementById('ekran_gry');
    let elementy_do_pojawienia = document.getElementById('ekran_pytania');

    document.getElementById('ekran_gry').style.display = 'none';
    document.getElementById('ekran_pytania').style.display = 'flex';

    tresc.innerHTML = pytanie.tresc;
    let mozliwe_indeksy = [0, 1, 2, 3];
    przemieszaj_tablice(mozliwe_indeksy);
    for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
        odpowiedzi_przyciski[i].innerHTML = '<span>' + odpowiedzi_przyciski[i].dataset.etykieta + '</span>' + pytanie.odpowiedzi[mozliwe_indeksy[i]];
        odpowiedzi_przyciski[i].dataset.czy_poprawna = (mozliwe_indeksy[i] == 0);
    }

    function czy_poprawna(i) {
        if (odpowiedzi_przyciski[i].dataset.czy_poprawna == 'true') {
            alert("GRanulacje kjhsdgafdjkhdsgadfkjhsdagfdkjdshgkhgfagfkhdgkjdafg");

        }
        else {
            alert("UwUaga Debil");
        }

        for (let i = 0; i < odpowiedzi_przyciski.length; i++) {
            if(odpowiedzi_przyciski[i].dataset.czy_poprawna=='true'){
                odpowiedzi_przyciski[i].style.backgroundColor="green";
            }
            else{
                odpowiedzi_przyciski[i].style.backgroundColor="red";
            }
        }

        function wyswietl_nagrode() {
            document.getElementById("ekran_nagrody").style.visibility = "visible"
            document.getElementById("ekran_nagrody").innerHTML="Twoje sanity zmieniło się o "+pytanie.sanity+". Twoje iq zmieniło się o "+pytanie.iq+".";
        }
        document.getElementById("przejdz_dalej").style.visibility = "visible";
        document.getElementById("przejdz_dalej").addEventListener("click", () => wyswietl_nagrode());
        document.getElementById("przejdz_dalej").style.visibility="visible";
        document.getElementById("przejdz_dalej").addEventListener("click", (document.getElementById("ekran_nagrody").style.visibility="visible"));
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


function przemieszaj_tablice(tablica) {
    for (let i = tablica.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tablica[i], tablica[j]] = [tablica[j], tablica[i]];
    }
}


//setTimeout(() => pokaz_pytanie(pytanie_testowe), 3000);


const ekran_logo = document.getElementById('ekran_logo');
const bruh = document.getElementById('audio_bruh');
const muzyka_menu = document.getElementById('muzyka_menu')

function pokaz_menu_startowe(){
    ekran_logo.style.display = 'none';
    ekran_startowy.style.display = 'flex';
    bruh.play();
    muzyka_menu.play();
}

ekran_logo.addEventListener('click', () => pokaz_menu_startowe());

// audio definiuje się w html'u:
// <audio id = "audio_id">
//  <source src="sfx/Bruh sound effect.ogg" type="audio/ogg">
//  <source src="sfx/Bruh sound effect.mp3" type="audio/mpeg">
// </audio>
// (oczywiście trzeba jeszcze wstawić plik dźwiękowy do folderu gry)

// żeby zdefiniować audio zapętlone, daje się parametr loop do definicji audio w html'u:
// <audio id = "audio_id" loop>
//  <source src="sfx/Bruh sound effect.ogg" type="audio/ogg">
//  <source src="sfx/Bruh sound effect.mp3" type="audio/mpeg">
// </audio>

// element audio do javascript'a można wziąć po id
// audio1 = document.getElementById('audio_id');

// żeby wystartować audio:
// audio1.play();

// żeby zatrzymać audio:
// audio1.pause();
// audio1.currentTime = 0; (powoduje cofnięcie audio do początku)

// żeby zmienić audio można użyć dwóch powyższych:
// audio1.pause();
// audio1.currentTime = 0;
// audio2.play();

// żeby zmienić głośność można użyć:
// audio.volume = wartość
// gdzie 1 w wartości to 100%, a 0 - 0%

const sanity = document.getElementById('sanity');
const iq = document.getElementById('iq');
const zdane_lata = document.getElementById('zadne_lata');
const obecny_rok = document.getElementById('obecny_rok');
const nr_graczy = document.getElementsByClassName('nr_gracza');
const nazwy_gracza = document.getElementsByClassName('nazwa_gracza');
const klasy_graczy = document.getElementsByClassName('klasa_gracza');

//funkcje pokazanie_mapy, zamnkniecie_mapy, pokazanie_ustawien, zamnkniecie_ustawien są takie same
//obsługa mapy i obsługa ustawień też są prawie takie same

function pokazanie_mapy(ekran_znikajacy, ekran_pojawiajacy){
    ekran_znikajacy.style.display = "none";
    ekran_pojawiajacy.style.display = "flex";
}

function zamnkniecie_mapy(ekran_znikajacy, ekran_pojawiajacy){
    ekran_znikajacy.style.display = "none";
    ekran_pojawiajacy.style.display = "flex";
}

const otwarte_menu = {mapka: false, ustawienia: false};

function obsluga_mapy(){
    const ekran_gry = document.getElementById("ekran_gry");
    const mapa = document.getElementById("mapa");
    if(!otwarte_menu.mapka){
        pokazanie_mapy(ekran_gry, mapa);
        otwarte_menu.mapka = true;
    }
    else{
        zamnkniecie_mapy(mapa, ekran_gry);
        otwarte_menu.mapka = false;
    }
}
    const mapka = document.getElementById("przycisk_mapa");
mapka.addEventListener('click', () => obsluga_mapy());
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function pokazanie_ustawien(ekran_znikajacy, ekran_pojawiajacy){
    ekran_znikajacy.style.display = "none";
    ekran_pojawiajacy.style.display = "flex";
}

function zamnkniecie_ustawien(ekran_znikajacy, ekran_pojawiajacy){
    ekran_znikajacy.style.display = "none";
    ekran_pojawiajacy.style.display = "flex";
}

function obsluga_ustawien(){
    const ekran_gry = document.getElementById("ekran_gry");
    const ustawienia = document.getElementById("ustawienia2");
    if(!otwarte_menu.ustawienia){
        pokazanie_ustawien(ekran_gry, ustawienia);
        otwarte_menu.ustawienia = true;
    }
    else{
        zamnkniecie_ustawien(ustawienia, ekran_gry);
        otwarte_menu.ustawienia = false;
    }
}
    const ustawienia = document.getElementById("ustawienia_menu_boczne");
ustawienia.addEventListener('click', () => obsluga_ustawien());
//setTimeout(() => pokaz_pytanie(pytanie_testowe), 3000);
function debug(){
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

//napraw ten swój kod

let slider_muzyka = document.getElementById("muzyka_slider");
let glosnosc_muzyki = document.getElementById("muzyka_glosnosc");
glosnosc_muzyki.value = slider_muzyka.value;

let slider_sfx = document.getElementById("sfx_slider");
let glosnosc_sfx = document.getElementById("sfx_glosnosc");
glosnosc_sfx.value = slider_sfx.value;

sfx=document.querySelectorAll(".sfx");
muzyka=document.querySelectorAll(".muzyka");

slider_muzyka.oninput = function slider_muzyka_update() {
    glosnosc_muzyki.value = slider_muzyka.value;
    for(let i of muzyka){
    i.volume = slider_muzyka.value/100;
    }
}

slider_sfx.oninput = function slider_sfx_update() {
    glosnosc_sfx.value = slider_sfx.value;
    for(let i of sfx){
    i.volume = slider_sfx.value/100;
    }
}