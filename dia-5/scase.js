/*
let quantidade
let valor
let operador = parseInt(prompt("Bem vindo ao Dav-thru, Quais opcões deseja?"
+"\n1= Gasolina; \n2= àlcool; \n3 = Calibrar pneus"))


switch (operador) {
    case 1:
        valor = parseInt(prompt("Digite o valor desejado (R$5 por litro): "))
        quantidade = valor / 5;
        alert("Quantidade por litros: "+quantidade+"L de gasolina")
        break;
    case 2:
        valor = parseInt(prompt("Digite o valor desejado (R$3 por litro): "))
        quantidade = valor / 3;
        alert("Quantidade por litros: "+quantidade+"L de àlcool")
        break;
    default:
        alert("calibramento acionado, pode usar!")
        break;
} */


//Game
//Escolher 3 jogos,  um de jogo de luta, um jogo de card e um jogo de tiro

//Após escolher, o usuário vai colocar a quantidade desejada de jogos

//exibir o valor pela quantidade do pedido


let quantidade
let valor
let escolha
let operador = parseInt(prompt("Bem vindo ao Dav-Games, Quais opcões deseja?"
+"\n1= jogo de Luta; \n2= jogo de Futebol; \n3 = jogo de Tiro"))



switch (operador) {
    case 1:
        escolha = prompt("Temos 3 opções: \nDragonBall \nTekken7 \nMortal Kombat11")
        valor = parseInt(prompt("Digite a quantidade desejada (R$58 por Jogo): "))
        quantidade = valor * 58;
        if(escolha == "DragonBall"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de luta`
        }else if(escolha == "Tekken7"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de luta`
        }else if(escolha == "Mortal Kombat"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de luta`
        }else{
            alert("Digite o nome corretamente..")
        }
        break;

    case 2:
        escolha = prompt("Temos 3 opções: \nEA Sports \nEfootbal+ \nFIFA 23")
        valor = parseInt(prompt("Digite a quantidade desejada (R$116 por Jogo): "))
        quantidade = valor * 116;
        if(escolha == "EA Sports"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de Futebol`
        }else if(escolha == "Efootbal+"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de Futebol`
        }else if(escolha == "FIFA 23"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de Futebol`
        }else{
            alert("Digite o nome corretamente..")
        }
        break;

    case 3:
        escolha = prompt("Temos 3 opções: \nCall of Duty Vanguard \nFar Cry 6 \n Battlefield 5")
        valor = parseInt(prompt("Digite a quantidade desejada (R$89 por Jogo): "))
        quantidade = valor * 89;
        if(escolha == "Call of Duty Vanguard"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de tiro`
        }else if(escolha == "Far Cry 6"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de tiro`
        }else if(escolha == "Battlefield 5"){
            document.body.innerHTML+= `O jogo: ${escolha} tem o Valor: ${quantidade} R$ nos jogos de tiro`
        }else{
            alert("Digite o nome corretamente..")
        }
        break;

    default:
        alert("Mais opcões adicionadas em breve...")
        break;
}
