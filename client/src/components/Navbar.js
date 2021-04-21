

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/movies'>Movies</Link>
            </li>
            <li>
            <Link to='/directors'>Directors</Link>
            </li>
        </div>
    )
}

export default Navbar
