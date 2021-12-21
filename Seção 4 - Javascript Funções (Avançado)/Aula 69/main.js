// argumentos que sustentam todos os argumentos enviados
// function funcao(a,b,c) {
//     //console.log(arguments[10]);
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento;
//     }

//     console.log(total, a,b,c);
// }

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
// funcao(obj);

// funcao({nome: 'Luiz', sobrenome:'Otávio', idade: 20});


// function funcao([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);

// }

// funcao(['Luiz Otávio', 'Miranda', 30]);

// const conta = function conta(operador, acumulador, ...numeros){
//     for(let numero of numeros){
//       if (operador === '+')  acumulador += numero;
//       if (operador === '-')  acumulador -= numero;
//       if (operador === '/')  acumulador /= numero;
//       if (operador === '*')  acumulador *= numero;
//     }

//     console.log(acumulador);
// };

// obs: "Não existe arguments em arrow functions"

const conta = function conta(...args){
    console.log(args);
};

conta('+', 1, 20, 30, 40, 50);
