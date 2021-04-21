import express from 'express'
import mongoose from 'mongoose'
import movieRoutes from './routes/movies.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', movieRoutes)

const PORT = 2222
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology:true})
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})