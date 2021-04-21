import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MovieSchema = Schema({
    title: String,
    release: {
        type: Date,
        default: Date.now()
    },
    actors: [
        {name: String, bio: String}
    ],
    genre:[String],
    director: String
})

const Movie = mongoose.model('Movie', MovieSchema)
export default Movie