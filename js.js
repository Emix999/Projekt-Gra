const liczba_graczy = 4;
const nazwy = ["test0", "test1", "test2"];
const avatary = ["test avatar 1.png", "test avatar 2.png", "test avatar 3.png", "test avatar 4.png"];
const klasy = ["klasa0", "klasa1", "klasa2", "klasa3"];

function strzalka(prawo, tablica, idx_tab, idx_pola) {//prawo = false to lewo
    let rezultat;
    if (prawo) {
        if (idx_tab == tablica.length - 1) idx_tab = 0;
        else idx_tab += 1;

        rezultat = tablica[idx_tab];
        document.getElementById(idx_pola).value = rezultat;

    }
    else {
        if (idx_tab == 0) idx_tab = tablica.length - 1;
        else idx_tab -= 1;

        rezultat = tablica[idx_tab];
        document.getElementById(idx_pola).value = rezultat;
    }
}


class gracz {
    constructor(id_menu, id_rozwin, id_ziwn, id_losuj_nazwe, id_nazwa, id_klasa_lewo, id_klasa, id_klasa_prawo, id_avatar_lewo, id_avatar, id_avatar_prawo) {
        this.id_menu=id_menu;
        this.id_rozwin=id_rozwin;
        this.id_ziwn=id_ziwn;
        this.id_losuj_nazwe=id_losuj_nazwe;
        this.id_nazwa=id_nazwa;
        this.id_klasa_lewo=id_klasa_lewo;
        this.id_klasa=id_klasa;
        this.id_klasa_prawo=id_klasa_prawo;
        this.id_avatar_lewo=id_avatar_lewo;
        this.id_avatar=id_avatar;
        this.id_avatar_prawo=id_avatar_prawo;
    }

    losowanie_nazwy() {
        let losowa_liczba = Math.floor(Math.random() * nazwy.length);
        let wylosowane_imie = nazwy[losowa_liczba];
        document.getElementById(this.id_nazwa).value = wylosowane_imie;
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



const gracz1 = new gracz('menu_gracza1', 'rozwin1', 'zwijanie1', 'los_nazwy1', 'nazwa_gracza1', 'klasa_lewo1', 'klasa1', 'klasa_prawo1', 'avatar_lewo1', 'avatar1', 'avatar_prawo1');
const gracz2 = new gracz('menu_gracza2', 'rozwin2', 'zwijanie2', 'los_nazwy2', 'nazwa_gracza2', 'klasa_lewo2', 'klasa2', 'klasa_prawo2', 'avatar_lewo2', 'avatar2', 'avatar_prawo2');
const gracz3 = new gracz('menu_gracza3', 'rozwin3', 'zwijanie3', 'los_nazwy3', 'nazwa_gracza3', 'klasa_lewo3', 'klasa3', 'klasa_prawo3', 'avatar_lewo3', 'avatar3', 'avatar_prawo3');
const gracz4 = new gracz('menu_gracza4', 'rozwin4', 'zwijanie4', 'los_nazwy4', 'nazwa_gracza4', 'klasa_lewo4', 'klasa4', 'klasa_prawo4', 'avatar_lewo4', 'avatar4', 'avatar_prawo4');

let tablica_indeksow = [gracz1, gracz2, gracz3, gracz4];

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_rozwin);
    obiekt.addEventListener("click", ()=>tablica_indeksow[i].rozwin_menu());
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_losuj_nazwe);
    obiekt.addEventListener("click", ()=>tablica_indeksow[i].losowanie_nazwy());
}

for (let i = 0; i < liczba_graczy; i++) {
    let obiekt = document.getElementById(tablica_indeksow[i].id_ziwn);
    obiekt.addEventListener("click", ()=>tablica_indeksow[i].zwin_menu());
}