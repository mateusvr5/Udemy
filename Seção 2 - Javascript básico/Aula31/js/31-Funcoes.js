// function saudacao (nome) {
//     return `Bom dia ${nome}!`;
// }
// const variavel = saudacao('Luiz'); 
// console.log(variavel); // Variavel armazena o return

//--------------------------------------------------------------------------------------------------------------------------------


// function soma(x, y){
//     const resultado = x + y;
//     return resultado;
//     console.log('Olá mundo'); //Não será executado por conta do return finalizar a função
// }
//  console.log(soma(2,2));
//  console.log(soma(3,1));
//  console.log(soma(5,10));
// const resultado = soma(5,10);
// console.log(resultado);

// const raiz = (n) => n ** 0.5; { // Arrow Function 
// }; //Neste caso o ';' é necessário por conta da função está dentro de uma variável
// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

//--------------------------------------------------------------------------------------------------------------------------------

const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

