var nome = document.getElementById("nome_cognome").value;
console.log("nome");
document.getElementById("nome_cognome").innerHTML = nome;

var numeroKm = document.getElementById("num_km").value;
console.log("numeroKm");

var anni = document.getElementById("num_anni").value;
console.log("anni");

const PREZZOKM = 0.21;

var prezzoBase;
prezzoBase = numeroKm * PREZZOKM; 
console.log(prezzoBase);

// sconto

var prezzoUnder;
prezzoUnder = prezzoBase - prezzoBase * 20 / 100;
console.log(prezzoUnder);

var prezzoOver;
prezzoOver = prezzoBase - prezzoBase * 40 / 100;
console.log(prezzoOver);

// condizione
 
if (anni == 18) {
 document.getElementById("costo_biglietto").innerHTML = "Costo biglietto scontato Under18 " + "€" + prezzoUnder.toFixed(2);
} 
else if (anni == 65) {
 document.getElementById("costo_biglietto").innerHTML = "Costo biglietto scontato Over65 " + "€" + prezzoOver.toFixed(2);
}
else {
 document.getElementById("costo_biglietto").innerHTML = "Costo biglietto Totale " + "€" + prezzoBase.toFixed(2);
}