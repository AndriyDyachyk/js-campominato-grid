PROBLEMA:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

SOLUZIONE:
1 - Creare nel Dom una sezione header dove inserire il bottone per far partire il gioco;
2 - Creare nel Dom una sezione per la griglia da generare;
3 - Recuperare la sezione della griglia e il bottone;
4 - Creare una funzione che ci permetta di genereare i 100 quadrati della griglia alla pressione del bottone;
    4.1 - Creare una costante square con l'inserimento di un div all'interno del DOM al quale aggiungere la classe .square per dargli uno stile
    4.2 - Impostare lo stile della classe Square su css
    4.3 - Aggiungere alla funzione appena creata un i+1 per dargli un numero che parte da 1 e viene aumentato dello stesso valore ogni volta che viene creato un nuovo square
5 - Aggiungere un eventlistener all'ogbject square che al 'click' gli aggiunga la classe 'clicked' che lo trasformerà in un quadratino colorato


BONUS: Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

SOLUZIONE:
1 - inserire una selection nel dom con le option di difficoltà 1, 2 e 3;
2 - Creare una funzione generale che faccia partire in concatenzaione le altre in base alla difficoltà
    2.1 - Recuperiamo quiondi il .value di #difficulty
3 - impostare uno switch per il numero di quadrati da generare in base alla difficoltà
4 - Far partire quindi la funzione di generazione della griglia
5 - Modificare la funzione di generazione della griglia importando il valore del numero di quadrati in base alla difficoltà.
6 - modificare l'aspetto css del quadrato, in js per adattare i quadrati in modo che formino griglie da 10x10, 9x9 e 7x7, inserendo una variabile che prende il valore della radice del numero totale dei quadrati generati in modo da definire una riga