/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    const play = confirm("Bem vindo(a) jogador(a)! \n Quer iniciar uma nova rodada?");
    console.log(("Ola seja bem vindo(a) ao Black-Jack"));

    if (play) {
const souEu = comprarCarta();
const euDeNovo = comprarCarta();
const cartaMaquina = comprarCarta();
const cartaMaquinaII = comprarCarta();

const meusPontos = souEu.valor + euDeNovo.valor;
const pontosRobo = cartaMaquina.valor + cartaMaquinaII.valor;

console.log(`Minhas  cartas: ${souEu.texto} ${euDeNovo.texto} - ${meusPontos}`);
console.log(`Cartas da Máquina: ${cartaMaquina.texto} ${cartaMaquinaII.texto} - ${pontosRobo}`);

if (meusPontos > pontosRobo) {
   console.log("Você venceu a partida!");
} if (pontosRobo > meusPontos) {
   console.log("A Máquina venceu a apartida!");
} if (meusPontos === pontosRobo) {
   console.log("JOGO EMPATADO!");
}
} else {
console.log(" Fim de jogo! :( ");
}

 