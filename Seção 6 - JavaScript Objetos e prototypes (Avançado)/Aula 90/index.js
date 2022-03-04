function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this,  'estoque', {
        enumberable: true, // mostra a chave
        value: estoque,  // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    // Object.defineProperties(this, {
    //     nome: {
    //     enumberable: true, // mostra a chave
    //     value: nome,  // valor
    //     writable: true, // pode alterar
    //     configurable: true // configurável
    //     },
    //     preco: {
    //     enumberable: true, // mostra a chave
    //     value: preco,  // valor
    //     writable: true, // pode alterar
    //     configurable: true // configurável
    //     },
    // });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}