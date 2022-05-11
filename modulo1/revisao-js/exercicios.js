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

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
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