
import express, {Request, Response}from "express"
import cors from 'cors'
import { afazeres, Usuarios } from "./datas"

const app = express()
app.use(express.json())
app.use(cors())

//exercício-1
app.get("/ping",(req:Request, res: Response)=>{
  res.send("Pong! 🏓")

})


//exercício-4
app.get("/todos/:id",(req:Request, res: Response)=>{})
 
 
 
//exercicio -5

app.post("/todos",(req:Request, res:Response )=>{
  const userId=req.body.userId
  const title=req.body.title
  
  const newUser:Usuarios={
    userId,
    id: Date.now(),
    title,
    completed:false
  }
  
  afazeres.push(newUser)
  res.send(afazeres)
  
  })
  
  //exercio 6
  
  app.put("/todos/:id/alteraCadstro",(req:Request, res: Response)=>{
  
    const alteraId = Number(req.params.altera)
    
    for(let todos of afazeres){
      if(todos.id=== alteraId){
      todos.completed = !todos.completed
      }
    }
    res.send(afazeres)
    
  })
  
  //exercicio-7
  
  app.delete("/todos/:id",(req:Request, res: Response)=> {
      const id = Number(req.params.id)
      
      for(let i = 0; i < afazeres.length; i++){
        if(afazeres[i].id===id){
        afazeres.splice(i,2)
        }
    }
    res.send(afazeres)
  
  })
  
  
  //exeercicio-8
  app.get("/users/:userId/todos", (req:Request, res:Response) => {
    const userId = Number(req.params.userId)
  
    const result = afazeres
  
    for (let todo of afazeres) {
      if (todo.userId === userId) {
        result.push(todo)
      }
    }
  
    res.send(result)
  })
  




app.listen(3003,() => {
    console.log("Servidor rondando na porta http://localhost:3003")

})
