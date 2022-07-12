import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <div className="brand">
                   <Link to="/watchList"></Link>
                </div>

                <ul className='nav-links'>
                    <li> 
                        <Link to="/add">Add Movie</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
