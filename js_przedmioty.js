class przedmiot {
    constructor(nazwa, opis, id_obrazu, sanity, cena = 0, funkcja_wywołana = () => zmien_sanity()) {
        this.nazwa = nazwa;
        this.opis = opis;
        this.id_obrazu = id_obrazu;
        this.sanity = sanity;
        this.cena = cena;
        this.funkcja = funkcja_wywołana;
    }
}

function zmien_sanity(){
    menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].sanity += menedzer_gry.aktywni_gracze[menedzer_gry.indeks_wybranego].ekwipunek[menedzer_gry.ostatni_pokazany_przedmiot].sanity;
    usun_przedmiot();
}

function sciagaj(){
    if(ekran_pytania.style.display == 'flex' && (ekran_nagrody.style.display == 'none' || odpowiedzi_przyciski[0].style.color == 'white' || odpowiedzi_przyciski[0].style.color == '')){
        for (let i of odpowiedzi_przyciski) {
            if(i.dataset.czy_poprawna == 'true'){
                i.style.color = 'lightgreen';
            }
            else{
                i.style.color = 'red';
            }
        }
        usun_przedmiot();
    }
    else{
        alert("nie możesz teraz użyć tego przedmiotu");
    }
}

const ziemniak = new przedmiot("Ziemniak", "Ulubione warzywo każdego wielkopolanina. Co turę odzyskujesz 3 sanity z samego faktu, że go posiadasz, a po zjedzeniu odzyskujesz 50 sanity.", 'grafiki/przedmioty/ziemniak.png', 20);
const rozwiazana_kartkowka = new przedmiot('Rozwiązana kartkówka', 'Pokazuje ci, która odpowiedź jest poprawna na kartkówce.', 'grafiki/przedmioty/ziemniak.png', 0, 0, () => sciagaj());
const obiadek = new przedmiot('Obiadek', 'Najwyższej jakości posiłek, którym sam prezydent by nie pogardził. Po zjedzeniu odzyskuje 35 sanity', 'grafiki/przedmioty/ziemniak.png', 35, 24);
const baton_sinkers = new przedmiot('Baton "Sinkers"', 'Gryząc tego batona zatapiasz swoje zęby w 50 gramach cukru. Po zjedzeniu odzyskujesz 5 sanity oraz prawdopodobieństwo zachorowania na cukrzycę zwiększy się o 20%', 'grafiki/przedmioty/sinkers.png', 5, 5);
const guma_predkosc = new przedmiot('Guma "Prędkość"', 'Nie jesteś pewien co do jakości tego produktu. Nigdy nie wiesz, czy ta guma jest stara i skostniała, czy smaczna i zdatna do spożytku. Po zjedzeniu odzyskujesz ? sanity', 'grafiki/przedmioty/predkosc.png', 0, 1);
const sok_tymbork = new przedmiot('Sok "Tymbork"', 'Inflacja dość mocno wpłynęła na cenę tego produktu, jednak jego legendary smak pozostał ten sam. Popijsz go co turę odzyskując 1 sanity. Możesz też wypić całego na raz, odzyskasz wtedy 4 sanity.', 'grafiki/przedmioty/tymbork.png', 4, 10);
const paluszki = new przedmiot('Paluszki "👍🐴"', 'Lubiane nie tylko przez lajkowanych koników. Przywraca od 1 do 12 sanity, w zależności od tego, jak dużo paluszków ukradną ci koledzy.', 'grafiki/przedmioty/Likekonik.png', 0, 5);
const chipsy_gays = new przedmiot('Chipsy "Gay’s"', 'Tak ostre, że cię z kapci wywali, niewielu radzi sobie z takim zawodnikiem. Jeżeli uda ci się przeżyć te pieczenie z kamienną twarzą, zdobędziesz respekt i odzyskasz 75 sanity, ale jeżeli ulegniesz stracisz 50 sanity.', 'grafiki/przedmioty/Chipsy_Gays.png', 0, 20);
//xampp = new przedmiot('XAMPP: wersja premium', 'i tak cie nie stać biedaku', 'grafiki/przedmioty/xampp_ultimate.png', 0, 100000)