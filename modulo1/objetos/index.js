//exercício - 1  interpretação de código

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])  //Matheus Nachtergaele

console.log(filme.elenco[filme.elenco.length - 1])    //Virginia Cavendish

console.log(filme.transmissoesHoje[2])    //"Globo"
                                                                    //"14h"

//exercício -2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //Juca , 3, SRD
console.log(gato)     //Juba, 3, SRD
console.log(tartaruga)  //Jubo, 3, SRD

// b -(três pontinhhos )Esse é o Spread Operator, (espelhamento), serve basicamente, para você dizer que podem ser passados diversos parametros naquela função.


//exercício - 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))  //a - false ""
console.log(minhaFuncao(pessoa, "altura")) // undefined "não foi definido propriedade"

//escrita de código - a.

const amigo = {
   nome: "Carlos",
   apelido: ["Chapolin"," Chapa", " Soneca"],
   meuAmigo: ( ) => { console.log(`Eu sou ${amigo.nome}, mas pode me chamar de: ${amigo.apelido}`)}
}

amigo.meuAmigo()

// b.

const comSpread = { ...amigo, apelido: [ "Cunha", " Cunhado"," Chegado"],

}
console.log(` Eu sou ${comSpread.nome}, mas pode me chamr de: ${comSpread.apelido}`)

//Exercício -2.

const novoCandidato = {
   nome: "Ana Clara",
   idade: 20,
   profissao: "Desevolvedora" ,
}
const novoCandidato1 = {
   nome: "Ana Clara",
   idade: 20,
   profissao: "Desevolvedora" ,
}
 function informacaoCandidatos  (item )  {
    let arrayInfo = [item.nome, item.length, item.idade, item.profissao, item.profissao.length]

return arrayInfo

}

console.log(informacaoCandidatos(novoCandidato))
console.log(informacaoCandidatos(novoCandidato1))

  
//Exercício -3.

let carrinho = [];
const frutasVerdes = {
   nome: "Abacate",
   disponivel: true,
}
const frutasVermelhas = {
   nome: "Morango",
   disponivel: true,
}
const frutasCitricas = {
   nome: "Abacaxi",
   disponivel: true,
}

function sacolao (frutas) {
   carrinho.push(frutas)
}

sacolao(frutasVerdes);
sacolao(frutasVermelhas);
sacolao(frutasCitricas);
console.log(carrinho);*/

let igualdade = prompt("digite um numero!")
function numerosIguais  (num1, num2 ) {
   if(num1 == num2) {
      console.log("Números são identicos");
   }else {
      console.log("Numeros se parece, mas não são identicos")
   }
   return igualdade

}
numerosIguais(20)
