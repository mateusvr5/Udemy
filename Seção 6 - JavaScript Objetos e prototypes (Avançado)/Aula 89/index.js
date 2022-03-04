// new Array()
// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

// const chave = 'sobrenome';
// console.log(pessoa['sobrenome']);
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 2;
// pessoa1.falarNome = function() {
//     console.log(`${this.nome} está falando seu nome.`)
// };
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for(let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

//Factory function / Constructor function / Classes
// function criaPessoa(nome, sobrenome){
//     return {
//         nome, 
//         sobrenome,
//         nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto());

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Atributo que impede modificação no endereço de memória dos atributos da função
    Object.freeze(this);

}

//p1 = (ENDERECODEMEMORIA) -> 'Valor'
// p1.(ENDERECODEMEMORIA) -> {NOME:, SOBRENOME:}
const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Oliveira');
p2.nome = 'Teste de modificação';
console.log(p1);
console.log(p2);