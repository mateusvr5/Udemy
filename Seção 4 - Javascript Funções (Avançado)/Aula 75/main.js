// Factory function (Função Fábrica)
// Constructor funcion (função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome} `
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'Falando sobre NADA.') {
            return `${this.nome} está ${assunto}`;
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio',1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
