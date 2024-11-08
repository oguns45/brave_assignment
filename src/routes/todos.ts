import express from 'express'
import { createTodos, getTodos, health } from '../controllers/todos'
import protect from '../middlewares/authMw'

const router = express.Router()

router.get('/', health)
router.post('/todos', protect, createTodos)
router.get('/todos', protect, getTodos)

export default router