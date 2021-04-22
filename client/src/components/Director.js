
import React, { useContext } from 'react'
import { useParams } from 'react-router'
import {contextDirector} from './DirectorProvider'

const Director = () => {
    const [directors, setDirectors] = useContext(contextDirector)
    const {name} = useParams()
    const single = directors.find(director => {
        return director.name === name
    })
    return (
        <div>
            <h1>Director</h1>
                <h1>{single.name}</h1>
                <p>{single.age}</p>
                <img src={single.picture} alt={single.name} />
                <p>{single.bio}</p>
        </div>
    )
}

export default Director