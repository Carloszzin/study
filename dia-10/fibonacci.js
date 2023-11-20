let numero = parseInt(prompt("Coloque um número para a contagem Fibonacci."))
let fibonacci = []
fibonacci[0] = numero - 1
fibonacci[1] = numero


for(i = 2; i < 10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log("Sua contagem Fibonacci: "+fibonacci)