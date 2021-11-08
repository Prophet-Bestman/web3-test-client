import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="sec">
            <div className="header">
                <h2>Web3 App</h2>
                <nav>
                    <ul>
                        <li>
                            <Link className="link" to="">Home</Link>
                            
                        </li>
                        <li>
                            <Link className="link" to="users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
