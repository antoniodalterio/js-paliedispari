'use strict';

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// FUNZIONI
function generatoreNumero(num1, num2) {
  const somma = sceltaNumero + numeroPc;
  console.log(somma);
  return somma;
}

// FUNZIONI

const sceltaUtente = prompt('scegli tra pari e dispari');
const sceltaNumero = Number(prompt('scegli un numero da 1 a 5'));
const numeroPc = Math.floor(Math.random() * 5) + 1;
console.log(numeroPc);
