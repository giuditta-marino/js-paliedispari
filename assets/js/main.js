// PRIMO PROBLEMA

// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
var parolaUtente = prompt ("Dammi una parola, ti dirò se è un palindromo:");

// CREO UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA E' PALINDROMA
function palindromo(str) {
  var risultato = false;
  if (parolaUtente.toLowerCase().split("").reverse().join() == parolaUtente.toLowerCase().split("").join()) {
    risultato = true;
    return risultato;
  } else {
    return risultato;
  }
}

// APPLICO LA FUNZIONE ALLA STRINGA PALINDROMO E SALVO IL RISULTATO IN UNA VARIABILE
var giocoPalindromi = palindromo(parolaUtente);
console.log(giocoPalindromi);

// STAMPO IL RISULTATO
var risultatoDOM = document.getElementById('risultato-gioco');

if (giocoPalindromi) {
  risultatoDOM.innerHTML = "La tua parola è un palindromo!"
} else {
  risultatoDOM.innerHTML = "La tua parola non è un palindromo!"
}

// SECONDO PROBLEMA

// FAR SCEGLIERE ALL'UTENTE PARI O DISPARI
var paridispariUtente = prompt("Scrivi pari o dispari");

var flag = false;

if (paridispariUtente.toLowerCase() == "pari") {
  var numeroUtente = prompt("Inserisci un numero da 1 a 5");
  console.log(numeroUtente);
  flag = true;
} else if (paridispariUtente.toLowerCase() == "dispari") {
  var numeroUtente = prompt("Inserisci un numero da 1 a 5");
  console.log(numeroUtente);
  console.log(flag);
} else {
  while (paridispariUtente.toLowerCase() != "pari" || paridispariUtente.toLowerCase() != "dispari") {
    alert("non mi hai dato pari o dispari!");
    var paridispariUtente = prompt("Scrivi pari o dispari");
  }
}

// CREO UNA FUNZIONE PER GENERARE NUMERI RANDOM ENTRO UN RANGE
function randomOneToFive(min, max){
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// GENERO UN NUMERO RANDOM DA 1 A 5 PER IL COMPUTER USANDO LA FUNZIONE
var numeroComputer = randomOneToFive(1, 5);
console.log(numeroComputer);

// SOMMO IL  NUMERO FORNITO DALL'UTENTE E IL NUMERO GENERATO DAL PC E STABILISCO SE E' PARI O DISPARI TRAMITE UNA FUNZIONE
var sommaNumeri = parseInt(numeroUtente) + parseInt(numeroComputer);
console.log(sommaNumeri);

function pariDispari(num) {
  if (parseInt(!(num%2)) && (flag)) {
    console.log("La somma è pari, hai vinto!");
  } else if (parseInt(!(num%2)) && (!(flag)))  {
    console.log("La somma è pari, hai perso!");
  } else if (parseInt((num%2)) && (flag)) {
    console.log("La somma è dispari, hai perso!");
  } else if (parseInt((!(num%2))) && (!(flag))) {
    console.log("La somma è dispari, hai vinto!");
  }
}

var risultatoPariDispari = pariDispari(sommaNumeri);

// STAMPO IL RISULTATO
