let nome
let idade
let carteira = false
let veiculo = false

nome = prompt("Coloque seu nome:")
idade = prompt("Coloque sua idade:")

let opcaoCarteira = prompt("Você tem carteira? s/n")
if(opcaoCarteira == "s"){
    carteira = true
}

let opcaoVeiculo = prompt("Você tem carro? s/n")
if(opcaoVeiculo == "s"){
    veiculo = true
}


if(idade < 18 || !carteira){
    alert(nome+", Você não pode dirigir")
}else if(idade >= 18 && carteira && !veiculo){
    alert(nome+", Você pode dirigir, mas não tem um carro...")
}else{
    alert(nome+", você é o motorista certo!")
}