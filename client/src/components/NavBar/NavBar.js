import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'><div className="navbar-brand">Icon</div></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
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
                            <Link to='/nft'><div className="nav-link">NFT</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='aboutme'><div className="nav-link">About Me</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact'><div className="nav-link">Contact</div></Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to='/cart'><div className="nav-link">Cart</div></Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
