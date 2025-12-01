// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// prezzo biglietto 0.21€ al km
// scontro 20% under 18 - sconto 40% over 65
// risultato con 2 decimali

//setup

const passengerAge = 10;
const km = 100;
const ticketPrice = (0.21 * km) ;


console.log(ticketPrice);

if (passengerAge <= 18) {
    
    console.log("L'utente è minorenne");
}

else if (passengerAge >= 65) {
    console.log("L'utente è un Senior");
}

else {
    console.log("L'utente è un adulto");
}







































console.log("okay");