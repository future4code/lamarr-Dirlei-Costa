//Interpretação de código 
//Exercicio-1.

let array
console.log('a. ', array) 
// a - undefined

array = null
console.log('b. ', array) 
 //b - null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  
// c - o total de itens  (11)

let i = 0
console.log('d. ', array[i])
//  d - 3

array[i+1] = 19
console.log('e. ', array)
// e - [ 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

const valor = [i+6]
console.log('f. ', valor)

// f - 9

// Exercicio-2.\

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// A letars "A" é subistituda por "I",  e o total de caracteres da string.



 Escrita de código
// exercicio-1.

//a.
let nomeUsuario = prompt(" Digite seu nome e sobrenome !");
let emailUsuario = prompt("Digite seu email !")

console.log(`O seu e-mail ${emailUsuario} foi cadastradado com sucesso. Seja bem vindo(a) ${nomeUsuario}`);

//-2.

//b.
let prastosPreferidos = ["Lasanha", "Pizza", "Lanches", "Arroz com feijão", "Churrascos"];
console.log(prastosPreferidos);
console.log("Essas são as minhas comidas preferidas: ");
console.log(prastosPreferidos[4]);
console.log(prastosPreferidos[2]);
console.log(prastosPreferidos[1]);
console.log(prastosPreferidos[3]);
console.log(prastosPreferidos[0]);

//c
let opcaoCliente = prompt("Qual a opção  pra hoje ?");
opcaoCliente = "Macarrão";
prastosPreferidos[3] = opcaoCliente;

console.log(prastosPreferidos);
console.log(opcaoCliente);


//-3.
let listaDeTarefas = []
let usuarioSuaTarefaP = prompt("Primeira tarefa do dia !")
listaDeTarefas["Primeira"] = listaDeTarefas

let usuarioSuaTarefaS = prompt("Segunda tarefa do dia !")
listaDeTarefas["Segunda"] = listaDeTarefas;

usuarioSuaTarefaT= prompt("Teceira tarefa do dia !");
listaDeTarefas["Terceira"] = listaDeTarefas;

console.log(listaDeTarefas);

let tarefaOk= prompt("Qual tarefa já foi concluida ? ");
let  tarefaConcluida = listaDeTarefas.splice(tarefaOk, ["Pimeira"]);

console.log(tarefaOk);

