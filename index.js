import express from 'express'
import {db} from './config/db.js'
import movieRoutes from './routes/movies.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', movieRoutes)

const PORT = 2222

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})