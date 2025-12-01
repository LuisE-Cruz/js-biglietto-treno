// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// prezzo biglietto 0.21€ al km
// scontro 20% under 18 - sconto 40% over 65
// risultato con 2 decimali


const passengerAge = parseInt(prompt("Quanti anni hai?"));
const km = parseInt(prompt("Quanti km devi percorrere?"));
let ticketPrice = 0.21 * km;

if (passengerAge <= 18) {
    ticketPrice = ticketPrice - (ticketPrice * 20) / 100;
    console.log(ticketPrice);
}

else if (passengerAge >= 65) {
    ticketPrice = ticketPrice - (ticketPrice * 40) / 100;
    console.log(ticketPrice);
}

// else {
//     console.log("L'utente è un adulto");
// }


