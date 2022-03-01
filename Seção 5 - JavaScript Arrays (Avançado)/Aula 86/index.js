// Some todos os números (reduce)
//Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0   1  2   3  4  5  6  7  8   9   10  11
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
    
}, []);

// Retorne um array com o dobro dos valores
const dobro = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor * 2);
    return acumulador;
    
}, []);
console.log(total);
console.log(dobro);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);