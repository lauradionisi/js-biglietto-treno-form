// eventi collegati al bottone genera

var btn_genera = document.getElementById("btn_genera");

btn_genera.addEventListener('click',
function () {
 
 var nome = document.getElementById("nome_cognome").value;
 console.log(nome);

 var numeroKm = document.getElementById("num_km").value;
 console.log(numeroKm);

 var anni = document.getElementById("num_anni").value;
 console.log(anni);

 var offerta = "Biglietto Standard";

 const PREZZOKM = 0.21;

 var prezzoBase;
 prezzoBase = numeroKm * PREZZOKM; 
 console.log(prezzoBase);

// // sconto

 var prezzoUnder;
 prezzoUnder = prezzoBase - prezzoBase * 20 / 100;
 console.log(prezzoUnder);

 var prezzoOver;
 prezzoOver = prezzoBase - prezzoBase * 40 / 100;
 console.log(prezzoOver);

// // condizione
 
 if (anni == 'Minorenne') {
  document.getElementById("costo_biglietto").innerHTML = "Costo biglietto " + "€" + prezzoUnder.toFixed(2);
  offerta = "Sconto under 18"
 } 
 else if (anni == 'Over 65') {
  document.getElementById("costo_biglietto").innerHTML = "Costo biglietto " + "€" + prezzoOver.toFixed(2);
  offerta = "Sconto Silver"
 }
 else {
  document.getElementById("costo_biglietto").innerHTML = "Costo biglietto " + "€" + prezzoBase.toFixed(2);
 }

 // valori su biglietto
 document.getElementById("passenger_name").innerHTML = nome;
 document.getElementById("offerta").innerHTML = offerta;
 document.getElementById("biglietto").className ="show";


 // valori random
 var carrozza = Math.floor(Math.random() * 9) +1;
 console.log(carrozza);
 document.getElementById("carrozza").innerHTML = carrozza;
 var codiceCp = Math.floor(Math.random()* (100000 - 90000)) + 90000;
 console.log(codiceCp);
 document.getElementById("codiceCp").innerHTML = codiceCp;
}
);

// evento collegato bottone annulla

 var btn_annulla = document.getElementById("btn_annulla");
 btn_annulla.addEventListener('click', 
 
 function reloadPage() {
  location.reload();
 }
 );