import Movie from '../models/Movie.js'

export const getAllMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find()
        await res.json(allMovies)
    } catch (error) {
        console.log(error)
    }
}

export const getOneMovie = async (req, res) => {
    const {id} = req.params
    try {
        const oneMovie = await Movie.findById({_id: id})
        if(!oneMovie) res.send('No Movie is found')
        res.json(oneMovie)        
    } catch (error) {
        console.log(error)
    }
}

export const postOneMovie = async (req, res) => {
    const {title, release, actors, genre} = req.body
    const {director} = req.body.directorId
    try {
        const newMovie = await new Movie({title, release, actors, genre, director})
        const savedMovie = await newMovie.save()
        res.json(savedMovie)
    } catch (error) {
        console.log(error)
    }
}

export const deleteOneMovie = async (req, res) => {
    const {id} = req.params
    try {
        const deleteMovie = await Movie.findByIdAndDelete({_id: id})
        res.json('Director Deleted')
    } catch (error) {
        console.log(error)
    }
}

export const updateOneMovie = async (req, res) => {
    res.send('Update One Movie')
}

/*
    title: String,
    release: {
        type: Date,
        default: Date.now()
    },
    actors: [
        {name: String, bio: String}
    ],
    genre:[String],
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director'
    }
*/