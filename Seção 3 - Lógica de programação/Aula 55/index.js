//                0       1       2
const frutas = ['Pera', 'Maçã', 'Uva'];

//For in -> Lê os índices ou chaves do objeto
// for(let index in frutas){
//     console.log(frutas[index]);
//}

// for(let i=0;i<frutas.length;i++){
//     console.log(frutas[i]);

// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for(let chaves in pessoa){
    console.log(chaves, pessoa[chaves]);
}

const chave = 'nome';
console.log(pessoa['nome']);

