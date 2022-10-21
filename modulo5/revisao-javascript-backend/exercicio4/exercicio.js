const listaFrutas1 = [
   {
      fruta: "melancia"
   },
   {
      fruta:"maçã"
   },
   {
      fruta: "pera"
   },
   {
      fruta: "laranja"
   },
   {
      fruta: "uva"
   }
]
const listaFrutas2 = [
   {
      fruta: "abacate"
   },
   {
      fruta: "pera"
   },
   {
      fruta: "uva"
   },
   {
      fruta:"maçã"
   },
   {
      fruta: "goiaba"
   },
   {
      fruta: "melancia"
   }
]

const listasDeFrutasAComprar= {...listaFrutas1,...listaFrutas2}
console.log(listasDeFrutasAComprar);