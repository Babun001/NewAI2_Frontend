import React from 'react';
import navLinks from '../Modules/NavList.module';
import { Link } from 'react-router-dom';

export default function Navbar() {




    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container">
                <h1 className="text-white mb-0" style={{fontWeight:"700"}}>Logo</h1>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" style={{
                        width:"80rem",
                        display:"flex !important",
                        justifyContent:"space-evenly"
                    }}>
                        {navLinks.map((link, indx) => (
                            <li className="nav-item" key={indx}>
                                <Link className="nav-link text-white" to={link.path}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
