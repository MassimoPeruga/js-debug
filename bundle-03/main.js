/*******************************************************************************

    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio

*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
/*
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter((auto) >= auto.type === 'benzina');

const dieselCars = cars.filter((auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter((auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);
*/
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    }
];

const gasolineCars = cars.filter((auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter((auto) => auto.type.toLowerCase() === 'diesel');

const otherCars = cars.filter((auto) => !auto.type || (auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel'));

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);
/*
1- Questo codice crea un array di oggetti rappresentanti diverse auto e filtra le auto in base al tipo di carburante.
2- Errori di Sintassi:
    - Dopo l'oggetto Seat Ibiza, manca una virgola per separare l'oggetto successivo nell'array cars.
    - Nella variabile gasolineCars, la condizione del metodo filter dovrebbe essere (auto) => auto.type === 'benzina'.
    - Nel metodo filter per le dieselCars, le parentesi graffe sono omesse.
3- Errori Logici:
    - Nella variabile otherCars, la condizione nel metodo filter dovrebbe essere (auto) => auto.type !== 'benzina' && auto.type !== 'diesel'.
    - Il metodo filter tiene conto della differenza tra maiuscole e minuscole pertanto è oppotuno usare .toLowercase .
    - Non viene gestito il caso in cui le auto possano avere type null o undefined.
*/