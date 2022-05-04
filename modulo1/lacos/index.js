//Exercícios de interpretação de código:

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
// imprime 10,  apos incremento, a variavel soma mais 1 bloco.

// 2-

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} 
// a- Vai imprimir um array acima do 19, 21, 23, 25, 27, 30.
// b - Sim. chama no console a variavel lista e selecionao indice que deseja .
//3 - A cada linha impressa com asterisco, vai incrementado mais 1 asterisco por linha, com um total de 4 linhas.


//Exercícios de escrita de código

// 1-

let animaisEstimação = Number(prompt("Quantos animais de estimção você possui?"))
let arrayNome = []
if( animaisEstimação  === 0 ) {
   console.log('Que pena! Você pode adotar  um pet!' )
 } else if(animaisEstimação > 0)
       for( let  i = 1; i < animaisEstimação + 1; i ++) {
         arrayNome.push(prompt(`Digite o nome do seu: ${i}`))
        
       }
       
console.log(arrayNome) 


// 2


 
