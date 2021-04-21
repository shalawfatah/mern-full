

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from './MovieProvider'


const Home = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
          <h1>Movies</h1>
            {movies.map(movie => {
              return (
                <Link to={`/movies/${movie.title}`}>{movie.title}</Link>
              )
            })}
        </div>
    )
}

export default Home