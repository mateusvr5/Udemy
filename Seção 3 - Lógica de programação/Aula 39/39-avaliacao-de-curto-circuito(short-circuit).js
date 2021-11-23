/*
&& -> false && true -> false
|| -> Or
FALSY
false
0
'' "" ``
null / undefined
NaN
*/
console.log('Luiz Otávio' && '' && 'Maria');
function falaOi() {
    return 'Função executada';
}
let vaiExecutar = 'Joao';
console.log(vaiExecutar && falaOi());
console.log(0 || false || null || 'Luiz Otávio' || true);


const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; //String contendo valor (true)
const d = false;
const e = NaN;

console.log( a || b || c || d || e);