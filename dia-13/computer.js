class computer{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo,armazenamento,memoriaRam, processador, video, ssd){
        this.tipo = tipo
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.processador = processador
        this.video = video
        this.ssd = ssd
    }

    detalhes(){
        console.log("Todos informações do PC / Notebook")
        console.log(`O tipo do meu desktop: ${this.tipo}`)
        console.log(`O armazenamento do meu desktop: ${this.armazenamento}`)
        console.log(`A memória RAM do meu desktop: ${this.memoriaRam}`)
        console.log(`O processador do meu desktop: ${this.processador}`)
        console.log(`A placa de vídeo do meu desktop: ${this.video}`)
    }
}

let meusetup = new computer("Desktop", "500 GB", "12 GB RAM", "Intel Core i5", "Sem placa de vídeo",true)
meusetup.detalhes();
console.log(meusetup)


//Praticando objetos e classe no dia 13