import express, {Request, Response} from "express"
import cors from "cors"
import { Users } from "./data"

const app = express()
app.use(express.json())
app.use(cors())


//exerciocio1

app.get("/",(req: Request, res:Response)=>{
   res.send("Hello Express")
})

//exercicioe4

app.get("/posts",(req:Request, res:Response)=>{
   const postagem = req.headers.postagem
   console.log(postagem);

   res.status(201).send("!Rondando com sucesso")
   
})


app.listen(3003, ()=>{
   console.log("Servidor rodando na porta http://localhost:3003");
   
})