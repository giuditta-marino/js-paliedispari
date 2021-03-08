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
