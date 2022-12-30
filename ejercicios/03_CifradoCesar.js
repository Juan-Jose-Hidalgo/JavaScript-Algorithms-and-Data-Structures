/**
 * Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento.
 * En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.
 * 
 * Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares.
 * Así que A ↔ N, B ↔ O y así sucesivamente.
 * 
 * Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.
 * 
 * Todas las letras estarán en mayúsculas.
 * No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.
 */
function rot13(str) {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    return str.toUpperCase()
        .split('')
        .map(element => {
            if (alphabet.includes(element)) {
                let index = alphabet.indexOf(element);
                index = (index - 13 < 0)
                    ? alphabet.length - (-1 * (index - 13))
                    : index -= 13;
                return alphabet[index];

            } else return element;
        })
        .join('');
}

console.log(rot13("SERR YBIR?"));