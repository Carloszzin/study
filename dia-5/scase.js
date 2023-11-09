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
let operador = parseInt(prompt("Bem vindo ao Dav-Games, Quais opcões deseja?"
+"\n1= jogo de luta; \n2= jogo de card; \n3 = jogo de tiro"))


switch (operador) {
    case 1:
        valor = parseInt(prompt("Digite a quantidade desejada (R$42 por Jogo): "))
        quantidade = valor * 42;
        alert("Valor: "+quantidade+" R$ nos jogos de luta")
        break;
    case 2:
        valor = parseInt(prompt("Digite a quantidade desejada (R$37 por Jogo): "))
        quantidade = valor * 37;
        alert("Valor: "+quantidade+" R$ nos jogos de card")
        break;
    case 3:
        valor = parseInt(prompt("Digite a quantidade desejada (R$46 por Jogo): "))
        quantidade = valor * 46;
        alert("Valor: "+quantidade+" R$ nos jogos de tiro")
        break;
    default:
        alert("Mais opcões adicionadas em breve...")
        break;
}
