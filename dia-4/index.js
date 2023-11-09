let fome = prompt("Você estar com fome? (sim / não)")
let dinheiro = prompt("Você tem dinheiro? (sim / não)")
let restaurante = prompt("O restaurante está aberto? (sim / não)")



if(fome === "não" || dinheiro == "não"){
    alert("Hoje a janta será em casa!")
}else if(dinheiro === "sim" && restaurante === "sim"){
    alert("Hoje a janta será no seu restaurante favorito!")
}else{
    alert("Peça um delivery!")
}