// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor)

console.log(numerosPares);


//Imprimir múltiplos de 5
const test = [5, 10, 15, 20, 25, 30, 123, 543, 123, 678];

const multiplos = test.reduce(function(acumulador, valor){
    if(valor % 5 == 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(multiplos);