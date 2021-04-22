

import React, { useContext } from 'react'
import { Redirect, useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { MovieContext } from './MovieProvider'

const SingleMovie = () => {
    const [movies, setMovies] = useContext(MovieContext)
    const {title} = useParams()
    const single = movies.find(mov => {
        return mov.title === title
    })
    const history = useHistory()
    const handleHistory = () => {
        history.push(`/directors/${single.director.name}`)
    }
    return (
        <div>
            <h1>Movies</h1>

                    <>
                    <h2>{single.title}</h2>
                    <p style={{cursor:'pointer'}} onClick={handleHistory}>{single.director.name}</p>
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
