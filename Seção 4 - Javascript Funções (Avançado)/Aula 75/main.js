// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome,sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'falando sobre NADA.') {
            return `${nome} ${sobrenome} está ${assunto}.`
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);