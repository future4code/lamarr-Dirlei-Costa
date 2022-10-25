function checaRenovacaoRG(): boolean{

   const anoAtual:number=Number(process.argv[2])
   const anoNascimento:number=Number(process.argv[3])
   const anoEmissor:number=Number(process.argv[4])
   const idade:number = anoAtual - anoNascimento;
   const tempoDeCarteira:number =anoAtual - anoEmissor;

   const situacao1:boolean = idade <= 20 && tempoDeCarteira >= 5;
   const situacao2:boolean = idade > 20 && idade <= 50 && tempoDeCarteira >=10;
   const situacao3:boolean = idade > 50 && tempoDeCarteira >= 15

   return (situacao1 || situacao2 || situacao3)
}
console.log(checaRenovacaoRG());
