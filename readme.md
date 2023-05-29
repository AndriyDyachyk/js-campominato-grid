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