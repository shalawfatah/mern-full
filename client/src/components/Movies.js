

import React, { useContext } from 'react'
import { MovieContext } from './MovieProvider'
import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            <h1>Movies</h1>
            {movies.map(movie => {
                return (
                    <>
                    <h2>{movie.title}</h2>
                    <p>{movie.director.name}</p>
                    <img className="movie-image" src={movie.picture} alt={movie.title} />
                    </>
                )
            })}
        </div>
    )
}

export default Movies

/*
    title: String,
    picture: String,
    video: String,
    release: {
        type: Date,
        default: Date.now()
    },
    actors: [
        {name: String, bio: String}
    ],
    genre:[String],
    director: {
*/