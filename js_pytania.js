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

const egzamin_angielski = [
  new pytanie("Choose the correct sentence.", ["I have just eaten breakfast.", "I just eat breakfast.", "I have just eat breakfast.", "I eating breakfast now."]),
  new pytanie("Choose the correct sentence.", ["She didn't call me yesterday.", "She not called me yesterday.", "She doesn't called me yesterday.", "She didn't called me yesterday."]),
  new pytanie("Choose the correct sentence.", ["We will meet at 6 PM.", "We meeting at 6 PM.", "We meets at 6 PM.", "We will meeting at 6 PM."]),
  new pytanie("Choose the correct sentence.", ["He has lived here for ten years.", "He lived here since ten years.", "He living here for ten years.", "He has live here for ten years."]),
  new pytanie("Choose the correct sentence.", ["I was studying when he arrived.", "I studied when he arrived.", "I studies when he arrived.", "I studying when he arrived."]),
  new pytanie("Choose the correct sentence.", ["She will be arriving soon.", "She be arriving soon.", "She arriving soon.", "She will arriving soon."]),
  new pytanie("Choose the correct sentence.", ["Have you ever been to London?", "Did you ever be to London?", "Have you ever gone to London?", "Were you ever in London?"]),
  new pytanie("Choose the correct sentence.", ["By the time you come, I will have finished.", "By the time you come, I will finished.", "By the time you come, I finished.", "By the time you come, I will be finish."]),
  new pytanie("Choose the correct sentence.", ["I didn't see him last night.", "I don't saw him last night.", "I didn't saw him last night.", "I wasn't see him last night."]),
  new pytanie("Choose the correct sentence.", ["He has been working all day.", "He been working all day.", "He has work all day.", "He working all day."]),
  new pytanie("Choose the correct sentence.", ["They had left before we arrived.", "They have left before we arrived.", "They leaving before we arrived.", "They leave before we arrived."]),
  new pytanie("Choose the correct sentence.", ["Is she coming to the party?", "Does she coming to the party?", "Is she come to the party?", "She coming to the party?"]),
  new pytanie("Choose the correct sentence.", ["I will call you tomorrow.", "I am call you tomorrow.", "I call you tomorrow.", "I calling you tomorrow."]),
  new pytanie("Choose the correct sentence.", ["I have never seen such a beautiful view.", "I never saw such a beautiful view.", "I am never seen such a beautiful view.", "I never see such a beautiful view."]),
  new pytanie("Choose the correct sentence.", ["They were sleeping when I entered.", "They sleeped when I entered.", "They was sleeping when I entered.", "They sleeping when I entered."]),
  new pytanie("Choose the correct sentence.", ["We are going to travel next month.", "We go to travel next month.", "We goes to travel next month.", "We travelling to travel next month."]),
  new pytanie("Choose the correct sentence.", ["Has he finished his homework?", "Did he finishes his homework?", "He finished his homework?", "Has he finish his homework?"]),
  new pytanie("Choose the correct sentence.", ["I will have been working here for five years by December.", "I will working here for five years by December.", "I will been working here for five years by December.", "I working here for five years by December."]),
  new pytanie("Choose the correct sentence.", ["She didn’t arrive on time.", "She doesn’t arrive on time.", "She didn’t arrives on time.", "She wasn’t arrived on time."]),
  new pytanie("Choose the correct sentence.", ["I have visited Paris twice.", "I visited Paris twice.", "I visiting Paris twice.", "I visit Paris twice."]),
  new pytanie("Choose the correct sentence.", ["He had gone before I came.", "He gone before I came.", "He have gone before I came.", "He had go before I came."]),
  new pytanie("Choose the correct sentence.", ["Will you be attending the meeting?", "Are you attend the meeting?", "Do you attending the meeting?", "Will you attending the meeting?"]),
  new pytanie("Choose the correct sentence.", ["Have you seen my keys?", "Did you see my keys?", "Are you see my keys?", "Have you saw my keys?"]),
  new pytanie("Choose the correct sentence.", ["She has been studying for hours.", "She studying for hours.", "She has study for hours.", "She has been study for hours."]),
  new pytanie("Choose the correct sentence.", ["They didn't play well yesterday.", "They doesn't play well yesterday.", "They didn’t played well yesterday.", "They don’t play well yesterday."]),
  new pytanie("Choose the correct sentence.", ["I am going to visit my grandma tomorrow.", "I going to visit my grandma tomorrow.", "I visit going to my grandma tomorrow.", "I am visit my grandma tomorrow."]),
  new pytanie("Choose the correct sentence.", ["Had you finished before they arrived?", "Have you finished before they arrived?", "Did you finished before they arrived?", "Have you finish before they arrived?"]),
  new pytanie("Choose the correct sentence.", ["He has bought a new car.", "He buyed a new car.", "He has buy a new car.", "He boughted a new car."]),
  new pytanie("Choose the correct sentence.", ["By next year, she will have moved.", "By next year, she will moved.", "By next year, she move.", "By next year, she moving."]),
  new pytanie("Choose the correct sentence.", ["Did you finish the project?", "Do you finished the project?", "Have you finish the project?", "Are you finished the project?"]),
  new pytanie("Choose the correct sentence.", ["I was reading when you called.", "I reading when you called.", "I readed when you called.", "I was read when you called."]),
  new pytanie("Choose the correct sentence.", ["She has written five books.", "She wrote five books.", "She writing five books.", "She has write five books."]),
  new pytanie("Choose the correct sentence.", ["Will they be staying here?", "They staying here?", "Are they staying here?", "Will they staying here?"]),
  new pytanie("Choose the correct sentence.", ["Have you completed the form?", "Did you completes the form?", "Are you complete the form?", "Have you complete the form?"]),
  new pytanie("Choose the correct sentence.", ["He had been waiting for two hours.", "He has been waiting for two hours.", "He have been waiting for two hours.", "He been waiting for two hours."]),
  new pytanie("Choose the correct sentence.", ["We went to Spain last summer.", "We goed to Spain last summer.", "We go to Spain last summer.", "We going to Spain last summer."]),
  new pytanie("Choose the correct sentence.", ["She has gone to the store.", "She gone to the store.", "She has go to the store.", "She have gone to the store."]),
  new pytanie("Choose the correct sentence.", ["I will have finished by Friday.", "I will finished by Friday.", "I finish by Friday.", "I will finishing by Friday."]),
  new pytanie("Choose the correct sentence.", ["Did they see the movie?", "They did saw the movie?", "They seen the movie?", "Did they saw the movie?"]),
  new pytanie("Choose the correct sentence.", ["He was writing a letter.", "He write a letter.", "He was wrote a letter.", "He writing a letter."]),
  new pytanie("Choose the correct sentence.", ["She has been painting the house all day.", "She painting the house all day.", "She has paint the house all day.", "She have been painting the house all day."]),
  new pytanie("Choose the correct sentence.", ["Will you come with us?", "You will come with us?", "You coming with us?", "Will you coming with us?"]),
  new pytanie("Choose the correct sentence.", ["I have broken my phone.", "I breaked my phone.", "I broke my phone now.", "I have broke my phone."]),
  new pytanie("Choose the correct sentence.", ["She was driving fast.", "She drove fast now.", "She drive fast now.", "She drives fast yesterday."]),
  new pytanie("Choose the correct sentence.", ["Have you heard the news?", "Did you hears the news?", "Are you hear the news?", "Have you hear the news?"]),
  new pytanie("Choose the correct sentence.", ["I will call you when I arrive.", "I call you when I will arrive.", "I am call you when I arrive.", "I will calling you when I arrive."]),
  new pytanie("Choose the correct sentence.", ["He had finished the work before noon.", "He has finished the work before noon.", "He finished the work before noon.", "He had finish the work before noon."]),
  new pytanie("Choose the correct sentence.", ["We have been waiting for you.", "We has been waiting for you.", "We have waiting for you.", "We waiting for you."]),
  new pytanie("Choose the correct sentence.", ["She didn't recognize me.", "She don't recognized me.", "She didn't recognized me.", "She wasn't recognize me."]),
  new pytanie("Choose the correct sentence.", ["He will travel to Italy next month.", "He travels to Italy next month.", "He travelling to Italy next month.", "He will traveling to Italy next month."])
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
  new pytanie("Równanie okręgu o środku w (0,0) i promieniu 3:", ["x² + y² = 9", "x² + y² = 6", "x² + y² = 3", "x² + y² = 1"]),
  new pytanie("Układ równań liniowych może mieć:", ["jedno, nieskończenie wiele lub zero rozwiązań", "tylko jedno rozwiązanie", "tylko dwa rozwiązania", "dokładnie trzy rozwiązania"]),
  new pytanie("Długość wektora v = (3,4):", ["5", "7", "1", "12"]),
  new pytanie("Iloczyn skalarny wektorów prostopadłych wynosi:", ["0", "1", "-1", "2"]),
  new pytanie("Dana jest funkcja f(x) = 2x² - 3x + 1. Wartość najmniejsza funkcji to:", ["-1/8", "1/2", "3/4", "-3/4"]),
  new pytanie("Wyznacz wartość wyrażenia sin 30° + cos 60°.", ["1", "√3/2", "3/2", "1/2"]),
  new pytanie("Kąt o mierze 5π/6 radianów jest równy:", ["150°", "120°", "135°", "180°"]),
  new pytanie("Dane są punkty A(2,3) oraz B(6,7). Długość odcinka AB wynosi:", ["2√8", "5", "3√5", "6"]),
  new pytanie("Rozwiąż równanie: log₂(x-1) = 3.", ["9", "7", "8", "6"])
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
  new pytanie("Iloczyn wektorowy dwóch wektorów w 3D daje:", ["wektor prostopadły", "wartość skalarną", "liczbę zespoloną", "długość jednego z wektorów"]),
  new pytanie("Funkcja różnowartościowa to taka, która:", ["każdemu argumentowi przyporządkowuje różne wartości", "może mieć kilka wartości dla jednego argumentu", "nie ma dziedziny", "przecina oś OX"]),
  new pytanie("Dziedzina funkcji f(x) = ln(x - 2):", ["x > 2", "x ≥ 2", "x < 2", "x ∈ R"]),
  new pytanie("Przekształcenie wykresu funkcji y = f(-x):", ["odbicie względem osi OY", "odbicie względem osi OX", "przesunięcie w prawo", "przesunięcie w górę"]),
  new pytanie("Złożenie funkcji f(g(x)) to:", ["funkcja złożona", "funkcja liniowa", "funkcja trygonometryczna", "funkcja stała"]),
  new pytanie("Równanie trygonometryczne sin x = 0 ma rozwiązania:", ["x = kπ", "x = π/2 + kπ", "x = 2kπ", "x = π/3 + 2kπ"]),
  new pytanie("Wartość granicy lim(x→0) (sin x / x) to:", ["1", "0", "∞", "nie istnieje"]),
  new pytanie("Pochodna funkcji f(x) = x² to:", ["2x", "x", "x²", "1"]),
  new pytanie("Granica funkcji f(x) = 1/x dla x→∞:", ["0", "1", "∞", "nie istnieje"]),
  new pytanie("Pole trójkąta o wierzchołkach A(0,0), B(4,0), C(0,3) wynosi:", ["6", "12", "9", "5"])
];

const egzamin_matematyka = [
  new pytanie("Funkcja kwadratowa f(x) = x² - 4x + 5 przyjmuje wartości:", ["zawsze dodatnie", "zawsze ujemne", "dodatnie tylko dla x > 0", "ujemne tylko dla x < 0"]),
  new pytanie("Wartość wyrażenia (3√2)² to:", ["18", "6", "9", "12"]),
  new pytanie("Punkt (2,1) należy do wykresu funkcji f(x) = 2x - 3:", ["tak", "nie", "tylko dla x > 0", "tylko dla x < 0"]),
  new pytanie("Wartość największa funkcji f(x) = -x² + 4x + 5 wynosi:", ["9", "5", "4", "0"]),
  new pytanie("Rozwiązaniem nierówności 2x - 5 > 1 jest:", ["x > 3", "x < 3", "x ≥ 2", "x ≤ 2"]),
  new pytanie("Funkcja homograficzna ma wykres:", ["hiperboli", "paraboli", "prostej", "okręgu"]),
  new pytanie("Liczba miejsc zerowych funkcji kwadratowej o Δ = 0 wynosi:", ["1", "2", "brak", "nieskończenie wiele"]),
  new pytanie("Wartość wyrażenia log₂(32) to:", ["5", "2", "3", "4"]),
  new pytanie("Funkcja f(x) = 1/x jest:", ["nieparzysta", "parzysta", "stała", "ograniczona"]),
  new pytanie("Mediana danych 2, 3, 5, 8, 12 to:", ["5", "8", "12", "3"]),
  new pytanie("Jeżeli a > 0 i b < 0, to iloczyn ab jest:", ["ujemny", "dodatni", "równy zero", "dodatni lub ujemny"]),
  new pytanie("Wartość granicy lim(x→∞)(3x²+2)/(x²-1) wynosi:", ["3", "2", "1", "0"]),
  new pytanie("Funkcja f(x) = (x-2)/(x+3) ma asymptotę pionową w punkcie:", ["x = -3", "x = 2", "x = 3", "x = -2"]),
  new pytanie("Równanie trygonometryczne sin x = 0 ma rozwiązanie:", ["x = kπ", "x = π/2 + kπ", "x = kπ/2", "x = 2kπ"]),
  new pytanie("Prosta o równaniu y = -3x + 2 jest:", ["malejąca", "rosnąca", "stała", "pionowa"]),
  new pytanie("Wzór ogólny funkcji wykładniczej:", ["f(x) = a^x", "f(x) = log_a x", "f(x) = ax² + bx + c", "f(x) = 1/x"]),
  new pytanie("Równanie (x-1)(x+2)=0 ma rozwiązanie:", ["x = 1 lub x = -2", "x = -1 lub x = 2", "x = 1", "x = -2"]),
  new pytanie("Pole trójkąta równobocznego o boku 6 wynosi:", ["9√3", "12√3", "6√3", "18√3"]),
  new pytanie("Objętość kuli o promieniu r wynosi:", ["(4/3)πr³", "πr²", "2πr", "(1/3)πr³"]),
  new pytanie("Liczba odwrotna do 5 to:", ["1/5", "5", "-5", "-1/5"]),
  new pytanie("Funkcja f(x) = |x| jest:", ["parzysta", "nieparzysta", "stała", "ograniczona z dołu i góry"]),
  new pytanie("Pochodna funkcji stałej wynosi:", ["0", "1", "stała różna od 0", "brak"]),
  new pytanie("Jeżeli Δ<0 to funkcja kwadratowa:", ["nie ma miejsc zerowych", "ma jedno miejsce zerowe", "ma dwa miejsca zerowe", "jest liniowa"]),
  new pytanie("Kąt 45° w radianach to:", ["π/4", "π/2", "π/3", "π/6"]),
  new pytanie("Liczba pierwiastków równania x² - 7x + 10 = 0 to:", ["2", "1", "0", "3"]),
  new pytanie("Wzór na pole trapezu:", ["[(a+b)h]/2", "ah", "(a²+b²)/2", "(a+b)h"]),
  new pytanie("Rozwiązaniem nierówności |x| > 3 jest:", ["x > 3 lub x < -3", "x < 3", "x > -3", "-3 < x < 3"]),
  new pytanie("Prawdopodobieństwo wyrzucenia liczby większej od 4 kostką sześcienną:", ["1/3", "1/2", "1/4", "2/3"]),
  new pytanie("Funkcja f(x) = cos(x) osiąga maksimum dla x =", ["0", "π/2", "π", "3π/2"]),
  new pytanie("Pierwszy wyraz ciągu arytmetycznego wynosi 3, różnica 2. Piąty wyraz to:", ["11", "9", "7", "5"]),
  new pytanie("Wzór na sumę n początkowych wyrazów ciągu arytmetycznego:", ["(a₁ + aₙ)n/2", "n(a₁ + d)", "n(a₁ - d)", "(2a₁ + (n-1)d)n/2"]),
  new pytanie("Wzór funkcji odwrotnej do f(x) = 3x - 2:", ["(x+2)/3", "(x-2)/3", "3(x-2)", "(x-3)/2"]),
  new pytanie("Dla jakiej wartości a funkcja f(x) = ax³ jest rosnąca:", ["a > 0", "a < 0", "a = 0", "każde a"]),
  new pytanie("Liczba rozwiązań układu równań prostych przecinających się:", ["1", "0", "nieskończenie wiele", "brak"]),
  new pytanie("Okrąg o równaniu (x-2)² + (y+3)² = 9 ma promień:", ["3", "2", "6", "9"]),
  new pytanie("Liczba przecięć wykresu funkcji kwadratowej z osią OX to:", ["zależy od Δ", "zawsze 2", "zawsze 0", "zawsze 1"]),
  new pytanie("Najmniejsza liczba całkowita większa od √7 to:", ["3", "2", "4", "5"]),
  new pytanie("Asymptota pozioma funkcji f(x) = 1/x dla x→∞ to:", ["y=0", "x=0", "y=1", "x=1"]),
  new pytanie("Średnia arytmetyczna zbioru {2,4,6,8} to:", ["5", "4", "6", "8"]),
  new pytanie("Miejsce zerowe funkcji f(x) = 5x + 10 to:", ["-2", "2", "5", "-5"]),
  new pytanie("Rozwiązanie równania |x-2| = 3:", ["x = 5 lub x = -1", "x = -5 lub x = 1", "x = 1 lub x = 5", "x = -1 lub x = -5"]),
  new pytanie("Liczba π jest:", ["niewymierna", "wymierna", "całkowita", "naturalna"]),
  new pytanie("Liczba rozwiązań równania cos x = 0 na przedziale [0,2π):", ["2", "1", "3", "0"]),
  new pytanie("Liczba (√3 - 1)(√3 + 1) równa się:", ["2", "3", "-2", "-3"]),
  new pytanie("Funkcja f(x) = x³ - 3x² + 4 jest rosnąca dla:", ["x > 2", "x < 2", "x < 0", "x > 0"]),
  new pytanie("Styczna do paraboli y=x²-4x+1 w punkcie x=2 ma równanie:", ["y = 0", "y = 4x", "y = -4x", "y = 2x"]),
  new pytanie("Liczba miejsc zerowych funkcji f(x) = x³ wynosi:", ["1", "2", "3", "0"]),
  new pytanie("Wzór skróconego mnożenia (a+b)³:", ["a³+3a²b+3ab²+b³", "a³+b³", "(a+b)(a²+b²)", "a²+b²"]),
  new pytanie("Rozkład na czynniki x²-9 to:", ["(x-3)(x+3)", "(x+9)(x-9)", "(x-9)(x+9)", "(x-3)²"]),
  new pytanie("W trójkącie prostokątnym długości przyprostokątnych wynoszą 3 i 4. Długość przeciwprostokątnej wynosi:", ["5", "6", "7", "8"])
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

const egzamin_polski = [
  new pytanie("Które z poniższych zdań zawiera błąd ortograficzny?", ["Wczoraj poszłem do sklepu.", "Wczoraj poszedłem do sklepu.", "Wczoraj poszłam do sklepu.", "Wczoraj poszliśmy do sklepu."]),
  new pytanie("W którym zdaniu poprawnie użyto przecinka?", ["Gdy wrócił do domu, zastał pustkę.", "Gdy wrócił do domu zastał pustkę.", "Gdy, wrócił do domu zastał pustkę.", "Gdy wrócił do domu zastał, pustkę."]),
  new pytanie("Które z poniższych wyrażeń jest przykładem metafory?", ["Serce z kamienia.", "Serce bije szybko.", "Serce jest narządem.", "Serce pompuje krew."]),
  new pytanie("Jakie znaczenie ma wyraz „pustka” w kontekście literackim?", ["Poczucie braku i samotności.", "Brak jakiejkolwiek formy.", "Wolna przestrzeń.", "Wrażenie porażki."]),
  new pytanie("Które z poniższych zdań jest przykładem wykrzyknienia?", ["Ależ to piękne!", "Byłem tam.", "Czy to możliwe?", "On powiedział to sam."]),
  new pytanie("Który ze słów jest przykładem wyrazu współczesnego?", ["Komputer.", "Zamek.", "Pług.", "Wóz."]),
  new pytanie("Co wyraża zdanie: „Jestem wściekły z powodu tej decyzji”?", ["Emocję.", "Zadowolenie.", "Żal.", "Nadzieję."]),
  new pytanie("W jakiej formie gramatycznej jest czasownik „rozmawiam”?", ["Pierwsza osoba, liczba pojedyncza, czas teraźniejszy.", "Pierwsza osoba, liczba mnoga, czas teraźniejszy.", "Druga osoba, liczba pojedyncza, czas przeszły.", "Trzecia osoba, liczba mnoga, czas przyszły."]),
  new pytanie("Jaki środek stylistyczny występuje w zdaniu „Oczy w kształcie okręgów”?", ["Porównanie.", "Metafora.", "Personifikacja.", "Eufemizm."]),
  new pytanie("Jaką funkcję pełni przecinek w zdaniu: „Po obiedzie, gdy już był zmęczony, zasnął”?", ["Oddziela zdanie podrzędne.", "Oddziela wyraz od przysłówka.", "Oddziela wyrażenia współrzędne.", "Oddziela wyraz od zaimka."]),
  new pytanie("Jakim rodzajem tekstu jest „Dziady” Adama Mickiewicza?", ["Dramatem.", "Poematem.", "Powieścią.", "Lirykiem."]),
  new pytanie("W której z poniższych sytuacji użycie słowa „wielki” jest odpowiednie?", ["On jest wielkim człowiekiem.", "On jest wielki z mocy.", "On jest wielki na obrazku.", "On jest wielki, jak niebo."]),
  new pytanie("Co oznacza sformułowanie „w ciemno” w kontekście codziennym?", ["Bez zastanowienia, na oślep.", "W pomieszczeniu bez okien.", "Bez wiedzy.", "W nocy."]),
  new pytanie("Jak nazywa się główny bohater w „Panu Tadeuszu” Adama Mickiewicza?", ["Tadeusz.", "Adam.", "Mikołaj.", "Jacek."]),
  new pytanie("Które z poniższych zdań jest przykładem zdania złożonego współrzędnie?", ["Lubię kawę, a ona herbatę.", "Gdy wróciłem, ona już poszła.", "Ponieważ padał deszcz, nie wyszedłem.", "Po obiedzie poszedłem na spacer."]),
  new pytanie("Która postać w literaturze polskiej jest bohaterem tragicznego konfliktu?", ["Hamlet.", "Romeo.", "Don Kichot.", "Piotr Wysocki."]),
  new pytanie("Jaki rodzaj wyrazu stanowi „kot” w zdaniu „To jest kot”?", ["Rzeczownik.", "Przymiotnik.", "Czasownik.", "Zaimek."]),
  new pytanie("Co wyraża słowo „patriotyzm”?", ["Miłość do ojczyzny.", "Miłość do rodziny.", "Miłość do przyrody.", "Miłość do kultury."]),
  new pytanie("Kto napisał „Przedwiośnie”?", ["Stefan Żeromski.", "Henryk Sienkiewicz.", "Adam Mickiewicz.", "Juliusz Słowacki."]),
  new pytanie("Które z poniższych zdań zawiera błąd gramatyczny?", ["Ona się spóźniła na zebranie.", "On się spóźnił na zebranie.", "Oni się spóźnili na zebranie.", "My się spóźniliśmy na zebranie."]),
  new pytanie("Co to jest „interpunkcja”?", ["Zasady stawiania znaków przestankowych.", "Zasady pisowni słów.", "Zasady używania spójników.", "Zasady tworzenia zdań złożonych."]),
  new pytanie("Co oznacza „analiza literacka”?", ["Badanie i interpretacja tekstów literackich.", "Opis i streszczenie książki.", "Porównanie książek.", "Podsumowanie bohaterów."]),
  new pytanie("Jaki rodzaj literacki reprezentuje „Lalka” Bolesława Prusa?", ["Powieść.", "Poemat.", "Dramat.", "Opowiadanie."]),
  new pytanie("Jakie środki stylistyczne występują w wierszu: „Miłość to woda, która płynie”?", ["Porównanie i metafora.", "Przenośnia i alegoria.", "Epitet i oksymoron.", "Metafora i hiperbola."]),
  new pytanie("W jakiej formie gramatycznej występuje „rozmawiam”?", ["Pierwsza osoba, liczba pojedyncza, czas teraźniejszy.", "Pierwsza osoba, liczba mnoga, czas przeszły.", "Trzecia osoba, liczba mnoga, czas teraźniejszy.", "Druga osoba, liczba pojedyncza, czas przyszły."]),
  new pytanie("Jakie znaczenie ma wyraz „odwaga” w kontekście literackim?", ["Siła do stawienia czoła trudnościom.", "Brak lęku przed porażką.", "Gotowość do ryzyka.", "Utrata poczucia zagrożenia."]),
  new pytanie("Kto jest autorem „Pana Tadeusza”?", ["Adam Mickiewicz.", "Juliusz Słowacki.", "Bolesław Prus.", "Stefan Żeromski."]),
  new pytanie("Jakie cechy charakterystyczne ma gatunek literacki „epos”?", ["Długie, rozbudowane narracje o bohaterach.", "Krótkie formy, często wierszowane.", "Utwory dialogowe, bez narratora.", "Prace oparte na faktach."]),
  new pytanie("Jakim środkami stylistycznymi charakteryzuje się haiku?", ["Krótkie obrazy, minimalistyczna forma.", "Rozbudowane metafory i alegorie.", "Wielkie opisy przyrody.", "Ironia i sarkazm."]),
  new pytanie("Co to jest „parafraza” tekstu literackiego?", ["Przeróbka tekstu, zachowująca sens, ale zmieniająca formę.", "Streszczenie tekstu literackiego.", "Dosłowne przetłumaczenie tekstu.", "Tworzenie nowego zakończenia tekstu."]),
  new pytanie("W jakim rodzaju literackim występuje dramat „Wesele” Stanisława Wyspiańskiego?", ["Dramat.", "Powieść.", "Opowiadanie.", "Poemat."]),
  new pytanie("Jakie znaczenie ma „tragizm” w kontekście literackim?", ["Konflikt, który prowadzi do nieuniknionej klęski bohatera.", "Optymistyczne zakończenie pełne nadziei.", "Złożoność problemów bohaterów.", "Pozytywne rozwiązanie trudnych spraw."]),
  new pytanie("Co wyraża zwrot „przełamać lody”?", ["Przełamać pierwsze trudności w relacji.", "Wyjść na zewnątrz w zimną porę.", "Rozpocząć trudne zadanie.", "Zrealizować plan."]),
  new pytanie("Kto napisał „Poezje” Jana Kochanowskiego?", ["Jan Kochanowski.", "Adam Mickiewicz.", "Bolesław Leśmian.", "Juliusz Słowacki."]),
  new pytanie("Jaki rodzaj tekstu to „Sonet do Laury” Petrarki?", ["Sonet.", "Elegia.", "Epos.", "Tragedia."]),
  new pytanie("Co to jest „kontekst literacki”?", ["Tło, w jakim rozgrywa się akcja utworu literackiego.", "Opis historii autora tekstu.", "Wyjaśnienie językowych trudności w tekście.", "Wykorzystanie cytatów w pracy literackiej."]),
  new pytanie("Jak nazywa się proces analizowania tekstu literackiego?", ["Interpretacja.", "Synteza.", "Abstrakcja.", "Opis."]),
  new pytanie("Co oznacza termin „epika”?", ["Gatunek literacki opowiadający o wydarzeniach.", "Gatunek poetycki, często liryczny.", "Rodzaj dramatyczny, oparty na dialogu.", "Rodzaj filozoficzny, oparty na rozważaniach."]),
  new pytanie("Jakie cechy ma bohater tragiczny?", ["Zmaganie z nieuniknionym losem.", "Brak odpowiedzialności za swoje czyny.", "Zakończenie z pozytywnym rezultatem.", "Wybór między dwiema równorzędnymi opcjami."]),
  new pytanie("Kto jest autorem „Pana Tadeusza”?", ["Adam Mickiewicz.", "Bolesław Prus.", "Juliusz Słowacki.", "Stefan Żeromski."]),
  new pytanie("Co to jest „symbolizm” w literaturze?", ["Używanie symboli do wyrażania głębszych znaczeń.", "Pisanie dosłownie, bez ukrytych sensów.", "Zastosowanie motywów religijnych w tekście.", "Używanie prostych słów i zdań."]),
  new pytanie("Jakie cechy stylu barokowego można znaleźć w literaturze polskiej?", ["Przesadna ornamentyka, kontrasty, patos.", "Prostota formy i treści.", "Realizm i naturalizm.", "Bezpośredni kontakt z naturą."]),
  new pytanie("Jak nazywa się literatura tworzona w okresie renesansu?", ["Humanizm.", "Klasycyzm.", "Barok.", "Romantyzm."]),
  new pytanie("W którym z poniższych przypadków użyto formy poprawnej w „tego dnia”?", ["Genitivus (dopełniacz).", "Nominativus (mianownik).", "Accusativus (biernik).", "Ablativus (narzędnik)."]),
  new pytanie("Które z poniższych zdań jest przykładem zdania złożonego podrzędnie?", ["On powiedział, że nie przyjdzie.", "Ona poszła do sklepu, a ja do parku.", "Ona i jej brat poszli na spacer.", "On i ja wróciliśmy do domu."]),
  new pytanie("Co wyraża metafora „serce z kamienia”?", ["Brak wrażliwości.", "Niezłomność charakteru.", "Siłę i odwagę.", "Uczucie złośliwości."]),
  new pytanie("Kto jest autorem „Zbrodni i kary”?", ["Fiodor Dostojewski.", "Lew Tołstoj.", "Anton Czechow.", "Władimir Nabokov."]),
  new pytanie("Które z poniższych wyrażeń jest przykładem oksymoronu?", ["Gorący lód.", "Czyste powietrze.", "Spokojne morze.", "Mroźny wiatr."]),
  new pytanie("Co to jest „anekdota”?", ["Krótka opowieść o ciekawej sytuacji z życia.", "Długi, poważny wykład na dany temat.", "Opis krajobrazu.", "Komentarz do wydarzeń historycznych."]),
  new pytanie("Które z poniższych zdań jest przykładem ironii?", ["No jasne, świetnie się bawiłem, gdy padał deszcz.", "Tak, oczywiście, to najlepszy pomysł.", "Nikt nie miał odwagi, by mu to powiedzieć.", "Zdecydowanie to najpiękniejsza rzecz, jaką widziałem."])
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

//pytania z programisty

const rok1_programista = [
  new pytanie("Jakiego typu danymi operuje typ `int` w języku Python?", ["Liczby całkowite", "Tekst", "Liczby zmiennoprzecinkowe", "Wartości logiczne"]),
  new pytanie("Który z podanych systemów operacyjnych jest typu open source?", ["Linux", "Windows", "macOS", "Chrome OS"]),
  new pytanie("Który skrót oznacza centralną jednostkę obliczeniową komputera?", ["CPU", "RAM", "HDD", "SSD"]),
  new pytanie("Co oznacza skrót HTML?", ["HyperText Markup Language", "Hyperlink Text Mode Language", "HighText Media Language", "Hyper Transfer Mode Layout"]),
  new pytanie("Który element służy do przechowywania informacji w pamięci RAM?", ["Komórki pamięci", "Procesory", "Zasilacze", "Karty graficzne"]),
  new pytanie("Które z urządzeń jest urządzeniem wejścia?", ["Klawiatura", "Monitor", "Drukarka", "Głośniki"]),
  new pytanie("Do czego służy pętla `for` w języku Python?", ["Do wykonywania instrukcji określoną liczbę razy", "Do deklarowania zmiennych", "Do przerywania programu", "Do zamykania aplikacji"]),
  new pytanie("Co oznacza skrót URL?", ["Uniform Resource Locator", "Unique Routing Link", "User Registered Login", "Universal Random Locator"]),
  new pytanie("Co przechowuje BIOS?", ["Podstawowe instrukcje uruchamiania komputera", "Dane użytkownika", "Gry i aplikacje", "Dokumenty systemowe"]),
  new pytanie("Co to jest zmienna w programowaniu?", ["Rezerwacja miejsca w pamięci na dane", "Nazwa pliku", "Typ urządzenia", "Typ dokumentu"])
];

const rok2_programista = [
  new pytanie("Jakim znacznikiem w HTML tworzy się nagłówek pierwszego poziomu?", ["<h1>", "<head>", "<title>", "<header>"]),
  new pytanie("Który znacznik HTML służy do osadzania obrazu?", ["<img>", "<picture>", "<src>", "<media>"]),
  new pytanie("Które rozszerzenie dotyczy arkusza stylów CSS?", [".css", ".html", ".xml", ".php"]),
  new pytanie("Które polecenie w systemie Linux służy do wyświetlenia listy plików?", ["ls", "cp", "rm", "mv"]),
  new pytanie("Jakiego typu jest właściwość `background-color` w CSS?", ["Styl tła", "Styl tekstu", "Rozmiar czcionki", "Typ obramowania"]),
  new pytanie("Co oznacza `float: left;` w CSS?", ["Ustawia element do lewej strony", "Wyrównuje tekst do lewej", "Zmienia czcionkę", "Ustawia marginesy"]),
  new pytanie("Jakie rozszerzenie posiada plik zawierający kod PHP?", [".php", ".html", ".txt", ".js"]),
  new pytanie("Co oznacza skrót SQL?", ["Structured Query Language", "Simple Query Logic", "Select Quick Language", "System Query Layout"]),
  new pytanie("Jakie polecenie w SQL służy do pobrania danych z tabeli?", ["SELECT", "INSERT", "DELETE", "UPDATE"]),
  new pytanie("W jakim języku tworzony jest arkusz stylów?", ["CSS", "HTML", "JS", "SQL"])
];

const rok3_programista = [
  new pytanie("Co oznacza `echo` w PHP?", ["Wyświetlenie tekstu", "Zatrzymanie programu", "Łączenie z bazą", "Tworzenie tabeli"]),
  new pytanie("Jakiego protokołu używa strona z szyfrowanym połączeniem?", ["HTTPS", "HTTP", "FTP", "TCP"]),
  new pytanie("Jaką metodą HTTP przesyłamy dane z formularza?", ["POST", "GET", "PUSH", "DELETE"]),
  new pytanie("W jakim języku najczęściej pisze się backend aplikacji webowej?", ["PHP", "HTML", "CSS", "XML"]),
  new pytanie("Która funkcja w PHP łączy się z bazą MySQL?", ["mysqli_connect()", "mysql_open()", "db_connect()", "sql_connect()"]),
  new pytanie("Jaka struktura danych zawiera pary klucz-wartość w PHP?", ["Tablica asocjacyjna", "Lista", "Stos", "Drzewo"]),
  new pytanie("Jakim językiem opisujemy strukturę dokumentu HTML?", ["HTML", "CSS", "SQL", "PHP"]),
  new pytanie("Do czego służy `$_POST` w PHP?", ["Do odczytu danych z formularza", "Do zapisu plików", "Do wysyłki e-mail", "Do wczytywania arkuszy stylów"]),
  new pytanie("Które polecenie SQL wprowadza dane do tabeli?", ["INSERT", "SELECT", "DROP", "ALTER"]),
  new pytanie("Jaki znacznik zamyka paragraf w HTML?", ["</p>", "</para>", "</pt>", "</txt>"])
];

const rok4_programista = [
  new pytanie("Jakiego typu relację opisuje klucz obcy?", ["Zależność między tabelami", "Kolejność zapytań", "Wielkość danych", "Typ sortowania"]),
  new pytanie("Co robi instrukcja `JOIN` w SQL?", ["Łączy tabele", "Tworzy nową tabelę", "Usuwa dane", "Modyfikuje strukturę"]),
  new pytanie("Jakiego języka używa się do tworzenia interaktywnych elementów na stronie?", ["JavaScript", "HTML", "CSS", "XML"]),
  new pytanie("Jakie zdarzenie JavaScript reaguje na kliknięcie?", ["onclick", "onhover", "onload", "onsubmit"]),
  new pytanie("Co robi `try...catch` w JavaScript?", ["Obsługuje błędy", "Tworzy funkcję", "Zmienia klasę", "Ładuje obraz"]),
  new pytanie("Jakiej metody używa się do zamiany JSON na obiekt w JavaScript?", ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.encode()"]),
  new pytanie("Jak zapisuje się komentarz jednoliniowy w JavaScript?", ["// komentarz", "* komentarz", "<!-- komentarz", "## komentarz"]),
  new pytanie("Co oznacza `NULL` w bazie danych?", ["Brak wartości", "Zero", "Fałsz", "Typ tekstowy"]),
  new pytanie("Co robi `ALTER TABLE` w SQL?", ["Modyfikuje strukturę tabeli", "Usuwa dane", "Kopiuje dane", "Nadaje uprawnienia"]),
  new pytanie("Który język służy do tworzenia backendu w Node.js?", ["JavaScript", "PHP", "SQL", "Python"])
];

const rok5_programista = [
  new pytanie("Co oznacza test jednostkowy?", ["Testuje pojedynczą funkcję lub moduł", "Testuje całą aplikację", "Testuje sieć", "Testuje bazę danych"]),
  new pytanie("Co to jest framework?", ["Zestaw narzędzi programistycznych", "Program graficzny", "Format danych", "Typ serwera"]),
  new pytanie("Co oznacza skrót API?", ["Application Programming Interface", "Automated Programming Index", "Advanced Protocol Integration", "Array Process Instruction"]),
  new pytanie("Co to jest repozytorium Git?", ["Miejsce przechowywania kodu", "Baza danych", "Kompilator", "Język programowania"]),
  new pytanie("Co oznacza `commit` w systemie Git?", ["Zapis zmian", "Anulowanie zmian", "Wycofanie danych", "Przesyłanie plików"]),
  new pytanie("Jak zabezpieczyć dane logowania w aplikacji?", ["Hashowanie haseł", "Zapisywanie haseł jako tekst", "Użycie ciasteczek bez ochrony", "Przechowywanie haseł w URL"]),
  new pytanie("Czym jest test integracyjny?", ["Test sprawdzający współpracę modułów", "Test pojedynczego przycisku", "Test bazy danych", "Test graficzny"]),
  new pytanie("Jaka biblioteka JavaScript służy do testowania aplikacji?", ["Jest", "jQuery", "Bootstrap", "Axios"]),
  new pytanie("Co oznacza skrót CRUD w kontekście baz danych?", ["Create, Read, Update, Delete", "Copy, Run, Undo, Delete", "Connect, Replace, Update, Drop", "Compile, Run, Update, Delete"]),
  new pytanie("Jaka jest funkcja pliku `.env` w projekcie?", ["Przechowuje zmienne środowiskowe", "Styluje stronę", "Zawiera grafikę", "Uruchamia serwer"])
];

const egzamin_programista = [
  new pytanie("Który z języków jest używany do tworzenia struktury strony internetowej?", ["HTML", "CSS", "PHP", "SQL"]),
  new pytanie("Który znacznik HTML służy do tworzenia listy nieuporządkowanej?", ["<ul>", "<ol>", "<li>", "<dl>"]),
  new pytanie("Jakim atrybutem oznaczamy alternatywny tekst dla obrazka w HTML?", ["alt", "title", "src", "href"]),
  new pytanie("Który styl CSS ustawia kolor tła elementu?", ["background-color", "color", "border-color", "text-color"]),
  new pytanie("Jaki port domyślnie wykorzystuje serwer HTTP?", ["80", "21", "443", "3306"]),
  new pytanie("Jakim poleceniem SQL tworzymy nową tabelę?", ["CREATE TABLE", "INSERT INTO", "SELECT FROM", "UPDATE TABLE"]),
  new pytanie("Który typ danych SQL najlepiej nadaje się do przechowywania tekstu?", ["VARCHAR", "INT", "FLOAT", "DATE"]),
  new pytanie("Które z poniższych rozszerzeń oznacza arkusz stylów?", [".css", ".html", ".js", ".php"]),
  new pytanie("Która jednostka w CSS jest względna względem wielkości czcionki elementu nadrzędnego?", ["em", "px", "cm", "%"]),
  new pytanie("Który język programowania działa po stronie klienta?", ["JavaScript", "PHP", "Python", "SQL"]),
  new pytanie("Jakie rozszerzenie ma plik głównego arkusza stylów?", [".css", ".scss", ".html", ".js"]),
  new pytanie("Które polecenie SQL dodaje dane do tabeli?", ["INSERT INTO", "UPDATE", "CREATE", "SELECT"]),
  new pytanie("Jakie rozszerzenie ma plik zawierający kod PHP?", [".php", ".html", ".css", ".sql"]),
  new pytanie("Jaką wartość ma atrybut method w formularzu HTML wysyłającym dane jako parametry w URL?", ["get", "post", "send", "link"]),
  new pytanie("Które polecenie SQL tworzy bazę danych?", ["CREATE DATABASE", "NEW DATABASE", "MAKE DB", "INSERT DATABASE"]),
  new pytanie("Co robi polecenie SELECT * FROM users?", ["Pobiera wszystkie dane z tabeli users", "Usuwa dane z tabeli users", "Aktualizuje dane w users", "Tworzy nową tabelę users"]),
  new pytanie("Gdzie umieszcza się kod CSS wewnętrzny w HTML?", ["W znaczniku &ltstyle&gt", "W znaczniku &ltlink&gt", "W znaczniku &ltscript&gt", "W znaczniku &ltmeta&gt"]),
  new pytanie("Co oznacza akronim CSS?", ["Cascading Style Sheets", "Computer Style Script", "Color Styling System", "Cascading Script Syntax"]),
  new pytanie("Który język jest wykorzystywany do tworzenia dynamicznych aplikacji po stronie serwera?", ["PHP", "HTML", "CSS", "JavaScript"]),
  new pytanie("Które narzędzie służy do zarządzania relacyjnymi bazami danych?", ["phpMyAdmin", "FileZilla", "Visual Studio Code", "GIMP"]),
  new pytanie("Jaką funkcję pełni mysqli_connect() w PHP?", ["Łączy z bazą danych", "Tworzy tabelę", "Zamyka połączenie", "Usuwa bazę danych"]),
  new pytanie("Co oznacza termin CRUD w kontekście baz danych?", ["Create, Read, Update, Delete", "Connect, Run, Update, Delete", "Create, Replace, Use, Drop", "Copy, Read, Update, Deploy"]),
  new pytanie("Jakim poleceniem aktualizujemy rekord w SQL?", ["UPDATE", "SET", "CHANGE", "INSERT"]),
  new pytanie("Co robi instrukcja break w pętli?", ["Przerywa działanie pętli", "Rozpoczyna nową iterację", "Resetuje licznik", "Wydłuża czas działania"]),
  new pytanie("Co oznacza null w językach programowania?", ["Brak przypisanej wartości", "Zero", "Błąd", "Pusta funkcja"]),
  new pytanie("Co wykonuje instrukcja return w funkcji?", ["Zwraca wartość i kończy działanie funkcji", "Wstrzymuje działanie pętli", "Przekazuje parametr", "Usuwa zmienną"]),
  new pytanie("Jakie jest domyślne rozszerzenie pliku Python?", [".py", ".pyt", ".pt", ".python"]),
  new pytanie("Które z poniższych środowisk programistycznych służy do tworzenia aplikacji w Pythonie?", ["PyCharm", "Eclipse", "NetBeans", "Code::Blocks"]),
  new pytanie("Jaką wartość zwróci instrukcja print(5 // 2) w języku Python?", ["2", "2.5", "3", "0"]),
  new pytanie("Która struktura danych działa na zasadzie LIFO?", ["Stos", "Kolejka", "Lista", "Tablica"]),
  new pytanie("Który typ zmiennej w języku C++ przechowuje liczby całkowite?", ["int", "float", "char", "bool"]),
  new pytanie("Jakie słowo kluczowe w Pythonie służy do zdefiniowania funkcji?", ["def", "func", "method", "function"]),
  new pytanie("Który z poniższych operatorów logicznych oznacza i (AND) w języku Java?", ["&&", "||", "==", "!="]),
  new pytanie("Co oznacza termin debugowanie?", ["Proces wykrywania i usuwania błędów w kodzie", "Optymalizowanie działania aplikacji", "Tworzenie nowej funkcji", "Szyfrowanie danych"]),
  new pytanie("Jak nazywa się technika testowania polegająca na testowaniu poszczególnych funkcji programu?", ["Test jednostkowy", "Test wydajnościowy", "Test integracyjny", "Test akceptacyjny"]),
  new pytanie("Jakie rozszerzenie ma plik źródłowy języka C++?", [".cpp", ".py", ".java", ".html"]),
  new pytanie("Co oznacza kompilacja kodu źródłowego?", ["Tłumaczenie kodu na język maszynowy", "Wykonywanie kodu", "Formatowanie pliku", "Archiwizacja projektu"]),
  new pytanie("Który typ danych w języku Java przechowuje jeden znak?", ["char", "string", "int", "double"])
];

//pytania z informatyków

const rok1_informatyk = [
  new pytanie("Jakie urządzenie jest odpowiedzialne za wykonywanie operacji arytmetycznych i logicznych w komputerze?", ["Procesor", "Pamięć RAM", "Dysk twardy", "Karta graficzna"]),
  new pytanie("Co oznacza skrót RAM?", ["Random Access Memory", "Read And Modify", "Real Access Mode", "Rapid Access Module"]),
  new pytanie("Który system operacyjny jest przykładem systemu z rodziny Unix?", ["Linux", "Windows", "DOS", "Android"]),
  new pytanie("Co to jest BIOS?", ["Podstawowy system wejścia/wyjścia", "Program do edycji tekstów", "Graficzny interfejs użytkownika", "System plików"]),
  new pytanie("Który z portów jest używany do podłączania urządzeń peryferyjnych, takich jak drukarki?", ["USB", "HDMI", "VGA", "RJ-45"]),
  new pytanie("Co to jest karta sieciowa?", ["Urządzenie umożliwiające komunikację z siecią", "Urządzenie wyświetlające obraz", "Moduł zasilający komputer", "Nośnik danych"]),
  new pytanie("Jaką funkcję pełni zasilacz w komputerze?", ["Zamienia napięcie z gniazdka na odpowiednie dla podzespołów", "Przechowuje dane", "Steruje pracą procesora", "Obsługuje urządzenia wejścia/wyjścia"]),
  new pytanie("Który element odpowiada za długotrwałe przechowywanie danych?", ["Dysk twardy", "RAM", "Procesor", "BIOS"]),
  new pytanie("Co to jest system plików?", ["Struktura organizacji danych na nośniku", "Program antywirusowy", "Sterownik drukarki", "Aplikacja biurowa"]),
  new pytanie("Co oznacza skrót GUI?", ["Graficzny interfejs użytkownika", "Globalny interfejs użytkownika", "Główna jednostka informacyjna", "Generator uniwersalny"])
];

const rok2_informatyk = [
  new pytanie("Co oznacza skrót IP w kontekście sieci komputerowej?", ["Internet Protocol", "Internal Processing", "Internet Password", "Interface Point"]),
  new pytanie("Które urządzenie służy do łączenia kilku sieci komputerowych?", ["Router", "Monitor", "Karta graficzna", "Klawiatura"]),
  new pytanie("Jaki typ kabla jest najczęściej używany w sieciach lokalnych?", ["Skrętka", "HDMI", "USB", "Koaksjalny"]),
  new pytanie("Jaki adres IP należy do klasy C?", ["192.168.1.1", "10.0.0.1", "172.16.0.1", "224.0.0.1"]),
  new pytanie("Które urządzenie przydziela adresy IP w sieci lokalnej?", ["Serwer DHCP", "DNS", "Switch", "NAS"]),
  new pytanie("Co oznacza skrót LAN?", ["Local Area Network", "Logical Application Node", "Long Access Network", "Line Active Node"]),
  new pytanie("Który protokół służy do tłumaczenia nazw domenowych na adresy IP?", ["DNS", "DHCP", "FTP", "SSH"]),
  new pytanie("Jakiego protokołu używa bezpieczna wersja HTTP?", ["HTTPS", "FTP", "SMTP", "SSH"]),
  new pytanie("Jakie urządzenie działa w warstwie 2 modelu OSI?", ["Switch", "Router", "Modem", "Serwer WWW"]),
  new pytanie("Jaką funkcję pełni firewall?", ["Chroni sieć przed nieautoryzowanym dostępem", "Otwiera połączenia z Internetem", "Zwiększa zasięg Wi-Fi", "Przechowuje pliki"])
];

const rok3_informatyk = [
  new pytanie("Jakim znacznikiem otwieramy dokument HTML?", ["<html>", "<head>", "<title>", "<body>"]),
  new pytanie("Co oznacza skrót CSS?", ["Cascading Style Sheets", "Computer Style Script", "Custom Style Source", "Creative Sheet System"]),
  new pytanie("Który znacznik służy do tworzenia hiperłącza?", ["<a>", "<p>", "<link>", "<href>"]),
  new pytanie("Jakiego atrybutu użyjemy, aby ustawić kolor tła w CSS?", ["background-color", "color", "font-color", "bg"]),
  new pytanie("Co oznacza znacznik <h1> w HTML?", ["Nagłówek pierwszego poziomu", "Obrazek", "Akapit", "Link"]),
  new pytanie("Jak zapiszemy komentarz w HTML?", ["<!-- komentarz -->", "// komentarz", "/* komentarz */", "# komentarz"]),
  new pytanie("Jak zapisać klasę w CSS?", [".nazwaKlasy", "#nazwaKlasy", "@nazwaKlasy", "$nazwaKlasy"]),
  new pytanie("Co wykonuje język JavaScript w przeglądarce?", ["Skrypty po stronie klienta", "Skrypty po stronie serwera", "Stylizację strony", "Kompilację kodu"]),
  new pytanie("Jak rozpocząć blok skryptu w HTML?", ["<script>", "<js>", "<style>", "<code>"]),
  new pytanie("Co robi funkcja alert() w JavaScript?", ["Wyświetla okno dialogowe", "Ukrywa element", "Przekierowuje stronę", "Ładuje obraz"])
];

const rok4_informatyk = [
  new pytanie("Co oznacza skrót SQL?", ["Structured Query Language", "Simple Query Logic", "Standard Question Line", "Scripted Query Loader"]),
  new pytanie("Jakie polecenie SQL służy do pobierania danych?", ["SELECT", "INSERT", "DELETE", "UPDATE"]),
  new pytanie("Jakim rozszerzeniem zazwyczaj zapisujemy skrypty PHP?", [".php", ".html", ".js", ".css"]),
  new pytanie("Które polecenie dodaje nowy rekord do bazy danych?", ["INSERT", "SELECT", "DROP", "ALTER"]),
  new pytanie("Jakim znakiem rozpoczyna się zmienna w PHP?", ["$", "#", "@", "&"]),
  new pytanie("Co to jest serwer Apache?", ["Serwer HTTP", "Baza danych", "Edytor kodu", "Przeglądarka"]),
  new pytanie("Jakie polecenie usuwa tabelę w MySQL?", ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"]),
  new pytanie("Jaką funkcję PHP użyjesz do połączenia z bazą danych MySQL?", ["mysqli_connect()", "connect_mysql()", "db_connect()", "mysql_open()"]),
  new pytanie("Jak zakończysz instrukcję PHP?", [";", ":", ",", "."]),
  new pytanie("Co oznacza polecenie SQL UPDATE?", ["Modyfikacja danych", "Dodanie danych", "Usunięcie danych", "Pobranie danych"])
];

const rok5_informatyk = [
  new pytanie("Co to jest CMS?", ["System zarządzania treścią", "System kontroli jakości", "Kod modułu skryptowego", "System monitorowania"]),
  new pytanie("Przykład popularnego systemu CMS to:", ["WordPress", "Excel", "Gmail", "AutoCAD"]),
  new pytanie("Co oznacza skrót HTTPS?", ["Hypertext Transfer Protocol Secure", "Hypertext Type Platform Service", "High Transfer Protocol System", "Host Text Terminal Protocol"]),
  new pytanie("Jakie narzędzie służy do kontroli wersji kodu?", ["Git", "PHPMyAdmin", "FileZilla", "Word"]),
  new pytanie("Jak nazywa się bezpieczne połączenie z serwerem zdalnym przez terminal?", ["SSH", "HTTP", "FTP", "DNS"]),
  new pytanie("Co oznacza termin RWD w projektowaniu stron?", ["Responsive Web Design", "Rapid Web Deployment", "Real Web Display", "Ready Web Developer"]),
  new pytanie("Jakie rozszerzenie ma plik z kopią zapasową bazy danych MySQL?", [".sql", ".xml", ".csv", ".bak"]),
  new pytanie("Co oznacza atak typu phishing?", ["Podszywanie się pod inną osobę lub firmę", "Uszkadzanie sprzętu", "Skanowanie portów", "Wysyłanie SPAMu"]),
  new pytanie("Co oznacza skrót API?", ["Application Programming Interface", "Advanced Protocol Integration", "Active Program Identifier", "App Personal Interface"]),
  new pytanie("Jakiego narzędzia użyjesz do przesyłania plików na serwer przez FTP?", ["FileZilla", "Excel", "Chrome", "Word"])
];

const egzamin_informatyk = [
  new pytanie("Który z poniższych protokołów jest używany do bezpiecznego przesyłania stron internetowych?", ["HTTPS", "FTP", "HTTP", "SMTP"]),
  new pytanie("Jakie urządzenie pełni funkcję centralnego punktu w topologii gwiazdy?", ["Przełącznik (switch)", "Most (bridge)", "Repeater", "Router"]),
  new pytanie("Który z poniższych systemów plików jest używany przez systemy Windows?", ["NTFS", "FAT32", "ext4", "HFS+"]),
  new pytanie("Co oznacza skrót \"IP\" w kontekście sieci komputerowych?", ["Internet Protocol", "Internal Process", "Interface Program", "Interconnect Packet"]),
  new pytanie("Które z poniższych poleceń w systemie Linux służy do zmiany katalogu?", ["cd", "ls", "mv", "rm"]),
  new pytanie("Jak nazywa się podstawowa jednostka informacji w komputerze?", ["Bit", "Byte", "Pixel", "Node"]),
  new pytanie("Który z poniższych adresów IP jest adresem klasy C?", ["192.168.1.1", "10.0.0.1", "172.16.0.1", "224.0.0.1"]),
  new pytanie("Co oznacza skrót \"CPU\"?", ["Central Processing Unit", "Computer Personal Unit", "Central Peripheral Unit", "Computer Processing Unit"]),
  new pytanie("Który z poniższych protokołów jest używany do przesyłania poczty elektronicznej?", ["SMTP", "FTP", "HTTP", "SNMP"]),
  new pytanie("Jakie narzędzie w systemie Windows służy do zarządzania partycjami dyskowymi?", ["Zarządzanie dyskami", "Menedżer zadań", "Menedżer urządzeń", "Monitor zasobów"]),
  new pytanie("Który z poniższych języków programowania jest językiem niskiego poziomu?", ["Assembler", "Java", "Python", "C++"]),
  new pytanie("Co oznacza skrót \"RAM\"?", ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"]),
  new pytanie("Które z poniższych urządzeń służy do konwersji sygnału cyfrowego na analogowy i odwrotnie?", ["Modem", "Router", "Switch", "Access Point"]),
  new pytanie("Jakie rozszerzenie ma plik wykonywalny w systemie Windows?", [".exe", ".bat", ".com", "Wszystkie powyższe"]),
  new pytanie("Który z poniższych protokołów jest używany do zdalnego logowania się na inny komputer?", ["Telnet", "FTP", "SMTP", "SNMP"]),
  new pytanie("Co oznacza skrót \"DNS\"?", ["Domain Name System", "Dynamic Name System", "Digital Network Service", "Data Number Sequence"]),
  new pytanie("Który z poniższych systemów operacyjnych jest oparty na jądrze Linux?", ["Ubuntu", "macOS", "DOS", "Windows 10"]),
  new pytanie("Jakie narzędzie w systemie Windows służy do monitorowania wydajności systemu?", ["Monitor zasobów", "Menedżer urządzeń", "Harmonogram zadań", "Edytor rejestru"]),
  new pytanie("Który z poniższych protokołów jest używany do bezpiecznego przesyłania plików?", ["SFTP", "HTTP", "Telnet", "FTP"]),
  new pytanie("Co oznacza skrót \"SSD\"?", ["Solid State Drive", "Super Speed Disk", "Serial Storage Device", "System Storage Drive"]),
  new pytanie("Który system operacyjny jest systemem czasu rzeczywistego?", ["FreeRTOS", "Linux", "Windows", "macOS"]),
  new pytanie("Który kabel jest używany do połączenia komputera z routerem?", ["RJ-45", "HDMI", "USB", "RJ-11"]),
  new pytanie("Który z poniższych programów służy do tworzenia maszyny wirtualnej?", ["VirtualBox", "Notepad++", "WinRAR", "Microsoft Edge"]),
  new pytanie("Co oznacza skrót \"BIOS\"?", ["Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System", "Binary Internal Operating System"]),
  new pytanie("Jaki typ pamięci jest stosowany do długoterminowego przechowywania danych?", ["SSD", "ROM", "Cache", "RAM"]),
  new pytanie("Co oznacza skrót \"VPN\"?", ["Virtual Private Network", "Virtual Processing Node", "Video Processing Network", "Virtual Public Network"]),
  new pytanie("Który z poniższych elementów odpowiada za chłodzenie procesora?", ["Wentylator CPU", "Zasilacz", "Modem", "Chipset"]),
  new pytanie("Który z poniższych portów służy do podłączenia monitora?", ["HDMI", "RJ-45", "USB-C", "PS/2"]),
  new pytanie("Jaki jest domyślny port HTTP?", ["80", "443", "8080", "22"]),
  new pytanie("Co oznacza skrót \"DHCP\"?", ["Dynamic Host Configuration Protocol", "Domain Host Configuration Protocol", "Data Host Connection Protocol", "Dynamic Host Control Protocol"]),
  new pytanie("Jaki system operacyjny jest używany głównie w serwerach?", ["Ubuntu Server", "macOS", "Windows 10", "Windows XP"]),
  new pytanie("Który z poniższych protokołów używa szyfrowania?", ["SSH", "FTP", "Telnet", "HTTP"]),
  new pytanie("Jaki format pliku jest używany do obrazów dysków w VirtualBox?", [".vdi", ".iso", ".exe", ".tar"]),
  new pytanie("Co oznacza skrót \"MAC\" w odniesieniu do adresów sieciowych?", ["Media Access Control", "Main Address Configuration", "Machine Access Control", "Master Access Control"]),
  new pytanie("Który protokół umożliwia automatyczne przypisanie adresu IP?", ["DHCP", "FTP", "DNS", "ICMP"]),
  new pytanie("Który system operacyjny jest darmowy i open-source?", ["Linux", "Windows 11", "macOS", "iOS"]),
  new pytanie("Który format pliku służy do przechowywania stron internetowych?", [".html", ".mp3", ".zip", ".exe"]),
  new pytanie("Który z poniższych komponentów odpowiada za przetwarzanie grafiki?", ["GPU", "CPU", "RAM", "SSD"]),
  new pytanie("Które rozszerzenie pliku wskazuje na plik wykonywalny w systemie Linux?", [".sh", ".exe", ".bat", ".cmd"]),
  new pytanie("Jakie narzędzie w systemie Windows służy do analizy ruchu sieciowego?", ["Wireshark", "Microsoft Edge", "Task Manager", "Notepad++"]),
  new pytanie("Który z poniższych algorytmów jest używany do szyfrowania danych?", ["AES", "HTTP", "DHCP", "XML"]),
  new pytanie("Które polecenie w systemie Linux usuwa plik?", ["rm", "mv", "cp", "ls"]),
  new pytanie("Który z poniższych systemów plików jest używany w systemach Linux?", ["ext4", "NTFS", "FAT32", "exFAT"]),
  new pytanie("Jakie rozszerzenie ma skompilowany plik Javy?", [".class", ".java", ".jar", ".exe"]),
  new pytanie("Które polecenie w systemie Windows wyświetla konfigurację sieciową?", ["ipconfig", "ping", "tracert", "nslookup"]),
  new pytanie("Jak nazywa się urządzenie, które umożliwia bezprzewodowe połączenie z siecią?", ["Access Point", "Router", "Switch", "Modem"]),
  new pytanie("Jaki rodzaj pamięci traci dane po wyłączeniu komputera?", ["RAM", "ROM", "SSD", "HDD"]),
  new pytanie("Jakie rozszerzenie ma plik konfiguracyjny w systemie Linux?", [".conf", ".exe", ".bat", ".sys"])
];

//pytania z automatyków

const rok1_automatyk = [
  new pytanie("Jakie napięcie znamionowe ma standardowe gniazdo jednofazowe w Polsce?", ["230 V", "110 V", "400 V", "12 V"]),
  new pytanie("Co to jest przewód fazowy w instalacji elektrycznej?", ["Przewód doprowadzający napięcie", "Przewód ochronny", "Przewód neutralny", "Przewód uziemiający"]),
  new pytanie("Jakiego koloru jest przewód ochronny PE?", ["Żółto-zielony", "Niebieski", "Brązowy", "Czarny"]),
  new pytanie("Do czego służy miernik uniwersalny?", ["Do pomiaru napięcia, prądu i oporu", "Do cięcia przewodów", "Do wykrywania metali", "Do lutowania"]),
  new pytanie("Co oznacza symbol jednostki oporu elektrycznego?", ["Ω", "V", "A", "W"]),
  new pytanie("Co mierzy się w amperach?", ["Natężenie prądu", "Napięcie", "Opór", "Moc"]),
  new pytanie("Jakie zabezpieczenie chroni instalację przed przeciążeniem?", ["Bezpiecznik nadprądowy", "Wyłącznik różnicowoprądowy", "Woltomierz", "Transformator"]),
  new pytanie("Jaki materiał najczęściej stosuje się do produkcji przewodów elektrycznych?", ["Miedź", "Aluminium", "Żelazo", "Cynk"]),
  new pytanie("Jaka jest jednostka napięcia elektrycznego?", ["Volt", "Amper", "Ohm", "Wat"]),
  new pytanie("Co robi transformator?", ["Zmienia poziom napięcia", "Mierzy natężenie", "Chroni przed porażeniem", "Wytwarza prąd"])
];

const rok2_automatyk = [
  new pytanie("Który z elementów układu zabezpiecza silnik przed przeciążeniem?", ["Przekaźnik termiczny", "Wyłącznik różnicowoprądowy", "Przekaźnik czasowy", "Stycznik"]),
  new pytanie("Do czego służy stycznik?", ["Do załączania i wyłączania obwodów", "Do pomiaru napięcia", "Do rozdziału faz", "Do uziemiania"]),
  new pytanie("Jaka funkcję pełni wyłącznik różnicowoprądowy?", ["Chroni przed porażeniem", "Mierzy opór", "Zwiększa napięcie", "Redukuje prąd"]),
  new pytanie("Co to jest prąd stały?", ["Prąd o niezmiennym kierunku przepływu", "Prąd o zmiennym kierunku", "Prąd przemienny", "Prąd harmoniczny"]),
  new pytanie("Jakie urządzenie służy do prostowania prądu przemiennego?", ["Prostownik", "Transformator", "Silnik", "Przekaźnik"]),
  new pytanie("Jakie napięcie międzyfazowe występuje w sieci trójfazowej?", ["400 V", "230 V", "110 V", "12 V"]),
  new pytanie("Co robi kondensator?", ["Magazynuje ładunek", "Zwiększa prąd", "Wytwarza napięcie", "Ogranicza napięcie"]),
  new pytanie("Jakie jest podstawowe źródło energii w elektrowni cieplnej?", ["Węgiel", "Woda", "Wiatr", "Słońce"]),
  new pytanie("Jaką funkcję pełni uzwojenie pierwotne w transformatorze?", ["Odbiera napięcie wejściowe", "Oddaje napięcie wyjściowe", "Obniża napięcie", "Łączy fazy"]),
  new pytanie("Co oznacza skrót AC?", ["Prąd przemienny", "Prąd stały", "Prąd warstwowy", "Prąd spadkowy"])
];

const rok3_automatyk = [
  new pytanie("Co to jest falownik?", ["Urządzenie zmieniające częstotliwość prądu", "Urządzenie zabezpieczające silnik", "Przełącznik faz", "Przekaźnik napięciowy"]),
  new pytanie("Jaki typ silnika stosowany jest najczęściej w przemyśle?", ["Silnik asynchroniczny", "Silnik szeregowy", "Silnik prądu stałego", "Silnik krokowy"]),
  new pytanie("Jakie napięcie zasila typowy silnik trójfazowy?", ["400 V", "230 V", "12 V", "110 V"]),
  new pytanie("Jakie parametry mierzy cęgi prądowe?", ["Prąd", "Napięcie", "Opór", "Częstotliwość"]),
  new pytanie("Jak oznacza się ochronę przeciwporażeniową?", ["PE", "N", "L", "PEN"]),
  new pytanie("Co to jest PLC?", ["Sterownik programowalny", "Kondensator", "Bezpiecznik", "Transformator"]),
  new pytanie("Do czego służy amperomierz?", ["Do pomiaru natężenia prądu", "Do pomiaru napięcia", "Do pomiaru oporu", "Do pomiaru częstotliwości"]),
  new pytanie("Co oznacza symbol L1, L2, L3?", ["Fazy w układzie trójfazowym", "Przewody ochronne", "Przewody neutralne", "Oznaczenie uziemienia"]),
  new pytanie("Co to jest zwarcie?", ["Połączenie o bardzo małym oporze", "Zbyt wysoka rezystancja", "Otwarty obwód", "Przeciążenie instalacji"]),
  new pytanie("Jaką funkcję ma wyłącznik silnikowy?", ["Chroni silnik przed przeciążeniem i zwarciem", "Mierzy obroty", "Włącza wentylację", "Reguluje napięcie"])
];

const rok4_automatyk = [
  new pytanie("Co to jest sieć TN-C?", ["Sieć z połączonym przewodem neutralnym i ochronnym", "Sieć bez przewodu ochronnego", "Sieć z oddzielonym przewodem PE", "Sieć jednofazowa"]),
  new pytanie("Jakie urządzenie służy do kompensacji mocy biernej?", ["Bateria kondensatorów", "Transformator", "Prostownik", "Silnik"]),
  new pytanie("Co to jest SCADA?", ["System nadzorujący pracę instalacji", "Typ zabezpieczenia", "Typ przewodu", "Element układu rozruchowego"]),
  new pytanie("Co oznacza IP w oznaczeniach urządzeń?", ["Stopień ochrony obudowy", "Moc znamionowa", "Napięcie", "Prąd rozruchowy"]),
  new pytanie("Jaki przepis określa zasady bezpiecznej pracy przy urządzeniach elektrycznych?", ["PPN-EN 50110", "KSH", "KPA", "ISO 9001"]),
  new pytanie("Co to jest harmonogram konserwacji?", ["Plan przeglądów urządzeń", "Lista narzędzi", "Cennik usług", "Katalog części"]),
  new pytanie("Jaką funkcję pełni uziemienie?", ["Odprowadza ładunki do ziemi", "Zwiększa napięcie", "Łączy fazy", "Przerywa obwód"]),
  new pytanie("Co oznacza oznaczenie CE na urządzeniu?", ["Zgodność z normami UE", "Producent z Chin", "Certyfikat gwarancji", "Oznaczenie napięcia"]),
  new pytanie("Jaki dokument należy sporządzić po wykonaniu instalacji?", ["Protokół pomiarów", "Rachunek", "Umowę serwisową", "Instrukcję obsługi"]),
  new pytanie("Jakie urządzenie zmienia energię elektryczną na mechaniczną?", ["Silnik", "Transformator", "Akumulator", "Przekaźnik"])
];

const rok5_automatyk = [
  new pytanie("Co to jest bilans mocy?", ["Zestawienie zużycia i produkcji energii", "Cennik usług", "Program konserwacji", "Plan instalacji"]),
  new pytanie("Co oznacza napięcie znamionowe urządzenia?", ["Napięcie, przy którym urządzenie pracuje prawidłowo", "Maksymalne napięcie wytrzymywane", "Minimalne napięcie rozruchowe", "Napięcie awaryjne"]),
  new pytanie("Co należy zrobić przed pracą przy urządzeniu pod napięciem?", ["Odłączyć zasilanie", "Sprawdzić cennik", "Włączyć silnik", "Zgasić światło"]),
  new pytanie("Jak oznacza się przekładnik prądowy?", ["np. 100/5 A", "230 V", "400 Hz", "0,75 kW"]),
  new pytanie("Co to jest analiza termowizyjna?", ["Badanie rozkładu temperatury", "Pomiary natężenia", "Sprawdzenie IP", "Pomiar długości przewodu"]),
  new pytanie("Jaką funkcję pełni rezystancja izolacji?", ["Zapobiega przepływowi prądu", "Zwiększa moc", "Wzmacnia napięcie", "Reguluje częstotliwość"]),
  new pytanie("Co oznacza schemat jednokreskowy?", ["Uproszczony rysunek instalacji", "Instrukcję obsługi", "Cennik materiałów", "Plan montażu"]),
  new pytanie("Co to jest moc czynna?", ["Moc przekształcana na pracę użyteczną", "Moc strat", "Moc bierna", "Moc chwilowa"]),
  new pytanie("Jakie narzędzie stosuje się do wykonywania otworów w puszkach?", ["Wykrojnik", "Wkrętak", "Przekładnik", "Miernik"]),
  new pytanie("Jakie działanie ma stycznik z podtrzymaniem?", ["Utrzymuje obwód zamknięty po załączeniu", "Odłącza zasilanie przy zwarciu", "Reguluje napięcie", "Włącza światło"])
];

const egzamin_automatyk = [
  new pytanie("Aby zapewnić stałą wartość ciśnienia doprowadzanego do układu pneumatycznego, należy zastosować zawór", ["redukcyjny", "bezpieczeństwa", "dławiący", "zwrotny"]),
  new pytanie("W regulatorze PID symbolem Kp oznacza się współczynnik", ["proporcjonalności", "zdwojenia", "propagacji", "wyprzedzenia"]),
  new pytanie("W układzie regulacji temperatury zastosowano czujnik Pt500. Jaką wartość rezystancji czujnika w temperaturze 0 °C pokaże omomierz?", ["500 Ω", "0 Ω", "100 Ω", "1 000 Ω"]),
  new pytanie("Która z wymienionych funkcji programowych sterownika PLC służy do realizacji działania odejmowania?", ["SUB", "DIV", "ADD", "MUL"]),
  new pytanie("Który przyrząd należy zastosować, aby zmierzyć z dokładnością 0,1 mm otwory o średnicy ϕ10 wykonane pod montaż czujników indukcyjnych?", ["Czujnik zegarowy", "Przymiar kreskowy", "Mikrometr zewnętrzny", "Suwmiarkę uniwersalną"]),
  new pytanie("Które elementy na schematach układów pneumatycznych są oznaczane literą V?", ["Zawory", "Silniki", "Pompy", "Siłowniki"]),
  new pytanie("Aby dokręcić nakrętkę z określonym momentem obrotowym, należy zastosować klucz", ["dynamometryczny", "udarowy", "przegubowy", "grzechotkowy"]),
  new pytanie("W celu wykonania połączenia między zasilaczem a sterownikiem punktów oznaczonych jako PE należy zastosować przewód, którego izolacja ma kolor", ["żółto-zielony", "czerwony", "niebieski", "niebiesko-zielony"]),
  new pytanie("W sterowniku PLC wejścia cyfrowe oznaczane są symbolem literowym", ["I", "Q", "AI", "AQ"]),
  new pytanie("Do pomiaru wilgotności powietrza stosuje się", ["higrometr", "barometr", "manometr", "termo", "termometr"]),
  new pytanie("Czujnik indukcyjny służy do detekcji elementów", ["metalowych", "drewnianych", "szklanych", "plastikowych"]),
  new pytanie("W przekaźniku elektromagnetycznym symbolami A1 i A2 oznaczone są zaciski", ["cewki przekaźnika", "układów ochronnych", "styków rozwiernych", "styków zwiernych"]),
  new pytanie("Do trasowania na płaszczyźnie stosuje się", ["rysik", "wałeczki pomiarowe", "pryzmę", "średnicówkę mikrometryczną"]),
  new pytanie("W dokumentacji powykonawczej nie jest wymagane umieszczać", ["faktur lub innych dowodów zakupu z cenami", "warunków gwarancji", "protokołów pomiarowych", "certyfikatów użytych materiałów"]),
  new pytanie("Przed podłączeniem układu pneumatycznego do układu zasilającego ustawia się odpowiednią wartość ciśnienia. Do odczytu nastawianej wartości trzeba użyć", ["manometru", "pirometru", "rotametru", "termometru"]),
  new pytanie("Który przyrząd pomiarowy należy zastosować do pomiaru amplitudy, częstotliwości i kształtu sygnałów w montowanych urządzeniach automatyki przemysłowej?", ["Oscyloskop", "Multimetr", "Częstościomierz", "Mostek RLC"]),
  new pytanie("Aby zapewnić właściwy moment siły przy dokręcaniu nakrętek mocujących urządzenie do podłoża, należy zastosować klucz", ["dynamometryczny", "hakowy", "oczkowy", "imbusowy"]),
  new pytanie("Do wykrycia nieciągłości okablowania w komunikacyjnej sieci przemysłowej stosuje się", ["tester przewodów", "miernik parametrów instalacji", "wykrywacz przewodów", "kamerę termowizyjną"]),
  new pytanie("Wzrost wartości częstotliwości wyjściowej przemiennika częstotliwości zasilającego silnik indukcyjny prądu przemiennego powoduje", ["wzrost prędkości obrotowej wału silnika", "spadek rezystancji uzwojeń silnika", "spadek prędkości obrotowej wału silnika", "wzrost rezystancji uzwojeń silnika"]),
  new pytanie("Określ, który blok funkcjonalny musi być użyty w programie sterującym urządzeniem służącym do pakowania określonej liczby zabawek do kartonu.", ["Licznik jednokierunkowy", "Multiplekser analogowy", "Regulator PID", "Timer TON"]),
  new pytanie("Według której zasady należy w układzie sterowania zaprojektować działanie umożliwiające wyłączenie zautomatyzowanego systemu sterowanego przez sterownik PLC?", ["Zasady przerwy roboczej - podanie stanu 0 na wejście sterownika", "Zasady blokady sygnałów wyjściowych", "Zasady blokady programowej sygnałów wejściowych", "Zasady prądu roboczego - podanie stanu 1 na wejście sterownika"]),
  new pytanie("W regulatorze PID symbolem TI oznacza się czas", ["wyprzedzenia", "zdwojenia", "propagacji", "opóźnienia"]),
  new pytanie("Do pomiaru temperatury w systemie automatyki użyto elementów oznaczonych jako Pt100 z przetwornikami pomiarowymi posiadającymi sygnał wyjściowy 4÷20 mA. Oznacza to, że w urządzeniu pomiarowym zastosowano czujniki", ["rezystancyjne metalowe", "rezystancyjne półprzewodnikowe", "termoelektryczne", "bimetalowe"]),
  new pytanie("Do pomiaru ciśnienia cieczy w układach hydraulicznych stosuje się", ["manometry", "areometry", "higrometry", "barometry"]),
  new pytanie("Który przetwornik pomiarowy umożliwia bezdotykowy pomiar temperatury?", ["Pirometryczny", "Rezystancyjny", "Termoelektryczny", "Rozszerzalnościowy"]),
  new pytanie("Które ze stwierdzeń dotyczących prowadzenia przewodów sygnałowych w układach sterowania napędami nie jest poprawne?", ["Przewody sygnałowe należy prowadzić w korytach lub rurach z PVC w celu poprawy skuteczności ekranowania", "Końcówki nieużywanych żył przewodów sygnałowych w szafie należy połączyć ze sobą i uziemić", "Przewody sygnałowe należy prowadzić w odległości minimum 20 cm od przewodów zasilających", "Wszystkie krzyżowania przewodów sygnałowych z innymi rodzajami przewodów należy wykonać pod kątem prostym"]),
  new pytanie("Do wykrycia nieciągłości okablowania w komunikacyjnej sieci przemysłowej stosowany jest", ["tester przewodów", "miernik parametrów instalacji", "wykrywacz przewodów", "kamera termowizyjna"]),
  new pytanie("W dokumentacji powykonawczej nie należy umieszczać", ["certyfikatów użytych materiałów", "warunków gwarancji", "dowodów zakupu z cenami", "protokołów pomiarowych"]),
  new pytanie("Do pomiaru wartości podciśnienia w zautomatyzowanej instalacji pneumatycznej, w której stosowane są eżektory wraz z przyssawkami, należy zastosować", ["wakuometr", "manometr", "manometr różnicowy", "barometr"]),
  new pytanie("Przy doborze przewodów w instalacji elektrycznej nie uwzględnia się", ["parametrów ekonomicznych", "obciążalności prądowej", "skuteczności ochrony przeciwporażeniowej", "dopuszczalnego spadku napięcia"]),
  new pytanie("Określ, który blok funkcyjny musi być użyty w programie sterującym urządzeniem służącym do pakowania określonej liczby zabawek do kartonu.", ["Licznik dwukierunkowy", "Timer TON", "Multiplekser analogowy", "Regulator PID"]),
  new pytanie("Którego z wymienionych przyrządów pomiarowych należy użyć w celu oceny jakości istniejących połączeń elektrycznych w układzie automatyki?", ["omomierza", "watomierza", "woltomierza", "megaomomierza"])
];

//pytania z robotyków

const rok1_robotyk = [
  new pytanie("Który z poniższych przewodów jest najczęściej stosowany w instalacjach domowych?", ["YDY", "YAKY", "LgY", "OMY"]),
  new pytanie("Jakie napięcie znamionowe ma przewód YDY 3x1,5?", ["450/750 V", "300/500 V", "600/1000 V", "250/400 V"]),
  new pytanie("Który z poniższych elementów służy do ochrony przed porażeniem prądem elektrycznym?", ["Wyłącznik różnicowoprądowy", "Wyłącznik nadprądowy", "Przekaźnik czasowy", "Stycznik"]),
  new pytanie("Jakie jest oznaczenie przewodu ochronnego w instalacji elektrycznej?", ["PE", "N", "L", "PEN"]),
  new pytanie("Który z poniższych materiałów jest najlepszym przewodnikiem elektryczności?", ["Miedź", "Aluminium", "Żelazo", "Stal"]),
  new pytanie("Jakie jest podstawowe prawo opisujące zależność między napięciem, prądem i oporem?", ["Prawo Ohma", "Prawo Kirchhoffa", "Prawo Coulomba", "Prawo Faradaya"]),
  new pytanie("Który z poniższych elementów służy do zabezpieczenia obwodu przed przeciążeniem?", ["Bezpiecznik topikowy", "Przekaźnik", "Transformator", "Dioda"]),
  new pytanie("Jakie jest standardowe napięcie w gniazdku elektrycznym w Polsce?", ["230 V", "110 V", "400 V", "12 V"]),
  new pytanie("Który z poniższych przyrządów służy do pomiaru napięcia?", ["Woltomierz", "Amperomierz", "Omomierz", "Watomierz"]),
  new pytanie("Jakie jest oznaczenie przewodu neutralnego w instalacji elektrycznej?", ["N", "L", "PE", "PEN"])
];

const rok2_robotyk = [
  new pytanie("Który z poniższych przewodów jest stosowany w instalacjach oświetleniowych?", ["YDY 3x1,5", "YDY 3x2,5", "YKY 3x4", "OMY 2x0,75"]),
  new pytanie("Jakie jest minimalne przekroje przewodów dla obwodów gniazd wtyczkowych?", ["2,5 mm²", "1,5 mm²", "4 mm²", "6 mm²"]),
  new pytanie("Który z poniższych elementów służy do łączenia przewodów w puszce instalacyjnej?", ["Złączka instalacyjna", "Przekaźnik", "Stycznik", "Transformator"]),
  new pytanie("Jakie jest oznaczenie przewodu fazowego w instalacji elektrycznej?", ["L", "N", "PE", "PEN"]),
  new pytanie("Który z poniższych przyrządów służy do pomiaru natężenia prądu?", ["Amperomierz", "Woltomierz", "Omomierz", "Watomierz"]),
  new pytanie("Jakie jest standardowe napięcie międzyfazowe w sieci trójfazowej w Polsce?", ["400 V", "230 V", "110 V", "12 V"]),
  new pytanie("Który z poniższych elementów służy do ochrony obwodu przed zwarciem?", ["Wyłącznik nadprądowy", "Przekaźnik czasowy", "Stycznik", "Transformator"]),
  new pytanie("Jakie jest oznaczenie przewodu ochronno-neutralnego w instalacji elektrycznej?", ["PEN", "PE", "N", "L"]),
  new pytanie("Który z poniższych przyrządów służy do pomiaru oporu elektrycznego?", ["Omomierz", "Woltomierz", "Amperomierz", "Watomierz"]),
  new pytanie("Jakie jest oznaczenie przewodu ochronnego w instalacji elektrycznej?", ["PE", "N", "L", "PEN"])
];

const rok3_robotyk = [
  new pytanie("Który z poniższych elementów służy do rozruchu silnika trójfazowego?", ["Stycznik", "Przekaźnik", "Transformator", "Dioda"]),
  new pytanie("Jakie jest oznaczenie uzwojenia głównego w silniku jednofazowym?", ["U1-U2", "Z1-Z2", "W1-W2", "V1-V2"]),
  new pytanie("Który z poniższych elementów służy do zabezpieczenia silnika przed przeciążeniem?", ["Przekaźnik termiczny", "Stycznik", "Transformator", "Dioda"]),
  new pytanie("Jakie napięcie zasila standardowy silnik trójfazowy w Polsce?", ["400 V", "230 V", "110 V", "500 V"]),
  new pytanie("Który z poniższych układów zabezpiecza maszynę przed pracą bez fazy?", ["Przekaźnik kontroli faz", "Przekaźnik czasowy", "Wyłącznik nadprądowy", "Dioda zabezpieczająca"]),
  new pytanie("Jakie oznaczenie mają styki pomocnicze normalnie otwarte?", ["NO", "NC", "PO", "PN"]),
  new pytanie("Który z elementów służy do zdalnego załączania silnika?", ["Przycisk zasilający + stycznik", "Woltomierz", "Bezpiecznik topikowy", "Transformator"]),
  new pytanie("Jaki układ stosuje się do rozruchu silnika metodą gwiazda-trójkąt?", ["Styczniki + przekaźnik czasowy", "Tylko stycznik", "Dwa wyłączniki nadprądowe", "Transformator zasilający"]),
  new pytanie("Jakie napięcie jest typowe dla sterowania w układzie automatyki przemysłowej?", ["24 V DC", "230 V AC", "400 V AC", "12 V AC"]),
  new pytanie("Która struktura programowa pozwala wykonać cykl działania w PLC?", ["Pętla cykliczna", "Funkcja matematyczna", "Program BIOS", "Komenda WHILE"])
];

const rok4_robotyk = [
  new pytanie("Który z poniższych języków jest stosowany do programowania PLC w standardzie IEC 61131-3?", ["LAD", "HTML", "BASIC", "CSS"]),
  new pytanie("Jakie oznaczenie ma wejście cyfrowe w sterowniku PLC?", ["I", "Q", "M", "T"]),
  new pytanie("Który z elementów służy do odczytu sygnału z czujnika indukcyjnego?", ["Wejście cyfrowe PLC", "Wyjście analogowe", "Przekaźnik czasowy", "Port szeregowy"]),
  new pytanie("Jaki typ sygnału generuje czujnik analogowy?", ["4-20 mA", "0/1", "12 V", "PWM"]),
  new pytanie("Do czego służy HMI w systemie automatyki?", ["Do wizualizacji i obsługi systemu", "Do zabezpieczania zasilania", "Do montażu przekaźników", "Do rozruchu silnika"]),
  new pytanie("Które z poniższych urządzeń najczęściej komunikuje się przez Modbus?", ["PLC", "Transformator", "Bezpiecznik", "Przycisk"]),
  new pytanie("Jakie oznaczenie ma wyjście cyfrowe w sterowniku PLC?", ["Q", "I", "A", "M"]),
  new pytanie("Jakie napięcie standardowo stosuje się dla wyjść cyfrowych PLC?", ["24 V DC", "230 V AC", "400 V AC", "12 V AC"]),
  new pytanie("Jaką funkcję pełni przekaźnik SSR?", ["Bezkontaktowe załączanie obwodów", "Przetwarzanie sygnału cyfrowego na analogowy", "Pomiar temperatury", "Zmiana częstotliwości napięcia"]),
  new pytanie("Jaka struktura programowa pozwala wykonać cykl działania w PLC?", ["Pętla cykliczna", "Funkcja matematyczna", "Program BIOS", "Komenda WHILE"])
];

const rok5_robotyk = [
  new pytanie("Który z poniższych przyrządów służy do pomiaru rezystancji izolacji?", ["Miernik rezystancji izolacji", "Amperomierz", "Watomierz", "Stycznik"]),
  new pytanie("Jakie jest wymagane minimalne napięcie testowe przy pomiarze izolacji 230 V?", ["500 V", "250 V", "1000 V", "150 V"]),
  new pytanie("Który z poniższych urządzeń pozwala na bezinwazyjny pomiar prądu?", ["Cęgi amperomierza", "Woltomierz", "Omomierz", "Multimetr analogowy"]),
  new pytanie("Który z parametrów sprawdza się podczas pomiaru impedancji pętli zwarcia?", ["Zs", "Rs", "Us", "Cs"]),
  new pytanie("Co należy sprawdzić przed dopuszczeniem maszyny do eksploatacji?", ["Stan techniczny i dokumentację", "Kolor obudowy", "Producenta silnika", "Typ przewodów"]),
  new pytanie("Który z niżej wymienionych pomiarów dotyczy skuteczności ochrony przeciwporażeniowej?", ["Pomiar impedancji pętli zwarcia", "Pomiar napięcia obwodu", "Pomiar pojemności", "Pomiar natężenia prądu"]),
  new pytanie("Który z elementów automatyki odpowiada za zbieranie danych z wielu czujników?", ["Sterownik PLC", "Przekaźnik", "Cewka stycznika", "Transformator"]),
  new pytanie("Jak często należy przeprowadzać przeglądy maszyn zgodnie z przepisami BHP?", ["Okresowo wg dokumentacji technicznej", "Raz na 10 lat", "Tylko po awarii", "Na żądanie klienta"]),
  new pytanie("Który z niżej wymienionych czynników może obniżyć jakość pomiaru?", ["Zakłócenia elektromagnetyczne", "Rodzaj przewodnika", "Napięcie nominalne", "Kolor przewodów"]),
  new pytanie("Które z poniższych urządzeń służy do sprawdzania ciągłości przewodów?", ["Miernik ciągłości obwodu", "Przekaźnik", "Cewka", "Transformator"])
];

const egzamin_robotyk = [
  new pytanie("Który z elementów odpowiada za poruszanie ramieniem robota?", ["Siłownik", "Przekaźnik", "Czujnik", "Zasilacz"]),
  new pytanie("Jaka jest funkcja sterownika PLC w układzie mechatronicznym?", ["Sterowanie procesem", "Zasilanie silników", "Montaż czujników", "Diagnostyka ręczna"]),
  new pytanie("Co oznacza skrót HMI w systemach mechatronicznych?", ["Interfejs człowiek-maszyna", "Główny moduł interfejsu", "Moduł hydrauliczny", "Interfejs mechaniczny"]),
  new pytanie("Który czujnik wykrywa obecność obiektu bez kontaktu fizycznego?", ["Czujnik indukcyjny", "Wyłącznik krańcowy", "Czujnik tensometryczny", "Przycisk"]),
  new pytanie("Które z wymienionych urządzeń służy do przekształcenia energii elektrycznej na ruch mechaniczny?", ["Silnik elektryczny", "PLC", "Przekaźnik", "Dioda"]),
  new pytanie("Która jednostka odpowiada za przetwarzanie sygnałów wejściowych w sterowniku PLC?", ["CPU", "RAM", "HMI", "EEPROM"]),
  new pytanie("Do czego służy enkoder w robocie?", ["Do pomiaru położenia lub obrotu", "Do zasilania silnika", "Do programowania PLC", "Do chłodzenia układu"]),
  new pytanie("Który komponent umożliwia ręczne sterowanie ruchem robota podczas testów?", ["Panel operatorski (teach pendant)", "Zasilacz impulsowy", "Przekaźnik czasowy", "Przetwornik"]),
  new pytanie("Który typ silnika jest najczęściej stosowany w robotach przemysłowych?", ["Silnik serwo", "Silnik krokowy", "Silnik prądu stałego", "Silnik jednofazowy"]),
  new pytanie("Do czego służy przekaźnik bezpieczeństwa?", ["Do monitorowania i wyłączania w sytuacjach awaryjnych", "Do wzmocnienia sygnału", "Do pomiaru temperatury", "Do komunikacji z HMI"]),
  new pytanie("Jakie napięcie jest typowe dla układów sterowania w automatyce?", ["24V DC", "230V AC", "400V AC", "12V AC"]),
  new pytanie("Który z poniższych elementów to urządzenie wykonawcze?", ["Siłownik pneumatyczny", "Czujnik zbliżeniowy", "Sterownik PLC", "Przełącznik"]),
  new pytanie("Który układ chroni urządzenie przed przeciążeniem prądowym?", ["Wyłącznik nadprądowy", "Transformator", "Dioda prostownicza", "Czujnik indukcyjny"]),
  new pytanie("Do czego służy schemat montażowy w robotyce?", ["Do przedstawienia fizycznego połączenia elementów", "Do projektowania layoutu hali", "Do programowania PLC", "Do diagnostyki sieci"]),
  new pytanie("Który komponent mechatroniczny wykrywa nacisk lub siłę?", ["Czujnik tensometryczny", "Czujnik indukcyjny", "Siłownik", "Falownik"]),
  new pytanie("Który przewód stosuje się do transmisji sygnałów cyfrowych?", ["Przewód ekranowany", "Przewód zasilający", "Przewód hydrauliczny", "Przewód pneumatyczny"]),
  new pytanie("Który układ napędowy umożliwia precyzyjne pozycjonowanie?", ["Napęd serwo", "Napęd łańcuchowy", "Napęd pneumatyczny", "Napęd pasowy"]),
  new pytanie("Jaka jednostka mierzy moment obrotowy?", ["Nm", "N", "W", "V"]),
  new pytanie("Który z podzespołów sterownika PLC zapisuje program użytkownika?", ["Pamięć EEPROM", "Pamięć RAM", "CPU", "HMI"]),
  new pytanie("Który z podzespołów umożliwia komunikację PLC z komputerem?", ["Port komunikacyjny", "Przekaźnik", "Diody", "Czujnik optyczny"]),
  new pytanie("Który materiał najczęściej wykorzystuje się do budowy ramion robotów?", ["Aluminium", "Stal węglowa", "Tworzywo sztuczne", "Miedź"]),
  new pytanie("Która jednostka PLC odpowiada za zasilanie?", ["Moduł zasilający", "Moduł wejść", "CPU", "Moduł przekaźnikowy"]),
  new pytanie("Który z języków programowania jest graficzny?", ["LAD (drabinkowy)", "STL", "SCL", "FBD"]),
  new pytanie("Jakie urządzenie jest stosowane do regulacji prędkości silników?", ["Falownik", "PLC", "Czujnik", "Przekaźnik"]),
  new pytanie("Która metoda łączenia przewodów jest półtrwała i możliwa do rozłączania?", ["Złącze śrubowe", "Lutowanie", "Zgrzewanie", "Spawanie"]),
  new pytanie("Jaki język programowania robotów jest oparty na instrukcjach tekstowych?", ["Kodu tekstowego (np. KRL, RAPID)", "LAD", "FBD", "GRAFCET"]),
  new pytanie("Jaka jest podstawowa funkcja czujników krańcowych w robocie?", ["Ograniczanie ruchu robota", "Chłodzenie silnika", "Ładowanie programu", "Monitorowanie sieci"]),
  new pytanie("Czym jest programowanie online robota?", ["Programowaniem bezpośrednio na robocie", "Tworzeniem kodu offline", "Kompilacją w komputerze", "Kalibracją siłowników"]),
  new pytanie("Który system współrzędnych wykorzystuje się przy programowaniu robota?", ["Kartezjański", "Biegunowy", "Sferyczny", "Przestrzenny"]),
  new pytanie("Jak nazywa się punkt bazowy przy programowaniu pozycji robota?", ["Punkt referencyjny", "Punkt roboczy", "Pozycja startowa", "Końcówka narzędzia"]),
  new pytanie("Jakie zabezpieczenie stosuje się w strefie pracy robota?", ["Kurtyna świetlna", "Wskaźnik LED", "Przełącznik", "Sygnalizator dźwiękowy"]),
  new pytanie("Który element robota wykonuje właściwą pracę np. chwytanie?", ["Efektor końcowy", "Przegub", "Siłownik", "Panel operatorski"]),
  new pytanie("Do czego służy teach pendant w robocie?", ["Do ręcznego nauczania pozycji", "Do chłodzenia silników", "Do zasilania układu", "Do konfiguracji falownika"]),
  new pytanie("Która oś robota pozwala na obrót wokół osi pionowej?", ["Oś 1", "Oś 4", "Oś 6", "Oś Z"]),
  new pytanie("Co oznacza tryb „Jog” w robocie przemysłowym?", ["Ręczne sterowanie osią", "Programowanie offline", "Diagnostyka układu", "Reset błędów"]),
  new pytanie("Który system operacyjny jest najczęściej używany w sterownikach PLC?", ["RTOS (Real-Time Operating System)", "Windows", "Linux", "Android"]),
  new pytanie("Jakie polecenie zatrzymuje program robota?", ["STOP", "RUN", "GOTO", "JUMP"]),
  new pytanie("Który z parametrów definiuje prędkość robota?", ["Velocity", "Acceleration", "Position", "Axis"]),
  new pytanie("Który komponent umożliwia chwytanie elementów przez robota?", ["Chwytak", "Przegub", "HMI", "Złącze"]),
  new pytanie("Która metoda programowania wykorzystuje graficzne symbole logiczne?", ["LAD", "STL", "STL", "AWL"]),
  new pytanie("Jakie urządzenie pozwala monitorować i modyfikować program PLC?", ["Komputer z oprogramowaniem inżynierskim", "Falownik", "Zasilacz", "Czujnik"]),
  new pytanie("Który protokół komunikacyjny jest powszechnie stosowany w automatyce?", ["PROFIBUS", "HTTP", "FTP", "USB"]),
  new pytanie("Jaką funkcję pełni watchdog w sterowniku?", ["Monitoruje poprawność działania", "Kontroluje temperaturę", "Resetuje system", "Obsługuje czujniki"]),
  new pytanie("Która jednostka odpowiada za precyzyjne sterowanie ruchem osi robota?", ["Serwonapęd", "Przekaźnik", "Diody", "Zasilacz"]),
  new pytanie("Jak nazywa się cykliczne działanie programu PLC?", ["Cykl programu", "Petla nieskończona", "Czas rzeczywisty", "Kompilacja"]),
  new pytanie("Która zmienna w programie PLC może zmieniać wartość?", ["Zmienna lokalna", "Stała", "Adres wejścia", "Nazwa bloku"]),
  new pytanie("Jak określa się zestaw instrukcji sterownika PLC?", ["Program", "Zasilanie", "Komunikacja", "Tryb pracy"]),
  new pytanie("Który komponent przechowuje dane po wyłączeniu zasilania?", ["EEPROM", "RAM", "CPU", "HMI"]),
  new pytanie("Co oznacza funkcja \"IF\" w programowaniu?", ["Warunek logiczny", "Przerwanie", "Początek programu", "Adres wejścia"]),
  new pytanie("Który element jest niezbędny do podłączenia robota do sieci przemysłowej?", ["Interfejs komunikacyjny", "Czujnik zbliżeniowy", "Przycisk bezpieczeństwa", "Moduł wejść"])
];

//pytania z elektroników

const rok1_elektronik = [
  new pytanie("Jakie napięcie wyjściowe ma stabilizator napięcia 7805?", ["5V", "9V", "12V", "15V"]),
  new pytanie("Który symbol graficzny przedstawia tyrystor?", ["Symbol A", "Symbol B", "Symbol C", "Symbol D"]),
  new pytanie("Co oznacza skrót 'LED'?", ["Light Emitting Diode", "Low Energy Device", "Linear Electric Device", "Light Energy Detector"]),
  new pytanie("Jaki jest podstawowy element układu logicznego?", ["Bramka logiczna", "Przekaźnik", "Transformator", "Kondensator"]),
  new pytanie("Który materiał jest najlepszym przewodnikiem elektryczności?", ["Srebro", "Miedź", "Aluminium", "Złoto"]),
  new pytanie("Jakie jest napięcie sieciowe w Polsce?", ["230V", "110V", "400V", "12V"]),
  new pytanie("Który przyrząd służy do pomiaru napięcia?", ["Woltomierz", "Amperomierz", "Omomierz", "Oscyloskop"]),
  new pytanie("Co oznacza skrót 'AC' w kontekście prądu?", ["Prąd przemienny", "Prąd stały", "Prąd zmienny", "Prąd jednofazowy"]),
  new pytanie("Który element magazynuje energię w polu elektrycznym?", ["Kondensator", "Cewka", "Rezystor", "Diody"]),
  new pytanie("Jakie jest oznaczenie jednostki oporu elektrycznego?", ["Ω", "V", "A", "W"])
];

const rok2_elektronik = [
  new pytanie("Który element służy do ograniczania prądu w obwodzie?", ["Rezystor", "Diody", "Transformator", "Przekaźnik"]),
  new pytanie("Co oznacza skrót 'DC' w kontekście prądu?", ["Prąd stały", "Prąd przemienny", "Prąd zmienny", "Prąd jednofazowy"]),
  new pytanie("Który przyrząd służy do pomiaru natężenia prądu?", ["Amperomierz", "Woltomierz", "Omomierz", "Oscyloskop"]),
  new pytanie("Który element magazynuje energię w polu magnetycznym?", ["Cewka", "Kondensator", "Rezystor", "Diody"]),
  new pytanie("Co oznacza skrót 'PCB'?", ["Płytka drukowana", "Przekaźnik", "Kondensator", "Bateria"]),
  new pytanie("Który element służy do prostowania prądu przemiennego?", ["Diody", "Rezystor", "Cewka", "Kondensator"]),
  new pytanie("Co oznacza skrót 'LCD'?", ["Wyświetlacz ciekłokrystaliczny", "Diody", "Kondensator", "Przekaźnik"]),
  new pytanie("Który element służy do przechowywania ładunku elektrycznego?", ["Kondensator", "Cewka", "Rezystor", "Diody"]),
  new pytanie("Co oznacza skrót 'CPU'?", ["Jednostka centralna", "Pamięć RAM", "Karta graficzna", "Dysk twardy"]),
  new pytanie("Który element służy do przełączania obwodów elektrycznych?", ["Przekaźnik", "Diody", "Kondensator", "Cewka"])
];

const rok3_elektronik = [
  new pytanie("Który element służy do filtrowania sygnałów?", ["Kondensator", "Rezystor", "Diody", "Przekaźnik"]),
  new pytanie("Co oznacza skrót 'USB'?", ["Uniwersalna magistrala szeregowa", "Przekaźnik", "Kondensator", "Diody"]),
  new pytanie("Który element służy do przechowywania danych?", ["Pamięć RAM", "Procesor", "Karta graficzna", "Zasilacz"]),
  new pytanie("Co oznacza skrót 'HDMI'?", ["Interfejs multimedialny wysokiej rozdzielczości", "Przekaźnik", "Kondensator", "Diody"]),
  new pytanie("Który element służy do zwiększania napięcia?", ["Transformator", "Rezystor", "Diody", "Przekaźnik"]),
  new pytanie("Co oznacza skrót 'Wi-Fi'?", ["Bezprzewodowa sieć lokalna", "Przekaźnik", "Kondensator", "Diody"]),
  new pytanie("Który element służy do zmiany napięcia przemiennego na stałe?", ["Prostownik", "Transformator", "Przekaźnik", "Diody"]),
  new pytanie("Co oznacza skrót 'LAN'?", ["Sieć lokalna", "Przekaźnik", "Kondensator", "Diody"]),
  new pytanie("Który element służy do ochrony obwodu przed przeciążeniem?", ["Bezpiecznik", "Rezystor", "Diody", "Przekaźnik"]),
  new pytanie("Co oznacza skrót 'GPS'?", ["Globalny system pozycjonowania", "Przekaźnik", "Kondensator", "Diody"])
];

const rok4_elektronik = [
  new pytanie("Który układ służy do zmiany napięcia stałego na przemienne?", ["Falownik", "Prostownik", "Stabilizator", "Transformator"]),
  new pytanie("Co oznacza skrót 'IoT'?", ["Internet rzeczy", "Sieć lokalna", "Zasilacz", "Programator"]),
  new pytanie("Który element steruje przepływem prądu w tranzystorze?", ["Bramka (Gate)", "Kolektor", "Emiter", "Baza"]),
  new pytanie("Jakie zjawisko jest podstawą działania transformatora?", ["Indukcja elektromagnetyczna", "Przewodnictwo", "Polaryzacja", "Rezystancja"]),
  new pytanie("Co oznacza skrót 'EEPROM'?", ["Pamięć nieulotna programowalna elektrycznie", "Procesor", "Port szeregowy", "Kondensator"]),
  new pytanie("Który element odpowiada za przetwarzanie sygnału analogowego na cyfrowy?", ["Przetwornik ADC", "Diody", "Rezystor", "Przekaźnik"]),
  new pytanie("Jaki sygnał generuje enkoder inkrementalny?", ["Impulsy kwadraturowe", "Napięcie stałe", "Sygnał PWM", "Sygnał sinusoidalny"]),
  new pytanie("Co oznacza skrót 'PWM'?", ["Modulacja szerokości impulsu", "Prąd zmienny", "Filtrowanie sygnału", "Transformacja napięcia"]),
  new pytanie("Który element jest najczęściej używany w zasilaczach impulsowych?", ["Tranzystor MOSFET", "Rezystor", "Kondensator", "Dioda Zenera"]),
  new pytanie("Co oznacza skrót 'FTP' w sieciach komputerowych?", ["Protokół przesyłania plików", "Zasilacz awaryjny", "Transmisja danych", "Modem"])
];

const rok5_elektronik = [
  new pytanie("Który protokół komunikacyjny stosowany jest w automatyce przemysłowej?", ["Modbus", "HDMI", "USB", "HTTP"]),
  new pytanie("Co oznacza skrót 'PLC'?", ["Programowalny sterownik logiczny", "Pamięć RAM", "Przekaźnik", "Silnik krokowy"]),
  new pytanie("Jaką funkcję pełni stycznik?", ["Załączanie/wyłączanie obwodu", "Pomiar napięcia", "Przesył danych", "Magazynowanie energii"]),
  new pytanie("Co to jest HMI?", ["Interfejs człowiek-maszyna", "Interfejs graficzny", "Zasilacz", "Transformator"]),
  new pytanie("Co oznacza skrót 'CAN' w automatyce?", ["Magistrala komunikacyjna", "Cewka", "Kondensator", "Pamięć"]),
  new pytanie("Który czujnik służy do wykrywania obecności metalowych obiektów?", ["Indukcyjny", "Optyczny", "Ultradźwiękowy", "Poziomu"]),
  new pytanie("Co oznacza skrót 'SCADA'?", ["System nadzoru i akwizycji danych", "Program sterujący", "Układ logiczny", "Transformator"]),
  new pytanie("Który silnik wymaga sterowania krokowego?", ["Silnik krokowy", "Silnik AC", "Silnik DC", "Silnik synchroniczny"]),
  new pytanie("Co oznacza skrót 'RS-485'?", ["Magistrala komunikacyjna", "Typ czujnika", "Pamięć EEPROM", "Protokół internetowy"]),
  new pytanie("Co mierzy enkoder absolutny?", ["Dokładne położenie kątowe", "Prędkość", "Napięcie", "Obciążenie"])
];

const egzamin_elektronik = [
  new pytanie("Który z elementów ma charakterystykę nieliniową?", ["Dioda", "Cewka", "Rezystor", "Kondensator"]),
  new pytanie("Które z urządzeń służy do pomiaru napięcia?", ["Woltomierz", "Amperomierz", "Omomierz", "Watomierz"]),
  new pytanie("Jaki jest kierunek przepływu prądu w diodzie przewodzącej?", ["Od anody do katody", "Od katody do anody", "W obu kierunkach", "Nie przewodzi prądu"]),
  new pytanie("Co oznacza skrót PCB?", ["Printed Circuit Board", "Primary Circuit Board", "Passive Current Bridge", "Power Control Block"]),
  new pytanie("Jaka jest jednostka indukcyjności?", ["Henry", "Farad", "Om", "Wat"]),
  new pytanie("Który tranzystor ma trzy złącza p-n?", ["Bipolarny", "Unipolarny", "MOSFET", "Triak"]),
  new pytanie("Jaki symbol graficzny ma dioda Zenera?", ["Strzałka z załamanym ogonem", "Strzałka z prostą kreską", "Prostokąt z plusem", "Strzałka z kółkiem"]),
  new pytanie("Który z układów jest przykładem przetwornicy DC-DC?", ["Układ buck", "Mostek Graetza", "Transformator", "Rezystor"]),
  new pytanie("Co służy do przechowywania ładunku elektrycznego?", ["Kondensator", "Cewka", "Dioda", "Tranzystor"]),
  new pytanie("Jakie napięcie ma typowa bateria 9V?", ["9 V", "1.5 V", "3 V", "6 V"]),
  new pytanie("Jak działa wzmacniacz operacyjny w konfiguracji odwracającej?", ["Odwraca sygnał i go wzmacnia", "Zwiększa napięcie bez zmiany fazy", "Zmniejsza napięcie", "Tylko tłumi sygnał"]),
  new pytanie("Jakie oznaczenie ma ziemia w układzie elektrycznym?", ["⏚", "~", "+", "∞"]),
  new pytanie("Jaka jest funkcja mostka Graetza?", ["Prostuje napięcie zmienne", "Zwiększa napięcie", "Obniża napięcie", "Filtruje napięcie"]),
  new pytanie("Który układ logiczny realizuje funkcję 'lub'?", ["OR", "AND", "NAND", "NOR"]),
  new pytanie("Jaki typ sygnału przenosi informację w układach cyfrowych?", ["Impulsy prostokątne", "Napięcie zmienne", "Napięcie stałe", "Prąd przemienny"]),
  new pytanie("Co robi kondensator w filtrze zasilania?", ["Wygładza napięcie", "Zwiększa napięcie", "Obniża prąd", "Przetwarza sygnał cyfrowy"]),
  new pytanie("Który z tych elementów nie jest półprzewodnikiem?", ["Rezystor", "Tranzystor", "Dioda", "Fotodioda"]),
  new pytanie("Jaką funkcję pełni transformator?", ["Zmienia napięcie przemienne", "Zmienia prąd na napięcie", "Przechowuje ładunek", "Zmienia napięcie stałe"]),
  new pytanie("Co oznacza skrót TTL?", ["Transistor-Transistor Logic", "Time-To-Live", "Two-Terminal Load", "Transformer Type Load"]),
  new pytanie("Który z elementów pozwala na sterowanie dużym prądem przy małym sygnale sterującym?", ["Tranzystor", "Dioda", "Kondensator", "Rezystor"]),
  new pytanie("Jakie napięcie skuteczne ma sieć energetyczna w Polsce?", ["230 V", "110 V", "400 V", "12 V"]),
  new pytanie("Co to jest histereza w układzie magnetycznym?", ["Opóźnienie zmiany strumienia magnetycznego", "Strata mocy", "Opór przepływu prądu", "Pojemność własna"]),
  new pytanie("Co oznacza oznaczenie 1N4007?", ["Dioda prostownicza", "Tranzystor", "Cewka", "Kondensator"]),
  new pytanie("Jak działa tyrystor?", ["Przewodzi po zadziałaniu impulsu bramkowego", "Przewodzi w obu kierunkach", "Przewodzi zawsze", "Przerywa obwód"]),
  new pytanie("Jakiego typu czujnik reaguje na pole magnetyczne?", ["Hallotron", "Termistor", "Fotorezystor", "Piezoelement"]),
  new pytanie("W jakiej jednostce mierzy się rezystancję?", ["Om", "Volt", "Amper", "Henry"]),
  new pytanie("Co to jest układ różnicowy?", ["Wzmacniacz operacyjny z dwoma wejściami", "Wzmacniacz odwracający", "Wzmacniacz mocy", "Przekaźnik czasowy"]),
  new pytanie("Jaką funkcję pełni stabilizator napięcia?", ["Utrzymuje stałe napięcie", "Zwiększa napięcie", "Obniża napięcie", "Tłumi szumy"]),
  new pytanie("Jakie napięcie wyjściowe daje stabilizator 7805?", ["5 V", "12 V", "3.3 V", "9 V"]),
  new pytanie("Co robi oscyloskop?", ["Pokazuje przebieg napięcia", "Mierzy temperaturę", "Liczy impulsy", "Ładuje kondensatory"]),
  new pytanie("Który materiał jest półprzewodnikiem?", ["Krzem", "Miedź", "Aluminium", "Żelazo"]),
  new pytanie("Jakie złącze jest typowe dla RS-232?", ["DB9", "HDMI", "USB", "RJ45"]),
  new pytanie("Co oznacza pojęcie 'dławik'?", ["Cewka przeciwzakłóceniowa", "Przewód uziemiający", "Filtr napięcia", "Kondensator"]),
  new pytanie("Co powoduje przepływ prądu przez kondensator?", ["Prąd przemienny", "Prąd stały", "Tylko napięcie", "Nie ma przepływu"]),
  new pytanie("Jakie złącze stosowane jest w sieciach LAN?", ["RJ45", "USB", "BNC", "D-SUB"]),
  new pytanie("Co oznacza skrót PWM?", ["Pulse Width Modulation", "Power With Management", "Passive Wave Method", "Permanent Wave Memory"]),
  new pytanie("Jaką rolę pełni przekaźnik?", ["Izoluje i steruje obwodami", "Przetwarza sygnał cyfrowy", "Przechowuje ładunek", "Stabilizuje napięcie"]),
  new pytanie("Jakie urządzenie służy do lutowania SMD?", ["Stacja hot-air", "Transformator", "Multimetr", "Wkrętarka"]),
  new pytanie("Co oznacza skrót ESD?", ["Electrostatic Discharge", "Energy Static Dissipation", "Electronic Signal Detection", "Energy Source Device"]),
  new pytanie("Co mierzy LCR meter?", ["Indukcyjność, pojemność, rezystancję", "Tylko pojemność", "Tylko napięcie", "Temperatura"]),
  new pytanie("Jakie zjawisko wykorzystuje transformator?", ["Indukcja elektromagnetyczna", "Pojemność własna", "Spadek napięcia", "Opór czynny"]),
  new pytanie("Co oznacza klasa izolacji IP67?", ["Pyłoszczelność i odporność na zanurzenie", "Tylko pyłoszczelność", "Odporność na ogień", "Odporność na napięcie"]),
  new pytanie("Co to jest impedancja?", ["Złożony opór w układzie prądu przemiennego", "Pojemność w układzie", "Oporność dla prądu stałego", "Spadek napięcia"]),
  new pytanie("Do czego służy dioda LED?", ["Do emitowania światła", "Do prostowania napięcia", "Do filtrowania napięcia", "Do wzmocnienia sygnału"]),
  new pytanie("Jak działa triak?", ["Przewodzi w obu kierunkach po zadziałaniu", "Przewodzi tylko w jednym kierunku", "Nie przewodzi w ogóle", "Tylko steruje napięciem"]),
  new pytanie("Co to jest reaktancja?", ["Oporność bierna", "Oporność czynna", "Napięcie zmienne", "Prąd stały"]),
  new pytanie("Który element ma właściwości nieliniowe?", ["Tranzystor", "Cewka", "Rezystor", "Przełącznik"]),
  new pytanie("Jaką funkcję ma zasilacz impulsowy?", ["Przekształca napięcie z wysoką sprawnością", "Przekazuje napięcie sieciowe", "Filtruje napięcie", "Przekształca prąd na dźwięk"]),
  new pytanie("Co oznacza skrót MOSFET?", ["Metal Oxide Semiconductor Field Effect Transistor", "Multi-Output Sensing Field Effect Transistor", "Magnetic Output Stabilizing FET", "Main Output Signal FET"]),
  new pytanie("Jakie napięcie podaje się na bramkę tranzystora N-MOS, aby go włączyć?", ["Dodatnie", "Ujemne", "Zero", "Zmiennoprądowe"])
];

//pytania z fotografa

const rok1_fotograf = [
  new pytanie("Jaką funkcję pełni mikser audio?", ["Łączy i reguluje sygnały dźwiękowe", "Wyświetla obraz", "Służy do obróbki wideo", "Generuje światło"]),
  new pytanie("Co to jest kabel XLR?", ["Kabel mikrofonowy z blokadą", "Kabel do sieci LAN", "Kabel wideo HDMI", "Przewód zasilający"]),
  new pytanie("Do czego służy statyw mikrofonowy?", ["Do stabilnego ustawienia mikrofonu", "Do podłączenia kamery", "Do przesyłania sygnału", "Do ochrony przed wiatrem"]),
  new pytanie("Co to jest decybel (dB)?", ["Jednostka poziomu dźwięku", "Jednostka czasu", "Rodzaj mikrofonu", "Element obudowy"]),
  new pytanie("Jak działa mikrofon dynamiczny?", ["Przekształca fale akustyczne na sygnał elektryczny przez cewkę", "Potrzebuje zasilania phantom", "Działa tylko z przedwzmacniaczem", "Jest używany wyłącznie w studiach"]),
  new pytanie("Co oznacza skrót AV?", ["Audio i wideo", "Akumulator wzmocniony", "Automatyczne włączenie", "Adapter wideo"]),
  new pytanie("Który z poniższych urządzeń odtwarza dźwięk?", ["Głośnik", "Mikrofon", "Mieszacz", "Kamera"]),
  new pytanie("Co to jest jack 3.5 mm?", ["Popularne złącze słuchawkowe", "Złącze zasilania", "Przewód HDMI", "Kabel koncentryczny"]),
  new pytanie("Jaki element zabezpiecza mikrofon przed wiatrem?", ["Gąbka lub osłona przeciwwiatrowa", "Kabel", "Wzmacniacz", "Przycisk mute"]),
  new pytanie("Do czego służy karta dźwiękowa?", ["Do przetwarzania sygnału audio w komputerze", "Do zapisu obrazu", "Do sterowania światłem", "Do transmisji internetowej"])
];

const rok2_fotograf = [
  new pytanie("Co to jest konsoleta dźwiękowa?", ["Urządzenie do miksowania sygnałów audio", "Kamera z mikrofonem", "Monitor odsłuchowy", "Statyw do światła"]),
  new pytanie("Co oznacza 'phantom power'?", ["Zasilanie mikrofonów po kablu XLR", "Zasilanie rejestratora", "Energia z akumulatora", "Zasilanie z USB"]),
  new pytanie("Jakie złącze często stosuje się w kamerach wideo?", ["HDMI", "USB", "VGA", "RJ-45"]),
  new pytanie("Co to jest DI-box?", ["Urządzenie dopasowujące sygnał instrumentalny do wejścia mikrofonowego", "Przejściówka wideo", "Adapter do gniazdka", "Rejestrator"]),
  new pytanie("Co to jest patchbay?", ["Panel do łączenia sygnałów audio", "Mieszacz wideo", "Mikrofon z funkcją Bluetooth", "Kamera z wbudowanym rejestratorem"]),
  new pytanie("Jakim kolorem oznacza się kabel sygnału audio lewego kanału?", ["Białym", "Czerwonym", "Niebieskim", "Zielonym"]),
  new pytanie("Co to jest SPL?", ["Poziom ciśnienia akustycznego", "Złącze sygnałowe", "Typ głośnika", "Format zapisu"]),
  new pytanie("Które z urządzeń konwertuje sygnał analogowy na cyfrowy?", ["Interfejs audio", "Głośnik", "Wzmacniacz", "Kondensator"]),
  new pytanie("Co oznacza impedancja w kontekście audio?", ["Opór elektryczny w obwodzie sygnału dźwiękowego", "Poziom głośności", "Jakość dźwięku", "Ilość kanałów"]),
  new pytanie("Co to jest bufor odsłuchowy?", ["Opóźnienie zapobiegające zacinaniu się dźwięku", "Miejsce nagrywania", "Rejestrator zapasowy", "Tryb stereo"])
];

const rok3_fotograf = [
  new pytanie("Co oznacza skrót DAW?", ["Digital Audio Workstation", "Dynamic Audio Wave", "Device for Audio Writing", "Direct Auto Workflow"]),
  new pytanie("Co to jest limiter?", ["Urządzenie ograniczające szczytowe wartości sygnału", "Przedwzmacniacz", "Mikrofon z regulacją czułości", "Przełącznik głośności"]),
  new pytanie("Co oznacza sampling rate 44,1 kHz?", ["44100 próbek dźwięku na sekundę", "Maksymalna głośność dźwięku", "Głębokość bitowa", "Długość pliku audio"]),
  new pytanie("Do czego służy equalizer?", ["Do korekcji częstotliwości dźwięku", "Do zwiększania głośności", "Do dodawania pogłosu", "Do miksowania wideo"]),
  new pytanie("Co to jest reverb?", ["Efekt pogłosu", "Efekt opóźnienia", "Tłumik sygnału", "Rodzaj mikrofonu"]),
  new pytanie("Jakie jest typowe pasmo słyszalności człowieka?", ["20 Hz – 20 kHz", "50 Hz – 10 kHz", "100 Hz – 15 kHz", "10 Hz – 30 kHz"]),
  new pytanie("Jakie oprogramowanie służy do produkcji dźwięku?", ["Ableton Live", "Photoshop", "AutoCAD", "Premiere Pro"]),
  new pytanie("Co to jest szum własny mikrofonu?", ["Sygnał generowany przez urządzenie bez źródła dźwięku", "Dźwięk otoczenia", "Głośność mowy", "Dźwięk tła z nagrania"]),
  new pytanie("Co robi kompresor dźwięku?", ["Wyrównuje dynamikę sygnału", "Zwiększa ton wysokich częstotliwości", "Wyłącza mikrofon", "Usuwa szumy"]),
  new pytanie("Jak działa mikrofon pojemnościowy?", ["Przekształca fale akustyczne za pomocą kondensatora", "Za pomocą cewki", "Na zasadzie nacisku", "Mechanicznie"])
];

const rok4_fotograf = [
  new pytanie("Co to jest masterowanie?", ["Ostatni etap obróbki audio przed publikacją", "Nagrywanie instrumentów", "Tworzenie sesji", "Ustawianie mikrofonów"]),
  new pytanie("Co oznacza dBFS?", ["Poziom odniesienia sygnału cyfrowego", "Głośność rzeczywista", "Format audio", "Częstotliwość próbki"]),
  new pytanie("Co to jest fade in?", ["Powolne zwiększanie głośności", "Natychmiastowe wyciszenie", "Usunięcie szumu", "Kompresja pliku"]),
  new pytanie("Co oznacza bouncing ścieżek?", ["Eksport miksu do jednego pliku", "Usuwanie pogłosu", "Zmiana nazwy ścieżek", "Dodanie nowego kanału"]),
  new pytanie("Jakie pasmo dotyczy wokalu męskiego?", ["80 Hz – 300 Hz", "20 Hz – 80 Hz", "500 Hz – 1 kHz", "1 kHz – 5 kHz"]),
  new pytanie("Co to jest automatyka w DAW?", ["Zmiana parametrów ścieżki w czasie", "Włączenie metronomu", "Tworzenie nowego projektu", "Konwersja formatu"]),
  new pytanie("Co to jest plik WAV?", ["Format nieskompresowany audio", "Składnik miksu", "Format MIDI", "Rodzaj interfejsu"]),
  new pytanie("Co oznacza MIDI?", ["Musical Instrument Digital Interface", "Multitrack Interconnected Device Input", "Micro Dynamic Inverter", "Monitor In Digital Input"]),
  new pytanie("Co to jest ducking?", ["Tłumienie jednego sygnału, gdy pojawia się drugi", "Przesuwanie panoramy", "Podbijanie wysokich tonów", "Włączanie metronomu"]),
  new pytanie("Co to jest flanger?", ["Efekt modulacyjny z przesunięciem fazy", "Kompresor", "Zestaw mikrofonów", "Złącze wideo"])
];

const rok5_fotograf = [
  new pytanie("Co to jest stagebox?", ["Multicore z wejściami/wyjściami audio na scenie", "Oświetlenie sceniczne", "Obudowa wzmacniacza", "Mikrofon do perkusji"]),
  new pytanie("Jak działa system in-ear monitoring?", ["Umożliwia odsłuch sceniczny przez słuchawki", "Wzmacnia mikrofony", "Nagrywa dźwięk stereo", "Steruje światłem"]),
  new pytanie("Co to jest rider techniczny?", ["Dokument opisujący wymagania techniczne wykonawcy", "Lista utworów", "Zestaw kabli", "Plan marketingowy"]),
  new pytanie("Co to jest latency?", ["Opóźnienie sygnału", "Głośność mikrofonu", "Częstotliwość próbki", "Rodzaj kabla"]),
  new pytanie("Co oznacza gain staging?", ["Ustawianie poziomów sygnału na różnych etapach", "Rozmieszczanie mikrofonów", "Wybór instrumentów", "Zmiana formatu"]),
  new pytanie("Co to jest multitrack recording?", ["Nagrywanie wielu ścieżek jednocześnie", "Tworzenie efektów", "Kopiowanie dźwięku", "Odtwarzanie stereo"]),
  new pytanie("Jaką rolę pełni realizator dźwięku na koncercie?", ["Odpowiada za jakość dźwięku na żywo", "Ustawia światła", "Obsługuje kamerę", "Pisze scenariusz"]),
  new pytanie("Co to jest soundcheck?", ["Próba dźwięku przed wydarzeniem", "Naprawa kabla", "Odsłuch miksu", "Montaż oświetlenia"]),
  new pytanie("Jakie złącze często stosuje się do transmisji cyfrowej audio?", ["AES/EBU", "RCA", "VGA", "HDMI"]),
  new pytanie("Jakie jest zadanie monitora scenicznego?", ["Umożliwia muzykom słyszenie siebie", "Wzmacnia bas", "Steruje kamerą", "Przechowuje dane"])
];

const egzamin_fotograf = [
  new pytanie("Który parametr aparatu fotograficznego odpowiada za ilość światła wpadającego do obiektywu?", ["Przysłona", "Czas naświetlania", "ISO", "Balans bieli"]),
  new pytanie("Jak nazywa się jednostka czułości matrycy na światło?", ["ISO", "DPI", "FPS", "RAW"]),
  new pytanie("Która ogniskowa najlepiej nadaje się do fotografii portretowej?", ["85 mm", "35 mm", "18 mm", "200 mm"]),
  new pytanie("Jakie wartości przysłony oznaczają duże otwarcie i małą głębię ostrości?", ["f/1.8, f/2.8", "f/8, f/11", "f/16, f/22", "f/32, f/45"]),
  new pytanie("Który format plików zapewnia największą ilość informacji o zdjęciu?", ["RAW", "JPEG", "PNG", "GIF"]),
  new pytanie("Która wartość ISO zwiększa ryzyko wystąpienia szumu na zdjęciu?", ["3200", "800", "200", "100"]),
  new pytanie("Jak nazywa się efekt, w którym światło przechodzące przez obiektyw załamuje się, tworząc kolorowe obwódki?", ["Aberracja chromatyczna", "Głębia ostrości", "Winietowanie", "Flara"]),
  new pytanie("Jak nazywa się technika łączenia kilku zdjęć w jedno o większym zakresie tonalnym?", ["HDR", "Panorama", "RAW processing", "Ziarno filmowe"]),
  new pytanie("Co oznacza skrót 'DPI' w kontekście drukowania zdjęć?", ["Dots Per Inch", "Digital Photo Index", "Dynamic Photo Integration", "Depth Pixel Image"]),
  new pytanie("Która zasada kompozycji polega na podziale kadru na 9 równych części?", ["Reguła trójpodziału", "Złoty podział", "Perspektywa powietrzna", "Kompozycja diagonalna"]),
  new pytanie("Który program służy do profesjonalnej edycji zdjęć?", ["Photoshop", "Excel", "AutoCAD", "Word"]),
  new pytanie("Który format pliku obsługuje przezroczystość?", ["PNG", "JPEG", "BMP", "GIF"]),
  new pytanie("Jak nazywa się proces usuwania niechcianych elementów na zdjęciu?", ["Retusz", "Kadrowanie", "Ekspozycja", "Balans bieli"]),
  new pytanie("Co oznacza skrót 'FPS' w kontekście nagrywania wideo?", ["Frames Per Second", "Film Processing System", "File Positioning Scale", "Focus Pixel Sensor"]),
  new pytanie("Który kodek jest powszechnie używany do kompresji wideo?", ["H.264", "MP3", "WAV", "PDF"]),
  new pytanie("Który format wideo oferuje najlepszą jakość przy niskiej kompresji?", ["RAW", "MOV", "MP4", "AVI"]),
  new pytanie("Który tryb kolorów jest używany w druku?", ["CMYK", "RGB", "HSV", "LAB"]),
  new pytanie("Które narzędzie w Photoshopie służy do usuwania niechcianych elementów?", ["Stempel", "Lasso", "Gradient", "Krzywe"]),
  new pytanie("Który format audio zapewnia bezstratną jakość dźwięku?", ["WAV", "MP3", "OGG", "AAC"]),
  new pytanie("Jaki format wideo jest najczęściej używany na YouTube?", ["MP4", "MOV", "AVI", "MKV"]),
  new pytanie("Jak nazywa się zjawisko, w którym światło padające pod kątem na powierzchnię szkła ulega rozszczepieniu?", ["Refrakcja", "Dyfrakcja", "Interferencja", "Polaryzacja"]),
  new pytanie("Który z poniższych formatów plików jest najlepszy do publikacji zdjęć w Internecie ze względu na dobrą kompresję i jakość?", ["JPEG", "PNG", "TIFF", "BMP"]),
  new pytanie("Która technika fotograficzna polega na robieniu wielu zdjęć w krótkich odstępach czasu i ich późniejszym łączeniu w animację?", ["Timelapse", "HDR", "Panorama", "RAW processing"]),
  new pytanie("Który filtr fotograficzny pozwala redukować refleksy świetlne na powierzchniach szklanych i wodnych?", ["Polaryzacyjny", "UV", "Szary", "Dyfuzyjny"]),
  new pytanie("Które z wymienionych urządzeń NIE jest używane w fotografii studyjnej?", ["Router", "Lampa błyskowa", "Blenda", "Statyw"]),
  new pytanie("Jaka funkcja w aparacie służy do automatycznego ustawiania ostrości?", ["AF", "ISO", "RAW", "WB"]),
  new pytanie("Jaką głębię bitową ma standardowy obraz JPEG?", ["24 bity", "8 bitów", "16 bitów", "32 bity"]),
  new pytanie("Co oznacza termin 'bokeh' w fotografii?", ["Rozmycie tła", "Ostrość na pierwszym planie", "Przejście tonalne", "Nadmierna ekspozycja"]),
  new pytanie("Które narzędzie w Photoshopie służy do usuwania efektu czerwonych oczu?", ["Narzędzie Redukcja efektu czerwonych oczu", "Stempel", "Pędzel", "Gumka"]),
  new pytanie("Która wartość przysłony (f) oznacza najbardziej zamkniętą przysłonę?", ["f/22", "f/1.8", "f/4", "f/8"]),
  new pytanie("Który rodzaj obiektywu najlepiej sprawdzi się w fotografii krajobrazowej?", ["Szerokokątny", "Teleobiektyw", "Makro", "Rybie oko"]),
  new pytanie("Co to jest histogram w fotografii cyfrowej?", ["Graficzna reprezentacja tonalna obrazu", "Wskaźnik poziomu ISO", "Narzedzie do wyostrzania zdjęć", "Tryb zapisu obrazu"]),
  new pytanie("Który element aparatu fotograficznego steruje czasem otwarcia migawki?", ["Migawka", "Przysłona", "Matryca", "Obiektyw"]),
  new pytanie("Który format plików wideo jest uznawany za najbardziej kompatybilny z urządzeniami mobilnymi?", ["MP4", "MKV", "MOV", "AVI"]),
  new pytanie("Który rodzaj światła jest uważany za najlepszy do fotografii portretowej?", ["Światło miękkie", "Światło boczne", "Światło tylne", "Światło punktowe"]),
  new pytanie("Jaki jest standardowy rozmiar zdjęcia w druku w formacie A4?", ["210 × 297 mm", "1920 × 1080 px", "1280 × 720 px", "300 × 400 mm"]),
  new pytanie("Co oznacza termin 'white balance' w aparatach cyfrowych?", ["Regulacja temperatury barwowej", "Ustawienie kontrastu", "Automatyczna ekspozycja", "Redukcja szumów"]),
  new pytanie("Co oznacza skrót 'RAW' w fotografii cyfrowej?", ["Nieskompresowany format obrazu", "Rapid Auto White", "Record All Width", "Redukcja artefaktów wideo"]),
  new pytanie("Który format plików graficznych obsługuje warstwy?", ["PSD", "JPEG", "PNG", "BMP"]),
  new pytanie("Jakie kolory są używane w standardowym modelu barw RGB?", ["Czerwony, zielony, niebieski", "Czerwony, żółty, niebieski", "Cyjan, magenta, żółty", "Czarny, biały, szary"])
];

//pytania z teleinformatyka

const rok1_teleinformatyk = [
  new pytanie("Co oznacza skrót LAN?", ["Local Area Network", "Large Access Network", "Low Application Node", "Link Adapter Network"]),
  new pytanie("Który z portów służy do podłączenia kabla sieciowego?", ["RJ-45", "VGA", "HDMI", "USB"]),
  new pytanie("Jak nazywa się urządzenie dzielące sygnał internetowy na kilka komputerów?", ["Router", "Modem", "Switch", "Repeater"]),
  new pytanie("Który system operacyjny jest typu open-source?", ["Linux", "Windows", "macOS", "DOS"]),
  new pytanie("Co oznacza skrót IP?", ["Internet Protocol", "Internal Path", "Internet Port", "Interconnected Points"]),
  new pytanie("Jak nazywa się proces instalowania systemu operacyjnego?", ["Instalacja", "Formatowanie", "Reset", "Synchronizacja"]),
  new pytanie("Co oznacza skrót DNS?", ["Domain Name System", "Data Network Service", "Digital Name Server", "Direct Node Setup"]),
  new pytanie("Co oznacza skrót BIOS?", ["Basic Input Output System", "Binary Integrated Operating System", "Basic Internal Operating Software", "Boot Integrated Output Service"]),
  new pytanie("Jaka karta umożliwia połączenie komputera z siecią?", ["Karta sieciowa", "Karta graficzna", "Karta dźwiękowa", "Karta rozszerzeń"]),
  new pytanie("Co to jest ping w sieci komputerowej?", ["Narzędzie do sprawdzania dostępności hosta", "Program do drukowania", "Komenda do wyświetlania katalogów", "Protokół szyfrowania danych"]),
];

const rok2_teleinformatyk = [
  new pytanie("Który z adresów IP jest adresem prywatnym?", ["192.168.0.1", "8.8.8.8", "172.217.0.46", "1.1.1.1"]),
  new pytanie("Co oznacza skrót DHCP?", ["Dynamic Host Configuration Protocol", "Data Hosting Control Panel", "Digital Hardware Control Program", "Direct Host Connection Protocol"]),
  new pytanie("Jak sprawdzić konfigurację IP w systemie Windows?", ["ipconfig", "netdir", "ping", "tracert"]),
  new pytanie("Jakie urządzenie łączy różne sieci i kieruje ruchem?", ["Router", "Switch", "Access Point", "Modem"]),
  new pytanie("Co robi protokół TCP?", ["Zapewnia połączenie i kontrolę transmisji", "Kompresuje dane", "Ochronia przed wirusami", "Szyfruje pakiety"]),
  new pytanie("Co to jest maska podsieci 255.255.255.0?", ["Maska klasy C", "Maska klasy A", "Maska klasy B", "Brak maski"]),
  new pytanie("Jakim poleceniem w Linuksie sprawdzisz trasę pakietu?", ["traceroute", "ping", "ifconfig", "netstat"]),
  new pytanie("Jaki protokół używany jest do przesyłania plików?", ["FTP", "HTTP", "DNS", "SMTP"]),
  new pytanie("Co oznacza NAT?", ["Translacja adresów sieciowych", "Nowy adres terminala", "Sieć adresowana logicznie", "Połączenie lokalne"]),
  new pytanie("Jakie rozszerzenie ma plik wsadowy w Windows?", ["bat", "exe", "sys", "dll"]),
];

const rok3_teleinformatyk = [
  new pytanie("Jakie uprawnienia ma konto 'root' w Linuxie?", ["Administratora", "Użytkownika gościa", "Ograniczone", "Tylko do odczytu"]),
  new pytanie("Jakie narzędzie służy do zarządzania usługami w Windows?", ["services.msc", "tasklist", "cmd.exe", "gpedit.msc"]),
  new pytanie("Jak w Linuksie nadać uprawnienia pliku?", ["chmod", "edit", "setperm", "modperm"]),
  new pytanie("Co to jest Active Directory?", ["Usługa katalogowa Windows Server", "Firewall systemowy", "Baza danych użytkowników Linux", "System plików"]),
  new pytanie("Który protokół szyfruje transmisję WWW?", ["HTTPS", "HTTP", "FTP", "Telnet"]),
  new pytanie("Co oznacza RAID 1?", ["Odbicie lustrzane danych", "Podział danych na paski", "Łączenie wielu dysków w jeden", "Backup sieciowy"]),
  new pytanie("Co robi komenda 'netstat'?", ["Pokazuje aktywne połączenia sieciowe", "Restartuje kartę sieciową", "Tworzy nową trasę sieciową", "Konfiguruje IP"]),
  new pytanie("Jak zabezpieczyć komputer przed wirusami?", ["Zainstalować antywirusa", "Usunąć pliki TEMP", "Zwiększyć RAM", "Zainstalować drukarkę"]),
  new pytanie("Czym jest domena w sieci?", ["Zbiór komputerów pod wspólnym zarządzaniem", "Typ dysku twardego", "Nazwa użytkownika", "Firewall sieciowy"]),
  new pytanie("Co to jest logowanie zdalne?", ["Dostęp do systemu przez sieć", "Instalacja systemu z pendrive", "Formatowanie dysku", "Test sieci LAN"]),
];

const rok4_teleinformatyk = [
  new pytanie("Co oznacza skrót WAN?", ["Wide Area Network", "Web Access Network", "Wireless Address Node", "Wide Application Notation"]),
  new pytanie("Co to jest adresacja statyczna?", ["Ręczne przypisanie adresu IP", "Dynamiczne IP przez DHCP", "Adres tymczasowy", "Adres NAT"]),
  new pytanie("Jakie urządzenie działa w trzeciej warstwie modelu OSI?", ["Router", "Switch", "Repeater", "Modem"]),
  new pytanie("Co oznacza termin TTL w pakiecie IP?", ["Czas życia pakietu", "Typ transmisji", "Adres źródłowy", "Rozmiar pakietu"]),
  new pytanie("Który protokół odpowiada za automatyczne przypisywanie IP?", ["DHCP", "DNS", "FTP", "SNMP"]),
  new pytanie("Co oznacza komenda 'tracert' w Windows?", ["Śledzi trasę pakietu", "Restartuje kartę sieciową", "Wyłącza serwer DHCP", "Mierzy prędkość Internetu"]),
  new pytanie("Jakie urządzenie łączy różne sieci lokalne w WAN?", ["Router", "Switch", "Access Point", "HUB"]),
  new pytanie("Jakie medium transmisyjne zapewnia największy zasięg?", ["Światłowód", "Skrętka", "Wi-Fi", "Ethernet"]),
  new pytanie("Co oznacza skrót VPN?", ["Virtual Private Network", "Visual Port Node", "Virtual Public Net", "Verified Path Network"]),
  new pytanie("Jakiego protokołu używają strony WWW?", ["HTTP", "FTP", "SSH", "SMB"]),
];

const rok5_teleinformatyk = [
  new pytanie("Który protokół routingu dynamicznego jest wewnętrzny?", ["OSPF", "BGP", "RIP", "EIGRP"]),
  new pytanie("Jakie zabezpieczenie pozwala na tworzenie tunelu między sieciami?", ["VPN", "Firewall", "NAT", "DHCP"]),
  new pytanie("Jak działa NAT?", ["Tłumaczy prywatne adresy IP na publiczne", "Tworzy podsieci", "Monitoruje pasmo", "Blokuje porty"]),
  new pytanie("Co oznacza skrót ACL w sieci?", ["Access Control List", "Automatic Client Locator", "Advanced Configuration Layer", "Access Client Link"]),
  new pytanie("Które z poniższych narzędzi służy do monitorowania sieci?", ["Wireshark", "GIMP", "Visual Studio", "Notepad++"]),
  new pytanie("Co oznacza termin 'routing'?", ["Przesyłanie pakietów między sieciami", "Tworzenie kopii zapasowych", "Instalacja systemu", "Ładowanie stron WWW"]),
  new pytanie("Co to jest VLAN?", ["Wirtualna sieć lokalna", "Rodzaj routera", "Kabel sieciowy", "Typ tunelu VPN"]),
  new pytanie("Jak nazywa się atak przechwytujący dane w sieci?", ["Man in the Middle", "Ping Flood", "DHCP Snooping", "MAC Filtering"]),
  new pytanie("Co oznacza szyfrowanie WPA2?", ["Zabezpieczenie sieci Wi-Fi", "Format pliku", "Typ zasilania", "Adres fizyczny"]),
  new pytanie("Jaki jest główny cel stosowania firewalli?", ["Ochrona sieci przed nieautoryzowanym dostępem", "Udostępnianie plików", "Tworzenie podsieci", "Konfiguracja DHCP"]),
];

const egzamin_teleinformatyk = [
  new pytanie("Co to jest adres IP?", ["Adres identyfikujący urządzenie w sieci", "Adres serwera DNS", "Adres urządzenia w sieci LAN", "Adres fizyczny urządzenia"]),
  new pytanie("Co oznacza protokół TCP/IP?", ["Zestaw protokołów używanych w sieci komputerowej", "Protokół do szyfrowania danych", "Protokół transmisji plików", "Protokół zarządzania siecią"]),
  new pytanie("Co to jest VPN?", ["Virtual Private Network", "Virtual Public Network", "Virtual Personal Network", "Virtual Protected Network"]),
  new pytanie("Co to jest sieć LAN?", ["Sieć lokalna", "Sieć globalna", "Sieć szerokopasmowa", "Sieć telefoniczna"]),
  new pytanie("Co to jest NAT?", ["Network Address Translation", "Network Access Translation", "Network Address Test", "Network Activation Tool"]),
  new pytanie("Co to jest adres MAC?", ["Adres identyfikujący urządzenie w sieci", "Adres komputera w sieci IP", "Adres przypisany do serwera DNS", "Adres fizyczny routera"]),
  new pytanie("Co oznacza skrót DNS?", ["Domain Name System", "Data Network System", "Direct Network Service", "Dynamic Network System"]),
  new pytanie("Co to jest switch?", ["Urządzenie do zarządzania ruchem w sieci", "Urządzenie do przesyłania danych w sieci", "Serwer służący do zarządzania urządzeniami", "Typ urządzenia do monitorowania połączeń"]),
  new pytanie("Co to jest protokół HTTP?", ["Protokół transferu hipertekstu", "Protokół szyfrowania danych", "Protokół służący do przesyłania plików", "Protokół diagnostyczny w sieci"]),
  new pytanie("Co to jest router?", ["Urządzenie do zarządzania ruchem w sieci", "Urządzenie do łączenia różnych sieci", "Urządzenie do przesyłania danych", "Typ urządzenia w sieci lokalnej"]),
  new pytanie("Co oznacza skrót HTTP?", ["HyperText Transfer Protocol", "Hyper Transfer Protocol", "Hyper Transmission Protocol", "Home Transfer Protocol"]),
  new pytanie("Co to jest DMZ w sieci komputerowej?", ["Strefa zdemilitaryzowana, oddzielająca sieć wewnętrzną od zewnętrznej", "Dynamiczna sieć zarządzania", "Sieć do szyfrowania danych", "Sieć przeznaczona tylko do testów"]),
  new pytanie("Co to jest firewall?", ["Zapora sieciowa blokująca nieautoryzowany dostęp", "Program do analizy ruchu w sieci", "Urządzenie wykorzystywane do szyfrowania danych", "Serwer przechowujący dane"]),
  new pytanie("Co to jest DHCP?", ["Protokół przydzielający dynamicznie adresy IP w sieci", "Protokół szyfrowania danych", "Protokół wykorzystywany do przesyłania plików", "Protokół służący do przydzielania nazw domenowych"]),
  new pytanie("Co to jest adres IPv4?", ["Adres w postaci 32-bitowej, składający się z czterech liczb oddzielonych kropkami", "Adres w postaci 128-bitowej", "Adres wykorzystywany tylko w sieciach lokalnych", "Adres przypisany do urządzenia w technologii Wi-Fi"]),
  new pytanie("Co to jest modem?", ["Urządzenie do łączenia komputera z internetem przez linię telefoniczną", "Modem służący do połączeń satelitarnych", "Urządzenie do połączenia komputerów w sieci LAN", "Urządzenie do przesyłania danych między serwerami"]),
  new pytanie("Co to jest protokół FTP?", ["Protokół służący do przesyłania plików w sieci", "Protokół wykorzystywany do synchronizacji zegarów", "Protokół wykorzystywany do zabezpieczania połączeń", "Protokół służący do konfiguracji sieci"]),
  new pytanie("Co to jest Wi-Fi?", ["Technologia bezprzewodowej komunikacji w sieci lokalnej", "Technologia przesyłania danych przez światłowody", "Protokół do zarządzania siecią komputerową", "Typ połączenia kablowego w sieci"]),
  new pytanie("Co to jest DNS?", ["Usługa tłumaczenia nazw domenowych na adresy IP", "Protokół służący do przesyłania danych", "System zarządzania ruchem w sieci", "Typ adresowania w sieci komputerowej"]),
  new pytanie("Co to jest SSL?", ["Protokół zabezpieczający połączenia internetowe", "Protokół synchronizacji zegarów", "Protokół do przesyłania plików", "Protokół diagnostyczny w sieci"]),
  new pytanie("Co to jest protokół ARP?", ["Protokół przekształcający adres IP na adres MAC", "Protokół służący do szyfrowania danych", "Protokół służący do zarządzania ruchem w sieci", "Protokół do przesyłania plików"]),
  new pytanie("Co to jest VPN?", ["Virtual Private Network", "Virtual Public Network", "Virtual Personal Network", "Virtual Protected Network"]),
  new pytanie("Co to jest modem DSL?", ["Urządzenie umożliwiające dostęp do internetu za pomocą łącza telefonicznego", "Modem służący do połączeń satelitarnych", "Urządzenie do transmisji danych w sieci Wi-Fi", "Urządzenie wykorzystywane do transmisji danych w technologii światłowodowej"]),
  new pytanie("Co to jest QoS?", ["Quality of Service", "Query of Services", "Quality over Security", "Quick Online Services"]),
  new pytanie("Co oznacza termin 'latency' w sieci komputerowej?", ["Czas opóźnienia między wysłaniem a odebraniem danych", "Zmienność prędkości transmisji danych", "Czas trwania połączenia z serwerem", "Maksymalna prędkość przesyłania danych"]),
  new pytanie("Co to jest load balancing?", ["Rozdzielanie obciążenia między kilka serwerów", "Zabezpieczanie sieci przed atakami", "Metoda zabezpieczania danych w sieci", "Optymalizacja prędkości przesyłania danych"]),
  new pytanie("Co oznacza skrót SLA?", ["Service Level Agreement", "Service Layer Architecture", "Secure Login Access", "Service Link Agreement"]),
  new pytanie("Co to jest 'packet switching'?", ["Sposób dzielenia danych na mniejsze pakiety w celu ich przesyłania", "Proces przesyłania dużych plików w sieci", "Metoda optymalizacji transmisji danych", "Proces szyfrowania danych"]),
  new pytanie("Co to jest WLAN?", ["Sieć bezprzewodowa", "Sieć szerokopasmowa", "Sieć o dużej przepustowości", "Sieć komputerowa oparta na światłowodach"]),
  new pytanie("Co to jest MTU?", ["Maksymalny rozmiar pakietu danych, który może zostać przesłany w sieci", "Maksymalna prędkość transmisji w sieci", "Minimalny czas opóźnienia w sieci", "Maksymalna liczba urządzeń w sieci"]),
  new pytanie("Co oznacza termin 'bandwidth'?", ["Przepustowość łącza internetowego", "Zakłócenia w sygnale sieciowym", "Maksymalna liczba użytkowników w sieci", "Szybkość łącza internetowego"]),
  new pytanie("Co to jest IDS?", ["System wykrywania intruzów", "System monitorowania jakości połączenia", "System zapobiegania atakom", "System do optymalizacji transmisji danych"]),
  new pytanie("Co to jest IPS?", ["System zapobiegania intruzjom", "System wykrywania ataków", "System optymalizacji sieci", "System szyfrowania danych"]),
  new pytanie("Co to jest WEP?", ["Protokół zabezpieczeń w sieciach bezprzewodowych", "Protokół szyfrowania danych w sieciach przewodowych", "Protokół zabezpieczeń w połączeniach VPN", "Protokół do ochrony danych w chmurze"]),
  new pytanie("Co to jest WPA?", ["Protokół zabezpieczeń w sieciach Wi-Fi", "Protokół do zarządzania połączeniami w sieci", "Protokół ochrony danych w internecie", "Protokół szyfrowania plików"]),
  new pytanie("Co to jest VLAN?", ["Sieć wirtualna w obrębie jednej fizycznej sieci", "Sieć rozległa", "Typ połączenia w sieci szerokopasmowej", "Rodzaj sieci LAN"]),
  new pytanie("Co to jest proxy?", ["Serwer pośredniczący w połączeniu z internetem", "Serwer DNS", "Serwer zabezpieczający połączenia internetowe", "Urządzenie do szyfrowania danych"]),
  new pytanie("Co to jest SNMP?", ["Protokół do zarządzania urządzeniami sieciowymi", "Protokół szyfrowania danych", "Protokół do przesyłania plików", "Protokół do diagnostyki sieci"]),
  new pytanie("Co to jest DMZ?", ["Strefa zdemilitaryzowana w sieci", "Typ protokołu do monitorowania sieci", "Typ routera", "Zabezpieczenie w sieci komputerowej"]),
  new pytanie("Co to jest BGP?", ["Protokół trasowania w internecie", "Protokół wykorzystywany do transferu plików", "Protokół szyfrowania danych", "Protokół wykorzystywany w sieciach LAN"]),
  new pytanie("Co to jest PoE?", ["Zasilanie urządzeń przez kabel sieciowy", "Szybka transmisja danych przez Ethernet", "Zabezpieczenie sieci przed atakami", "Optymalizacja połączenia w sieci"]),
  new pytanie("Co to jest SIP?", ["Protokół do przesyłania głosu i multimediów w internecie", "Protokół do konfiguracji routerów", "Protokół do przesyłania plików", "Protokół szyfrowania danych"]),
  new pytanie("Co to jest NTP?", ["Protokół synchronizacji czasu w sieci", "Protokół zabezpieczający połączenia internetowe", "Protokół do zarządzania połączeniami", "Protokół do przesyłania danych"]),
  new pytanie("Co to jest IPsec?", ["Protokół zapewniający bezpieczeństwo w sieci IP", "Protokół szyfrowania w sieci Wi-Fi", "Protokół do przesyłania plików", "Protokół diagnostyczny"]),
  new pytanie("Co to jest Z-Wave?", ["Standard komunikacji bezprzewodowej", "Protokół szyfrowania danych", "Protokół do transmisji plików", "System monitorowania połączeń"]),
  new pytanie("Co to jest NFC?", ["Technologia bezprzewodowej komunikacji na krótkie odległości", "Protokół bezpiecznego przesyłania danych", "Standard w technologii Wi-Fi", "Protokół szyfrowania w sieciach LTE"]),
  new pytanie("Co to jest IoT?", ["Internet rzeczy", "Internet of Things", "Technologia mobilna", "System zabezpieczeń sieciowych"]),
  new pytanie("Co to jest ZTNA?", ["Zero Trust Network Access", "Zabezpieczony dostęp do sieci", "Zarządzanie połączeniami w sieci", "Bezpieczna transmisja plików"]),
  new pytanie("Co to jest DMVPN?", ["Dynamiczne wirtualne sieci prywatne", "Dynamika przesyłania danych w sieci", "Zabezpieczenie połączeń internetowych", "Typ protokołu VPN"]),
  new pytanie("Co to jest LAN?", ["Sieć lokalna", "Sieć rozległa", "Sieć szerokopasmowa", "Sieć komputerowa"]),
  new pytanie("Co to jest WAN?", ["Sieć rozległa", "Sieć lokalna", "Zabezpieczenie połączeń internetowych", "Typ routera"]),
  new pytanie("Co to jest STP?", ["Protokół zapobiegający zapętleniom w sieci", "Protokół szyfrowania danych", "Protokół przesyłania plików", "Protokół konfiguracji routerów"]),
  new pytanie("Co to jest TCP?", ["Protokół kontroli transmisji", "Protokół do szyfrowania danych", "Protokół przydzielania adresów IP", "Protokół do przesyłania plików"]),
  new pytanie("Co to jest UDP?", ["Protokół bezpołączeniowy", "Protokół do transmisji danych", "Protokół wykorzystywany w VPN", "Protokół do zarządzania urządzeniami"]),
  new pytanie("Co to jest IP?", ["Internet Protocol", "Internet Path", "Internet Protocol Service", "Intelligent Path"]),
  new pytanie("Co to jest TLS?", ["Protokół zabezpieczający połączenia internetowe", "Protokół do synchronizacji czasu", "Protokół do przesyłania plików", "Protokół diagnostyczny"]),
  new pytanie("Co to jest SSH?", ["Protokół bezpiecznej komunikacji w sieci", "Protokół do zarządzania siecią", "Protokół do przesyłania plików", "Protokół wykorzystywany w VPN"]),
  new pytanie("Co to jest IPv6?", ["Adres w postaci 128-bitowej", "Adres wykorzystywany w technologii Wi-Fi", "Adres IP w sieci LAN", "Adres przypisany do routera"]),
  new pytanie("Co to jest SYN?", ["Typ pakietu w protokole TCP", "Typ błędu w sieci", "Typ połączenia w VPN", "Typ pakietu w protokole UDP"]),
  new pytanie("Co to jest P2P?", ["Peer-to-Peer", "Protokół do transmisji danych", "Sieć o wysokiej przepustowości", "System zabezpieczania danych"]),
  new pytanie("Co to jest AP?", ["Access Point", "Access Protocol", "Active Protection", "Auto Packet"]),
  new pytanie("Co to jest RADIUS?", ["Protokół uwierzytelniania w sieci", "Protokół szyfrowania danych", "Protokół do przesyłania plików", "Protokół diagnostyczny"]),
  new pytanie("Co to jest IDS?", ["System wykrywania intruzów", "System monitorowania jakości połączeń", "System zapobiegania atakom", "System do optymalizacji transmisji danych"]),
];