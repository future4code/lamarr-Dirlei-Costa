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
   let retorno = array.filter(pares => (pares % 2 ) == 0 )
   return retorno

}

// EXERCÍCIO 05
/* function retornaNumerosParesElevadosADois(array) {
   let numElevado =array.filter(pares => (pares  % 2 )  == 0) 
   return  Math.pow(pares, 2) 
 
 
}*/

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
   const obj = 
      {
         maiorNumero:  num1,
         maiorDivisivelPorMenor: true,
         diferenca: num2
      }

   if(maiorNumero / diferenca === maiorDivisivelPorMenor)

           return obj.maiorNumero +30 + obj.maiorDivisivelPorMenor + true +obj.diferenca +15
 }



// EXERCÍCIO 08
/* function retornaNPrimeirosPares(n) {
   let numPares = [];
    for (let i = 0; numPares.length < n; i ++) {
        if (i % 2 == 0) {
            numPares.push(i)
        }
    }
    return numPares;

    
} */

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
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
} 