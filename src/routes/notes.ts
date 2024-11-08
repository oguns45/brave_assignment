import express from 'express'
import { createNote, getAllNotes, getNoteById, updateNote, deleteNote } from '../controllers/note'
import protect from '../middlewares/authMw'

const router = express.Router()

//router.get('/', )
router.post('/note',  createNote)
router.put('/note/:id',   updateNote)
router.get('/note', getAllNotes)
router.get('/note/:id',   getNoteById)
router.delete('/note/:id',  deleteNote)

export default router