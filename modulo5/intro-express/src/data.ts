//exercicio2
 type Users = {
   id: number,
   name:string,
   phone: number,
   email: string,
   website: string
}

//exercicio3

export const pessoas: Users[] = [
  {
    id: 3,
    name: "Kathe Lima",
    phone: 12345123450,
    email:"kath@lima.com",
    website:"devkathe.com"
  },
  {
    id: 2,
    name: "Ana Paula",
    phone: 1234512341,
    email:"ana@paula.com",
    website:"anaclara.com"
  },
  {
    id: 1,
    name: "Maria Clara",
    phone: 12345123452,
    email:"maria@clara.com",
    website:"devclara.com"
  },
]


//exercicio 5

type Post = {
  id:number,
  body: string,
  title: string,
  userId:number,

}

//exercicio 6

export const posts:Post[] = [
  {
    id: 1,
    body : "lamarr",
    title : "Desenvolvimento web",
    userId: 2,
  }
]
