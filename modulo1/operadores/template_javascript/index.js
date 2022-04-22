const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)      // a-false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)      // b-false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)    // c- true

console.log("d. ", typeof resultado)      // d-boolean


// exercicio - 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Prompt sempre retornará um resultado em string, para um resultado de soma, neste caso é preciso pedir para a conversão para Number! 



// exercicios - 3

let primeiroNumero =Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma, typeof soma)  
