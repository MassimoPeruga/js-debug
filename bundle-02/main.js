/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
/*
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
*/
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    console.log(message);
}
checkAge();
console.log(`
`);
/*
1- Questa funzione confronta l'età in input con 18 e genera un messaggio in base al risultato.
2- No, non sono presenti errori di sintassi.
3- Sì, c'è un errore logico: la variabile 'message' è dichiarata come costante, ma successivamente viene tentato l'assegnamento di un valore ad essa. Dovrebbe essere dichiarata come variabile con 'let'.
*/



// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
console.log(`
`);
/*
1- Questa funzione stampa il numero di colori presenti nell'array 'colors'.
2- Sì, c'è un errore di sintassi: dovrebbe essere colors.length anziché colors.lenght.
3- No, non ci sono errori logici.
*/



// ESERCIZIO 3
/*
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
*/
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
console.log(`
`);
/*
1- Questa funzione dovrebbe chiedere all'utente un numero, aggiungerlo a 12 e stampare il risultato.
2- No, non sono presenti errori di sintassi.
3- Sì, c'è un errore logico: il risultato finale è una stringa che concatena il numero inserito con 12, non la somma numerica.
*/


// ESERCIZIO 4
/*
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
*/
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
console.log(`
`);
/*
1- Questa funzione verifica se l'indirizzo email dell'utente è presente in un array di indirizzi email.
2- Sì, c'è un errore di sintassi sia nella dichiarazione che nella riassegnazione della variabile 'grantAccess'. Dovrebbe essere dichiarato come un valore booleano e non come una stringa.
3- No, non ci sono errori logici.
*/



// ESERCIZIO 5 (suggerimento: c'è un solo errore)
/*
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();
*/
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {
            if (email === userEmail) {
                grantAccess = true;
            }
        }
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();
/*
1- Questa funzione cerca se l'indirizzo email inserito dall'utente è presente nell'array di indirizzi email senza utilizzare un metoto built-in come .includes .
2- Sì, c'è un errore di sintassi: non è stata chiusa la } della funzione.
3- No, non ci sono errori logici.
*/