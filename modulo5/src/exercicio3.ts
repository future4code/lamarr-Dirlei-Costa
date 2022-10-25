const checarAnoBissexto = (ano: number):boolean => {
   let condicao1 = ano % 400 ===0
   let condicao2 = (ano % 4 ===0) && (ano % 100 !== 0)
   return condicao1 ||condicao2
}

console.log(checarAnoBissexto(2022));
console.log(checarAnoBissexto(2023));
console.log(checarAnoBissexto(2024));
