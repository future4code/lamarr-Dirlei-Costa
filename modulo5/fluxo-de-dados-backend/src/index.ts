
import express, {Request,Response} from "express"
import cors from 'cors'
import { produtos } from "./data"
import { Produto } from "./types"
import { stringify } from "querystring"

const app = express()
app.use(express.json())
app.use(cors())

//Exercício-1
app.get("/test",(req:Request, res:Response) => {
        
         res.status(200).send("Servidor rodando na porta http://localhost:3003")
    
})

//Exercício-4

app.post("/product",(req:Request, res:Response) => {
    
    let errorCode = 422
    try{
    const {newId, newName, newPrice } = req.body
    
    if(!newId || !newName || !newPrice) {
        throw new Error("Faltando passar paramentros! id, name, price");
    }
    const newProduto: Produto={
        id:newId,
        name:newName,
        price:newPrice
    }
    produtos.push(newProduto)
    res.status(201).send(produtos)
   
    }catch (error:any) {
         res.status(errorCode).send(error.message)
    }
})

//Exercício-5

app.get("/lista/produtos",(req:Request, res:Response) => {
    
    let errorCode = 400
    try{
    
    const listaProdutos = produtos.map((list)=> {
        return list.name
    })
    res.status(200).send(listaProdutos)
    
    }catch (error:any) {
         res.status(errorCode).send(error.message)
    }
})

//Exercício-6

app.patch("/lista/:id",(req:Request, res:Response) => {
    let errorCode = 400
    
    try{
        let alteraPreco = req.params.id
        let {newPrice}=req.body
        
        if(!newPrice){
            errorCode = 422
            throw new Error("Passarem paramentros a serem atualizados");
        }
               
        for(let preco of produtos  ){
            if(alteraPreco===preco.id){
                preco.price=newPrice
            }
        }
        res.status(201).send(produtos)
    
        
    }catch (error:any) {
         res.status(errorCode).send(error.message)
    }
})



//Exercício-7
app.delete("/delete/:id",(req:Request, res:Response) => {
    
    let errorCode = 400
    try{
    const produtoId = req.query.id
    if(!produtoId){
        errorCode = 400
        throw new Error("Passarem paramentros da requisição")
    }
    

    }catch (error:any) {
         res.status(errorCode).send(error.message)
    }
})


app.get("/test",(req:Request, res:Response) => {
    
    let errorCode = 400
    try{
    

        
    }catch (error:any) {
         res.status(200).send("")
    }
})





app.listen(3003, () => {
    console.log("Servidor rodando na porta http://localhost:3003");
});