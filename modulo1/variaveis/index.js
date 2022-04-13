//Interpretação de código

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)  // 5 10


let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // 10 10 10

let horaDiaria = prompt("Quantas horas você trabalha por dia?")
let valorDaDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDaDiaria/horaDiaria} por hora`)

//Escrita de código

var nome 
var idade

console.log(typeof idade);//undefined = sem valor definido, não á valore definido.
console.log(typeof nome);  //undefined = sem valor definido, não á valore definido.


var nome = "Pedro";
var idade = 18;

console.log("Qual é o seu nome? " + nome, "e a sua idade? " + idade,"anos") ; 

console.log(typeof  nome); // "string".
console.log(typeof  idade); //"number"

alert ("Olá");

let ehMaiorDeIdade = prompt("Voce é maior de 18");
let estudanteProgramacao = prompt("Você é estudante");
let gostaDeEsportes = prompt("Você prática esporte");
ehMaiorDeIdade = "Nao";
estudanteProgramacao = "Sim";
gostaDeEsportes = "Sim";

console.log(ehMaiorDeIdade) ;
console.log(estudanteProgramacao);
console.log( gostaDeEsportes);



let num1 = 20;
let num2 = 30;
num1 = 30;
num2 = 20;

console.log(num1, num2); //num1=30  num2=20.