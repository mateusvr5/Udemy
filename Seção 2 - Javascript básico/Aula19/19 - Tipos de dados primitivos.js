// String, number, underfined, null, boolean, symbol

const nome = 'Luiz' // String
const nome1 = "Luiz"; // String
const nome2=`Luiz`; // String
const num1 = 10; // Number
const num2 = 10.52 // Number
let nomeAluno; // undefined -> Não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = false; // Booolean true, false (Lógico)

const a = [1,2];
const b = a;

console.log(typeof nome, num1);

console.log(typeof nome2, num1);

console.log(typeof nome1, num2);

console.log(typeof nomeAluno, sobrenomeAluno);

console.log(typeof aprovado);

console.log(a,b);

b.push(3);
console.log(a, b);