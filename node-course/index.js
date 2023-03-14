/*
**Es Palíndromo**
Un palíndromo, también llamado palindromo, palíndroma o palindroma,
es una palabra o frase que se lee igual en un sentido que en otro.

Ejemplo : "a man, a plan, a canal - panama!"
Ejemplo 2: “anna”
Ejemplo 3: “banna”
Ejemplo 4: “.....!!!!####an  n...---a”

Dada una cadena de caracteres, retornar “Si” si es palíndromo, y “No” si no lo es.
Solo se debe tomar en consideración caracteres alfanuméricos.

**Firma de método en Java**: String isPalindrome(String str)
*/

let regex = /[a-z0-9]/;

const clean = (str) => {}; // aplica regex para limpiar str


const isAPalindromo = (str) => {
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      continue 
    } else {
      return console.log("No");
    }
  }
  return console.log("Si")
};
isAPalindromo("osso");