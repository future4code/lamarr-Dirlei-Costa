//exercicio2
export type Users = {
   id: number,
   name:string,
   phone: number,
   email: string,
   website: string
}

//exercicio3

const pessoas: Users[] = [
  {
    id: 3,
    name: "Kathe Lima",
    phone: 1234512345,
    email:"kath@lima.com",
    website:"devkathe.com"
  },
  {
    id: 2,
    name: "Ana Paula",
    phone: 1234512345,
    email:"ana@paula.com",
    website:"anaclara.com"
  },
  {
    id: 1,
    name: "Maria Clara",
    phone: 1234512345,
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

const posts:Post[] = [
  {
    id: 1,
    body : "lamarr",
    title : "Desenvolvimento web",
    userId: 2,
  }
]