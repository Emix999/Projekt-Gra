const ekran_wyboru_gracza={
    lista_klas: ["klasa0","klasa1","klasa2","klasa3"],
    lista_imion : ["test0","test1","test2"],
    lista_avatarow : ["test avatar 1.png","test avatar 2.png","test avatar 3.png","test avatar 4.png"],
    obecny_numer_klasy: 0,
    obecny_numer_avatara: 0,
    obecnie_wybrana_klasa: null,
    obecnie_wybrany_avatar: null,
}



function losowanie_nazwy(id_pola_z_nazwa){
    let losowa_liczba=Math.floor(Math.random()*ekran_wyboru_gracza.lista_imion.length);
    let wylosowane_imie= ekran_wyboru_gracza.lista_imion[losowa_liczba];
    document.getElementById(id_pola_z_nazwa).value = wylosowane_imie;
}


function strzalka_przesuwajaca_talice_w_lewo(indeks_startowy,lista){
    if(indeks_startowy==0){
        indeks_startowy=lista.length-1;
    }
    else{
    indeks_startowy-=1;
    }
    return indeks_startowy;
}


function strzalka_przesuwajaca_talice_w_prawo(indeks_startowy,lista){
    if(indeks_startowy==lista.length-1){
        indeks_startowy=0;
    }
    else{
    indeks_startowy+=1;
    }
    return indeks_startowy;
}

//document.getElementById('avatar_pole').innerHTML = "<img src='" + ekran_wyboru_gracza.lista_avatarow[ekran_wyboru_gracza.obecny_numer_avatara] + "'>";

function wybor_klasy_strzalka_w_prawo(){
    ekran_wyboru_gracza.obecny_numer_klasy=strzalka_przesuwajaca_talice_w_prawo(ekran_wyboru_gracza.obecny_numer_klasy,ekran_wyboru_gracza.lista_klas);
    ekran_wyboru_gracza.obecnie_wybrana_klasa=ekran_wyboru_gracza.lista_klas[ekran_wyboru_gracza.obecny_numer_klasy];
    document.getElementById('klasa_pole').value = ekran_wyboru_gracza.obecnie_wybrana_klasa;
}
function wybor_klasy_strzalka_w_lewo(){ 
    ekran_wyboru_gracza.obecny_numer_klasy=strzalka_przesuwajaca_talice_w_lewo(ekran_wyboru_gracza.obecny_numer_klasy,ekran_wyboru_gracza.lista_klas);
    ekran_wyboru_gracza.obecnie_wybrana_klasa=ekran_wyboru_gracza.lista_klas[ekran_wyboru_gracza.obecny_numer_klasy];
    document.getElementById('klasa_pole').value = ekran_wyboru_gracza.obecnie_wybrana_klasa;
}

function wybor_avatara_strzalka_w_prawo(){
    ekran_wyboru_gracza.obecny_numer_avatara=strzalka_przesuwajaca_talice_w_prawo(ekran_wyboru_gracza.obecny_numer_avatara,ekran_wyboru_gracza.lista_avatarow);
    ekran_wyboru_gracza.obecnie_wybrany_avatar="<img src='" + ekran_wyboru_gracza.lista_avatarow[ekran_wyboru_gracza.obecny_numer_avatara] + "'>";
    document.getElementById('avatar_pole').innerHTML = ekran_wyboru_gracza.obecnie_wybrany_avatar;
}

function wybor_avatara_strzalka_w_lewo(){ 
    ekran_wyboru_gracza.obecny_numer_avatara=strzalka_przesuwajaca_talice_w_lewo(ekran_wyboru_gracza.obecny_numer_avatara,ekran_wyboru_gracza.lista_avatarow);
    ekran_wyboru_gracza.obecnie_wybrany_avatar="<img src='" + ekran_wyboru_gracza.lista_avatarow[ekran_wyboru_gracza.obecny_numer_avatara] + "'>";
    document.getElementById('avatar_pole').innerHTML = ekran_wyboru_gracza.obecnie_wybrany_avatar;
}





function rozwin_menu_gracza(gracz_menu, gracz_rozwin){
    document.getElementById(gracz_menu).style.visibility = 'visible';
    document.getElementById(gracz_rozwin).style.visibility = 'hidden';

}

function zwin_menu_gracza(gracz_menu, gracz_rozwin){
    document.getElementById(gracz_menu).style.visibility = 'hidden';
    document.getElementById(gracz_rozwin).style.visibility = 'visible';
}

window.addEventListener('click', function() {
    var audio = document.getElementById('bgMusic');
    audio.play();
}, { once: true });
 let id_rozwijanie_menu_gracza=['dodanie_gracza1','dodanie_gracza2','dodanie_gracza3','dodanie_gracza4'];
 let id_menu_gracza=['menu_gracza1','menu_gracza2','menu_gracza3','menu_gracza4'];
 

function rozwijanie_menu_konkretnego_gracza(id_gracza){
    rozwin_menu_gracza(id_menu_gracza[id_gracza],id_rozwijanie_menu_gracza[id_gracza]);
}
