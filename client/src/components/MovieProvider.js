

import React, { createContext, useEffect, useState } from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const url = 'http://localhost:2222/movies'
    const fetchMovies = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setMovies(data)
        console.log(data)
    }
    useEffect(()=> {
        fetchMovies()
    }, [])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
    )
}

