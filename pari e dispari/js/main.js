'use strict';

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// FUNZIONI
function sommaNumero(num1, num2) {
  let somma = sceltaNumero + numeroPc;
  return somma;
}

function vittoria() {
  if (risultatoSomma % 2 == 0) {
    const pari = alert('pari vince');
    return pari;
  } else if (risultatoSomma % 3 == 0) {
    const dispari = alert('dispari vince');
    return dispari;
  }
}

// FUNZIONI

const sceltaUtente = prompt('scegli tra pari e dispari');

if (sceltaUtente === 'dispari') {
  alert('hai scelto dispari');
} else {
  alert('hai scelto pari');
}

const sceltaNumero = Number(prompt('scegli un numero da 1 a 5'));
alert(`hai scelto ${sceltaNumero}`);
const numeroPc = Math.floor(Math.random() * 5) + 1;

const risultatoSomma = sommaNumero();
alert(`risultato della somma è ${risultatoSomma}`);

const risultato = vittoria();
console.log(risultato);
