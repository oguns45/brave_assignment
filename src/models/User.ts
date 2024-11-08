import {model, Schema, Types} from 'mongoose'
import { UserInterface } from '../utils/Interfaces'





const userSchema = new Schema<UserInterface>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



export default model('User', userSchema)