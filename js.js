console.log("test")















































function losowanie_nazwy(){
    let ilosc_imion_w_liscie;
    let losowa_liczba=Math.floor(Math.random()*lista_imion.length);
    let wylosowane_imie= lista_imion[losowa_liczba];
    document.getElementById('pole_nazwy').value = wylosowane_imie;
}
