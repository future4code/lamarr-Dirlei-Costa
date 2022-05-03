 // Exercícios de interpretação de código

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} 

// a -  O código está dando duas  condições, caso o número digitado seja par, será um resultado, mas  se o número digitado for impar, terá outra condição.
// b - Para números pares.
// c - Para números impar.

// 2-

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) 

// a- Automatizar, onde o próprio sistema informa o preço de cada produto pesquisado.
// b - O preço da fruta  Maçã  é  R$  2.25
// c - O preço da fruta  Pêra  é  R$  5

 
// 3 - 
const numero1 = Number(prompt("Digite o primeiro número."))

if(numero1 > 0) {
 console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) 

// a -Solicitando ao usúario que digite um número.
// b - Esse número passou no teste! Digitando o -10, terá erro, pois não esta definido valor negativos .
// c - ????


//Exercícios de escrita de código

// 1 -
const idade = parseInt(prompt(" Qual a sua idade ?"))
const comCnh =prompt("Você possui CNH ? Respoda Sim ou Não !")
if(idade >= 18 && comCnh === "Sim") {
   console.log("Você pode dirigir !" )
}else {
   console.log(`Você não dirigir`);
}

// 2 -
 alert("Olá, informe o seu horário de estudo !")
const horario = prompt("Digite a letar M (Matutino), V (Vespetino) ou N (Noturno ! ") 
if (horario === "M"){
   console.log("Bom Dia!")
}else if( horario === "V") {
   console.log("Boa Tarde")
   }else (horario === "N") 
      console.log("Boa Noite!");

      // 3 -

alert("Olá, informe o seu horário de estudo !")
let horario1 = prompt("Digite a letar M (Matutino), V (Vespetino) ou N (Noturno ! ") 
 switch (horario1){
    case "M":
     console.log("Bom dia!");
       break;
    case "V":
       console.log("Boa Tarde!");
       break;
       case "N":
          console.log("Boa noite")
          break;
          default: "Ola "
          horario
          break;
 }

   

// 4 -
const tipoFilme = prompt("Qual é o gênero deste filme?")
const valorEntrada = Number(prompt("Quanto está a entrada ?"))
const generoFilme = "fantasia"
if( tipoFilme === generoFilme && valorEntrada < 15) {    
   console.log("Bom filme, vamos assitir !")
  
}else{
   console.log("Escolha outro filme :( ")
}
 
//Desafios 
// 1 -

const tipoFilme1 = prompt("Qual é o gênero deste filme?")
const valorEntrada1 = Number(prompt("Quanto está a entrada ?"))
const generoFilm1e = "fantasia"
if( tipoFilme === generoFilme && valorEntrada1 < 15) {    
   const faltouLanche = prompt("Qual lanche vai compra ?")
    console.log(  "Bom filme !")
    console.log("Aproveite o seu" + faltouLanche)
  
}else{
   console.log("Escolha outro filme :( ")
}
