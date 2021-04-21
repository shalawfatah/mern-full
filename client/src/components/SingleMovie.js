

import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { MovieContext } from './MovieProvider'

const SingleMovie = () => {
    const [movies, setMovies] = useContext(MovieContext)
    const {title} = useParams()
    const single = movies.find(mov => {
        return mov.title === title
    })
    return (
        <div>
            <h1>Movies</h1>

                    <>
                    <h2>{single.title}</h2>
                    <p>{single.director.name}</p>
                    <img className="movie-image" src={single.picture} alt={single.title} />
                    <p>{single.release}</p>
                    <div>
                        {single.genre.map(gen => {
                            return (
                                <li>{gen}</li>
                            )
                        })}
                    </div>
                    </>
        </div>
    )
}

export default SingleMovie
