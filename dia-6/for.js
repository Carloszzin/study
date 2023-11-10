// exercício de loops

let numero = 50;
 
for(i = 0; i <= numero; i += 5){
    console.log(i)
}

console.log("------------")

let number = 0;
 
for(i = 50; i >= number; i -= 5){
    console.log(i)
}

console.log("------------")

let tabu = parseInt(prompt("Coloque o número da tabuada desejada: "))

for(i = tabu; i <= tabu; i++){
    console.log("Tabuada do Número: "+i)

    for(j = 0; j <= 10; j++){
        console.log(i+" X "+j+" = "+ (i * j))
    }
}