/*
Operadores Lógicos
&& -> AND //All expressions need to be true to return true
|| -> OR 
! -> NOT
*/
const expressao = true && true && true && true && true; 
console.log(expressao);


const expressao2 = false || false || true || false;
console.log(expressao2);


const usuario = 'Luiz';
const senha = '123456';
const vaiLogar = usuario ==='Luiz' && senha ==='123456';
console.log(vaiLogar);
