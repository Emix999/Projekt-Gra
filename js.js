console.log("Java scrpit się wczytuje");//Debug czy na pewno js się wczytał

const liczba_graczy = 4;
const nazwy = ["test0", "test1", "test2"];
const avatary = ["test avatar 1.png", "test avatar 2.png", "test avatar 3.png", "test avatar 4.png"];
const klasy = ["klasa0", "klasa1", "klasa2", "klasa3"];


class gracz {
    constructor(nazwa, id_nazwy, klasa, id_klasy, avatar, id_avatara) {
        this.nazwa = nazwa;
        this.id_nazwy = id_nazwy;
        this.klasa = klasa;
        this.id_klasy = id_klasy;
        this.avatar=avatar;
        this.id_avatara=id_avatara;
    }
}

const gracz1 = new gracz(null, 0, null, 0, null, 0);
const gracz2 = new gracz(null, 0, null, 0, null, 0);
const gracz3 = new gracz(null, 0, null, 0, null, 0);
const gracz4 = new gracz(null, 0, null, 0, null, 0);


const gracze = [gracz1, gracz2, gracz3, gracz4];


class menu_graczy {
    constructor(id_menu, id_rozwin, id_zwin, id_losuj_nazwe, id_nazwa, id_klasa_lewo, id_klasa, id_klasa_prawo, id_avatar_lewo, id_avatar, id_avatar_prawo) {
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

    klasa_prawo(i) {
        if (gracze[i].id_klasy == klasy.length - 1) gracze[i].id_klasy = 0;
        else gracze[i].id_klasy += 1;
        let rezultat = klasy[gracze[i].id_klasy];
        document.getElementById(this.id_klasa).value = rezultat;
        gracze[i].klasa = rezultat;
    }

    klasa_lewo(i) {
        if (gracze[i].id_klasy == 0) gracze[i].id_klasy = klasy.length - 1;
        else gracze[i].id_klasy -= 1;
        let rezultat = klasy[gracze[i].id_klasy];
        document.getElementById(this.id_klasa).value = rezultat;
        gracze[i].klasa = rezultat;
    }

    avatar_lewo(i) {
        if (gracze[i].id_avatara == 0) gracze[i].id_avatara = avatary.length - 1;
        else gracze[i].id_avatara -= 1;
        let rezultat = avatary[gracze[i].id_avatara];
        document.getElementById(this.id_avatar).src = rezultat;
        gracze[i].avatar = rezultat;
    }

    avatar_prawo(i) {
        if (gracze[i].id_avatara == avatary.length - 1) gracze[i].id_avatara = 0;
        else gracze[i].id_avatara += 1;
        let rezultat = avatary[gracze[i].id_avatara];
        document.getElementById(this.id_avatar).src = rezultat;
        gracze[i].avatar = rezultat;
    }

    losowanie_nazwy(i) {
        let losowa_liczba = Math.floor(Math.random() * nazwy.length);
        let wylosowane_imie = nazwy[losowa_liczba];
        document.getElementById(this.id_nazwa).value = wylosowane_imie;
        gracze[i].nazwa = wylosowane_imie;
        gracze[i].id_nazwy = losowa_liczba;
    }

    rozwin_menu() {
        document.getElementById(this.id_menu).style.visibility = 'visible';
        document.getElementById(this.id_rozwin).style.visibility = 'hidden';

    }

    zwin_menu() {
        document.getElementById(this.id_menu).style.visibility = 'hidden';
        document.getElementById(this.id_rozwin).style.visibility = 'visible';
    }
}



const menu_gracz1 = new menu_graczy('menu_gracza1', 'rozwin1', 'zwijanie1', 'los_nazwy1', 'nazwa_gracza1', 'klasa_lewo1', 'klasa1', 'klasa_prawo1', 'avatar_lewo1', 'avatar1', 'avatar_prawo1');
const menu_gracz2 = new menu_graczy('menu_gracza2', 'rozwin2', 'zwijanie2', 'los_nazwy2', 'nazwa_gracza2', 'klasa_lewo2', 'klasa2', 'klasa_prawo2', 'avatar_lewo2', 'avatar2', 'avatar_prawo2');
const menu_gracz3 = new menu_graczy('menu_gracza3', 'rozwin3', 'zwijanie3', 'los_nazwy3', 'nazwa_gracza3', 'klasa_lewo3', 'klasa3', 'klasa_prawo3', 'avatar_lewo3', 'avatar3', 'avatar_prawo3');
const menu_gracz4 = new menu_graczy('menu_gracza4', 'rozwin4', 'zwijanie4', 'los_nazwy4', 'nazwa_gracza4', 'klasa_lewo4', 'klasa4', 'klasa_prawo4', 'avatar_lewo4', 'avatar4', 'avatar_prawo4');

const tablica_indeksow = [menu_gracz1, menu_gracz2, menu_gracz3, menu_gracz4];



for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_rozwin);
    obiekt.addEventListener("click", () => tablica_indeksow[i].rozwin_menu());
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_zwin);
    obiekt.addEventListener("click", () => tablica_indeksow[i].zwin_menu());
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_losuj_nazwe);
    obiekt.addEventListener("click", () => tablica_indeksow[i].losowanie_nazwy(i));
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_klasa_prawo);
    obiekt.addEventListener("click", () => tablica_indeksow[i].klasa_prawo(i));
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_klasa_lewo);
    obiekt.addEventListener("click", () => tablica_indeksow[i].klasa_lewo(i));
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_avatar_lewo);
    obiekt.addEventListener("click", () => tablica_indeksow[i].avatar_lewo(i));
}
for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_avatar_prawo);
    obiekt.addEventListener("click", () => tablica_indeksow[i].avatar_prawo(i));
}
