import  {Schema, Types, model} from 'mongoose'
import { TodoInterface } from '../utils/Interfaces'

const todoSchema = new Schema<TodoInterface>({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export default  model('Todo', todoSchema)