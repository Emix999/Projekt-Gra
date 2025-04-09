//deklaracja klasy pytanie

class pytanie {
  constructor(tresc, odpowiedzi) {
      this.tresc = tresc;
      this.odpowiedzi = odpowiedzi;
      //odpowiedź na indeksie zerowym jest poprawna
  }
}

//pytania z angielskiego

const rok1_angielski = [
  new pytanie("What time do you usually get up?", ["At 7 a.m.", "With my sister", "Very fast", "On the table"]),
  new pytanie("My brother ___ football every weekend.", ["plays", "play", "playing", "is playing"]),
  new pytanie("Where ___ you from?", ["are", "is", "be", "do"]),
  new pytanie("I have ___ apple in my bag.", ["an", "a", "some", "any"]),
  new pytanie("She ___ go to school by bus.", ["doesn’t", "don’t", "isn’t", "hasn’t"]),
  new pytanie("How old are you?", ["I’m 16.", "I live in Poland.", "I’m fine.", "At school."]),
  new pytanie("There ___ some milk in the fridge.", ["is", "are", "be", "has"]),
  new pytanie("Can I have a glass of water, ___?", ["please", "thanks", "hello", "goodbye"]),
  new pytanie("My favourite subject is ___", ["English", "fast", "teacher", "to school"]),
  new pytanie("What’s your name?", ["My name is Tom.", "I’m fine.", "I’m 17.", "In Warsaw"]),
];

const rok2_angielski = [
  new pytanie("We ___ to London last summer.", ["went", "go", "goes", "going"]),
  new pytanie("I ___ seen that film before.", ["have", "has", "did", "was"]),
  new pytanie("He’s interested ___ computers.", ["in", "on", "at", "for"]),
  new pytanie("This is the book ___ I told you about.", ["that", "which", "who", "what"]),
  new pytanie("I enjoy ___ to music in my free time.", ["listening", "to listen", "listen", "listened"]),
  new pytanie("We were tired, ___ we went to bed early.", ["so", "because", "but", "or"]),
  new pytanie("___ you ever been to Paris?", ["Have", "Did", "Do", "Are"]),
  new pytanie("They ___ TV when I came in.", ["were watching", "watched", "watching", "had watched"]),
  new pytanie("If it rains, we ___ stay at home.", ["will", "would", "are", "do"]),
  new pytanie("He’s the ___ student in the class.", ["best", "better", "good", "well"]),
];

const rok3_angielski = [
  new pytanie("I’d rather ___ home tonight.", ["stay", "staying", "to stay", "stayed"]),
  new pytanie("It’s important ___ hard.", ["to work", "working", "work", "to working"]),
  new pytanie("She asked me if I ___ help her.", ["could", "can", "will", "may"]),
  new pytanie("The project ___ by the end of next week.", ["will be finished", "is finishing", "has finished", "was being"]),
  new pytanie("Not only ___ late, but also rude.", ["was he", "he was", "he is", "is he"]),
  new pytanie("I regret ___ you about it.", ["not telling", "to tell", "not to tell", "tell"]),
  new pytanie("I’m used to ___ early.", ["getting up", "get up", "got up", "to get up"]),
  new pytanie("She prefers tea ___ coffee.", ["to", "than", "over", "more"]),
  new pytanie("This phone is too expensive, and ___, it’s out of stock.", ["moreover", "although", "however", "because"]),
  new pytanie("They ___ the car repaired yesterday.", ["had", "have", "did", "got"]),
];

const rok4_angielski = [
  new pytanie("If I had known, I ___ have told you.", ["would", "will", "can", "shall"]),
  new pytanie("He denied ___ the window.", ["breaking", "to break", "break", "to breaking"]),
  new pytanie("We couldn’t help ___ when we heard the story.", ["laughing", "to laugh", "laugh", "laughed"]),
  new pytanie("You should have ___ her the truth.", ["told", "tell", "telling", "to tell"]),
  new pytanie("Neither of the answers ___ correct.", ["is", "are", "were", "be"]),
  new pytanie("It’s high time you ___ a decision.", ["made", "make", "making", "had made"]),
  new pytanie("I wish I ___ how to code.", ["knew", "know", "have known", "had known"]),
  new pytanie("Despite ___ late, he managed to finish the exam.", ["being", "be", "to be", "been"]),
  new pytanie("The car, ___ was stolen last week, was found yesterday.", ["which", "that", "who", "where"]),
  new pytanie("He speaks English ___ than I do.", ["better", "more well", "good", "best"]),
];

const rok5_angielski = [
  new pytanie("No sooner ___ the door than the phone rang.", ["had I closed", "I had closed", "I closed", "was I closing"]),
  new pytanie("Hardly ___ when the lights went out.", ["had we arrived", "we arrived", "did we arrive", "have we arrived"]),
  new pytanie("Were I you, I ___ consider another option.", ["would", "will", "shall", "must"]),
  new pytanie("Scarcely had he entered ___ it started to rain.", ["when", "then", "than", "and"]),
  new pytanie("Only after he apologized ___ to forgive him.", ["did she agree", "she agreed", "has she agreed", "was she agreeing"]),
  new pytanie("Little ___ that she was being watched.", ["did she know", "she knew", "was she know", "she did know"]),
  new pytanie("___ it been warmer, we would have gone swimming.", ["Had", "Was", "If", "Were"]),
  new pytanie("He’s not only rich ___ also very generous.", ["but", "and", "as", "or"]),
  new pytanie("___ of the two sisters is older?", ["Which", "Who", "Whose", "Whom"]),
  new pytanie("It was not until midnight ___ they stopped working.", ["that", "when", "then", "which"]),
];


//pytania z biologii

const rok1_biologia = [
  new Pytanie("Która z poniższych struktur występuje zarówno w komórkach roślinnych, jak i zwierzęcych?", ["Błona komórkowa", "Chloroplasty", "Ściana komórkowa", "Wakuola"]),
  new Pytanie("Podstawową jednostką budulcową i funkcjonalną organizmu jest:", ["Komórka", "Tkanka", "Organ", "Układ narządów"]),
  new Pytanie("Które z wymienionych organizmów nie mają budowy komórkowej?", ["Wirusy", "Bakterie", "Grzyby", "Protisty"]),
  new Pytanie("Która cecha jest typowa dla organizmów autotroficznych?", ["Samodzielne wytwarzanie pokarmu", "Pobieranie gotowych związków organicznych", "Pasożytnictwo", "Brak jądra komórkowego"]),
  new Pytanie("Jaką funkcję pełni jądro komórkowe?", ["Kontroluje procesy życiowe komórki", "Przekształca energię", "Magazynuje wodę", "Rozkłada substancje toksyczne"]),
  new Pytanie("Które organizmy są prokariotyczne?", ["Bakterie", "Grzyby", "Protisty", "Rośliny"]),
  new Pytanie("Który proces prowadzi do powstawania ATP w mitochondriach?", ["Oddychanie tlenowe", "Fotosynteza", "Fermentacja", "Dyfuzja"]),
  new Pytanie("Z czego zbudowana jest błona komórkowa?", ["Z lipidów i białek", "Z celulozy", "Z chityny", "Z keratyny"]),
  new Pytanie("Które organelle są odpowiedzialne za syntezę białek?", ["Rybosomy", "Mitochondria", "Jądro komórkowe", "Lizosomy"]),
  new Pytanie("Czym różni się komórka eukariotyczna od prokariotycznej?", ["Obecnością jądra komórkowego", "Brakiem DNA", "Brakiem błony komórkowej", "Obecnością chloroplastów"])
];

const rok2_biologia = [
  new Pytanie("Która tkanka transportuje wodę u roślin?", ["Drewno", "Łyko", "Miękisz", "Sklerenchyma"]),
  new Pytanie("Który układ odpowiada za transport tlenu w organizmie człowieka?", ["Krwionośny", "Pokarmowy", "Nerwowy", "Oddechowy"]),
  new Pytanie("Jak nazywa się podstawowa jednostka strukturalna mięśni?", ["Włókno mięśniowe", "Neuron", "Erytrocyt", "Osteon"]),
  new Pytanie("Który narząd filtruje krew i produkuje mocz?", ["Nerka", "Wątroba", "Trzustka", "Jelito cienkie"]),
  new Pytanie("Jaki hormon produkuje trzustka?", ["Insulina", "Tyroksyna", "Adrenalina", "Estrogen"]),
  new Pytanie("Gdzie zachodzi wymiana gazowa w płucach?", ["W pęcherzykach płucnych", "W oskrzelach", "W tchawicy", "W krtani"]),
  new Pytanie("Za co odpowiada układ limfatyczny?", ["Obrona organizmu", "Transport tlenu", "Rozkład tłuszczów", "Regulację temperatury"]),
  new Pytanie("Który element szkieletu chroni mózg?", ["Czaszka", "Kręgosłup", "Żebra", "Miednica"]),
  new Pytanie("Jak nazywa się proces pobierania pokarmu?", ["Ingestia", "Dyfuzja", "Osmotrofia", "Resorpcja"]),
  new Pytanie("Jak nazywa się jednostka budulcowa kości?", ["Osteon", "Sarkomer", "Neuron", "Chondrocyt"])
];

const rok3_biologia = [
  new Pytanie("Jakie DNA znajduje się w jądrze komórkowym?", ["Genomowe", "Mitonchondrialne", "Plazmidowe", "Cytoplazmatyczne"]),
  new Pytanie("Która zasada azotowa nie występuje w RNA?", ["Tymina", "Adenina", "Guanina", "Cytozyna"]),
  new Pytanie("Co to jest allel?", ["Wersja genu", "Rodzaj komórki", "Rodzaj enzymu", "Rodzaj RNA"]),
  new Pytanie("Który proces prowadzi do powstania gamet?", ["Mejoza", "Mitoza", "Oogeneza", "Replikacja"]),
  new Pytanie("Co to jest mutacja?", ["Zmiana w materiale genetycznym", "Podział komórki", "Synteza białek", "Transport RNA"]),
  new Pytanie("Co to jest GMO?", ["Organizm zmodyfikowany genetycznie", "Organizm klonowany", "Organizm dziki", "Organizm pasożytniczy"]),
  new Pytanie("Które RNA przenosi informację genetyczną?", ["mRNA", "tRNA", "rRNA", "miRNA"]),
  new Pytanie("Co oznacza pojęcie homozygota?", ["Dwa takie same allele", "Dwa różne allele", "Brak alleli", "Czworaczne allele"]),
  new Pytanie("Gdzie zachodzi fotosynteza?", ["W chloroplastach", "W mitochondriach", "W jądrze komórkowym", "W rybosomach"]),
  new Pytanie("Co to jest ekosystem?", ["Zbiór organizmów i środowiska", "Gatunek organizmów", "System wodny", "Zespół genów"])
];

const rok4_biologia = [
  new Pytanie("Który naukowiec jest autorem teorii doboru naturalnego?", ["Karol Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Koch"]),
  new Pytanie("Które organizmy zaliczamy do królestwa roślin?", ["Mchy", "Grzyby", "Bakterie", "Pierwotniaki"]),
  new Pytanie("Które organizmy są bezkręgowcami?", ["Owad", "Ptak", "Ryba", "Płaz"]),
  new Pytanie("Czym jest specjacja?", ["Powstawaniem nowych gatunków", "Podziałem komórki", "Fotosyntezą", "Mutacją"]),
  new Pytanie("Co to jest taksonomia?", ["Nauka o klasyfikacji organizmów", "Nauka o genach", "Nauka o tkankach", "Nauka o bakteriach"]),
  new Pytanie("Co to jest skamieniałość?", ["Zachowany ślad organizmu", "Zmiana genetyczna", "Struktura komórkowa", "Substancja odżywcza"]),
  new Pytanie("Do jakiej grupy należą ssaki?", ["Kręgowce", "Bezkręgowce", "Grzyby", "Rośliny"]),
  new Pytanie("Który z poniższych to przystosowanie ptaków do lotu?", ["Puste kości", "Zredukowane skrzela", "Duży ogon", "Skórzaste skrzydła"]),
  new Pytanie("Co to jest adaptacja?", ["Przystosowanie do środowiska", "Utrata narządów", "Mutacja letalna", "Rozwój nowotworu"]),
  new Pytanie("Jakie organizmy wytwarzają zarodniki?", ["Paprocie", "Ssaki", "Ptaki", "Płazy"])
];

const rok5_biologia = [
  new Pytanie("Która substancja jest głównym źródłem energii dla komórek?", ["Glukoza", "Tłuszcze", "Białka", "Woda"]),
  new Pytanie("Co to jest homeostaza?", ["Równowaga wewnętrzna organizmu", "Produkcja hormonów", "Proces oddychania", "Wydalanie"]),
  new Pytanie("Który z poniższych to witamina rozpuszczalna w tłuszczach?", ["Witamina D", "Witamina C", "Witamina B12", "Witamina B6"]),
  new Pytanie("Jaka choroba jest wywoływana przez wirusa HIV?", ["AIDS", "Gruźlica", "Odra", "WZW B"]),
  new Pytanie("Który czynnik zwiększa ryzyko nowotworu?", ["Palenie tytoniu", "Spożycie witamin", "Sen", "Ruch na świeżym powietrzu"]),
  new Pytanie("Który narząd odpowiada za detoksykację?", ["Wątroba", "Płuca", "Jelito grube", "Trzustka"]),
  new Pytanie("Co to jest szczepionka?", ["Preparat uodparniający", "Lek przeciwbólowy", "Antybiotyk", "Suplement"]),
  new Pytanie("Co to jest antybiotyk?", ["Lek na bakterie", "Lek na wirusy", "Hormon", "Szczepionka"]),
  new Pytanie("Co to jest BMI?", ["Wskaźnik masy ciała", "Poziom cukru", "Ciśnienie krwi", "Poziom cholesterolu"]),
  new Pytanie("Co to jest alergia?", ["Nadmierna reakcja układu odpornościowego", "Brak enzymów", "Choroba wirusowa", "Choroba bakteryjna"])
];

//pytania z geografii

const rok1_geografia = [
  new Pytanie("Jak nazywa się najbliższa Ziemi gwiazda?", ["Słońce", "Syriusz", "Alfa Centauri", "Proxima Centauri"]),
  new Pytanie("Która warstwa atmosfery znajduje się najbliżej powierzchni Ziemi?", ["Troposfera", "Stratosfera", "Mezosfera", "Egzosfera"]),
  new Pytanie("Na jakiej półkuli znajduje się większość kontynentów?", ["Półkuli północnej", "Półkuli południowej", "Półkuli wschodniej", "Półkuli zachodniej"]),
  new Pytanie("Który gaz występuje w największej ilości w atmosferze?", ["Azot", "Tlen", "Dwutlenek węgla", "Ozon"]),
  new Pytanie("Jaki ruch wykonuje Ziemia w ciągu doby?", ["Obrót wokół własnej osi", "Ruch precesyjny", "Obieg wokół Księżyca", "Ruch równoległy"]),
  new Pytanie("Na jakim kontynencie leży Sahara?", ["Afryka", "Azja", "Ameryka Północna", "Australia"]),
  new Pytanie("Które ciało niebieskie jest naturalnym satelitą Ziemi?", ["Księżyc", "Mars", "Wenus", "Merkury"]),
  new Pytanie("Gdzie występuje najwięcej trzęsień ziemi?", ["W obrębie pacyficznego pierścienia ognia", "Na kontynencie europejskim", "W centralnej Afryce", "W Arktyce"]),
  new Pytanie("Czym mierzymy temperaturę powietrza?", ["Termometrem", "Barometrem", "Higrometrem", "Anemometrem"]),
  new Pytanie("Jak nazywa się proces niszczenia skał przez czynniki zewnętrzne?", ["Wietrzenie", "Sedymenacja", "Diageneza", "Kompresja"]),
];

const rok2_geografia = [
  new Pytanie("Co oznacza skrót GIS?", ["System informacji geograficznej", "Globalna inercja satelitarna", "Generalny indeks społeczeństwa", "Geografia i społeczeństwo"]),
  new Pytanie("Jaką jednostką mierzy się skalę mapy?", ["Liczbą", "Kilometrami", "Metrówką", "Stopniami"]),
  new Pytanie("Jaki kraj ma największą powierzchnię?", ["Rosja", "Kanada", "Chiny", "USA"]),
  new Pytanie("Które z poniższych nie jest państwem wyspiarskim?", ["Niemcy", "Japonia", "Filipiny", "Islandia"]),
  new Pytanie("Jak nazywa się stolica Francji?", ["Paryż", "Lyon", "Marsylia", "Nicea"]),
  new Pytanie("Czym zajmuje się kartografia?", ["Tworzeniem map", "Uprawą roli", "Przemysłem", "Meteorologią"]),
  new Pytanie("Które państwo ma największą liczbę ludności?", ["Chiny", "Indie", "USA", "Indonezja"]),
  new Pytanie("Które z poniższych jest organizacją międzynarodową?", ["Wszystkie powyższe", "NATO", "UE", "ONZ"]),
  new Pytanie("Jak nazywa się najmniejsze państwo świata?", ["Watykan", "Monako", "San Marino", "Liechtenstein"]),
  new Pytanie("Co oznacza termin urbanizacja?", ["Rozwój miast", "Rolnictwo miejskie", "Spadek liczby ludności", "Wyprowadzka ze wsi"]),
];

const rok3_geografia = [
  new Pytanie("Który sektor gospodarki obejmuje rolnictwo?", ["Pierwotny", "Wtórny", "Trzeci", "Czwarty"]),
  new Pytanie("Co jest głównym źródłem energii odnawialnej?", ["Energia słoneczna", "Węgiel", "Gaz ziemny", "Ropa naftowa"]),
  new Pytanie("Gdzie znajdują się największe złoża ropy naftowej?", ["Bliski Wschód", "Europa", "Afryka Środkowa", "Antarktyda"]),
  new Pytanie("Co to jest PKB?", ["Produkt krajowy brutto", "Podatek konsumpcyjny", "Plan krajowego budżetu", "Przemysł kopalniany"]),
  new Pytanie("Jaka forma transportu dominuje w Polsce?", ["Drogowy", "Wodny", "Lotniczy", "Kolejowy"]),
  new Pytanie("Co to jest aglomeracja?", ["Skupisko miast wokół dużego miasta", "Teren rolniczy", "Obszar przemysłowy", "Strefa klimatyczna"]),
  new Pytanie("Co oznacza termin import?", ["Zakup towarów z zagranicy", "Eksport surowców", "Produkcja krajowa", "Transport wewnętrzny"]),
  new Pytanie("Który kontynent ma najmniejszą gęstość zaludnienia?", ["Australia", "Azja", "Europa", "Ameryka Południowa"]),
  new Pytanie("Które z poniższych państw należy do G7?", ["Niemcy", "Argentyna", "Polska", "Meksyk"]),
  new Pytanie("Który region Polski jest najbardziej uprzemysłowiony?", ["Górny Śląsk", "Mazury", "Bieszczady", "Roztocze"]),
];

const rok4_geografia = [
  new Pytanie("Jakie morze oblewa Polskę od północy?", ["Bałtyckie", "Północne", "Śródziemne", "Czarne"]),
  new Pytanie("Najwyższy szczyt Polski to:", ["Rysy", "Śnieżka", "Giewont", "Kasprowy Wierch"]),
  new Pytanie("W którym województwie leży Warszawa?", ["Mazowieckim", "Małopolskim", "Śląskim", "Lubelskim"]),
  new Pytanie("Największa rzeka Polski to:", ["Wisła", "Odra", "Warta", "Bug"]),
  new Pytanie("Ile województw ma Polska?", ["16", "14", "12", "10"]),
  new Pytanie("Gdzie znajduje się Kotlina Kłodzka?", ["Sudety", "Karpaty", "Nizina Mazowiecka", "Pojezierze Pomorskie"]),
  new Pytanie("Jak nazywa się największe jezioro w Polsce?", ["Śniardwy", "Mamry", "Wigry", "Gopło"]),
  new Pytanie("Co dominuje w krajobrazie Niziny Śląskiej?", ["Niziny i przemysł", "Góry", "Pustynie", "Wulkaniczne wzgórza"]),
  new Pytanie("Które miasto w Polsce jest portem morskim?", ["Gdańsk", "Poznań", "Lublin", "Katowice"]),
  new Pytanie("W jakim regionie Polski znajduje się Puszcza Białowieska?", ["Podlaskie", "Małopolskie", "Kujawsko-Pomorskie", "Opolskie"]),
];

const rok5_geografia = [
  new Pytanie("Które zjawisko jest skutkiem globalnego ocieplenia?", ["Topnienie lodowców", "Wzrost liczby dni z mrozem", "Spadek poziomu mórz", "Zwiększenie zalesienia"]),
  new Pytanie("Co to jest efekt cieplarniany?", ["Zatrzymywanie ciepła w atmosferze przez gazy", "Ogrzewanie domów energią odnawialną", "Wzrost temperatury w szklarni", "Wpływ Słońca na uprawy"]),
  new Pytanie("Który gaz jest głównym gazem cieplarnianym?", ["Dwutlenek węgla", "Tlen", "Azot", "Hel"]),
  new Pytanie("Jaka organizacja zajmuje się ochroną środowiska?", ["Greenpeace", "FIFA", "WHO", "NATO"]),
  new Pytanie("Co oznacza pojęcie 'zrównoważony rozwój'?", ["Rozwój z poszanowaniem środowiska", "Ekspansja przemysłu ciężkiego", "Intensywna urbanizacja", "Rozwój wyłącznie gospodarczy"]),
  new Pytanie("Co oznacza termin deforestacja?", ["Wycinka lasów", "Sadzenie drzew", "Ochrona lasów", "Pożary traw"]),
  new Pytanie("Jakie państwo jest największym emitentem CO₂?", ["Chiny", "Polska", "Niemcy", "Australia"]),
  new Pytanie("Co to jest recykling?", ["Przetwarzanie odpadów", "Spalanie śmieci", "Składowanie odpadów", "Wyrzucanie śmieci do oceanu"]),
  new Pytanie("Który kontynent cierpi najbardziej z powodu pustynnienia?", ["Afryka", "Europa", "Ameryka Północna", "Australia"]),
  new Pytanie("Jak nazywa się największy ocean na Ziemi?", ["Spokojny (Pacyfik)", "Atlantycki", "Indyjski", "Arktyczny"]),
];

//pytania z informatyki

const rok1_informatyka = [
  new Pytanie("Co jest podstawową jednostką informacji w informatyce?", ["Bit", "Bajt", "Piksel", "Znak"]),
  new Pytanie("Które z poniższych urządzeń jest urządzeniem wejściowym?", ["Klawiatura", "Monitor", "Drukarka", "Głośnik"]),
  new Pytanie("Który system operacyjny jest oparty na jądrze Linux?", ["Ubuntu", "Windows", "macOS", "DOS"]),
  new Pytanie("Co oznacza skrót CPU?", ["Central Processing Unit", "Computer Power Unit", "Central Program Utility", "Computer Program Unit"]),
  new Pytanie("Jakie rozszerzenie ma plik wykonywalny w systemie Windows?", [".exe", ".doc", ".txt", ".jpg"]),
  new Pytanie("Jakie urządzenie służy do długotrwałego przechowywania danych?", ["Dysk twardy", "RAM", "Cache", "Procesor"]),
  new Pytanie("Który z języków programowania jest językiem wysokiego poziomu?", ["Python", "Assembler", "Maszynowy", "Binary"]),
  new Pytanie("Co oznacza skrót RAM?", ["Random Access Memory", "Read All Memory", "Real Application Module", "Run Access Memory"]),
  new Pytanie("Jaką funkcję pełni system operacyjny?", ["Zarządza sprzętem i zasobami", "Wykonuje tylko gry", "Projektuje grafikę", "Tworzy muzykę"]),
  new Pytanie("Co to jest BIOS?", ["Program startowy płyty głównej", "Format pliku graficznego", "Aplikacja biurowa", "Typ pamięci RAM"]),
];

const rok2_informatyka = [
  new Pytanie("Jak nazywa się unikalny adres karty sieciowej?", ["MAC", "IP", "DNS", "DHCP"]),
  new Pytanie("Co oznacza skrót IP?", ["Internet Protocol", "Internal Processor", "Input Port", "Internet Plug"]),
  new Pytanie("Które urządzenie łączy różne sieci?", ["Router", "Switch", "Hub", "Karta graficzna"]),
  new Pytanie("Który system operacyjny jest darmowy i open-source?", ["Linux", "Windows", "macOS", "iOS"]),
  new Pytanie("Co oznacza skrót SQL?", ["Structured Query Language", "System Quick Loader", "Save Query Location", "Sequential Queue Line"]),
  new Pytanie("Jakiego polecenia używa się w systemie Windows do sprawdzenia połączenia sieciowego?", ["ping", "touch", "mkdir", "sudo"]),
  new Pytanie("Co przechowuje dane w relacyjnej bazie danych?", ["Tabela", "Folder", "Plik", "Strona"]),
  new Pytanie("Jakie rozszerzenie ma typowy plik bazy danych MS Access?", [".accdb", ".docx", ".xlsx", ".pptx"]),
  new Pytanie("Która z poniższych usług umożliwia automatyczne przydzielanie adresów IP?", ["DHCP", "FTP", "SMTP", "HTML"]),
  new Pytanie("Który protokół służy do przesyłania stron internetowych?", ["HTTP", "SSH", "FTP", "IPX"]),
];

const rok3_informatyka = [
  new Pytanie("Która pętla w Pythonie służy do iteracji po kolekcji?", ["for", "while", "switch", "repeat"]),
  new Pytanie("Jaką wartość logiczną zwraca operator porównania ==?", ["True lub False", "Zmienną", "Liczbę", "Tekst"]),
  new Pytanie("Który z poniższych typów danych w Pythonie reprezentuje tekst?", ["str", "int", "bool", "float"]),
  new Pytanie("Który symbol oznacza przypisanie wartości w Pythonie?", ["=", "==", ":=", "==="]),
  new Pytanie("Jaka funkcja w Pythonie służy do wyświetlania danych?", ["print()", "echo", "out()", "show()"]),
  new Pytanie("Co oznacza skrót IDE?", ["Integrated Development Environment", "Internal Data Extension", "Internet Development Engine", "Input Data Encoder"]),
  new Pytanie("Który program służy do tworzenia prezentacji?", ["Microsoft PowerPoint", "Microsoft Excel", "Notepad++", "Paint"]),
  new Pytanie("Co oznacza skrót HTML?", ["HyperText Markup Language", "High Tech Modern Layout", "Hyperlink Text Memory Language", "Hidden Text Metadata Language"]),
  new Pytanie("Jak nazywa się podstawowy element algorytmu?", ["Instrukcja", "Folder", "Plik", "Procesor"]),
  new Pytanie("Co robi instrukcja warunkowa?", ["Sprawdza warunek i wykonuje określone działania", "Zawsze kończy program", "Tworzy wykres", "Łączy dwa pliki"]),
];

const rok4_informatyka = [
  new Pytanie("Co oznacza skrót DNS?", ["Domain Name System", "Digital Network Service", "Data Node Server", "Domain Numbering Scheme"]),
  new Pytanie("Jaki port jest standardowo używany przez HTTP?", ["80", "21", "443", "25"]),
  new Pytanie("Który z poniższych systemów to system operacyjny serwera?", ["Windows Server", "Windows 10 Home", "Android", "iOS"]),
  new Pytanie("Które z poniższych haseł jest najbezpieczniejsze?", ["!P@ssW0rd#2024", "123456", "qwerty", "admin"]),
  new Pytanie("Co oznacza pojęcie „firewall”?", ["Zabezpieczenie sieci przed nieautoryzowanym dostępem", "Program graficzny", "Przeglądarka internetowa", "Sterownik drukarki"]),
  new Pytanie("Co to jest szyfrowanie danych?", ["Zabezpieczenie danych przed odczytem przez osoby trzecie", "Formatowanie dysku", "Nadpisywanie danych", "Usuwanie plików"]),
  new Pytanie("Które rozszerzenie ma plik archiwum?", [".zip", ".exe", ".docx", ".jpg"]),
  new Pytanie("Co oznacza skrót SSL?", ["Secure Sockets Layer", "Simple Secure Link", "Safe Server Login", "Structured Server Layer"]),
  new Pytanie("Które polecenie w Linuksie służy do zmiany katalogu?", ["cd", "ls", "rm", "mv"]),
  new Pytanie("Jak nazywa się procedura przywracania danych po awarii?", ["Backup", "Delete", "Format", "Restart"]),
];

const rok5_informatyka = [
  new Pytanie("Co oznacza skrót SaaS?", ["Software as a Service", "Server as a System", "Script and System", "Storage and Access"]),
  new Pytanie("Która z usług to przykład przechowywania danych w chmurze?", ["Google Drive", "Excel", "Paint", "BIOS"]),
  new Pytanie("Jak nazywa się platforma do zarządzania kontenerami?", ["Kubernetes", "Photoshop", "Word", "Access"]),
  new Pytanie("Co umożliwia Docker?", ["Tworzenie i uruchamianie kontenerów", "Edycję zdjęć", "Pisanie dokumentów", "Montaż filmów"]),
  new Pytanie("Co oznacza skrót CI/CD?", ["Continuous Integration / Continuous Deployment", "Central Interface / Custom Data", "Core Integration / Client Database", "Computer Input / Code Debugging"]),
  new Pytanie("Co oznacza Git w programowaniu?", ["System kontroli wersji", "Kompilator", "Przeglądarka", "Antywirus"]),
  new Pytanie("Jaki plik konfiguracyjny znajduje się w repozytorium Git?", [".gitignore", "config.sys", "index.html", "setup.exe"]),
  new Pytanie("Jakie polecenie tworzy nowe repozytorium Git?", ["git init", "git copy", "git new", "git start"]),
  new Pytanie("Co oznacza push w Git?", ["Wysłanie zmian do zdalnego repozytorium", "Usunięcie pliku", "Zatrzymanie działania", "Wydruk kodu"]),
  new Pytanie("Jak nazywa się proces uruchamiania aplikacji w chmurze bez zarządzania serwerami?", ["Serverless", "Hosting", "Caching", "Domaining"]),
];