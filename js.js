function rozwin_menu_gracza(gracz_menu, gracz_rozwin, gracz_zwin){
    document.getElementById(gracz_menu).style.visibility = 'visible';
    document.getElementById(gracz_rozwin).style.visibility = 'hidden';
    document.getElementById(gracz_zwin).style.visibility = 'visible';
}

function zwin_menu_gracza(gracz_menu, gracz_rozwin, gracz_zwin){
    document.getElementById(gracz_menu).style.visibility = 'hidden';
    document.getElementById(gracz_rozwin).style.visibility = 'visible';
    document.getElementById(gracz_zwin).style.visibility = 'hidden';
}