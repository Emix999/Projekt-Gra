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
  new pytanie("What’s your name?", ["My name is Tom.", "I’m fine.", "I’m 17.", "In Warsaw"])
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
  new pytanie("He’s the ___ student in the class.", ["best", "better", "good", "well"])
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
  new pytanie("They ___ the car repaired yesterday.", ["had", "have", "did", "got"])
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
  new pytanie("He speaks English ___ than I do.", ["better", "more well", "good", "best"])
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
  new pytanie("It was not until midnight ___ they stopped working.", ["that", "when", "then", "which"])
];


//pytania z biologii

const rok1_biologia = [
  new pytanie("Która z poniższych struktur występuje zarówno w komórkach roślinnych, jak i zwierzęcych?", ["Błona komórkowa", "Chloroplasty", "Ściana komórkowa", "Wakuola"]),
  new pytanie("Podstawową jednostką budulcową i funkcjonalną organizmu jest:", ["Komórka", "Tkanka", "Organ", "Układ narządów"]),
  new pytanie("Które z wymienionych organizmów nie mają budowy komórkowej?", ["Wirusy", "Bakterie", "Grzyby", "Protisty"]),
  new pytanie("Która cecha jest typowa dla organizmów autotroficznych?", ["Samodzielne wytwarzanie pokarmu", "Pobieranie gotowych związków organicznych", "Pasożytnictwo", "Brak jądra komórkowego"]),
  new pytanie("Jaką funkcję pełni jądro komórkowe?", ["Kontroluje procesy życiowe komórki", "Przekształca energię", "Magazynuje wodę", "Rozkłada substancje toksyczne"]),
  new pytanie("Które organizmy są prokariotyczne?", ["Bakterie", "Grzyby", "Protisty", "Rośliny"]),
  new pytanie("Który proces prowadzi do powstawania ATP w mitochondriach?", ["Oddychanie tlenowe", "Fotosynteza", "Fermentacja", "Dyfuzja"]),
  new pytanie("Z czego zbudowana jest błona komórkowa?", ["Z lipidów i białek", "Z celulozy", "Z chityny", "Z keratyny"]),
  new pytanie("Które organelle są odpowiedzialne za syntezę białek?", ["Rybosomy", "Mitochondria", "Jądro komórkowe", "Lizosomy"]),
  new pytanie("Czym różni się komórka eukariotyczna od prokariotycznej?", ["Obecnością jądra komórkowego", "Brakiem DNA", "Brakiem błony komórkowej", "Obecnością chloroplastów"])
];

const rok2_biologia = [
  new pytanie("Która tkanka transportuje wodę u roślin?", ["Drewno", "Łyko", "Miękisz", "Sklerenchyma"]),
  new pytanie("Który układ odpowiada za transport tlenu w organizmie człowieka?", ["Krwionośny", "Pokarmowy", "Nerwowy", "Oddechowy"]),
  new pytanie("Jak nazywa się podstawowa jednostka strukturalna mięśni?", ["Włókno mięśniowe", "Neuron", "Erytrocyt", "Osteon"]),
  new pytanie("Który narząd filtruje krew i produkuje mocz?", ["Nerka", "Wątroba", "Trzustka", "Jelito cienkie"]),
  new pytanie("Jaki hormon produkuje trzustka?", ["Insulina", "Tyroksyna", "Adrenalina", "Estrogen"]),
  new pytanie("Gdzie zachodzi wymiana gazowa w płucach?", ["W pęcherzykach płucnych", "W oskrzelach", "W tchawicy", "W krtani"]),
  new pytanie("Za co odpowiada układ limfatyczny?", ["Obrona organizmu", "Transport tlenu", "Rozkład tłuszczów", "Regulację temperatury"]),
  new pytanie("Który element szkieletu chroni mózg?", ["Czaszka", "Kręgosłup", "Żebra", "Miednica"]),
  new pytanie("Jak nazywa się proces pobierania pokarmu?", ["Ingestia", "Dyfuzja", "Osmotrofia", "Resorpcja"]),
  new pytanie("Jak nazywa się jednostka budulcowa kości?", ["Osteon", "Sarkomer", "Neuron", "Chondrocyt"])
];

const rok3_biologia = [
  new pytanie("Jakie DNA znajduje się w jądrze komórkowym?", ["Genomowe", "Mitonchondrialne", "Plazmidowe", "Cytoplazmatyczne"]),
  new pytanie("Która zasada azotowa nie występuje w RNA?", ["Tymina", "Adenina", "Guanina", "Cytozyna"]),
  new pytanie("Co to jest allel?", ["Wersja genu", "Rodzaj komórki", "Rodzaj enzymu", "Rodzaj RNA"]),
  new pytanie("Który proces prowadzi do powstania gamet?", ["Mejoza", "Mitoza", "Oogeneza", "Replikacja"]),
  new pytanie("Co to jest mutacja?", ["Zmiana w materiale genetycznym", "Podział komórki", "Synteza białek", "Transport RNA"]),
  new pytanie("Co to jest GMO?", ["Organizm zmodyfikowany genetycznie", "Organizm klonowany", "Organizm dziki", "Organizm pasożytniczy"]),
  new pytanie("Które RNA przenosi informację genetyczną?", ["mRNA", "tRNA", "rRNA", "miRNA"]),
  new pytanie("Co oznacza pojęcie homozygota?", ["Dwa takie same allele", "Dwa różne allele", "Brak alleli", "Czworaczne allele"]),
  new pytanie("Gdzie zachodzi fotosynteza?", ["W chloroplastach", "W mitochondriach", "W jądrze komórkowym", "W rybosomach"]),
  new pytanie("Co to jest ekosystem?", ["Zbiór organizmów i środowiska", "Gatunek organizmów", "System wodny", "Zespół genów"])
];

const rok4_biologia = [
  new pytanie("Który naukowiec jest autorem teorii doboru naturalnego?", ["Karol Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Koch"]),
  new pytanie("Które organizmy zaliczamy do królestwa roślin?", ["Mchy", "Grzyby", "Bakterie", "Pierwotniaki"]),
  new pytanie("Które organizmy są bezkręgowcami?", ["Owad", "Ptak", "Ryba", "Płaz"]),
  new pytanie("Czym jest specjacja?", ["Powstawaniem nowych gatunków", "Podziałem komórki", "Fotosyntezą", "Mutacją"]),
  new pytanie("Co to jest taksonomia?", ["Nauka o klasyfikacji organizmów", "Nauka o genach", "Nauka o tkankach", "Nauka o bakteriach"]),
  new pytanie("Co to jest skamieniałość?", ["Zachowany ślad organizmu", "Zmiana genetyczna", "Struktura komórkowa", "Substancja odżywcza"]),
  new pytanie("Do jakiej grupy należą ssaki?", ["Kręgowce", "Bezkręgowce", "Grzyby", "Rośliny"]),
  new pytanie("Który z poniższych to przystosowanie ptaków do lotu?", ["Puste kości", "Zredukowane skrzela", "Duży ogon", "Skórzaste skrzydła"]),
  new pytanie("Co to jest adaptacja?", ["Przystosowanie do środowiska", "Utrata narządów", "Mutacja letalna", "Rozwój nowotworu"]),
  new pytanie("Jakie organizmy wytwarzają zarodniki?", ["Paprocie", "Ssaki", "Ptaki", "Płazy"])
];

const rok5_biologia = [
  new pytanie("Która substancja jest głównym źródłem energii dla komórek?", ["Glukoza", "Tłuszcze", "Białka", "Woda"]),
  new pytanie("Co to jest homeostaza?", ["Równowaga wewnętrzna organizmu", "Produkcja hormonów", "Proces oddychania", "Wydalanie"]),
  new pytanie("Który z poniższych to witamina rozpuszczalna w tłuszczach?", ["Witamina D", "Witamina C", "Witamina B12", "Witamina B6"]),
  new pytanie("Jaka choroba jest wywoływana przez wirusa HIV?", ["AIDS", "Gruźlica", "Odra", "WZW B"]),
  new pytanie("Który czynnik zwiększa ryzyko nowotworu?", ["Palenie tytoniu", "Spożycie witamin", "Sen", "Ruch na świeżym powietrzu"]),
  new pytanie("Który narząd odpowiada za detoksykację?", ["Wątroba", "Płuca", "Jelito grube", "Trzustka"]),
  new pytanie("Co to jest szczepionka?", ["Preparat uodparniający", "Lek przeciwbólowy", "Antybiotyk", "Suplement"]),
  new pytanie("Co to jest antybiotyk?", ["Lek na bakterie", "Lek na wirusy", "Hormon", "Szczepionka"]),
  new pytanie("Co to jest BMI?", ["Wskaźnik masy ciała", "Poziom cukru", "Ciśnienie krwi", "Poziom cholesterolu"]),
  new pytanie("Co to jest alergia?", ["Nadmierna reakcja układu odpornościowego", "Brak enzymów", "Choroba wirusowa", "Choroba bakteryjna"])
];

//pytania z geografii

const rok1_geografia = [
  new pytanie("Jak nazywa się najbliższa Ziemi gwiazda?", ["Słońce", "Syriusz", "Alfa Centauri", "Proxima Centauri"]),
  new pytanie("Która warstwa atmosfery znajduje się najbliżej powierzchni Ziemi?", ["Troposfera", "Stratosfera", "Mezosfera", "Egzosfera"]),
  new pytanie("Na jakiej półkuli znajduje się większość kontynentów?", ["Półkuli północnej", "Półkuli południowej", "Półkuli wschodniej", "Półkuli zachodniej"]),
  new pytanie("Który gaz występuje w największej ilości w atmosferze?", ["Azot", "Tlen", "Dwutlenek węgla", "Ozon"]),
  new pytanie("Jaki ruch wykonuje Ziemia w ciągu doby?", ["Obrót wokół własnej osi", "Ruch precesyjny", "Obieg wokół Księżyca", "Ruch równoległy"]),
  new pytanie("Na jakim kontynencie leży Sahara?", ["Afryka", "Azja", "Ameryka Północna", "Australia"]),
  new pytanie("Które ciało niebieskie jest naturalnym satelitą Ziemi?", ["Księżyc", "Mars", "Wenus", "Merkury"]),
  new pytanie("Gdzie występuje najwięcej trzęsień ziemi?", ["W obrębie pacyficznego pierścienia ognia", "Na kontynencie europejskim", "W centralnej Afryce", "W Arktyce"]),
  new pytanie("Czym mierzymy temperaturę powietrza?", ["Termometrem", "Barometrem", "Higrometrem", "Anemometrem"]),
  new pytanie("Jak nazywa się proces niszczenia skał przez czynniki zewnętrzne?", ["Wietrzenie", "Sedymenacja", "Diageneza", "Kompresja"])
];

const rok2_geografia = [
  new pytanie("Co oznacza skrót GIS?", ["System informacji geograficznej", "Globalna inercja satelitarna", "Generalny indeks społeczeństwa", "Geografia i społeczeństwo"]),
  new pytanie("Jaką jednostką mierzy się skalę mapy?", ["Liczbą", "Kilometrami", "Metrówką", "Stopniami"]),
  new pytanie("Jaki kraj ma największą powierzchnię?", ["Rosja", "Kanada", "Chiny", "USA"]),
  new pytanie("Które z poniższych nie jest państwem wyspiarskim?", ["Niemcy", "Japonia", "Filipiny", "Islandia"]),
  new pytanie("Jak nazywa się stolica Francji?", ["Paryż", "Lyon", "Marsylia", "Nicea"]),
  new pytanie("Czym zajmuje się kartografia?", ["Tworzeniem map", "Uprawą roli", "Przemysłem", "Meteorologią"]),
  new pytanie("Które państwo ma największą liczbę ludności?", ["Chiny", "Indie", "USA", "Indonezja"]),
  new pytanie("Które z poniższych jest organizacją międzynarodową?", ["Wszystkie powyższe", "NATO", "UE", "ONZ"]),
  new pytanie("Jak nazywa się najmniejsze państwo świata?", ["Watykan", "Monako", "San Marino", "Liechtenstein"]),
  new pytanie("Co oznacza termin urbanizacja?", ["Rozwój miast", "Rolnictwo miejskie", "Spadek liczby ludności", "Wyprowadzka ze wsi"])
];

const rok3_geografia = [
  new pytanie("Który sektor gospodarki obejmuje rolnictwo?", ["Pierwotny", "Wtórny", "Trzeci", "Czwarty"]),
  new pytanie("Co jest głównym źródłem energii odnawialnej?", ["Energia słoneczna", "Węgiel", "Gaz ziemny", "Ropa naftowa"]),
  new pytanie("Gdzie znajdują się największe złoża ropy naftowej?", ["Bliski Wschód", "Europa", "Afryka Środkowa", "Antarktyda"]),
  new pytanie("Co to jest PKB?", ["Produkt krajowy brutto", "Podatek konsumpcyjny", "Plan krajowego budżetu", "Przemysł kopalniany"]),
  new pytanie("Jaka forma transportu dominuje w Polsce?", ["Drogowy", "Wodny", "Lotniczy", "Kolejowy"]),
  new pytanie("Co to jest aglomeracja?", ["Skupisko miast wokół dużego miasta", "Teren rolniczy", "Obszar przemysłowy", "Strefa klimatyczna"]),
  new pytanie("Co oznacza termin import?", ["Zakup towarów z zagranicy", "Eksport surowców", "Produkcja krajowa", "Transport wewnętrzny"]),
  new pytanie("Który kontynent ma najmniejszą gęstość zaludnienia?", ["Australia", "Azja", "Europa", "Ameryka Południowa"]),
  new pytanie("Które z poniższych państw należy do G7?", ["Niemcy", "Argentyna", "Polska", "Meksyk"]),
  new pytanie("Który region Polski jest najbardziej uprzemysłowiony?", ["Górny Śląsk", "Mazury", "Bieszczady", "Roztocze"])
];

const rok4_geografia = [
  new pytanie("Jakie morze oblewa Polskę od północy?", ["Bałtyckie", "Północne", "Śródziemne", "Czarne"]),
  new pytanie("Najwyższy szczyt Polski to:", ["Rysy", "Śnieżka", "Giewont", "Kasprowy Wierch"]),
  new pytanie("W którym województwie leży Warszawa?", ["Mazowieckim", "Małopolskim", "Śląskim", "Lubelskim"]),
  new pytanie("Największa rzeka Polski to:", ["Wisła", "Odra", "Warta", "Bug"]),
  new pytanie("Ile województw ma Polska?", ["16", "14", "12", "10"]),
  new pytanie("Gdzie znajduje się Kotlina Kłodzka?", ["Sudety", "Karpaty", "Nizina Mazowiecka", "Pojezierze Pomorskie"]),
  new pytanie("Jak nazywa się największe jezioro w Polsce?", ["Śniardwy", "Mamry", "Wigry", "Gopło"]),
  new pytanie("Co dominuje w krajobrazie Niziny Śląskiej?", ["Niziny i przemysł", "Góry", "Pustynie", "Wulkaniczne wzgórza"]),
  new pytanie("Które miasto w Polsce jest portem morskim?", ["Gdańsk", "Poznań", "Lublin", "Katowice"]),
  new pytanie("W jakim regionie Polski znajduje się Puszcza Białowieska?", ["Podlaskie", "Małopolskie", "Kujawsko-Pomorskie", "Opolskie"])
];

const rok5_geografia = [
  new pytanie("Które zjawisko jest skutkiem globalnego ocieplenia?", ["Topnienie lodowców", "Wzrost liczby dni z mrozem", "Spadek poziomu mórz", "Zwiększenie zalesienia"]),
  new pytanie("Co to jest efekt cieplarniany?", ["Zatrzymywanie ciepła w atmosferze przez gazy", "Ogrzewanie domów energią odnawialną", "Wzrost temperatury w szklarni", "Wpływ Słońca na uprawy"]),
  new pytanie("Który gaz jest głównym gazem cieplarnianym?", ["Dwutlenek węgla", "Tlen", "Azot", "Hel"]),
  new pytanie("Jaka organizacja zajmuje się ochroną środowiska?", ["Greenpeace", "FIFA", "WHO", "NATO"]),
  new pytanie("Co oznacza pojęcie 'zrównoważony rozwój'?", ["Rozwój z poszanowaniem środowiska", "Ekspansja przemysłu ciężkiego", "Intensywna urbanizacja", "Rozwój wyłącznie gospodarczy"]),
  new pytanie("Co oznacza termin deforestacja?", ["Wycinka lasów", "Sadzenie drzew", "Ochrona lasów", "Pożary traw"]),
  new pytanie("Jakie państwo jest największym emitentem CO₂?", ["Chiny", "Polska", "Niemcy", "Australia"]),
  new pytanie("Co to jest recykling?", ["Przetwarzanie odpadów", "Spalanie śmieci", "Składowanie odpadów", "Wyrzucanie śmieci do oceanu"]),
  new pytanie("Który kontynent cierpi najbardziej z powodu pustynnienia?", ["Afryka", "Europa", "Ameryka Północna", "Australia"]),
  new pytanie("Jak nazywa się największy ocean na Ziemi?", ["Spokojny (Pacyfik)", "Atlantycki", "Indyjski", "Arktyczny"])
];

//pytania z informatyki

const rok1_informatyka = [
  new pytanie("Co jest podstawową jednostką informacji w informatyce?", ["Bit", "Bajt", "Piksel", "Znak"]),
  new pytanie("Które z poniższych urządzeń jest urządzeniem wejściowym?", ["Klawiatura", "Monitor", "Drukarka", "Głośnik"]),
  new pytanie("Który system operacyjny jest oparty na jądrze Linux?", ["Ubuntu", "Windows", "macOS", "DOS"]),
  new pytanie("Co oznacza skrót CPU?", ["Central Processing Unit", "Computer Power Unit", "Central Program Utility", "Computer Program Unit"]),
  new pytanie("Jakie rozszerzenie ma plik wykonywalny w systemie Windows?", [".exe", ".doc", ".txt", ".jpg"]),
  new pytanie("Jakie urządzenie służy do długotrwałego przechowywania danych?", ["Dysk twardy", "RAM", "Cache", "Procesor"]),
  new pytanie("Który z języków programowania jest językiem wysokiego poziomu?", ["Python", "Assembler", "Maszynowy", "Binary"]),
  new pytanie("Co oznacza skrót RAM?", ["Random Access Memory", "Read All Memory", "Real Application Module", "Run Access Memory"]),
  new pytanie("Jaką funkcję pełni system operacyjny?", ["Zarządza sprzętem i zasobami", "Wykonuje tylko gry", "Projektuje grafikę", "Tworzy muzykę"]),
  new pytanie("Co to jest BIOS?", ["Program startowy płyty głównej", "Format pliku graficznego", "Aplikacja biurowa", "Typ pamięci RAM"])
];

const rok2_informatyka = [
  new pytanie("Jak nazywa się unikalny adres karty sieciowej?", ["MAC", "IP", "DNS", "DHCP"]),
  new pytanie("Co oznacza skrót IP?", ["Internet Protocol", "Internal Processor", "Input Port", "Internet Plug"]),
  new pytanie("Które urządzenie łączy różne sieci?", ["Router", "Switch", "Hub", "Karta graficzna"]),
  new pytanie("Który system operacyjny jest darmowy i open-source?", ["Linux", "Windows", "macOS", "iOS"]),
  new pytanie("Co oznacza skrót SQL?", ["Structured Query Language", "System Quick Loader", "Save Query Location", "Sequential Queue Line"]),
  new pytanie("Jakiego polecenia używa się w systemie Windows do sprawdzenia połączenia sieciowego?", ["ping", "touch", "mkdir", "sudo"]),
  new pytanie("Co przechowuje dane w relacyjnej bazie danych?", ["Tabela", "Folder", "Plik", "Strona"]),
  new pytanie("Jakie rozszerzenie ma typowy plik bazy danych MS Access?", [".accdb", ".docx", ".xlsx", ".pptx"]),
  new pytanie("Która z poniższych usług umożliwia automatyczne przydzielanie adresów IP?", ["DHCP", "FTP", "SMTP", "HTML"]),
  new pytanie("Który protokół służy do przesyłania stron internetowych?", ["HTTP", "SSH", "FTP", "IPX"])
];

const rok3_informatyka = [
  new pytanie("Która pętla w Pythonie służy do iteracji po kolekcji?", ["for", "while", "switch", "repeat"]),
  new pytanie("Jaką wartość logiczną zwraca operator porównania ==?", ["True lub False", "Zmienną", "Liczbę", "Tekst"]),
  new pytanie("Który z poniższych typów danych w Pythonie reprezentuje tekst?", ["str", "int", "bool", "float"]),
  new pytanie("Który symbol oznacza przypisanie wartości w Pythonie?", ["=", "==", ":=", "==="]),
  new pytanie("Jaka funkcja w Pythonie służy do wyświetlania danych?", ["print()", "echo", "out()", "show()"]),
  new pytanie("Co oznacza skrót IDE?", ["Integrated Development Environment", "Internal Data Extension", "Internet Development Engine", "Input Data Encoder"]),
  new pytanie("Który program służy do tworzenia prezentacji?", ["Microsoft PowerPoint", "Microsoft Excel", "Notepad++", "Paint"]),
  new pytanie("Co oznacza skrót HTML?", ["HyperText Markup Language", "High Tech Modern Layout", "Hyperlink Text Memory Language", "Hidden Text Metadata Language"]),
  new pytanie("Jak nazywa się podstawowy element algorytmu?", ["Instrukcja", "Folder", "Plik", "Procesor"]),
  new pytanie("Co robi instrukcja warunkowa?", ["Sprawdza warunek i wykonuje określone działania", "Zawsze kończy program", "Tworzy wykres", "Łączy dwa pliki"])
];

const rok4_informatyka = [
  new pytanie("Co oznacza skrót DNS?", ["Domain Name System", "Digital Network Service", "Data Node Server", "Domain Numbering Scheme"]),
  new pytanie("Jaki port jest standardowo używany przez HTTP?", ["80", "21", "443", "25"]),
  new pytanie("Który z poniższych systemów to system operacyjny serwera?", ["Windows Server", "Windows 10 Home", "Android", "iOS"]),
  new pytanie("Które z poniższych haseł jest najbezpieczniejsze?", ["!P@ssW0rd#2024", "123456", "qwerty", "admin"]),
  new pytanie("Co oznacza pojęcie „firewall”?", ["Zabezpieczenie sieci przed nieautoryzowanym dostępem", "Program graficzny", "Przeglądarka internetowa", "Sterownik drukarki"]),
  new pytanie("Co to jest szyfrowanie danych?", ["Zabezpieczenie danych przed odczytem przez osoby trzecie", "Formatowanie dysku", "Nadpisywanie danych", "Usuwanie plików"]),
  new pytanie("Które rozszerzenie ma plik archiwum?", [".zip", ".exe", ".docx", ".jpg"]),
  new pytanie("Co oznacza skrót SSL?", ["Secure Sockets Layer", "Simple Secure Link", "Safe Server Login", "Structured Server Layer"]),
  new pytanie("Które polecenie w Linuksie służy do zmiany katalogu?", ["cd", "ls", "rm", "mv"]),
  new pytanie("Jak nazywa się procedura przywracania danych po awarii?", ["Backup", "Delete", "Format", "Restart"])
];

const rok5_informatyka = [
  new pytanie("Co oznacza skrót SaaS?", ["Software as a Service", "Server as a System", "Script and System", "Storage and Access"]),
  new pytanie("Która z usług to przykład przechowywania danych w chmurze?", ["Google Drive", "Excel", "Paint", "BIOS"]),
  new pytanie("Jak nazywa się platforma do zarządzania kontenerami?", ["Kubernetes", "Photoshop", "Word", "Access"]),
  new pytanie("Co umożliwia Docker?", ["Tworzenie i uruchamianie kontenerów", "Edycję zdjęć", "Pisanie dokumentów", "Montaż filmów"]),
  new pytanie("Co oznacza skrót CI/CD?", ["Continuous Integration / Continuous Deployment", "Central Interface / Custom Data", "Core Integration / Client Database", "Computer Input / Code Debugging"]),
  new pytanie("Co oznacza Git w programowaniu?", ["System kontroli wersji", "Kompilator", "Przeglądarka", "Antywirus"]),
  new pytanie("Jaki plik konfiguracyjny znajduje się w repozytorium Git?", [".gitignore", "config.sys", "index.html", "setup.exe"]),
  new pytanie("Jakie polecenie tworzy nowe repozytorium Git?", ["git init", "git copy", "git new", "git start"]),
  new pytanie("Co oznacza push w Git?", ["Wysłanie zmian do zdalnego repozytorium", "Usunięcie pliku", "Zatrzymanie działania", "Wydruk kodu"]),
  new pytanie("Jak nazywa się proces uruchamiania aplikacji w chmurze bez zarządzania serwerami?", ["Serverless", "Hosting", "Caching", "Domaining"])
];

//pytania z matematyki

const rok1_matematyka = [
  new pytanie("Ile wynosi √49?", ["7", "6", "8", "9"]),
  new pytanie("Wynik działania 2³ * 2² to:", ["32", "16", "64", "8"]),
  new pytanie("Wartość wyrażenia | -5 | to:", ["5", "-5", "0", "1"]),
  new pytanie("Kąt prosty ma:", ["90°", "45°", "60°", "120°"]),
  new pytanie("Liczba przeciwna do -7 to:", ["7", "-7", "0", "-1"]),
  new pytanie("Dziedziną funkcji f(x) = 1/x jest:", ["R \ {0}", "R", "Z", "{0}"]),
  new pytanie("Wynik pierwiastka √100 to:", ["10", "5", "15", "20"]),
  new pytanie("Funkcja liniowa ma wzór:", ["f(x) = ax + b", "f(x) = ax² + bx + c", "f(x) = √x", "f(x) = 1/x"]),
  new pytanie("Współczynnik kierunkowy prostej równoległej do y = 3x + 5 to:", ["3", "5", "-3", "0"]),
  new pytanie("Przeciwprostokątna to bok:", ["naprzeciw kąta prostego", "najkrótszy bok trójkąta", "równy jednej z przyprostokątnych", "naprzeciw kąta ostrego"])
];

const rok2_matematyka = [
  new pytanie("Liczba logarytmowana w log₂8 to:", ["8", "2", "3", "1"]),
  new pytanie("log₃81 =", ["4", "3", "2", "1"]),
  new pytanie("Wartość wyrażenia sin 30° wynosi:", ["1/2", "√2/2", "√3/2", "1"]),
  new pytanie("cos 0° to:", ["1", "0", "1/2", "-1"]),
  new pytanie("Przekształcenie wykresu y = f(x) + 2 to:", ["przesunięcie o 2 jednostki w górę", "przesunięcie o 2 jednostki w lewo", "przesunięcie o 2 jednostki w prawo", "przesunięcie o 2 jednostki w dół"]),
  new pytanie("Rozwiązaniem równania x² = 9 jest:", ["x = ±3", "x = 3", "x = 9", "x = ±1"]),
  new pytanie("Dziedzina funkcji pierwiastkowej √(x-1):", ["x ≥ 1", "x > 1", "x < 1", "x ∈ R"]),
  new pytanie("Miejsca zerowe funkcji kwadratowej to miejsca:", ["przecięcia wykresu z osią OX", "przecięcia wykresu z osią OY", "wierzchołka paraboli", "największej wartości funkcji"]),
  new pytanie("Wzór funkcji kwadratowej w postaci kanonicznej:", ["f(x) = a(x - p)² + q", "f(x) = ax² + bx + c", "f(x) = a(x + p)(x - q)", "f(x) = ax + b"]),
  new pytanie("Kąt między promieniami okręgu wynosi π/2. Odpowiada mu:", ["90°", "180°", "45°", "60°"])
];

const rok3_matematyka = [
  new pytanie("Liczba e to:", ["podstawa logarytmu naturalnego", "liczba zespolona", "jednostka miary kąta", "średnia arytmetyczna"]),
  new pytanie("Wartość granicy lim(x→0) (sin x / x) to:", ["1", "0", "∞", "nie istnieje"]),
  new pytanie("Pochodna funkcji f(x) = x² to:", ["2x", "x", "x²", "1"]),
  new pytanie("Całka oznaczona to:", ["pole pod wykresem", "liczba przeciwna", "granica funkcji", "pochodna odwrotna"]),
  new pytanie("Granica funkcji f(x) = 1/x dla x→∞:", ["0", "1", "∞", "nie istnieje"]),
  new pytanie("Równanie okręgu o środku w (0,0) i promieniu 3:", ["x² + y² = 9", "x² + y² = 6", "x² + y² = 3", "x² + y² = 1"]),
  new pytanie("Macierz jednostkowa to:", ["macierz z jedynkami na przekątnej", "macierz zerowa", "macierz odwrotna", "macierz transponowana"]),
  new pytanie("Układ równań liniowych może mieć:", ["jedno, nieskończenie wiele lub zero rozwiązań", "tylko jedno rozwiązanie", "tylko dwa rozwiązania", "dokładnie trzy rozwiązania"]),
  new pytanie("Długość wektora v = (3,4):", ["5", "7", "1", "12"]),
  new pytanie("Iloczyn skalarny wektorów prostopadłych wynosi:", ["0", "1", "-1", "2"])
];

const rok4_matematyka = [
  new pytanie("Szereg geometryczny z ilorazem q = 1 jest:", ["zbieżny tylko gdy wyrazy są stałe", "zawsze rozbieżny", "naprzemienny", "rosnący wykładniczo"]),
  new pytanie("Wzór ogólny ciągu arytmetycznego:", ["aₙ = a₁ + (n - 1)r", "aₙ = a₁ * qⁿ⁻¹", "aₙ = (a₁ + aₙ)/2", "aₙ = n(n-1)/2"]),
  new pytanie("Wzór dwumianowy Newtona używa symbolu:", ["(n nad k)", "logₙ k", "n^k", "√[n]{k}"]),
  new pytanie("Prawdopodobieństwo zdarzenia pewnego wynosi:", ["1", "0", "0.5", "nieskończoność"]),
  new pytanie("Liczba permutacji n-elementowego zbioru:", ["n!", "n", "2ⁿ", "n²"]),
  new pytanie("Mediana to:", ["wartość środkowa uporządkowanego zbioru", "największa wartość", "najczęściej występująca wartość", "najmniejsza wartość"]),
  new pytanie("Przeciwdziedzina funkcji to:", ["zbiór wartości funkcji", "zbiór argumentów", "oś OX", "zbiór liczb naturalnych"]),
  new pytanie("Równanie prostej w postaci kierunkowej:", ["y = ax + b", "ax + by + c = 0", "x² + y² = r²", "y = a^x"]),
  new pytanie("Wartość wyrażenia tan 45°:", ["1", "0", "√2", "√3"]),
  new pytanie("Kąt środkowy w kole o promieniu r i łuku l wynosi:", ["l / r", "l * r", "r / l", "1 / (l * r)"])
];

const rok5_matematyka = [
  new pytanie("Macierz odwrotna do A istnieje, gdy:", ["det(A) ≠ 0", "det(A) = 0", "A jest macierzą kwadratową", "A ma same zera"]),
  new pytanie("Iloczyn wektorowy dwóch wektorów w 3D daje:", ["wektor prostopadły", "wartość skalarną", "liczbę zespoloną", "długość jednego z wektorów"]),
  new pytanie("Funkcja różnowartościowa to taka, która:", ["każdemu argumentowi przyporządkowuje różne wartości", "może mieć kilka wartości dla jednego argumentu", "nie ma dziedziny", "przecina oś OX"]),
  new pytanie("Dziedzina funkcji f(x) = ln(x - 2):", ["x > 2", "x ≥ 2", "x < 2", "x ∈ R"]),
  new pytanie("Liczba zespolona ma postać:", ["a + bi", "ax + b", "a^x", "a - b"]),
  new pytanie("Wartość wyrażenia i²:", ["-1", "1", "0", "i"]),
  new pytanie("Przekształcenie wykresu funkcji y = f(-x):", ["odbicie względem osi OY", "odbicie względem osi OX", "przesunięcie w prawo", "przesunięcie w górę"]),
  new pytanie("Liczba zespolona z = 3 + 4i ma moduł równy:", ["5", "7", "4", "3"]),
  new pytanie("Złożenie funkcji f(g(x)) to:", ["funkcja złożona", "funkcja liniowa", "funkcja trygonometryczna", "funkcja stała"]),
  new pytanie("Równanie trygonometryczne sin x = 0 ma rozwiązania:", ["x = kπ", "x = π/2 + kπ", "x = 2kπ", "x = π/3 + 2kπ"])
];