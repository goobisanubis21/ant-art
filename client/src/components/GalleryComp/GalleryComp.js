import React, { useState } from 'react';
import './galleryComp.css';
import Buddah from '../../paintings/Buddah.jpg';
import Elephant from '../../paintings/Elephant.jpg';
import Eminem from '../../paintings/Eminem.JPG';
import Endgame from '../../paintings/Endgame.jpg';
import Float from '../../paintings/Float.JPG';
import Frank from '../../paintings/Frank.JPG';
import Georgio from '../../paintings/Georgio.JPG';
import Groot from '../../paintings/Groot.JPG';
import Horse from '../../paintings/Horse1.jpg';
import Jellyfish from '../../paintings/Jellyfish.JPG';
import Jobs from '../../paintings/Jobs.JPG';
import Leopard from '../../paintings/Leopard.jpg';
import Migration from '../../paintings/Migration.jpg';
import Smash from '../../paintings/Smash.jpg';
import Sopranos from '../../paintings/Sopranos.jpg';
import Stooges1 from '../../paintings/Stooges1.JPG';
import Stooges2 from '../../paintings/Stooges2.JPG';
import Stooges3 from '../../paintings/Stooges3.jpg';
import Stooges4 from '../../paintings/Stooges4.JPG';
import Turtles from '../../paintings/turtles.JPG';
import Walter from '../../paintings/walter.jpg';
import Zuzu from '../../paintings/Zuzu.JPG';

function GalleryComp() {

    // let paintings = [
    const [allArt, setAllArt] = useState([

        {
            id: '0',
            name: 'Mr. White',
            price: 5000,
            src: Walter,
        },
        {
            id: '1',
            name: 'Elephant',
            price: 'SOLD',
            src: Elephant,
        },
        {
            id: '2',
            name: 'Marshal',
            price: 2000,
            src: Eminem,
        },
        {
            id: '3',
            name: 'The End',
            price: 3000,
            src: Endgame,
        },
        {
            id: '4',
            name: 'Float',
            price: 'SOLD',
            src: Float,
        },
        {
            id: '5',
            name: 'Frank',
            price: 'SOLD',
            src: Frank,
        },
        {
            id: '6',
            name: 'Aliens',
            price: 2000,
            src: Georgio,
        },
        {
            id: '7',
            name: 'Baby Groot',
            price: 2000,
            src: Groot,
        },
        {
            id: '8',
            name: 'Horse',
            price: 'Work In Progress',
            src: Horse,
        },
        {
            id: '9',
            name: 'Jellyfish',
            price: 500,
            src: Jellyfish,
        },
        {
            id: '10',
            name: 'Job',
            price: 3000,
            src: Jobs,
        },
        {
            id: '11',
            name: 'Leopard',
            price: 2000,
            src: Leopard,
        },
        {
            id: '12',
            name: 'Migrate',
            price: 400,
            src: Migration,
        },
        {
            id: '13',
            name: 'Smash',
            price: 2500,
            src: Smash,
        },
        {
            id: '14',
            name: 'Mr. Soprano',
            price: 3000,
            src: Sopranos,
        },
        {
            id: '15',
            name: 'The Stooges',
            price: 'SOLD',
            src: Stooges1,
        },
        {
            id: '16',
            name: 'The Stooges 2',
            price: 'SOLD',
            src: Stooges2,
        },
        {
            id: '17',
            name: 'The Stooges 3',
            price: 'SOLD',
            src: Stooges3,
        },
        {
            id: '18',
            name: 'The Stooges 4',
            price: 'SOLD',
            src: Stooges4,
        },
        {
            id: '19',
            name: 'Coral',
            price: 3000,
            src: Turtles,
        },
        {
            id: '20',
            name: 'The Buddah',
            price: 'SOLD',
            src: Buddah,
        },
        {
            id: '21',
            name: 'Zuuuu',
            price: 'SOLD',
            src: Zuzu,
        },
    ])

    function buyPainting(e) {
        let clicked = e.target
        let buyPainting = []
        buyPainting.push(allArt.find(art => art.id === clicked.id))
        console.log('this', buyPainting)
    }

    return (
        <div className='oil-paintings-main-div'>
            <div className='painting-title-container'>
                <h1>Oil Paintings</h1>
                <p>All Originals Artwork, Hand Painted With Oils On Canvas By Anthony Parrino</p>
            </div>
            <div>
                {allArt.map(paint => (
                    <div key={paint.id} className='painting-container'>
                        <h3>{paint.name}</h3>
                        {paint.price === 'SOLD' ?
                            <div>
                                <p className='painting-sold'>{paint.price}</p>
                                <img className='paintings' src={paint.src} alt='art'></img>
                                <div>
                                    <button disabled id={paint.id} className='galleryBuyBtnSold' onClick={buyPainting}>X</button>
                                </div>
                            </div>
                            :
                            <div>
                                <p className='painting-price'>{paint.price}<strong className='painting-price'> USD</strong></p>
                                <img className='paintings' src={paint.src} alt='art'></img>
                                <div>
                                    <button id={paint.id} className='galleryBuyBtn' onClick={buyPainting}>ADD TO CART</button>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryComp
