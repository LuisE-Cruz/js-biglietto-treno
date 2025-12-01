// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// prezzo biglietto 0.21€ al km
// scontro 20% under 18 - sconto 40% over 65
// risultato con 2 decimali


const passengerAge = parseInt(prompt("Quanti anni hai?"));
const km = parseInt(prompt("Quanti km devi percorrere?"));
let ticketPrice = 0.21 * km;
let message = "il tuo prezzo è di " + ticketPrice.toFixed(2) + "€";

if (passengerAge <= 18) {
    ticketPrice = ticketPrice - (ticketPrice * 20) / 100;
    message = "Il tuo prezzo scontato da giovane è di " + ticketPrice.toFixed(2) + "€";
}

else if (passengerAge >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * 40) / 100;
    message = "Il tuo prezzo scontato da senior è di " + ticketPrice.toFixed(2) + "€";

    // console.log(ticketPrice);
}

// const message = "il prezzo del tuo biglietto è " +  ticketPrice.toFixed(2) + "€";
console.log(message);


// else {
//     console.log("L'utente è un adulto");
// }


