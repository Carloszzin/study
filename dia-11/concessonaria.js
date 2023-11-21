let modelos = []
let anos = []
let valores = []
let continuar = true
let contador = 0

while(continuar){
    let nome = prompt(`Qual o Modelo que você quer colocar? ${contador + 1}`)
    modelos[contador] = nome
    let ano = Number(prompt("Qual o Ano desse modelo?"))
    anos[contador] = ano
    let valor = parseFloat(prompt("Qual o Valor desse modelo?"))
    valores[contador] = valor
    contador++;

    let prosseguir = prompt("Quer inserir mais outro modelo? sim/não")
    if(prosseguir === "não"){
        continuar = false
    }
}

console.log("Todos os carros cadastrados:")
for(i = 0; i <modelos.length; i++){
    console.log(modelos[i]+ ", ano: "+ anos[i]+ ", valor: "+ valores[i])
}

console.log("-------------------------")

//Ordenando pelo maior valor
for(let i = 0; i< valores.length - 1; i++){
    for(let j = 0; j< valores.length - i - 1; j++){
        if(valores[j] > valores[j + 1]){

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j+1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j+1] = anoMaiorValor

            let valorMaior = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = valorMaior
        }
    }

}


console.log("Carros ordenados pelo maior valor:")
for(i = 0; i < modelos.length; i++){
    console.log(modelos[i]+ ", ano: "+ anos[i]+ ", valor: "+ valores[i])
}