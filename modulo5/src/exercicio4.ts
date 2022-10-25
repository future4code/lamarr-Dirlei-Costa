function compararNumeros(n1:number, n2:number):number{
   let maiorNun:number
   let menorNun:number
    if(n1 > n2) {
      maiorNun = n1
      menorNun = n2
    }else{
      maiorNun = n2
      menorNun = n1
    }

    const resutado:number = maiorNun - menorNun
    return resutado
}

console.log(compararNumeros(10, 11));
