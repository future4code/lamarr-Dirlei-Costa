 // ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
let retorno = array.length

return retorno
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   let inversso = array.reverse()
   return inversso
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let ordenaArray = array.sort((a, b) => a-b)
  return ordenaArray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let retorno = array.filter(pares => (pares % 2 )=== 0 )
   return retorno

}

// EXERCÍCIO 05
 function retornaNumerosParesElevadosADois(array) {
   let numElevado =array.filter(pares => (pares  % 2 )  === 0) 
   let novoArray = numElevado.map(pares =>(Math.pow(pares, 2 )))
   return novoArray
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let devolMaiorNum = 0
   for(let numArr of array){
      if(numArr > devolMaiorNum){
         devolMaiorNum = numArr
      }
   }
  return devolMaiorNum
}

// EXERCÍCIO 07
 function retornaObjetoEntreDoisNumeros(num1, num2) {

   let devolMaior 
   let devMenorNum
   let ehdivisivel 

   if(num1 > num2) {
      devolMaior = num1

   devMenorNum = num2
   }else{
      devolMaior = num2

      devMenorNum = num1
   }
   if(devolMaior % devMenorNum === 0) {
      ehdivisivel = true
   }else{
      ehdivisivel = false

   }
   let diferenca  = devolMaior -devMenorNum

   let obj = {
      maiorNumero: devolMaior,
      maiorDivisivelPorMenor: ehdivisivel,
      diferenca: diferenca 
   }
   return obj
} 



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numPares = [];
    for (let i = 0; numPares.length < n; i ++) {
        if (i % 2 == 0) {
            numPares.push(i)
        }
    }
    return numPares;

    
} 

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
const tr1 = ladoA
const tr2 = ladoB
const tr3 = ladoC 
if ( tr1 < (tr2 + tr3) && tr2 < (tr1 + tr3) && tr3 < (tr1 + tr2)){
   if(tr1 == tr2 && tr2 == tr3 ){
      return "Equilátero"
}else if (tr1 == tr2 || tr1 == tr3 || tr3 == tr2) {
   return "Isósceles"
}else{
   return "Escaleno"
}
}
}

// EXERCÍCIO 10
 function retornaSegundoMaiorESegundoMenor(array) {

}
  


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

   return  (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`)


}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const novoObj = {
     ...pessoa,
     nome: "ANÔNIMO"
   }
  return novoObj
  

}

// EXERCÍCIO 13A
 function retornaPessoasAutorizadas(pessoas) {
   let pessoasPermitidas = pessoas

      for (let pessoa of pessoas) {
        if( pessoa.idade >= 14 && pessoa.altura >= 15 && pessoa.idade < 60){
           pessoasPermitidas.push(pessoa)

        }
        return pessoasPermitidas
      }
  
   
} 


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const naoAutorizada = pessoas
   for(let pessoa of pessoas){
      if(pessoa.idade < 14 || pessoa.altura < 15 || pessoa.idade > 60) {
         naoAutorizada.push(pessoa)
      }
   }
   return naoAutorizada

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   const ordemNome = consultas.sort((a , b) => {
      return a.nome.localeCompare(b.nome)
   })
   return ordemNome
}

// EXERCÍCIO 15B
 function retornaArrayOrdenadoPorData(consultas) {

   const ordemData = consultas.sort((a , b) => {
      return a.dataDaConsulta - b.dataDaConsulta
   })
   return ordemData
   
}   