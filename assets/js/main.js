// Scrivere un programma che chieda all’utente:

const userName = document.getElementById("full_name");

// Il numero di chilometri da percorrere

const km = document.getElementById("km");

// Età del passeggero 
const age = document.getElementById("age");

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const standardPrice = km * 0.21;

// va applicato uno sconto del 20% per i minorenni
const youngDiscount = ((100 - 20) / 100);
// va applicato uno sconto del 40% per gli over 65.
const oldDiscount = ((100 - 40) / 100);

let ticketPrice;

if (age < 18){
    ticketPrice = standardPrice * youngDiscount
} else if (age > 65){
    ticketPrice = standardPrice * oldDiscount
} else {
    ticketPrice = standardPrice
}

//console.log(ticketPrice);

let btn1 = document.querySelector(".btn_start");
let finalPrice  

btn1.addEventListener('click', function(){
    document.querySelector("p").innerHTML = ticketPrice
})