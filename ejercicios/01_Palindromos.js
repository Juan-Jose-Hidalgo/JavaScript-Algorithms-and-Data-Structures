/**
 * Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.
 * 
 * Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás,
 * ignorando la puntuación, mayúsculas, minúsculas y espaciado.
 * 
 * Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos)
 * y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.
 * 
 * Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.
 * 
 * También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.
 */
function palindrome(str) {
    const arr1 = str.toLowerCase().replace(/[\W_]/g, '').split('');
    const arr2 = [...arr1].reverse();

    return arr1.every((element, index) => element === arr2[index]);
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));