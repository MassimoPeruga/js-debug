/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(`
`);
/*
    1- Questo codice dovrebbe stampare i numeri da 0 a 4.
    2- No, non sono presenti errori di sintassi.
    3- Sì, c'è un errore logico nella condizione del ciclo, dovrebbe essere i < 5 invece di i > 5.
*/


// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(1));
console.log(addIfEven(2));
console.log(`
`);
/*
1- Questa funzione dovrebbe restituire num + 5 se num è pari, altrimenti restituire num.
2- Sì, c'è un errore di sintassi nella condizione dell'if, dovrebbe essere num % 2 === 0 anziché num % 2 = 0.
3- No, non ci sono errori logici.
*/


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive();
console.log(`
`);
/*
1- Questa funzione dovrebbe stampare i numeri da 0 a 4.
2- Sì, c'è un errore di sintassi nella dichiarazione del ciclo for, dovrebbe essere separata da punti e virgola.
3- No, non ci sono errori logici.
*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // restituisce [2,4,6,8]
/*
1- Questa funzione dovrebbe restituire un array contenente i numeri pari dell'array 'numbers'.
2- Errori di Sintassi:
    - Il terzo parametro del ciclo for dovrebbe essere i++ anziché i++;.
    - Il punto e virgola dopo l'if deve essere rimosso.
    - L'uso di = anziché === nella condizione dell'if.
3- Errori Logici:
    - La condizione del ciclo for dovrebbe essere i < numbers.length anziché i < numbers.length - 1.
    - La condizione dell'if dovrebbe essere numbers[i] % 2 === 0 anziché numbers % 2 = 0.
    - Il valore da pushare nell'array evenNumbers dovrebbe essere numbers[i] anziché i.
    - L'array evenNumbers dovrebbe contenere i numeri pari, non i loro indici.
    - Il return evenNumbers; dovrebbe essere al di fuori del ciclo for.
*/