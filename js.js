const ekran_wyboru_gracza = {
    lista_klas: ["klasa0", "klasa1", "klasa2", "klasa3"],
    lista_imion: ["test0", "test1", "test2"],
    lista_avatarow: ["test avatar 1.png", "test avatar 2.png", "test avatar 3.png", "test avatar 4.png"],
    obecny_numer_klasy: 0,
    obecny_numer_avatara: 0,
    obecnie_wybrana_klasa: null,
    obecnie_wybrany_avatar: null,
}



//document.getElementById('avatar_pole').innerHTML = "<img src='" + ekran_wyboru_gracza.lista_avatarow[ekran_wyboru_gracza.obecny_numer_avatara] + "'>";



class gracz {
    constructor(id_rozwin, id_ziwn, id_losuj_nazwe, id_nazwa, id_klasa_lewo, id_klasa, id_klasa_prawo,id_avatar_lewo, id_avatar, id_avatar_prawo) {

    }
    losowanie_nazwy(tablica, id_pola_nazwy) {
        let losowa_liczba = Math.floor(Math.random() * tablica.length);
        let wylosowane_imie = tablica[losowa_liczba];
        document.getElementById(id_pola_nazwy).value = wylosowane_imie;
    }

    strzalka(prawo, tablica, idx_tab, idx_pola) {//prawo = false to lewo
        let rezultat;
        if (prawo) {
            if (idx_tab == lista.tablica - 1) idx_tab = 0;
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

    rozwin_menu(id_menu, id_rozwijania) {
        document.getElementById(id_menu).style.visibility = 'visible';
        document.getElementById(id_rozwijania).style.visibility = 'hidden';

    }

    zwin_menu(id_menu, id_rozwijania) {
        document.getElementById(id_menu).style.visibility = 'hidden';
        document.getElementById(id_rozwijania).style.visibility = 'visible';
    }
}




const gracz1 = new gracz('rozwin1','zwijanie1','los_nazwy1','nazwa_gracza1','klasa_lewo1','klasa1','klasa_prawo1','avatar_lewo1','avatar1','avatar_prawo1');
const gracz2 = new gracz('rozwin2','zwijanie2','los_nazwy2','nazwa_gracza2','klasa_lewo2','klasa2','klasa_prawo2','avatar_lewo2','avatar2','avatar_prawo2');
const gracz3 = new gracz('rozwin3','zwijanie3','los_nazwy3','nazwa_gracza3','klasa_lewo3','klasa3','klasa_prawo3','avatar_lewo3','avatar3','avatar_prawo3');
const gracz4 = new gracz('rozwin4','zwijanie4','los_nazwy4','nazwa_gracza4','klasa_lewo4','klasa4','klasa_prawo4','avatar_lewo4','avatar4','avatar_prawo4');





