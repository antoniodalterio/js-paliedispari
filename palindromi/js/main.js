'use strict';

// Funzioni

function palindromi() {
  const stringaInversa = parolaUtente.split('').reverse().join('');
  return stringaInversa;
}

// Funzioni

// Dichiarazioni variabili
const parolaUtente = prompt('scrivi una parola');
const parolaInvertita = palindromi(parolaUtente);
// Dichiarazioni variabili

if (parolaUtente == parolaInvertita) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}
