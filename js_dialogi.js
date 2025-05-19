class dialog {
    constructor(opis) {
        this.opis = opis;
    }
}

//dialogi z polskiego

const dialogi_polski = [
    new dialog("Dobrze robaczki, zobaczymy czy wiecie kim jest bohater romantyczny"),
    new dialog("Klaso przypominam by nie oddawać mi pogryzmolonej kartki"),
    new dialog("Wyciągamy karteczki – czas sprawdzić, kto zna 'Pana Tadeusza', a kto myśli, że to marka alkoholu."),
    new dialog("Dziś kartkówka – bo ortografia nie wybacza, a ja też nie."),
    new dialog("Nie oczekuję arcydzieła – oczekuję, że nie obrazicie języka ojczystego."),
    new dialog("To kartkówka z wiedzy, nie z umiejętności ściągania."),
    new dialog("Nie, nie będzie z lektury, którą czytaliście w streszczeniu – będzie z tej, której nawet nie otworzyliście.")
];

//dialogi z matematyki

const dialogi_matematyka = [
    new dialog("A teraz czas na nieco ciekawsze zadania"),
    new dialog("Moi drodzy, no czy tego nie było na lekcji?"),
    new dialog("Nie piszcie mi w dowodzie 'Bo widać'"),
    new dialog("Jak ktoś zapyta, co to pierwiastek, to mu wsadzę całkę w zeszyt."),
    new dialog("Dzisiaj przekonamy się, kto liczy, a kto tylko odlicza minuty do dzwonka."),
    new dialog("Kto pomyli minus z plusem, ten się wpisze na listę ofiar arytmetyki."),
    new dialog("Nie, nie będzie kalkulatora – liczyć będziesz głową, nie kciukiem."),
    new dialog("Masz pięć minut, żeby przypomnieć sobie trzy lata zaległości."),
    new dialog("Nie myl ułamków z procentami, bo potem mylisz życie z egzaminem."),
    new dialog("Dzisiejsza kartkówka ma jedną niewiadomą – waszą wiedzę."),
    new dialog("Kto rozwiąże zadanie w stylu freestyle, dostanie ocenę z gatunku jeden.")
];

//dialogi z niemieckiego

const dialogi_niemiecki = [
    new dialog("Steht bitte auf"),
    new dialog("Schreibt deutlich"),
    new dialog("Wir fangen jetzt an"),
    new dialog("Lest die Aufgaben sorgfältig"),
    new dialog("Ruhe bitte"),
    new dialog("Alles klar? Dann los"),
    new dialog("Fangt an"),
    new dialog("Beginnt jetzt, bitte"),
    new dialog("Ihr arbeitet still"),
    new dialog("Arbeitet konzentriert weiter")
];

//dialogi z biologii

const dialogi_biologia = [
    new dialog("BO WSZYSTKIM ZARAZ JEDYNKI POWSTAWIAM"),
    new dialog("Tu, idź do pierwszej ławki i piszesz sprawdzian bo jest prościutki"),
    new dialog("Nie, nie będzie trudny… będzie tragiczny"),
    new dialog("Niech was ręka boska broni oddać pustą kartkę"),
    new dialog("Nie bójcie się, nie będzie aż tak źle"),
    new dialog("Nie pytaj co to będzie, tylko weź długopis")
];

//dialogii z fizyki

const dialogi_fizyka = [
    new dialog("złap proszę za ten sznurek...nie tak"),
    new dialog("mieliście to już na matematyce?"),
    new dialog("te rzeczy mieliście już w podstawówce...mam rację?"),
    new dialog("To nie jest trudne. Tylko trzeba myśleć. A to bywa problem."),
    new dialog("Kto nie pamięta co to masa, niech się zważy na koniec lekcji")
];

//dialogi z geografii

const dialogi_geografia = [
    new dialog("Wyciągamy karteczki – zobaczymy, kto umie znaleźć Polskę bez GPS-a."),
    new dialog("Dzisiaj kartkówka z mapy – jak nie znajdziesz Amazonki, to zostajesz w kałuży."),
    new dialog("Jeśli twoim zdaniem Afryka leży w Azji, to twoja głowa leży w błędzie."),
    new dialog("Nie pytaj o długość geograficzną, jak nie wiesz, gdzie masz wschód!"),
    new dialog("Stolice państw nie zmieniają się co tydzień, jak twoje postanowienia nauki."),
    new dialog("Jak napiszesz, że Sahara to rzeka, to dostaniesz suchą jedynkę."),
    new dialog("Nie próbuj zgadywać – to nie prognoza pogody, tylko kartkówka!"),
    new dialog("Jak pomylisz Tatry z Alpami, to pakuj plecak i idź szukać granicy państwa."),
    new dialog("Nie, Wrocław nie leży nad morzem, choć twoja wiedza leży i kwiczy."),
    new dialog("Zamknij zeszyt, otwórz mózg – czas na kartkówkę!"),
    new dialog("Kto dziś nie zna stolic, ten nie zna siebie i swojego miejsca na świecie."),
    new dialog("Jak napiszesz, że Mount Everest jest w Polsce, to zrobisz sobie zdjęcie z jedynką w tle."),
    new dialog("Północ, południe, wschód, zachód – a ty i tak jesteś zagubiony jak satelita w trybie offline."),
    new dialog("Kartkówka sprawdzi, kto zna kontynenty, a kto myśli, że to nowe modele telefonów.")
];

//dialogi z angielskiego

const dialogi_angielski = [
    new dialog("Jak pomylisz ‘he’ z ‘she’, to cię wyślę na kurs podstawowy do przedszkola."),
    new dialog("Dziś kartkówka z czasów – i nie, nie historycznych, tylko gramatycznych."),
    new dialog("Jeśli napiszesz ‘goed’ zamiast ‘went’, to get out, bo you are a mistake."),
    new dialog("Nie będzie pytań o słówka, tylko o twoją godność – która i tak leży między ‘bad’ a ‘terrible’."),
    new dialog("Zobaczymy, kto zna słownictwo, a kto tylko ‘yes’ i ‘no’ mówi z nadzieją, że wystarczy."),
    new dialog("Nie używaj translatora – on też ma granice cierpliwości."),
    new dialog("Jeśli nie umiesz utworzyć zdania w present perfect, to twój mózg jest permanently offline."),
    new dialog("Nie licz na przypadek – to nie jest angielska ruletka, tylko kartkówka."),
    new dialog("Każde ‘i be’ zamiast ‘I am’ to automatyczna jedynka i modlitwa za przyszłość."),
    new dialog("Nie rób mi tu opowiadania po polsku pisząc angielskimi literami – to nie esperanto dla ubogich!"),
    new dialog("Past simple, present continuous – wybierz, z czym chcesz dziś przegrać."),
    new dialog("Jak zrobisz literówkę w ‘school’, to wyjdź ze szkoły i nie wracaj bez słownika."),
    new dialog("Zamknij zeszyt, otwórz mózg, i nie zapomnij czasowników nieregularnych, bo będą cię bić po synapsach.")
];

//dialogi z chemii

const dialogi_chemia = [
    new dialog("Wyciągamy karteczki – zobaczymy, kto tu ma mózg z węgla aktywnego, a kto z teflonu."),
    new dialog("Jeśli pomylisz kwas siarkowy z wodą utlenioną, to idziesz na lekcję przyrody do podstawówki."),
    new dialog("Dziś kartkówka – i nie, nie z tablicy Mendelejewa, tylko z waszej głowy, choć pusta."),
    new dialog("Kto powie, że H₂O to wzór na tlen, ten dostaje pałę w stanie skupienia stałym."),
    new dialog("Nie wiesz, czym jest związek jonowy? To jesteś związany tylko z porażką."),
    new dialog("Dziś sprawdzamy, kto rozumie wiązania, a kto tylko emocjonalne do telefonu."),
    new dialog("Jeśli napiszesz, że woda to pierwiastek, to ci się wrzątek należy na głowę."),
    new dialog("Wyłącz kalkulator, włącz myślenie, bo to nie fizyka, tylko chemia – tu się myśli molekularnie."),
    new dialog("Zamknij zeszyt – czas pokazać, ile się naprawdę nie nauczyłeś."),
    new dialog("Każdy, kto zapomni jednostki, pisze równanie reakcji z dyrektorem."),
    new dialog("Jeśli myślisz, że stężenie to twoje skupienie, to jesteś w stanie rozcieńczenia umysłowego."),
    new dialog("Nie, nie będzie kolorowania układu okresowego – dzisiaj wy kolorujecie swoje oceny."),
    new dialog("Kto nie wie, co to reakcja zobojętniania, niech się sam zobojętni i zniknie.")
];

//dialogi z programisty

const dialogi_programista = [
    new dialog("Proszę o tu fajny program, a nie jakaś wiocha"),
    new dialog("Dobrze, włączamy komputery, włączamy mobidziennik i XAMPP'A"),
    new dialog("Robicie o takie coś i macie szybką 5"),
    new dialog("Nie tłumacz mi, że to działa u ciebie. Bo u mnie nie działa, a ja daję ocenę"),
    new dialog("Zadanie z bazy danych. Tak, znowu. Bo to potraficie najlepiej... nie robić"),
    new dialog("Jak ktoś nazwie klasę Test1, to ja tego nie sprawdzę"),
    new dialog("Nie kopiujemy z neta. Chatgpt nie jest źródłem wiedzy absolutnej"),
    new dialog("To ma działać. A nie tylko wyglądać jakby działało"),
    new dialog("Jak ktoś znowu odda plik o nazwie nowy dokument.txt, to się pogniewamy")
];

//dialogi z informatyka

const dialogi_informatyk = [
    new dialog("Dobrze, dzisiaj kartkówka. Proszę mi nie mylić folderu z plikiem, bo osiwieję."),
    new dialog("Pamiętajcie, że jak się nie zapisze pracy, to się nie liczy. Tak samo jak w życiu."),
    new dialog("Kto dziś nie wie co to skrót .docx, ten dostaje .txt z uwagą."),
    new dialog("Na pytanie ‘ile bajtów ma kilobajt’, proszę nie odpowiadać 'zależy'."),
    new dialog("Dzisiaj sprawdzian. Proszę nie odpalać przeglądarki – i tak nie pomoże."),
    new dialog("Jak nazwiecie plik nowy dokument (7).docx, to już po ocenie."),
    new dialog("Zapiszcie to na komputerze. A nie w głowie, bo tam miejsca już nie ma."),
    new dialog("Niech mi nikt nie mówi, że myszka nie działa. Myszka działa. To wy nie działacie."),
    new dialog("Pytanie pierwsze: czym się różni router od modemu? I nie chcę usłyszeć ‘wielkością’."),
    new dialog("Zróbcie zrzut ekranu. I nie, nie zdjęcie telefonu monitora – zrzut.")
];

//dialogi z teleinformatyka

const dialogi_teleinformatyk = [
    new dialog("Zobaczymy, kto wie, czym się różni switch od routera, a kto myśli, że oba mają tylko światełka."),
    new dialog("Protokół DHCP… mam nadzieję, że chociaż jedno z was przydzieli sobie dziś poprawną odpowiedź."),
    new dialog("Jeśli ktoś pomyli IPv4 z numerem buta, to proszę się nie tłumaczyć, to już się zdarzało."),
    new dialog("Pamiętajcie – skrętka to nie zabawka, tylko kabel. Chociaż po waszych pracach czasem ciężko powiedzieć."),
    new dialog("Dziś sprawdzimy, kto wie, co to adres MAC, a kto dalej myśli, że to coś od Apple."),
    new dialog("Jeśli ktoś na pytanie o model OSI odpowie ‘Windows 11’, to niech po prostu zostawi kartkę pustą."),
    new dialog("Mam nadzieję, że potraficie chociaż narysować sieć lokalną… bez rysowania chmurek i serduszek."),
    new dialog("Sprawdźmy, kto wie, że ping to nie dźwięk powiadomienia na Messengerze."),
    new dialog("Niektóre pytania mogą być trudne – na przykład to, czy umiecie cokolwiek poza wklejaniem z PDF-a."),
    new dialog("Na koniec jedno pytanie otwarte: jakim cudem zdaliście z pierwszej klasy, nie wiedząc, czym jest maska podsieci?")
];

//dialogi z robotyka

const dialogi_robotyk = [
    new dialog("Zobaczymy, kto umie sterować silnikiem, a kto ledwo ogarnia długopis."),
    new dialog("Dzisiaj pytania tylko z podstaw – czyli i tak za trudne dla większości."),
    new dialog("Mam nadzieję, że chociaż jeden z was pamięta, że serwomechanizm to nie potrawa z kuchni włoskiej."),
    new dialog("Jak ktoś pomyli czujnik odległości z pilotem do telewizora, to proszę nie pisać nazwiska – wstyd będzie mniejszy."),
    new dialog("Dziś przekonamy się, kto potrafi używać Arduino, a kto tylko wie, że świeci diodą."),
    new dialog("Jeśli ktoś nadal myśli, że PWM to zespół muzyczny, to... współczuję."),
    new dialog("Proszę pamiętać – robot to nie magia. Ale wasza niewiedza już trochę tak wygląda."),
    new dialog("To nie jest trudne. Roboty rozumieją logikę… szkoda, że wy nie."),
    new dialog("Pytanie o czujniki – ciekawe, czy ktoś z was wie coś więcej niż ‘to to coś z przodu’."),
    new dialog("Tak, będą pytania o schemat połączeń. Tak, będzie śmiesznie – szczególnie jak zobaczę wasze odpowiedzi.")
];

//dialogi z elektronika

const dialogi_elektronik = [
    new dialog("Zobaczymy, kto rozumie prawo Ohma, a kto dalej myśli, że ‘R’ to skrót od ‘random’."),
    new dialog("Kartkówka będzie krótka. Tak jak wasza pamięć o tym, czym jest napięcie."),
    new dialog("Proszę nie bać się pytań o kondensatory – one przynajmniej coś kumulują, w przeciwieństwie do was."),
    new dialog("Dziś pytanie o tranzystory. Może ktoś w końcu zapamięta, że to nie są dwa przyciski w jednym."),
    new dialog("Będzie pytanie o diody. I nie, nie wystarczy napisać ‘świeci albo nie’."),
    new dialog("Układ szeregowy i równoległy. Ciekawe, czy ktoś rozróżni, czy znowu wszyscy podłączą wszystko do wszystkiego i nazwą to ‘innowacją’."),
    new dialog("Proszę się nie martwić – pytania są proste. Tak proste, że nawet multimetr by się za was zawstydził."),
    new dialog("Nie pytam o wzory – pytam o zrozumienie. Ale wiem, że to i tak dla wielu zbyt abstrakcyjne."),
    new dialog("Jeśli ktoś wpisze, że amper to marka samochodu, to przysięgam, zamykam pracownię na klucz."),
    new dialog("Nie stresujcie się – nawet jak nie rozumiecie elektroniki, to zawsze możecie być testerami baterii.")
];

//dialogi z automatyka

const dialogi_automatyk = [
    new dialog("Zobaczymy, kto pamięta, co to jest PLC, a kto dalej uważa, że to jakieś nowe oprogramowanie do gier."),
    new dialog("Dzisiaj sprawdzimy, kto wie, jak działa układ sterowania, a kto myśli, że wszystko działa magicznie po naciśnięciu guzika."),
    new dialog("Czujniki – tak, to one są odpowiedzialne za cały proces. Ale to nie znaczy, że je rozumiecie."),
    new dialog("Jeśli ktoś jeszcze myśli, że programowanie sterowników to klikanie myszką, to niech wstanie i wyjdzie."),
    new dialog("Naprawdę, nie oczekuję cudów. Ale może ktoś odpowie na pytanie, co to jest HMI, zanim zaczniecie się zastanawiać, czy to nie jest nowa aplikacja na smartfony."),
    new dialog("Nie martwcie się, to tylko kartkówka. Tak jak ‘tylko’ proces, którym zarządza wasz system – ale to już inna historia."),
    new dialog("Czujnik zbliżeniowy nie jest ‘takim tam’ gadżetem. Ale zapewne ktoś spróbuje wpiąć go do portu USB."),
    new dialog("Zrozumienie PID to nie magia, ale znając was, pewnie więcej będziecie w stanie zrobić z komputerem, niż z regulacją temperatury."),
    new dialog("Nie pytam o teorię, pytam o praktykę. Ale wiem, że dla większości z was układ sterowania to tylko coś, czym można popisać się na Instagramie."),
    new dialog("Dzięki za to, że po prostu przyszliście. W końcu w automatyce liczy się tylko jeden krok naprzód, ale z wami to wygląda bardziej jak krok w bok.")
];

//dialogi z fotografa

const dialogi_fotograf = [
    new dialog("Zobaczymy, kto odróżnia balans bieli od białego tła w PowerPoincie."),
    new dialog("Tak, będzie pytanie o trójkąt ekspozycji. I nie, nie chodzi o pizzę z trzema składnikami."),
    new dialog("Jeśli ktoś wpisze, że ‘RAW to rodzaj mięsa’, to będę musiał wyłączyć światło z zażenowania."),
    new dialog("Proszę pamiętać, że megapiksele nie robią zdjęć. Ale wiem, że niektórzy nadal myślą, że to aparat sam komponuje kadr."),
    new dialog("Dziś sprawdzimy, kto rozumie różnicę między CMYK a RGB, a kto używa losowego profilu kolorów jak przypraw do zupy."),
    new dialog("Będzie pytanie o głębię ostrości. Mam nadzieję, że przynajmniej wasze myśli będą miały jakąkolwiek głębię."),
    new dialog("Tak, będzie coś z grafiki rastrowej i wektorowej."),
    new dialog("Nie pytam, czym jest kompozycja – pytam, czy w ogóle próbujecie ją stosować, czy nadal centralnie twarz + 10 km pustej przestrzeni."),
    new dialog("Jeśli ktoś odpowie, że HDR to ‘coś co robi telefon jak się trzęsie ręka’, to niech już zostawi pustą kartkę."),
    new dialog("Pamiętajcie – kartkówka nie będzie miała filtra. W przeciwieństwie do waszych prac.")
];

//dialogi z historii

const dialogi_historia = [
    new dialog("Pamiętacie, że dziś jest kartkówka prawda?"),
    new dialog("Mam nadzieję, że się przygotowaliście na dziś."),
    new dialog("Nie, nie możemy tego przesunąć na za tydzień."),
    new dialog("Dobrze, jak nikt się nie zgłasza to generator losowych liczb wybierze."),
    new dialog("Czy możemy proszę nie dyskutować o tym przez 10 minut."),
    new dialog("Przecież sprawdzian był wpisany 3 tygodnie temu.")
];

//dialogi z informatyki

const dialogi_informatyka = [
    new dialog("Dziś przekonamy się, kto naprawdę potrafi coś więcej niż kopiuj-wklej."),
    new dialog("Jak ktoś nie wie, co to zmienna, to czas na zmianę profilu."),
    new dialog("Dla tych, co nie kodują, kartkówka będzie jak blue screen."),
    new dialog("Mam nadzieję, że nie przygotowywaliście się w Pascalu..."),
    new dialog("Dziś sprawdzimy, czy potraficie coś więcej niż zainstalować Minecrafta z modami."),
    new dialog("Nie pytajcie, czy można użyć ChatGPT – to nie ta lekcja."),
    new dialog("Jeśli ktoś się dziś zaloguje tylko po to, żeby się wylogować z życia – to powodzenia."),
    new dialog("To nie jest egzamin z TikToka – dziś programujemy!"),
    new dialog("Sprawdzam, kto zna różnicę między HTML a HTTP."),
    new dialog("Jak nie ogarniacie pętli, to będziecie się dziś w jednej kręcić."),
    new dialog("Uwaga, kto nie zna operatorów logicznych, ten logicznie nie przetrwa."),
    new dialog("Niech was nie zwiedzie proste polecenie – pułapki są głęboko zakodowane."),
    new dialog("Jeśli ktoś pomyli Python z żółtym wężem, to niech wezwie pomoc."),
    new dialog("Dziś nie pomoże wam ani AI, ani kolega – tylko własny mózg."),
    new dialog("Pamiętajcie, że 0 i 1 to więcej niż tylko binarny świat – to wasz los dziś."),
    new dialog("Niech wam myszka nie drży, bo kodowanie to nie gra o życie, ale o ocenę."),
    new dialog("Każda niezamknięta klamra to krok bliżej do poprawki."),
    new dialog("Jak nie wiecie, co robi algorytm, to algorytm zrobi z wami, co chce."),
    new dialog("Powodzenia – dziś przekonamy się, kto umie debugować, a kto tylko buja w obłokach.")
]