
import express, {Request, Response}from "express"
import cors from 'cors'
import { afazeres } from "./datas"

//exercício-1
const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping",(req:Request, res: Response)=>{
  res.send("Pong! 🏓")

})


//exercício-2
app.get("/todos",(req:Request, res: Response)=>{
  const todos = afazeres.map((user)=>{
    return user.userId

  })
  res.send(todos)









app.listen(3000, () => {
    console.log("Servidor rondando na porta http://localhost:3000");
})
