/** Aritméticos
 * ()
    * 
 * / %
 + -
 Incremento = ++
 Decremento = --
 Operadores de atribuição
*/
const num1 = 10;
const num2= 3;
const num3= 10;
console.log((num1 + num2)* num3);

let contador = 1;

++contador; // 2
++contador; // 3
++contador; // 4 
++contador; // 5
console.log(++contador);

console.log(--contador);

const passo = 2;
contador = contador + passo;
console.log(contador);

const passo2 = 50;
let contador2 = 0;
contador2 += passo2;
console.log(contador2);

// Nan - Not a number - Converter: parseInt (inteiro), parseFloat(decimais)
const num4 = 10;
const num5 = 'L5';
const num6 = parseInt('5');
const num7 = parseFloat('5.2');
console.log(num4 * num5);
console.log(typeof num2);
console.log(num4 * num6);
console.log(num7 * num6);