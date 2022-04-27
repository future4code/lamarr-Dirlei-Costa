/// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo ( ) {
  let altura = Number(prompt("Digite a sua altura !"))
  let largura = Number(prompt(" Digite a sua largura"))
  console.log(altura * largura);
  // implemente sua lógica aqui
}

// EXERCÍCIO 02
function imprimeIdade ( ) {
  let anoAtual = Number(prompt("Em que ano estamos ?"))
  let anoNascimento = Number(prompt("Qual é o ano de seu nascimeneto?"))
  console.log(anoAtual - anoNascimento);
  // implemente sua lógica aqui
}

 // EXERCÍCIO 03
 function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario ( ) {
  let nome = prompt("Digite seu nome !")
  let idade =Number(prompt("Digite a sua idade !"))
  let email = prompt("Digite o seu e-mail !")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 
   // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas ( ) {
  let primeiracor= prompt('Digite sua primeira cor')
  let segundacor= prompt('Digite sua segunda cor')
  let terceiracor= prompt('Digite sua terceira cor')
 console.log([primeiracor, segundacor, terceiracor]);
  // implemente sua lógica aqui
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 return string.toUpperCase("maiúscula")

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const soma = custo / valorIngresso;
  return soma;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  if (string1.length == string2.length){
    return true
  }else{
    return false
  }
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
   array  ["Hello", "Word"]
   return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array [1, 2, 3, 4]
  return array [array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = retornaPrimeiroElemento(array)
   const ultimo = retornaUltimoElemento(array)
   array [1., 2, 3, 4]
   array[0] = ultimo
  array[array.length - 1] = primeiro
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual!"))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento!"))
  const anoEmissorDocumento = Number(prompt("Digite o ano de emissão de RG!"))

  const idade = anoAtual - anoDeNascimento
  const tempoRG = anoAtual - anoEmissorDocumento

  const primeiraCondicao = idade <= 20 && tempoRG >= 5
  const segundaCondicão = idade > 20 && idade <= 50 && tempoRG >= 10
  const terceiraCondicao = idade > 50 && tempoRG >= 15
  console.log(primeiraCondicao || segundaCondicão || terceiraCondicao)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui 
  let anoBissexto1 = ano % 400 === 0
  let anoBissexto2 =  (ano % 4 == 0) && (ano % 100 !==0)
  return anoBissexto1 || anoBissexto2
  
}

//EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let maiorDeIdade = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(maiorDeIdade == "sim" && ensinoMedio == "sim" && disponibilidade == "sim" ) 


  }
