const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
// const { nome, sobrenome } = pessoa;
// console.log(nome, sobrenome);

// const { endereco: { rua: r = 12345, numero },
//     endereco
// } = pessoa;

// const {nome, sobrenome , ...resto} = pessoa;
// console.log(nome, sobrenome, resto);


const carro = {
    fabricante: 'Ford',
    ano: 1969,
    modelo: 'Mustang',
    cor: 'Preto',
    preco: 500.000
};
const {fabricante, ano, ...resto} = carro;
console.log(fabricante, ano, resto);

