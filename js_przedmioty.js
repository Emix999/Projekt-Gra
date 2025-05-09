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

const ziemniak = new przedmiot("Ziemniak", "Ulubione warzywo każdego wielkopolanina. Co turę odzyskujesz 3 sanity z samego faktu, że go posiadasz, a po zjedzeniu odzyskujesz 50 sanity.", 'grafiki/przedmioty/ziemniak.png', 50);
const rozwiazana_kartkowka = new przedmiot('Rozwiązana kartkówka', 'Pokazuje ci, która odpowiedź jest poprawna na kartkówce.', 'grafiki/przedmioty/ziemniak.png', 0, 0, () => sciagaj());
const obiadek = new przedmiot('Obiadek', 'Najwyższej jakości posiłek, którym sam prezydent by nie pogardził. Po zjedzeniu odzyskuje 35 sanity', 'grafiki/przedmioty/ziemniak.png', 35, 24);
const baton_sinkers = new przedmiot('Baton "Sinkers"', 'Gryząc tego batona zatapiasz swoje zęby w 50 gramach cukru. Po zjedzeniu odzyskujesz 5 sanity oraz prawdopodobieństwo zachorowania na cukrzycę zwiększy się o 20%', 'grafiki/przedmioty/sinkers.png', 5, 5);
const guma_predkosc = new przedmiot('Guma "Prędkość"', 'Nie jesteś pewien co do jakości tego produktu. Nigdy nie wiesz, czy ta guma jest stara i skostniała, czy smaczna i zdatna do spożytku. Po zjedzeniu odzyskujesz ? sanity', 'grafiki/przedmioty/predkosc.png', 0, 1);
const sok_tymbork = new przedmiot('Sok "Tymbork"', 'Inflacja dość mocno wpłynęła na cenę tego produktu, jednak jego legendary smak pozostał ten sam. Popijsz go co turę odzyskując 1 sanity. Możesz też wypić całego na raz, odzyskasz wtedy 4 sanity.', 'grafiki/przedmioty/tymbork.png', 4, 10);
const paluszki = new przedmiot('Paluszki "👍🐴"', 'Lubiane nie tylko przez lajkowanych koników. Przywraca od 1 do 12 sanity, w zależności od tego, jak dużo paluszków ukradną ci koledzy.', 'grafiki/przedmioty/Likekonik.png', 0, 5);
const chipsy_gays = new przedmiot('Chipsy "Gay’s"', 'Tak ostre, że cię z kapci wywali, niewielu radzi sobie z takim zawodnikiem. Jeżeli uda ci się przeżyć te pieczenie z kamienną twarzą, zdobędziesz respekt i odzyskasz 75 sanity, ale jeżeli ulegniesz stracisz 50 sanity.', 'grafiki/przedmioty/Chipsy_Gays.png', 0, 20);
//const xampp = new przedmiot('XAMPP: wersja premium', 'i tak cie nie stać biedaku', 'grafiki/przedmioty/xampp_ultimate.png', 0, 100000)
const woda = new przedmiot('Woda', 'Sprawia, że twój mózg pracuje szybciej – usuwa 1 błędną odpowiedź z kartkówki.', 'grafiki/przedmioty/ziemniak.png', 0, 0, () => usun_odpowiedzi(1));
const herbata = new przedmiot('Herbata', 'Sprawia, że twój mózg pracuje na najwyższych obrotach – usuwa 2 błędne odpowiedzi z kartkówki.', 'grafiki/przedmioty/ziemniak.png', 0, 0, () => usun_odpowiedzi(2));
const kawa = new przedmiot('Kawa', 'Może pobudzić twój mózg... albo i nie. Usuwa 0, 1 lub 2 błędne odpowiedzi z kartkówki', 'grafiki/przedmioty/ziemniak.png', 0, 0, () => losowe_usun_odpowiedzi(0, 2));
const uzaleznienie = new przedmiot("Uzależnienie od TikToka", "Co turę twoje sanity zmienia się losowo od -5 do 3. Próba odinstalowania tiktoka kończy się strasznym bólem mózgu i tracisz 100 sanity", 'grafiki/przedmioty/ziemniak.png', -100);
const pierog = new przedmiot('Pieróg', 'Smak tej niesamowitej potrawy sprawia, że twój mózg działa o wiele sprawniej – usuwa 2 lub 3 błędne odpowiedzi z kartkówki.', 'grafiki/przedmioty/ziemniak.png', 0, 0, () => losowe_usun_odpowiedzi(2, 3));
