function rozwin_menu_gracza(gracz_menu, gracz_rozwin, gracz_zwin){
    gracz_menu.style.visibility = 'visible';
    gracz_rozwin.style.visibility = 'hidden';
    gracz_zwin.style.visibility = 'visible';
}

function zwin_menu_gracza(gracz_menu, gracz_rozwin, gracz_zwin){
    gracz_menu.style.visibility = 'hidden';
    gracz_rozwin.style.visibility = 'visible';
    gracz_zwin.style.visibility = 'hidden';
}







































let lista_imion = ["test0","test1","test2"];




function losowanie_nazwy(){

    let losowa_liczba=Math.floor(Math.random()*lista_imion.length);
    let wylosowane_imie= lista_imion[losowa_liczba];
    document.getElementById('pole_nazwy').value = wylosowane_imie;
}
