# Media Block Player
Projekt TIS 2018/2019 Media Block Player


## Online knižnica k aplikácii Media Block Player

https://kempelen.dai.fmph.uniba.sk/lb/MBPLibrary/
po registrácii je možné priávať a mazať svoje materiály


## Aplikácia Media Block Player

https://kempelen.dai.fmph.uniba.sk/lb/


## Práca s aplikáciou

### Vytvorenie/Editácia synchronizačného súboru
V hlavnom menu aplikácie je tlačítko "CREATE/EDIT SYNC FILE". Po stlačení tlačidla sa aplikácia presmeruje na obrazovku Choose files for creating SyncFile. Tu treba nahrať audio súbor, súbor s prepísanou audio nahrávkou a synchronizačný súbor. V prípade, že synchronizačný súbor nebude vybraný, vytvorí sa nový. Textový súbor musí byť rozdelený znakom "|" na bloky. K takto definovaným blokom sa bude priraďovať daná čast z audia. Po vybraní súborov sa aplikácia automaticky presmeruje na stránku Edit block time-marks, kde sa dajú blokom nastavovať časové stopy. Aplikácia umožňuje editovať text jednotlivých blokoch, prípadne ich rozdeľovať alebo spájať na stránke Edit, Split or Merge block, na ktorú ho aplikácia presmeruje po kliknutí na button Edit block. Ak chcete zmeny, ktoré ste vykonali uložiť, môžete tak spraviť po kliknutí na tlačidlo Save&Exit. Vtedy sa aplikácia presmeruje na stránku Save SyncFile, ScriptFile, kde zadáte názvy súborov, ktoré chcete uložiť, pričom sa stiahnu len tie, v ktorých nastala zmena. Na každej z týchto obrazoviek je help tlačidlo, ktorým si viete zobraziť vysvetľujúcu pomôcku k danej obrazovke.

Choose files for creating SyncFile

Tu treba nahrať audio súbor, súbor s prepísanou audio nahrávkou a synchronizačný súbor. V prípade, že synchronizačný súbor nebude vybraný, vytvorí sa nový.

Edit block time-marks

Na tejto obrazovke sa dajú blokom nastavovať časové značky.

Ovládanie

- play/pause  - spúšta a pozastavuje audio
- backward  - posúva audio do zadu o zadaný počet sekúnd
- forward  - posúva audio do predu o zadaný počet sekúnd
- replay - prehrá aktuálne vytváraný blok
- accept - nastaví časovú značku bloku
- skip interval  - označí aktuálny blok za blok ktorý treba preskočiť, teda sa táto časť audia odignoruje
- remove skip interval  - ak je aktuálny blok skipped odstráni ho
- next block  -  presunie sa na editovanie ďalšieho bloku
- previous block  -  presunie sa na editovanie predchádzajúceho bloku
- help - zobrazí help obrazovku
- edit block - presmeruje aplikáciu do editovacieho okna pre vybraný blok

Edit, Split or Merge block

Na tejto obrazovke sa dá konkrétnemu bloku meniť text, zlučovať ho s nasledujúcim blokom ale rozdeliť aktuálne vybraný blok na dva nové bloky, pridaním znaku "|" do textu.

Ovládanie

- merge with the next block - aktuálny blok zúči s nasledujúcim do jedného nového bloku
- apply edited changes to the script - uloží zmeny a presmeruje aplikáciu späť na stránku Edit block time-marks
- cancel - neuloží zmeny a presmeruje aplikáciu späť na stránku Edit block time-marks
- help - zobrazí help obrazovku

Save SyncFile, ScriptFile

V prípade, že sa rozhodnete vykonané zmeny uložiť kliknutím na tlačidlo Save&Exit na stránke Edit block time-marks, aplikácia sa automaticky presmeruje na novú obrazovku pre sťahovanie súborov. Názvy súborov sú prednastavené podľa pôvodných názvov, môžete im však nastaviť nové názvy. Po stlačení tlačidla download sa do počítača stiahnu tie súbory, v ktorých nastala zmena.

### Vybranie materiálov z lokálneho disku
V hlavnom menu aplikácie je tlačítko "CHOOSE MEDIA FROM DISK". Tu treba nahrať trojicu audio súbor, súbor s prepísanou audio nahrávkou a synchronizačný súbor. Paralérny preklad je voliteľný. V nastaveniach si treba vybrať mód výučby a prejsť k samotnému prehrávaniu.

### Vybranie materiálov z online knižnice
V hlavnom menu aplikácie je tlačítko "CHOOSE MEDIA FROM ONLINE LIBRARY". Tu treba zvoliť jazyk, v akom chceme audio nahrávky počúvať. Potom si treba vybrať danú nahrávku, v nastaveniach si vybrať mód výučby a prejsť k samotnému prehrávaniu.

### Prehrávač
Najprv si používateľ môže vybrať z rôznych režimov prehrávania ('First
listening', 'Speaking check', 'Continual echoing', ...). Po vybratí režimu
sa ešte dá paramentre prehrávania nastavovať ručne (Počet opakovaní, smer
prehrávania, ...). 'Speaking check' a 'Pronounciation check' sa používa na
kontrolu výslovnosti a slovnej zásoby, preto treba vždy stlačiť kontrolný
button pred prehratím bloku.

Keď existuje viacero paralelných prekladov k lekcii, dá sa vybrať v akom jazyku
to chce používateľ mať. Keď existuje iba jeden paralelný preklad tak je
je automaticky vybraný. Keď neexistuje paralelný preklad tak select box
nie je viditeľný.

Keď je zapnuté zobrazovanie paralelného prekladu, tak v hornom riadku je
paralelný preklad orginálneho textu aktuálneho bloku.

Keď je zapnuté zobrazovanie orginálneho textu, tak v druhom riadku je text
aktuálneho bloku.

Keď sme v režime 'Speaking check' alebo 'Pronounciation check' tak stredný
button služi na overenia výsledku (vlastne použivateľ sa pokúsi vysloviť
aktualný blok a potom po stlačení vie overiť jeho schopnosti).

V ostatných režimoch Pause a Play slúži na riadenie prehrávania. Keď
je prehrávanie pozastavené a pustíme to znova, tak ten blok sa prehrá od
začiatku.

Tlačidlo 'Back': skočí na predchádzajúcí blok. Keď sa dostane na začiatok
blokov tak prehrávanie zastaví.

Tlačidlo 'Forward': skočí na nasledujúci blok. Keď sa dostane na koniec
blokov tak automaticky sa začne krokovať od začiatku.

### Online knižnica

#### Registrácia
Na hlavnej stránke v hornej navigačnej lište je tlačidlo "REGISTER". To vás po kliknutí presmetuje na stránku s registračným formulárom, kde je potrebné zadať všetky údaje. Po dokončení registrácie budete presmerovaný na stránku prihlásenia

#### Prihlasovanie
Na hlavnej stránke v hornej navigačnej lište je tlačidlo "LOGIN". To vás po kliknutí presmeruje na stránku s prihlasovacím formulárom, kde je potrebné zadať údaje pre overenie. Po úspešnom prihlásení budete presmerovaný na hlavnú stránku na ktorej sa zobrazí uvítacia správa.

#### Pridávanie lekcie do knižnice
Po úspešnom prihlásení do knižnice nájdete v pravom dolnom rohu okna prehliadača okrúhle tlačidlo s ikonou "+", ktoré vás po kliknutí presmeruje na stránku s formulárom pre pridanie novej lekcie. Tu je potrebné vyplniť potrebné informácie o lekcii a to názov, obtiažnosť a pôvodný jazyk. Popis lekcie nie je povinný zadávať. Ďalej je nutné vybrať súbory k lekcii. Povinné súbory sú Zvukový súbor (MEDIA), Prepis zvukového súboru (SCRIPT) v správnom formáte a Synchronizačný súbor (SYNC) vytvorený pomocou našej aplikácie (viď. návod vyššie). Ďalej po stlačení  zeleného okrúhleho tlačidla so symbolom "+" je možné pridávať ľubovoľný počet prekladových súborov (TRANSLATION) v správnom formáte a vybrať jazyk prekladu. Lekciu uložíte kliknutím na tlačidlo "SAVE LECTURE". Budete presmerovaný na uvodnú stránku so zoznamom lekcií, v ktorej ak všetko prebehlo správne nájdete aj vašu novú lekciu.

#### Mazanie lekcie
Po úspešnom prihlásení nájdete v hornej navigačnej lište aplikácie tlačidlo "PROFILE". To vás presmeruje na stránku váško profilu. Pod osobnými informáciami nájdete sekciu "My contributions", v ktorom (ak už máte pridané nejaké lekcie) zoznam lekcií. V každom riadku na pravej strane nájdete červené tlačidlo so symbolom "X". Po jeho kliknutí sa vám zobrazí výzva na potvrdenie akcie. Po kliknutí na tlačidlo "OK" bude lekcia zmazaná a vaša stránka s profilom sa znovu načíta.

## Inštalačná príručka
Aplikácia požaduje server s databázovým systémom a s verziou PHP 5.6 alebo vyššiou.

1. Stiahnite alebo naklonujte si obsah repozitára.
2. Na požadované miesto na serveri umiestnite obsah repozitára tak ako je.
3. Vo vašom databázovom systéme su vytvorte databázu a naimportujte do nej súbor mbp.sql alebo jeho obsah spustite v SQL interpreteri.
4. V priečinku MBPLibrary v súbore db_example.php je potrebné zmeniť prístupové údaje k vašej databáze a zmeniť jeho názov na db.php .
   ```
   $mysqli = new mysqli('localhost', '[login_here]', '[password_here]', '[database_name_here]');
   //$mysqli = new mysqli('localhost', 'MBPMaster', 'LanguageKing', 'MBP'); //example
   ```
5. Aplikácia je pripravená na použite.
