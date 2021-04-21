import express from 'express'
import {getAllMovies, getOneMovie, postOneMovie, deleteOneMovie, updateOneMovie} from '../controllers/movieController.js'
import {getAllDirectors, getOneDirector, postOneDirector, deleteOneDirector, updateOneDirector} from '../controllers/directorController.js'

const router = express.Router()

// Home Route
router.get('/', (req, res)=> {
    res.send('Home Route')
})

// Movie Routes
router.get('/movies', getAllMovies)
router.get('/movies/:id', getOneMovie)
router.post('/movies', postOneMovie)
router.delete('/movies/:id', deleteOneMovie)
router.patch('/movies/:id', updateOneMovie)

// Director Routes
router.get('/directors', getAllDirectors)
router.get('/directors/:id', getOneDirector)
router.post('/directors', postOneDirector)
router.delete('/directors/:id', deleteOneDirector)
router.patch('/directors/:id', updateOneDirector)

export default router



