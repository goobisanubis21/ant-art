import React from 'react';
import { Link } from 'react-router-dom';
import './homeComp.css';
import Walter from './walter.jpg';

function HomeComp() {
    return (
        <div className='main-home-div'>
            <div className='home-title-div'>
                <h1 className='home-title'>Anthony Parrino</h1>
                <p className='home-title-undertext'>Oil Painter, Graphic Novelist and Digital Artist</p>
            </div>
            <div className='featured-div'>
                <h1>Featured Painting</h1>
                <img className='featured-art' src={Walter} alt='Walter White'></img>
                <div className='featured-info'>
                    <h4>"Mr. White"</h4>
                    <p>Oil on Canvas</p>
                    <p>30" x 40"</p>
                    <p>- Original - $5000 -</p>
                </div>
            </div>
            <div className='line'></div>
            <div className='upcoming-events'>
                <h2>Upcoming Events</h2>
                <br/>
                <p><strong>9/17 </strong>- First<Link to='/nft'> NFT</Link> realsed item for the Hyrocryptics Collection. Available on <a href='https://opensea.io/collection/hyrocryptics'>OpenSea.</a></p>
            </div>
        </div>
    )
}

export default HomeComp
