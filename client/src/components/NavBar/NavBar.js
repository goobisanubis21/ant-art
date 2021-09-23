import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/'><div className="navbar-brand">Icon</div></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/'><div className="nav-link">Home</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/gallery'><div className="nav-link">Gallery</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/graphicnovel'><div className="nav-link">Graphic Novel</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/nft'><div className="nav-link">NFTs</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='aboutme'><div className="nav-link">About Me</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact'><div className="nav-link">Contact</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart'><div className="nav-link">Cart</div></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
