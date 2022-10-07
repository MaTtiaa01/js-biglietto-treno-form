// Scrivere un programma che chieda all’utente:





let btn1 = document.querySelector(".btn_start");
let btn2 = document.querySelector("btn_stop"); 




btn1.addEventListener('click', function(){

    const userName = document.getElementById("name").value;
    document.querySelector(".passenger_name").innerHTML = userName;
   
    // console.log(userName);

    // Il numero di chilometri da percorrere

    const km = document.getElementById("km").value;
    
    //console.log(km);
    // Età del passeggero 

    const age = document.getElementById("age").value;
    
    //console.log(age);
        //Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    const standardPrice = km * 0.21;

    // va applicato uno sconto del 20% per i minorenni
    const youngDiscount = ((100 - 20) / 100);
    // va applicato uno sconto del 40% per gli over 65.
    const oldDiscount = ((100 - 40) / 100);

    let ticketPrice;

    if (age < 18){
        ticketPrice = ( standardPrice * youngDiscount).toFixed(2);
        document.querySelector(".offerta").innerHTML = "biglietto ridotto"
    } else if (age > 65){
        ticketPrice = (standardPrice * oldDiscount).toFixed(2);
        document.querySelector(".offerta").innerHTML = "biglietto ridotto"
    } else {
        ticketPrice = (standardPrice).toFixed(2);
        document.querySelector(".offerta").innerHTML = "biglietto intero"
    }

    //console.log(ticketPrice, age);
   
    const randomSeat =  Math.floor((Math.random() * 100) + 1);
    //console.log(randomSeat);
    document.querySelector(".seat_number").innerHTML = randomSeat;
    
    const randomCode = Math.floor((Math.random() * 100) + 1);
    document.querySelector(".ticket_code").innerHTML = randomCode;
    
    document.querySelector(".price").innerHTML = "€" + ticketPrice;





})

