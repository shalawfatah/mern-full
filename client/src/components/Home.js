

import React, { useContext } from 'react'
import { MovieContext } from './MovieProvider'


const Home = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
          Home  
          {movies.map(movie => movie.title)}
        </div>
    )
}

export default Home