//Valor por referência
//const nomes = ['Eduardo', 'Maria' , 'Joana'];
// String, Objetos, Funções, Números
const nomes = new Array('Eduardo', 'Maria', 'Joana');

console.log(nomes.length);

nomes.unshift('João');
nomes.unshift('Wallace');
console.log(nomes);

const func = new Array('Antônio', 'Silva', 'Cláudio');

nomes.unshift('João');

// const novo = [... nomes];

// novo.pop();
// console.log(nomes);
// console.log(novo);