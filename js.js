const postac1 = document.getElementById('menu_gracza1');
const postac2 = document.getElementById('menu_gracza2');
const postac3 = document.getElementById('menu_gracza3');
const postac4 = document.getElementById('menu_gracza4');
const postac1_rozwin = document.getElementById('plusik1');
const postac2_rozwin = document.getElementById('plusik2');
const postac3_rozwin = document.getElementById('plusik3');
const postac4_rozwin = document.getElementById('plusik4');
const postac1_zwin = document.getElementById('krzyzyk1');
const postac2_zwin = document.getElementById('krzyzyk2');
const postac3_zwin = document.getElementById('krzyzyk3');
const postac4_zwin = document.getElementById('krzyzyk4');

postac1_rozwin.onclick = rozwin_menu_gracza1;
postac2_rozwin.onclick = rozwin_menu_gracza2;
postac3_rozwin.onclick = rozwin_menu_gracza3;
postac4_rozwin.onclick = rozwin_menu_gracza4;
postac1_zwin.onclick = zwin_menu_gracza1;
postac2_zwin.onclick = zwin_menu_gracza2;
postac3_zwin.onclick = zwin_menu_gracza3;
postac4_zwin.onclick = zwin_menu_gracza4;

function rozwin_menu_gracza1(){
    postac1.style.visibility = 'visible';
    postac1_rozwin.style.visibility = 'hidden';
    postac1_zwin.style.visibility = 'visible';
}

function rozwin_menu_gracza2(){
    postac2.style.visibility = 'visible';
    postac2_rozwin.style.visibility = 'hidden';
    postac2_zwin.style.visibility = 'visible';
}

function rozwin_menu_gracza3(){
    postac3.style.visibility = 'visible';
    postac3_rozwin.style.visibility = 'hidden';
    postac3_zwin.style.visibility = 'visible';
}

function rozwin_menu_gracza4(){
    postac4.style.visibility = 'visible';
    postac4_rozwin.style.visibility = 'hidden';
    postac4_zwin.style.visibility = 'visible';
}

function zwin_menu_gracza1(){
    postac1.style.visibility = 'hidden';
    postac1_rozwin.style.visibility = 'visible';
    postac1_zwin.style.visibility = 'hidden';
}

function zwin_menu_gracza2(){
    postac2.style.visibility = 'hidden';
    postac2_rozwin.style.visibility = 'visible';
    postac2_zwin.style.visibility = 'hidden';
}

function zwin_menu_gracza3(){
    postac3.style.visibility = 'hidden';
    postac3_rozwin.style.visibility = 'visible';
    postac3_zwin.style.visibility = 'hidden';
}

function zwin_menu_gracza4(){
    postac4.style.visibility = 'hidden';
    postac4_rozwin.style.visibility = 'visible';
    postac4_zwin.style.visibility = 'hidden';
}







































let lista_imion = ["test0","test1","test2"];




function losowanie_nazwy(){

    let losowa_liczba=Math.floor(Math.random()*lista_imion.length);
    let wylosowane_imie= lista_imion[losowa_liczba];
    document.getElementById('pole_nazwy').value = wylosowane_imie;
}
