

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {contextDirector} from './DirectorProvider'

const Directors = () => {
    const [directors, setDirectors] = useContext(contextDirector)
    return (
        <div>
            <h1>Directors</h1>
            {directors.map(director => {
                return (
                    <>
                    <Link to={`/directors/${director.name}`}>
                    <h1>{director.name}</h1>
                    </Link>
                    </>
                )
            })}
        </div>
    )
}

export default Directors
