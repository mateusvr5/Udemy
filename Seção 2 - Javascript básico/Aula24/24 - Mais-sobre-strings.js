//let umaString = "Um \"texto\"";
//               01234567 caracteres
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString[4]);
console.log(umaString[8]); // Caractere indefinido na String

console.log(umaString.charAt(6));
console.log(umaString.concat(' ','em',' ','um lindo dia.')); //Concatenando Strings na variável umaString

console.log(umaString + ' em um lindo dia.'); //Concatenando de maneira mais usual

console.log(`${umaString} em um lindo dia.`)//Terceira forma (mais legível)

console.log(umaString.indexOf('o', 3)); //Identificando um caractere de trás para frente

console.log(umaString.lastIndexOf('m', 3)); //Identificando um caractere de frente para trás

console.log(umaString.match(/[a-z]/g)); //Sei n pesquisa aí

console.log(umaString.search(/[a-z]/g));//Sei n pesquisa aí

console.log(umaString.replace(/Um/, 'Outra')); //Substitui uma frase

console.log(umaString.length); //Tamanho da String

console.log(umaString.slice(2,6)); //Seleciona partes da String pelo endereço

console.log(umaString.slice(-5, -1));
console.log(umaString.slice(32));

console.log(umaString.substring(umaString.length -5, umaString.length -1)); //Retirando caracteres da String

console.log(umaString.split(' ')); //Divisão de caracteres da String

console.log(umaString.split('r')); //Retira os r(s) da String

console.log(umaString.toUpperCase()); //Transforma todos os elementos da String em maiúsculos
console.log(umaString.toLowerCase()); //Transforma todos os elementos da String em minúsculos





