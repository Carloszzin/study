class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    tempoEmMedia(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado;
    }
}


class Corrida{
    Nome
    tipo
    percorre
    participantes
    vencedor

    constructor(nome,tipo, percorre){
        this.Nome = nome
        this.tipo = tipo
        this.percorre = percorre
        this.vencedor = ""
        this.participantes = []
    }


    CorridaCompleta(){
        let menorTempo = this.participantes[0].tempoEmMedia(this.percorre)
        let vencer = this.participantes[1]

        for(let i = 1; i < this.participantes.length; i++){
            let tempo = this.participantes[i].tempoEmMedia(this.percorre)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencer = this.participantes[i]
            }
        }

        return this.vencedor = vencer;
    }

    exibirVencedor(){
        console.log("O vencedor da corrida é: "+this.vencedor.nome)
    }
}


let corrida = new Corrida("Monza", "fórmula 1", 60000)

corrida.participantes[0] = new Carro("Ferrari", 120, 160, 5)
corrida.participantes[1] = new Carro("Lotus", 200, 210, 9)
corrida.participantes[2] = new Carro("McLaren", 300, 220, 10)

corrida.CorridaCompleta()
corrida.exibirVencedor()
console.log(corrida)