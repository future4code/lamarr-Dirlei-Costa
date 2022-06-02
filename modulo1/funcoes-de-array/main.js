//Exercícios de interpretação de código:

 const usuarios = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" }
 ]
 
 const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array)
 }) 
// a - Será impresso a lista de objeto, com todos seu array

// 2.

   // Sera impresso o nome da lista, sem os apelidos.
 

//3.
 
 //  Será impresso a lista com apelidos < > de "Chijo".



 //Exercícios de escrita de código:

// 1.
  //  a-
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]


const listaDeDogs = pets.map(dog =>dogs.nome)
console.log(listaDeDogs)


//b-
const soSalsichas = pets.filter(salsixinha=>salsixinha.raca ==="Salsicha")
console.log(soSalsichas) ;


//c-
const paraPoodles = pets.filter(desconto=>desconto.raca === "Poodle")
      
console.log(paraPoodles)
console.log( `Você ganhou um cupom de desconto de 10% para tosar o/a ` );


// 2. a-

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


// a.
const feira = produtos.map(lista =>lista.nome)
console.log(feira) 

// **** b.
//const precoFeira = produtos.filter(lista => lista.produtos)

// c.
 const bebidas = produtos.filter(bebida => bebida.categoria === 'Bebidas' )
console.log(bebidas) 

// d.
const soYpe = produtos.filter((item) => {
   return  item.nome.includes('Y')
})

console.log(soYpe);


// e.****

//Desafios

//a.
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]
 
 const sorted = pokemons.sort((a,b )=>{
   return a.nome.localeCompare(b.nome)
})
console.log(sorted)
 































