import express, {Request, Response} from 'express'
import Todo from '../models/Todo'


export const health = async (req: Request, res: Response)=>{
    res.status(200).json({message:'Welcome to Todo app'})
}

 
 export const createTodos = async (req: Request, res: Response)=>{
    const {title, completed} = req.body
    const userId = (req as any).user.id

   try {
    const todo = await new Todo({
        title, completed, user: userId
    })
    await todo.save()
    res.status(201).json({error: false, data: todo})
   } catch (error:any) {
    res.status(500).json({error: true, data: error.message})
   }
}

export const getTodos = async (req:Request, res:Response)=>{
    const userId = (req as any).user.id

   try {
   const todos = await Todo.findOne({})
    res.status(200).json({error: false, data: todos})
   } catch (error:any) {
    res.status(500).json({error: true, data: error.message})
   }
}

