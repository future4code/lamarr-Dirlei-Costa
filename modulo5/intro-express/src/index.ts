import express, {Request, Response} from "express"
import cors from "cors"
import {pessoas, posts} from "./data"

const app = express()
app.use(express.json())
app.use(cors())


//exerciocio1

app.get("/test",(req: Request, res:Response)=>{
   res.send("Hello Express")
})



//exercicioe4

app.get("/lista",(req:Request, res:Response)=>{
   const listaUser = pessoas.map((user)=>{
      return user.email
   })
  
      res.status(400).send("Erro! Verificar lista de usuário e o id!")
   
   

   res.status(201).send(listaUser)
   
})


//Exercicio 7

app.post("/addList",(req:Request, res:Response)=>{
   // const lista = req.posts.listaUsuario

   res.status(400).send("Erro! ")
   
   
   

   res.status(201).send(lista)

})




app.listen('3003', ()=>{''
   console.log("Servidor rodando na porta http://localhost:3003");
   
})