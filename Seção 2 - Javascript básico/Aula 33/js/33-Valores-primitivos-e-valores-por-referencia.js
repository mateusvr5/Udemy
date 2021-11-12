/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
null (bigint, symbol) - Valor

Referência (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio' 
};
const b = a;

a.nome = 'João'
console.log(a);
console.log(b);



// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, c);



//          0123
// let nome = 'Luiz';
// nome[0] = 'R';
// console.log(nome[0], nome);

// let a = 'A';
// let b = a; // Cópia 
// console.log(a,b);

// a = 'Outra coisa';
// console.log(a,b);
