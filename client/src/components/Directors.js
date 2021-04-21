

import React, { useContext } from 'react'
import {contextDirector} from './DirectorProvider'

const Directors = () => {
    const [directors, setDirectors] = useContext(contextDirector)
    return (
        <div>
            <h1>Directors</h1>
            {directors.map(director => {
                return (
                    <>
                    <h1>{director.name}</h1>
                    <p>{director.bio}</p>
                    </>
                )
            })}
        </div>
    )
}

export default Directors
