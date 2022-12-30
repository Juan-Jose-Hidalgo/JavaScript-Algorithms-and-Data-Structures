/**
 * Convierte el número proporcionado en un número romano.
 * 
 * - M  => 1000
 * - CM =>  900
 * - D  =>  500
 * - CD => 	400
 * - C  =>	100
 * - XC =>   90
 * - L  =>   50
 * - XL =>   40
 * - X  =>   10
 * - IX =>    9
 * - V  =>    5
 * - IV =>    4
 * - I  =>    1
 * 
 * Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.
 */
function convertToRoman(num) {
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let convert = '';

    while (numbers.some(element => num >= element)) {
        for (const [i, number] of numbers.entries()) {
            if (num >= number) {
                convert += letters[i];
                num -= number;
                break;
            }
        }
    }

    return convert;
}

console.log(convertToRoman(3999));