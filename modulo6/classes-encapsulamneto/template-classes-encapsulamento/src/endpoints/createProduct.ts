import { Request, Response } from "express"
import connection from "../database/connection"
import { Product } from "../class/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.query.id as string
        const name = req.body.name
        const price = req.body.price

        if (!id || !name || !price) {
            throw new Error("Body inválido.")
        }

        const newProduct: Product = {
            id: Date.now().toString(),
            name,
            price
        }
        await connection("TABLE_PRODUCTS").insert(newProduct)
            
        res.status(201).send({ message: "Novo produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}