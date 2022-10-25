function checarTriangulo(a:number, b:number, c:number):string{
   if(a !== b && b !== c) {
      return"Escaleno"
   }else if(a=== b && b === c){
      return "Equilatero"
   }else{
      return "Isosceles"
   }
}
console.log(checarTriangulo(10,10,10));
console.log(checarTriangulo(10,10,5));
console.log(checarTriangulo(5,10,15));
