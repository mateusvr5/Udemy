/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso/(alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

// Template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa  ${peso} kg`);
console.log(`tem ${alturaEmM} m de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
