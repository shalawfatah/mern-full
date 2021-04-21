
import React, { createContext, useEffect, useState } from 'react'

export const contextDirector = createContext()

export const DirectorProvider = ({children}) => {
    const [directors, setDirectors] = useState([])
    const fetchDirectors = async () => {
        const response = await fetch('http://localhost:2222/directors/')
        const data = await response.json()
        setDirectors(data)
    }
    useEffect(()=> {
        fetchDirectors()
    }, [])
    return (
        <contextDirector.Provider value={[directors, setDirectors]}>
            {children}
        </contextDirector.Provider>
    )
}