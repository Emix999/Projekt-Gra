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

//pytania z niemickiego

const rok1_niemiecki = [
  new pytanie("Jakie jest niemieckie słowo na „dom”?", ["Haus", "Auto", "Schule", "Buch"]),
  new pytanie("Jakie słowo oznacza „przyjaciel” w języku niemieckim?", ["Freund", "Bruder", "Hund", "Lehrer"]),
  new pytanie("Które z poniższych słów jest czasownikiem w niemieckim?", ["gehen", "Haus", "schnell", "Apfel"]),
  new pytanie("Jak przetłumaczyć „dobry wieczór” na niemiecki?", ["Guten Abend", "Gute Nacht", "Guten Morgen", "Hallo"]),
  new pytanie("Które z poniższych słów jest przymiotnikiem w języku niemieckim?", ["schnell", "gehen", "Apfel", "Stadt"]),
  new pytanie("Jakie jest niemieckie słowo na „kawa”?", ["Kaffee", "Tee", "Wasser", "Saft"]),
  new pytanie("Jak powiedzieć „Jak się masz?” po niemiecku?", ["Wie geht’s dir?", "Wie heißt du?", "Woher kommst du?", "Was machst du?"]),
  new pytanie("Które z poniższych słów oznacza „szkoła” po niemiecku?", ["Schule", "Universität", "Werkstatt", "Krankenhaus"]),
  new pytanie("Jak powiedzieć „jestem studentem” po niemiecku?", ["Ich bin Student", "Ich bin Lehrer", "Ich bin Arzt", "Ich bin Freund"]),
  new pytanie("Jakie jest niemieckie słowo na „książka”?", ["Buch", "Auto", "Tisch", "Lampe"])
];

const rok2_niemiecki = [
  new pytanie("Jak brzmi forma czasownika „być” w pierwszej osobie liczby pojedynczej?", ["bin", "bist", "ist", "sind"]),
  new pytanie("Jak przetłumaczyć „dobranoc” na niemiecki?", ["Gute Nacht", "Guten Morgen", "Hallo", "Tschüss"]),
  new pytanie("Jakie słowo oznacza „słowo” po niemiecku?", ["Wort", "Satz", "Buch", "Zeitung"]),
  new pytanie("Jakie słowo oznacza „zegar” w języku niemieckim?", ["Uhr", "Stuhl", "Tisch", "Fenster"]),
  new pytanie("Które z poniższych słów oznacza „miasto”?", ["Stadt", "Dorf", "Land", "Straße"]),
  new pytanie("Jak przetłumaczyć „mój dom” na niemiecki?", ["Mein Haus", "Mein Auto", "Mein Freund", "Mein Hund"]),
  new pytanie("Jakie słowo oznacza „nauczyciel” po niemiecku?", ["Lehrer", "Schüler", "Arzt", "Fahrer"]),
  new pytanie("Jak powiedzieć po niemiecku „mam 20 lat”?", ["Ich bin 20 Jahre alt", "Ich habe 20 Jahre", "Ich bin zwanzig Jahre alt", "Ich habe zwanzig Jahre"]),
  new pytanie("Jakie jest niemieckie słowo na „pies”?", ["Hund", "Katze", "Vogel", "Fisch"]),
  new pytanie("Jak powiedzieć po niemiecku „kocham cię”?", ["Ich liebe dich", "Ich habe dich gern", "Du bist mein Freund", "Ich mag dich"])
];

const rok3_niemiecki = [
  new pytanie("Które z poniższych słów oznacza „wiatr”?", ["Wind", "Regen", "Sonne", "Schnee"]),
  new pytanie("Jak przetłumaczyć „jestem zmęczony” na niemiecki?", ["Ich bin müde", "Ich habe Hunger", "Ich bin froh", "Ich habe Durst"]),
  new pytanie("Jakie jest niemieckie słowo na „dziękuję”?", ["Danke", "Bitte", "Entschuldigung", "Tschüss"]),
  new pytanie("Jak powiedzieć po niemiecku „gdzie jest dworzec”?", ["Wo ist der Bahnhof?", "Wo ist das Hotel?", "Wo ist die Schule?", "Wo ist der Park?"]),
  new pytanie("Jakie jest niemieckie słowo na „okno”?", ["Fenster", "Tür", "Wand", "Tisch"]),
  new pytanie("Jakie słowo oznacza „woda” po niemiecku?", ["Wasser", "Saft", "Tee", "Kaffee"]),
  new pytanie("Jakie słowo oznacza „chleb” w języku niemieckim?", ["Brot", "Käse", "Apfel", "Butter"]),
  new pytanie("Które z poniższych słów oznacza „piłka”?", ["Ball", "Auto", "Haus", "Tisch"]),
  new pytanie("Jakie słowo oznacza „samochód” w języku niemieckim?", ["Auto", "Fahrrad", "Bus", "Zug"]),
  new pytanie("Jakie jest niemieckie słowo na „telefon”?", ["Telefon", "Fernseher", "Radio", "Computer"])
];

const rok4_niemiecki = [
  new pytanie("Jak powiedzieć „on ma na imię Peter” po niemiecku?", ["Er heißt Peter", "Er ist Peter", "Er hat Peter", "Er nennt sich Peter"]),
  new pytanie("Jak powiedzieć po niemiecku „mieszkam w Berlinie”?", ["Ich wohne in Berlin", "Ich komme aus Berlin", "Ich gehe nach Berlin", "Ich fahre nach Berlin"]),
  new pytanie("Jakie jest niemieckie słowo na „wielki”?", ["groß", "klein", "schnell", "lang"]),
  new pytanie("Jakie jest niemieckie słowo na „piękny”?", ["schön", "hässlich", "klein", "groß"]),
  new pytanie("Jak przetłumaczyć „to jest moje” na niemiecki?", ["Das ist meins", "Das ist mein", "Es ist mein", "Es ist meine"]),
  new pytanie("Jakie jest niemieckie słowo na „godzina”?", ["Stunde", "Minute", "Tag", "Jahr"]),
  new pytanie("Jakie jest niemieckie słowo na „rzeczy”?", ["Dinge", "Sachen", "Bücher", "Zeitungen"]),
  new pytanie("Jak przetłumaczyć „proszę” na niemiecki?", ["Bitte", "Danke", "Entschuldigung", "Hallo"]),
  new pytanie("Jakie jest niemieckie słowo na „domek”?", ["Häuschen", "Auto", "Haus", "Garten"]),
  new pytanie("Jak powiedzieć po niemiecku „mój tata ma 45 lat”?", ["Mein Vater ist 45 Jahre alt", "Mein Vater hat 45 Jahre", "Mein Vater ist alt 45 Jahre", "Mein Vater ist 45 Jahre jung"])
];

const rok5_niemiecki = [
  new pytanie("Jakie jest niemieckie słowo na „kalendarz”?", ["Kalender", "Uhren", "Tische", "Bücher"]),
  new pytanie("Jakie słowo oznacza „klucz” w języku niemieckim?", ["Schlüssel", "Tür", "Fenster", "Stuhl"]),
  new pytanie("Jakie jest niemieckie słowo na „telewizor”?", ["Fernseher", "Computer", "Radio", "Telefon"]),
  new pytanie("Jak przetłumaczyć „mam nadzieję” na niemiecki?", ["Ich hoffe", "Ich denke", "Ich weiß", "Ich glaube"]),
  new pytanie("Jak powiedzieć po niemiecku „czy masz chwilę?”", ["Hast du einen Moment?", "Hast du Zeit?", "Hast du Lust?", "Gehst du mit mir?"]),
  new pytanie("Jakie jest niemieckie słowo na „wschód”?", ["Osten", "Westen", "Süden", "Norden"]),
  new pytanie("Jak powiedzieć po niemiecku „idę do pracy”?", ["Ich gehe zur Arbeit", "Ich gehe nach Hause", "Ich gehe zur Schule", "Ich gehe ins Kino"]),
  new pytanie("Jakie jest niemieckie słowo na „zupa”?", ["Suppe", "Salat", "Brot", "Fleisch"]),
  new pytanie("Jak przetłumaczyć „to jest trudne” na niemiecki?", ["Das ist schwer", "Das ist einfach", "Das ist interessant", "Das ist leicht"]),
  new pytanie("Jak powiedzieć po niemiecku „czy możesz mi pomóc”?", ["Kannst du mir helfen?", "Kannst du das machen?", "Bist du fertig?", "Willst du das tun?"])
];

//pytania z chemii

const rok1_chemia = [
  new pytanie("Cząsteczki wody są:", ["polarnymi cząsteczkami", "niepolarnymi cząsteczkami", "gazami", "metalami"]),
  new pytanie("Reakcja spalania to proces, w którym:", ["substancja reaguje z tlenem", "następuje wydzielanie ciepła i światła", "nie powstają nowe substancje", "zachodzi reakcja z wodą"]),
  new pytanie("Który z poniższych gazów jest bezbarwny, bezwonny i trudno rozpuszczalny w wodzie?", ["Azot", "Tlen", "Dwutlenek węgla", "Wodór"]),
  new pytanie("Cząsteczki substancji są najmniejsze jednostkami, które zachowują:", ["właściwości chemiczne substancji", "energię potencjalną", "masę", "tylko właściwości fizyczne"]),
  new pytanie("Tlenek węgla(IV) to:", ["CO₂", "CO", "O₂", "C₆H₁₂O₆"]),
  new pytanie("Jaka jest liczba atomów w cząsteczce H₂O?", ["3", "4", "2", "5"]),
  new pytanie("Najmniejsza jednostka chemiczna, która może uczestniczyć w reakcjach chemicznych, to:", ["cząsteczka", "atom", "jądro", "proton"]),
  new pytanie("Który z poniższych pierwiastków jest metalem?", ["Sód", "Tlen", "Węgiel", "Azot"]),
  new pytanie("Substancja, która może oddać proton (H⁺), to:", ["kwas", "zasada", "sól", "woda"]),
  new pytanie("Jakie jest pH neutralnej substancji?", ["7", "14", "0", "3"])
];

const rok2_chemia = [
  new pytanie("Kwas solny to związek chemiczny o wzorze:", ["HCl", "H₂SO₄", "NaOH", "HNO₃"]),
  new pytanie("Wiązanie chemiczne, w którym elektrony są dzielone przez atomy, to wiązanie:", ["kowalencyjne", "jonowe", "metaliczne", "elektrostatyczne"]),
  new pytanie("Woda jest dobrym rozpuszczalnikiem, ponieważ:", ["jest cząsteczką polarną", "jest gazem", "ma niską temperaturę wrzenia", "jest cieczą niepolarną"]),
  new pytanie("Wzór na masę molową związku chemicznego to:", ["suma mas molowych atomów wchodzących w skład cząsteczki", "różnica mas atomowych", "iloczyn liczby atomów i liczby Avogadra", "masa jednej cząsteczki"]),
  new pytanie("Otrzymywanie soli przez reakcję kwasu z zasadą to proces zwany:", ["neutralizacją", "redukcją", "estryfikacją", "spalaniem"]),
  new pytanie("Jakie ładunki mają jony wody (H₂O)?", ["brak ładunku (są neutralne)", "dodatni", "ujemny", "zmienny"]),
  new pytanie("Jakie jest pH kwasu siarkowego (H₂SO₄)?", ["poniżej 7", "7", "powyżej 7", "14"]),
  new pytanie("Rozpuszczalność substancji w wodzie zależy głównie od:", ["polarności cząsteczek", "masy cząsteczkowej", "temperatury", "koloru substancji"]),
  new pytanie("Reakcja utleniania polega na:", ["oddaniu elektronów", "przyjęciu elektronów", "oddaniu protonów", "przyjęciu protonów"]),
  new pytanie("Główna różnica między kwasem a zasadą to:", ["kwas oddaje protony, zasada je przyjmuje", "kwas przyjmuje protony, zasada je oddaje", "kwas ma pH 7, zasada poniżej 7", "kwas jest substancją organiczną, zasada nie"])
];

const rok3_chemia = [
  new pytanie("Jakie jest pH kwasu siarkowego (H₂SO₄)?", ["poniżej 7", "7", "powyżej 7", "14"]),
  new pytanie("Rozpuszczalność substancji w wodzie zależy głównie od:", ["polarności cząsteczek", "masy cząsteczkowej", "temperatury", "koloru substancji"]),
  new pytanie("Reakcja utleniania polega na:", ["oddaniu elektronów", "przyjęciu elektronów", "oddaniu protonów", "przyjęciu protonów"]),
  new pytanie("Główna różnica między kwasem a zasadą to:", ["kwas oddaje protony, zasada je przyjmuje", "kwas przyjmuje protony, zasada je oddaje", "kwas ma pH 7, zasada poniżej 7", "kwas jest substancją organiczną, zasada nie"]),
  new pytanie("Otrzymywanie gazu wodorowego (H₂) w reakcji metalu z kwasem to reakcja:", ["redoks", "hydrolizy", "estryfikacji", "substytucji"]),
  new pytanie("Który z poniższych gazów jest cięższy od powietrza?", ["Dwutlenek węgla (CO₂)", "Azot (N₂)", "Tlen (O₂)", "Wodór (H₂)"]),
  new pytanie("Jaka jest liczba moli w 32 gramach tlenu (O₂)? (Masa molowa O₂ = 32 g/mol)", ["1 mol", "2 mole", "0,5 mola", "32 mole"]),
  new pytanie("Reakcja syntezy to proces, w którym:", ["dwa lub więcej reagentów łączą się w jeden produkt", "rozkłada się jeden reagent na dwa produkty", "substancja zmienia stan skupienia", "reagenty reagują w obecności katalizatora"]),
  new pytanie("Najmniejszą jednostką substancji chemicznej jest:", ["atom", "cząsteczka", "cząsteczka wody", "jądro atomowe"]),
  new pytanie("Woda jest dobrym rozpuszczalnikiem, ponieważ:", ["ma cząsteczkę polarną", "ma wysoką temperaturę wrzenia", "jest cieczą o dużej gęstości", "ma dużą lepkość"])
];

const rok4_chemia = [
  new pytanie("Który z pierwiastków jest gazem szlachetnym?", ["Hel", "Wodór", "Węgiel", "Azot"]),
  new pytanie("Cząsteczka CO₂ jest:", ["cząsteczką niepolarną", "cząsteczką polarną", "jonem", "cząsteczką stałą"]),
  new pytanie("Kiedy reakcja chemiczna jest egzotermiczna?", ["Gdy wydziela się ciepło", "Gdy pochłania ciepło", "Gdy nie zmienia temperatury", "Gdy powstają gazy"]),
  new pytanie("Reakcja kwasu i zasady daje w wyniku:", ["sól i wodę", "dwutlenek węgla i wodę", "tylko wodę", "tylko kwas"]),
  new pytanie("Jaką rolę pełni katalizator w reakcji chemicznej?", ["Przyspiesza reakcję, nie biorąc udziału w produkcie", "Spowalnia reakcję", "Utrzymuje reakcję na stałym poziomie", "Zmienia wszystkie reagenty w produkty"]),
  new pytanie("Która z poniższych substancji jest kwasem organicznym?", ["Kwas octowy", "Kwas siarkowy", "Kwas solny", "Kwas azotowy"]),
  new pytanie("Roztwór nasycony to taki, w którym:", ["nie można rozpuścić więcej substancji", "zawiera największą możliwą ilość rozpuszczalnika", "substancja nie reaguje", "roztwór jest przejrzysty"]),
  new pytanie("Atom węgla w cząsteczce metanu (CH₄) ma:", ["4 wiązania kowalencyjne", "3 wiązania kowalencyjne", "2 wiązania kowalencyjne", "1 wiązanie kowalencyjne"]),
  new pytanie("Który z pierwiastków jest najczęściej używany do produkcji energii jądrowej?", ["Uran", "Hel", "Węgiel", "Ołów"]),
  new pytanie("Która z poniższych substancji jest przykładem zasady?", ["NaOH", "HCl", "H₂SO₄", "NH₃"])
];

const rok5_chemia = [
  new pytanie("Wiązanie jonowe zachodzi, gdy:", ["jeden atom oddaje, a drugi przyjmuje elektron", "atomy dzielą się elektronami", "atomy tworzą pary elektronowe", "atomy nie mają ładunków"]),
  new pytanie("Zjawisko sublimacji polega na:", ["przejściu substancji z ciała stałego bezpośrednio w gaz", "przejściu substancji z cieczy w gaz", "przejściu substancji z gazu w ciecz", "przejściu substancji z ciała stałego w ciecz"]),
  new pytanie("Które z poniższych pierwiastków tworzy gaz szlachetny?", ["Hel", "Wodór", "Tlen", "Azot"]),
  new pytanie("Reakcja metal + kwas → sól + wodór to przykład reakcji:", ["redoks", "zmydlania", "syntezy", "estryfikacji"]),
  new pytanie("Wzór chemiczny tlenku azotu(V) to:", ["N₂O₅", "NO₂", "N₂O₃", "NO"]),
  new pytanie("Co to jest reakcja przyłączenia?", ["Reakcja, w której cząsteczki reagują z cząsteczką prostą lub inną cząsteczką", "Reakcja, w której tworzą się cząsteczki z dwóch prostych reagentów", "Reakcja, w której cząsteczka rozpada się na dwa produkty", "Reakcja, w której następuje wymiana miejscami atomów w reagentach"]),
  new pytanie("Z jakiego pierwiastka składa się kwas siarkowy?", ["Siarki i tlenu", "Węgla i wodoru", "Wodoru i azotu", "Azotu i wodoru"]),
  new pytanie("Które z poniższych jest przykładem reakcji syntezy?", ["2H₂ + O₂ → 2H₂O", "2H₂O → 2H₂ + O₂", "NaCl → Na + Cl₂", "HCl + NaOH → NaCl + H₂O"]),
  new pytanie("Jaką temperaturę ma punkt topnienia wody?", ["0°C", "32°C", "100°C", "-10°C"]),
  new pytanie("Co to jest mol?", ["Jednostka ilości substancji", "Jednostka masy", "Jednostka objętości", "Jednostka temperatury"])
];

//pytania z polskiego

const rok1_polski = [
  new pytanie("Kto jest autorem „Pana Tadeusza”?", ["Adam Mickiewicz", "Juliusz Słowacki", "Bolesław Prus", "Henryk Sienkiewicz"]),
  new pytanie("Epoka romantyzmu przypada na wiek:", ["XIX", "XVIII", "XVII", "XX"]),
  new pytanie("„Lalka” to utwór reprezentujący:", ["Realizm", "Romantyzm", "Barok", "Pozytywizm"]),
  new pytanie("Epitet to:", ["Określenie rzeczownika", "Przesada", "Zestawienie dwóch rzeczy", "pytanie"]),
  new pytanie("Przysłowie to:", ["Utrwalona mądrość ludowa", "Nazwa własna", "Forma rozkazu", "Styl poetycki"]),
  new pytanie("Zdanie pojedyncze to:", ["Zdanie z jednym orzeczeniem", "Zdanie z przecinkiem", "Zdanie z wykrzyknikiem", "Zdanie podrzędne"]),
  new pytanie("Podmiot to:", ["Wykonawca czynności", "Określenie czasu", "Dopełnienie", "Przydawka"]),
  new pytanie("W zdaniu „Programista pisze kod.” orzeczeniem jest:", ["pisze", "kod", "programista", "i"]),
  new pytanie("Młoda Polska to epoka:", ["Modernizmu", "Baroku", "Romantyzmu", "Oświecenia"]),
  new pytanie("Synonim słowa „szybko” to:", ["Błyskawicznie", "Wolno", "Leniwie", "Beznamiętnie"])
];

const rok2_polski = [
  new pytanie("Autor „Dziadów” to:", ["Adam Mickiewicz", "Juliusz Słowacki", "Cyprian Kamil Norwid", "Stefan Żeromski"]),
  new pytanie("Oksymoron to:", ["Zestawienie przeciwieństw", "Powtórzenie", "Przenośnia", "Epitet"]),
  new pytanie("Archaizm to:", ["Wyraz przestarzały", "Neologizm", "Wyraz obcy", "Slang"]),
  new pytanie("W wyrazie „liście” występuje:", ["Zmiękczenie", "Zdrobniałość", "Archaizm", "Spójnik"]),
  new pytanie("„Zemsta” Aleksandra Fredry to:", ["Komedia", "Tragedia", "Ballada", "Opowiadanie"]),
  new pytanie("Zdanie oznajmujące to:", ["Zdanie informujące", "Zdanie pytające", "Rozkazujące", "Wykrzyknikowe"]),
  new pytanie("Przyrostkiem w wyrazie „zabawka” jest:", ["-ka", "-zab", "-aw", "-ba"]),
  new pytanie("Przeciwieństwo słowa „duży” to:", ["Mały", "Ogromny", "Szeroki", "Gruby"]),
  new pytanie("Styl urzędowy charakteryzuje się:", ["Precyzją i zwięzłością", "Humorem", "Uczuciowością", "Swobodą"]),
  new pytanie("Synonim słowa „myśleć” to:", ["Rozważać", "Grać", "Jeść", "Spać"])
];

const rok3_polski = [
  new pytanie("Autor „Potopu” to:", ["Henryk Sienkiewicz", "Eliza Orzeszkowa", "Stefan Żeromski", "Józef Ignacy Kraszewski"]),
  new pytanie("Czasownik określa:", ["Czynność lub stan", "Liczbę", "Osobę", "Rzecz"]),
  new pytanie("Liczba mnoga wyrazu „program” to:", ["Programy", "Programów", "Programie", "Programem"]),
  new pytanie("Które z poniższych to rzeczownik?", ["Komputer", "Pisać", "Biegać", "Ładny"]),
  new pytanie("Kto napisał „Latarnika”?", ["Henryk Sienkiewicz", "Bolesław Prus", "Adam Mickiewicz", "Juliusz Słowacki"]),
  new pytanie("Ballada to:", ["Gatunek łączący lirykę, epikę i dramat", "Esej naukowy", "Styl muzyczny", "Rodzaj felietonu"]),
  new pytanie("Sonet to:", ["Utwór o ścisłej budowie wersowej", "Powieść", "Piosenka", "Reportaż"]),
  new pytanie("W języku polskim występują:", ["3 rodzaje gramatyczne", "2 rodzaje gramatyczne", "4 rodzaje gramatyczne", "1 rodzaj gramatyczny"]),
  new pytanie("„Wesele” napisał:", ["Stanisław Wyspiański", "Stefan Żeromski", "Bolesław Leśmian", "Tadeusz Różewicz"]),
  new pytanie("Najstarsza epoka literacka to:", ["Antyk", "Romantyzm", "Młoda Polska", "Pozytywizm"])
];

const rok4_polski = [
  new pytanie("Które z dzieł uznawane jest za manifest romantyzmu w Polsce?", ["„Oda do młodości”", "„Kordian”", "„Nie-Boska komedia”", "„Wielka Improwizacja”"]),
  new pytanie("W którym z utworów występuje motyw wallenrodyzmu?", ["„Konrad Wallenrod”", "„Dziady cz. III”", "„Kordian”", "„Grażyna”"]),
  new pytanie("Kto wprowadził do języka polskiego zasady ortografii i interpunkcji w XVI wieku?", ["Jan Kochanowski", "Mikołaj Rej", "Andrzej Frycz Modrzewski", "Piotr Skarga"]),
  new pytanie("Który z autorów reprezentuje klasycyzm?", ["Ignacy Krasicki", "Juliusz Słowacki", "Stanisław Wyspiański", "Cyprian Kamil Norwid"]),
  new pytanie("Czym jest anafora?", ["Powtórzeniem tego samego wyrazu na początku kolejnych wersów", "Przeciwstawieniem", "Zestawieniem wyrazów", "Wtrąceniem komentarza"]),
  new pytanie("Który z bohaterów literackich jest przykładem tragizmu romantycznego?", ["Konrad z „Dziadów cz. III”", "Wokulski z „Lalki”", "Rejent z „Zemsty”", "Zenon z „Granicy”"]),
  new pytanie("Który autor pisał fraszki i treny?", ["Jan Kochanowski", "Mikołaj Rej", "Ignacy Krasicki", "Adam Mickiewicz"]),
  new pytanie("Co oznacza termin „stylizacja językowa”?", ["Celowe naśladowanie cech językowych danej epoki, środowiska lub grupy społecznej", "Tworzenie języka technicznego", "Mieszanie języków", "Unikanie archaizmów"]),
  new pytanie("Który dramat ma budowę klasyczną (jedność czasu, miejsca, akcji)?", ["„Odprawa posłów greckich”", "„Dziady cz. III”", "„Wesele”", "„Nie-Boska komedia”"]),
  new pytanie("Neologizm to:", ["Nowo utworzony wyraz", "Wyraz przestarzały", "Błąd stylistyczny", "Wyraz zapożyczony"])
];

const rok5_polski = [
  new pytanie("Główne cechy języka urzędowego to:", ["Bezosobowość i precyzja", "Emocjonalność i obrazowość", "Rytmiczność i rym", "Patos i ironia"]),
  new pytanie("Alegoria to:", ["Stałe, jednoznaczne znaczenie symboliczne", "Dowolna metafora", "Słowo nacechowane emocjonalnie", "Błąd językowy"]),
  new pytanie("Główna cecha dramatu romantycznego to:", ["Synkretyzm rodzajowy i kompozycyjna swoboda", "Jedność czasu i miejsca", "Zachowanie klasycznych zasad", "Brak dialogów"]),
  new pytanie("Które z dzieł NIE zawiera narratora wszechwiedzącego?", ["„Dziady cz. III”", "„Lalka”", "„Nad Niemnem”", "„Chłopi”"]),
  new pytanie("W którym zdaniu występuje imiesłów przysłówkowy współczesny?", ["Programując, słuchał muzyki.", "Był programistą z zawodu.", "Pisząc, napisał wiele.", "Zapis kodu był błędny."]),
  new pytanie("Który autor był współtwórcą „Skamandra”?", ["Julian Tuwim", "Zbigniew Herbert", "Bolesław Leśmian", "Tadeusz Różewicz"]),
  new pytanie("Jaką funkcję pełni język w haśle reklamowym?", ["Impresywną", "Informacyjną", "Poetycką", "Fatatywną"]),
  new pytanie("Kto jest autorem „Pieśni IX” („Nie porzucaj nadzieje...”)?", ["Jan Kochanowski", "Mikołaj Sęp-Szarzyński", "Ignacy Krasicki", "Franciszek Karpiński"]),
  new pytanie("Neologizm to:", ["Nowo utworzony wyraz", "Wyraz przestarzały", "Błąd stylistyczny", "Wyraz zapożyczony"]),
  new pytanie("Które zdanie zawiera apostrofę?", ["Litwo! Ojczyzno moja!", "Ojczyzna jest piękna.", "Mówię do ciebie poważnie.", "Polska to mój dom."])
];

//pytania z fizyki

const rok1_fizyka = [
  new pytanie("Jednostką siły w układzie SI jest:", ["niuton (N)", "kilogram (kg)", "metr na sekundę (m/s)", "dżul (J)"]),
  new pytanie("Przyspieszenie ziemskie ma wartość:", ["około 9,81 m/s²", "100 m/s²", "1 m/s²", "0,1 m/s²"]),
  new pytanie("Ciało porusza się ruchem jednostajnym prostoliniowym, gdy:", ["jego prędkość jest stała", "jego przyspieszenie rośnie", "jego tor to okrąg", "jego masa się zmienia"]),
  new pytanie("Prędkość to wielkość:", ["wektorowa", "skalarna", "niemerzalna", "zmienna"]),
  new pytanie("Masa to miara:", ["bezwładności ciała", "siły ciężkości", "przyspieszenia", "energii"]),
  new pytanie("Tor ruchu to:", ["linia, po której porusza się ciało", "droga podzielona przez czas", "kierunek siły", "linia styczna do wektora prędkości"]),
  new pytanie("Ruch jednostajnie przyspieszony to ruch, w którym:", ["przyspieszenie jest stałe", "prędkość jest stała", "siła maleje", "masa rośnie"]),
  new pytanie("Siła tarcia zależy od:", ["rodzaju powierzchni", "koloru ciała", "temperatury", "objętości"]),
  new pytanie("Zasada bezwładności to:", ["I zasada dynamiki Newtona", "II zasada dynamiki Newtona", "III zasada dynamiki Newtona", "zasada energii"]),
  new pytanie("Siła wypadkowa to:", ["suma wszystkich sił działających na ciało", "najmniejsza siła w układzie", "tylko siła grawitacji", "tylko siła tarcia"])
];

const rok2_fizyka = [
  new pytanie("Praca to:", ["iloczyn siły i przesunięcia", "iloczyn masy i przyspieszenia", "iloczyn energii i czasu", "iloczyn siły i masy"]),
  new pytanie("Jednostką pracy jest:", ["dżul (J)", "wat (W)", "niuton (N)", "kilogram (kg)"]),
  new pytanie("Energia kinetyczna zależy od:", ["masy i prędkości", "masy i wysokości", "temperatury", "ciśnienia"]),
  new pytanie("Energia potencjalna grawitacyjna zależy od:", ["masy, wysokości i g", "prędkości", "ciśnienia", "temperatury"]),
  new pytanie("Moc to:", ["praca wykonana w jednostce czasu", "siła razy droga", "masa razy przyspieszenie", "droga podzielona przez czas"]),
  new pytanie("Jednostką mocy jest:", ["wat (W)", "dżul (J)", "niuton (N)", "kelwin (K)"]),
  new pytanie("Zasada zachowania energii mówi, że:", ["energia nie ginie, tylko zmienia postać", "masa może zanikać", "praca zależy od kierunku", "siła równa się zero"]),
  new pytanie("Siła ciężkości działa:", ["pionowo w dół", "poziomo", "prostopadle do kierunku ruchu", "zawsze do góry"]),
  new pytanie("Przyciąganie grawitacyjne występuje między:", ["wszystkimi ciałami mającymi masę", "tylko między Ziemią a Księżycem", "tylko w laboratorium", "tylko w próżni"]),
  new pytanie("Przyspieszenie w ruchu jednostajnie opóźnionym jest:", ["stałe, ale skierowane przeciwnie do ruchu", "rosnące", "zerowe", "skierowane w bok"])
];

const rok3_fizyka = [
  new pytanie("Temperatura w kelwinach to:", ["stopnie Celsjusza + 273", "stopnie Celsjusza - 100", "2 razy stopnie Celsjusza", "stopnie Celsjusza / 2"]),
  new pytanie("Ciepło właściwe to ilość ciepła potrzebna do:", ["podgrzania 1 kg substancji o 1°C", "zmiany ciała stałego w ciecz", "spalenia substancji", "ogrzenia powietrza w pokoju"]),
  new pytanie("Fala mechaniczna potrzebuje:", ["ośrodka do rozchodzenia się", "próżni", "światła", "pola magnetycznego"]),
  new pytanie("Amplituda drgań to:", ["maksymalne wychylenie z położenia równowagi", "czas jednego drgania", "długość fali", "masa układu"]),
  new pytanie("Częstotliwość to:", ["liczba drgań w jednostce czasu", "długość fali", "prędkość dźwięku", "gęstość ośrodka"]),
  new pytanie("Zjawisko odbicia fali polega na:", ["powrocie fali po napotkaniu przeszkody", "zniknięciu fali", "zmianie temperatury", "zwiększeniu energii"]),
  new pytanie("Fale dźwiękowe to fale:", ["podłużne", "poprzeczne", "elektromagnetyczne", "świetlne"]),
  new pytanie("Zjawisko rezonansu występuje, gdy:", ["częstotliwość drgań wymuszonych jest równa częstotliwości własnej", "fala się odbija", "zmienia się długość fali", "zmniejsza się temperatura"]),
  new pytanie("Energia wewnętrzna ciała zależy od:", ["ruchu cząsteczek i ich wzajemnych oddziaływań", "objętości", "koloru", "pola magnetycznego"]),
  new pytanie("Proces parowania zachodzi:", ["na powierzchni cieczy w każdej temperaturze", "tylko w 100°C", "tylko w próżni", "tylko przy podgrzewaniu"])
];

const rok4_fizyka = [
  new pytanie("Prąd elektryczny to:", ["uporządkowany ruch ładunków elektrycznych", "przepływ ciepła", "zmiana ciśnienia", "przepływ gazu"]),
  new pytanie("Jednostką natężenia prądu jest:", ["amper (A)", "wolt (V)", "om (Ω)", "dżul (J)"]),
  new pytanie("Napięcie to:", ["różnica potencjałów", "ilość elektronów", "energia kinetyczna", "moc urządzenia"]),
  new pytanie("Prawo Ohma opisuje zależność:", ["napięcia, natężenia i oporu", "mocy i energii", "ładunku i napięcia", "ciepła i czasu"]),
  new pytanie("Opór elektryczny zależy od:", ["rodzaju i długości przewodnika", "napięcia", "natężenia", "kierunku prądu"]),
  new pytanie("Jednostką oporu elektrycznego jest:", ["om (Ω)", "amper (A)", "wat (W)", "niuton (N)"]),
  new pytanie("Źródło napięcia to np.:", ["bateria", "opornik", "kondensator", "żarówka"]),
  new pytanie("Pole magnetyczne wokół przewodnika z prądem ma kształt:", ["okręgów wokół przewodnika", "prostych linii", "sinusoidy", "kwadratu"]),
  new pytanie("Siła elektromotoryczna to:", ["energia przekształcana w źródle prądu", "siła tarcia", "masa elektronów", "liczba ładunków"]),
  new pytanie("Silnik elektryczny działa na zasadzie:", ["oddziaływania pola magnetycznego i prądu", "spalania paliwa", "działania sił sprężystości", "ciepła przemiany"])
];

const rok5_fizyka = [
  new pytanie("Światło jest falą:", ["elektromagnetyczną", "mechaniczną", "dźwiękową", "sprężystą"]),
  new pytanie("Zwierciadło wypukłe powoduje:", ["powstanie obrazu pozornego, pomniejszonego", "powstanie obrazu rzeczywistego", "powstanie obrazu odwróconego", "powstanie cienia"]),
  new pytanie("Soczewka skupiająca to taka, która:", ["skupia promienie światła w jednym punkcie", "rozprasza światło", "odbija światło", "tworzy cień"]),
  new pytanie("Załamanie światła zachodzi na granicy:", ["dwóch ośrodków optycznych", "w próżni", "tylko w lustrze", "tylko w soczewkach"]),
  new pytanie("Dyfrakcja to:", ["ugięcie fali na przeszkodzie", "odbicie światła", "absorpcja światła", "wzmocnienie prądu"]),
  new pytanie("Interferencja to:", ["nakładanie się fal", "rozpraszanie dźwięku", "odbijanie światła", "załamanie dźwięku"]),
  new pytanie("Foton to:", ["kwant światła", "cząstka materii", "elektron", "neutron"]),
  new pytanie("Efekt fotoelektryczny to:", ["emisja elektronów pod wpływem światła", "emisja dźwięku", "wzrost temperatury", "zmiana barwy"]),
  new pytanie("Dualizm korpuskularno-falowy oznacza, że:", ["światło ma cechy fali i cząstki", "dźwięk i światło są tym samym", "światło to fala dźwiękowa", "cząstki nie mają masy"]),
  new pytanie("Promieniowanie jonizujące to np.:", ["promieniowanie gamma", "światło widzialne", "fale radiowe", "podczerwień"])
];

//pytania z historii
const rok1_historia = [
  new pytanie("Kiedy odbył się chrzest Polski?", ["966", "1000", "1025", "1138"]),
  new pytanie("Kim był Mieszko I?", ["Pierwszym historycznym władcą Polski", "Pierwszym królem Polski", "Twórcą Unii Lubelskiej", "Papieżem"]),
  new pytanie("Jakie plemię zjednoczył Mieszko I?", ["Polan", "Wiślan", "Mazowszan", "Pomorzan"]),
  new pytanie("Jakie państwo przyjęło chrzest w 988 roku?", ["Ruś Kijowska", "Węgry", "Czechy", "Polska"]),
  new pytanie("Co oznaczała zasada senioratu?", ["Władzę miał najstarszy z rodu", "Tron dziedziczył syn króla", "Wybierano króla przez szlachtę", "Królem był najmłodszy syn"]),
  new pytanie("Kiedy miała miejsce bitwa pod Grunwaldem?", ["1410", "1320", "1385", "1493"]),
  new pytanie("Kto zawarł unię w Krewie?", ["Polska i Litwa", "Polska i Czechy", "Polska i Węgry", "Litwa i Ruś"]),
  new pytanie("Jakie miasto było stolicą Królestwa Polskiego za Kazimierza Wielkiego?", ["Kraków", "Poznań", "Gniezno", "Warszawa"]),
  new pytanie("Kto ufundował Akademię Krakowską?", ["Kazimierz Wielki", "Władysław Łokietek", "Bolesław Krzywousty", "Władysław Jagiełło"]),
  new pytanie("Jakie było hasło rycerstwa w średniowieczu?", ["Bóg, honor, ojczyzna", "Pokój i miłość", "Życie i chwała", "Ojczyzna i rodzina"])
];

const rok2_historia = [
  new pytanie("Kiedy uchwalono Konstytucję 3 maja?", ["1791", "1789", "1793", "1795"]),
  new pytanie("Kto był twórcą hymnu Polski?", ["Józef Wybicki", "Tadeusz Kościuszko", "Adam Mickiewicz", "Stanisław Staszic"]),
  new pytanie("Kiedy odbył się III rozbiór Polski?", ["1795", "1793", "1772", "1791"]),
  new pytanie("Kto był przywódcą powstania kościuszkowskiego?", ["Tadeusz Kościuszko", "Jan Henryk Dąbrowski", "Kazimierz Pułaski", "Józef Poniatowski"]),
  new pytanie("Co oznaczało hasło „Wolność, Równość, Braterstwo”?", ["Rewolucję francuską", "Powstanie listopadowe", "Reformację", "Rozbiory"]),
  new pytanie("Kto był cesarzem Francuzów w XIX wieku?", ["Napoleon Bonaparte", "Ludwik XVI", "Ludwik XVIII", "Karol X"]),
  new pytanie("Co powstało na ziemiach polskich dzięki Napoleonowi?", ["Księstwo Warszawskie", "Królestwo Polskie", "Rzeczpospolita Krakowska", "Rada Regencyjna"]),
  new pytanie("Kiedy wybuchło powstanie listopadowe?", ["1830", "1831", "1846", "1863"]),
  new pytanie("Kto był przywódcą powstania styczniowego?", ["Romuald Traugutt", "Adam Mickiewicz", "Józef Piłsudski", "Edward Rydz-Śmigły"]),
  new pytanie("Jakie państwo zniosło pańszczyznę w XIX w.?", ["Austria", "Polska", "Prusy", "Francja"])
];

const rok3_historia = [
  new pytanie("Kiedy wybuchła I wojna światowa?", ["1914", "1915", "1918", "1939"]),
  new pytanie("Jakie państwo było zaborcą Polski?", ["Rosja", "Francja", "Włochy", "Anglia"]),
  new pytanie("Kiedy Polska odzyskała niepodległość?", ["1918", "1914", "1920", "1939"]),
  new pytanie("Kto był naczelnikiem państwa po 1918 r.?", ["Józef Piłsudski", "Roman Dmowski", "Ignacy Paderewski", "Edward Rydz-Śmigły"]),
  new pytanie("Kiedy miała miejsce Bitwa Warszawska?", ["1920", "1918", "1939", "1921"]),
  new pytanie("Co oznaczało pojęcie „Dwudziestolecie Międzywojenne”?", ["Okres między I a II wojną światową", "Czasy średniowieczne", "Epokę napoleońską", "Lata po wojnie"]),
  new pytanie("Kiedy Hitler doszedł do władzy?", ["1933", "1929", "1939", "1945"]),
  new pytanie("Jaki ustrój panował w ZSRR za Lenina i Stalina?", ["Komunizm", "Monarchia", "Demokracja", "Feudalizm"]),
  new pytanie("Jakie było hasło faszyzmu?", ["Państwo ponad wszystko", "Wolność i demokracja", "Pacyfizm i jedność", "Praca i pokój"]),
  new pytanie("Kiedy wybuchła II wojna światowa?", ["1939", "1940", "1941", "1945"])
];

const rok4_historia = [
  new pytanie("Co rozpoczęło II wojnę światową?", ["Atak Niemiec na Polskę", "Bitwa o Anglię", "Kapitulacja Francji", "Bitwa pod Stalingradem"]),
  new pytanie("Kiedy miało miejsce powstanie warszawskie?", ["1944", "1939", "1945", "1943"]),
  new pytanie("Kto był premierem Wielkiej Brytanii podczas II wojny?", ["Winston Churchill", "Neville Chamberlain", "Anthony Eden", "Margaret Thatcher"]),
  new pytanie("Jak nazywał się plan ataku Niemiec na ZSRR?", ["Barbarossa", "Overlord", "Desert Storm", "Husky"]),
  new pytanie("Co zakończyło II wojnę światową?", ["Zrzucenie bomb atomowych", "Bitwa o Berlin", "Konferencja w Jałcie", "Procesy norymberskie"]),
  new pytanie("Kiedy utworzono ONZ?", ["1945", "1939", "1941", "1947"]),
  new pytanie("Jak nazywała się zimna wojna?", ["Konflikt ideologiczny USA–ZSRR", "Wojna w zimie", "Wojna światowa", "Konflikt religijny"]),
  new pytanie("Kto był przywódcą ZSRR w czasie zimnej wojny?", ["Stalin", "Lenin", "Putin", "Chruszczow"]),
  new pytanie("Co oznacza termin „żelazna kurtyna”?", ["Podział Europy po II wojnie", "Linia frontu", "Granica Niemiec", "Cenzura prasy"]),
  new pytanie("Jakie państwo było w NATO?", ["USA", "ZSRR", "Jugosławia", "Chiny"])
];

const rok5_historia = [
  new pytanie("Kiedy wybuchło powstanie „Solidarności”?", ["1980", "1976", "1981", "1989"]),
  new pytanie("Kto był liderem Solidarności?", ["Lech Wałęsa", "Tadeusz Mazowiecki", "Wojciech Jaruzelski", "Bronisław Komorowski"]),
  new pytanie("Kiedy wprowadzono stan wojenny w Polsce?", ["1981", "1980", "1983", "1989"]),
  new pytanie("Kiedy upadł komunizm w Polsce?", ["1989", "1981", "1990", "1980"]),
  new pytanie("Kiedy Polska wstąpiła do Unii Europejskiej?", ["2004", "1999", "2001", "2007"]),
  new pytanie("Kiedy Polska przystąpiła do NATO?", ["1999", "2004", "1995", "1993"]),
  new pytanie("Kto został pierwszym demokratycznym prezydentem Polski po 1989?", ["Lech Wałęsa", "Aleksander Kwaśniewski", "Jarosław Kaczyński", "Tadeusz Mazowiecki"]),
  new pytanie("Jakie wydarzenie miało miejsce w 2001 roku w USA?", ["Ataki na WTC", "Wybuch wojny secesyjnej", "Kryzys finansowy", "Wojna w Wietnamie"]),
  new pytanie("Kto był papieżem z Polski?", ["Jan Paweł II", "Benedykt XVI", "Jan XXIII", "Franciszek"]),
  new pytanie("Jakie państwo rozpadło się w latach 90.?", ["ZSRR", "USA", "Kanada", "Francja"])
];