const listClient =[
   {id:1, nome: "Pedro"},
   {id:2, nome: "Ana"},
   {id:3, nome: "José"},
   {id:4, nome: "Maria"},
]
const newClient = "Clara"

const newListClient = () => {

      listClient.push({ id: 5 , nome: newClient })
   }
   newListClient()
   console.log(listClient);

   

//  TABUADA


   const geraTabuada = (num) => {
   const resultado = []

    for (let i = 0; i <= 10; i++) {
        resultado.push(`${num} x ${i} = ${num * i}`)
    }

    return resultado
}

console.log(geraTabuada(10));
   
   


