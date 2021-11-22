// IIFE
function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
      
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');


    

       pessoas.push({
         nome: nome.value,
         sobrenome: sobrenome.value,
         peso: peso.value,
         altura: altura.value

       });

       console.log(pessoas);

       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + ` ${peso.value}  ${altura.value}</p>`;

      }
    

      //Método mais antigo
    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert('Dados enviados com sucesso');
    //     console.log('Foi enviado');
    // };

    //Método mais atualizado
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();