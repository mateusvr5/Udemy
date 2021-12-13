// try {
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try{
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');
//     } finally{
//         console.log('Também sou FINALLY.')
//     }

// } catch (e) {
//     console.log('Tratando o erro');

// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
const hora = retornaHora();
retornaHora(hora);