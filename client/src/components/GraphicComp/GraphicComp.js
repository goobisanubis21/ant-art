import React, { useState } from 'react';
import './graphicComp.css';
import Cover from '../../images/cover.jpg';
import P1 from '../../images/page1.jpg';
import P2 from '../../images/page2.jpg';
import P3 from '../../images/page3.jpg';
import P4 from '../../images/page4.jpg';
import P5 from '../../images/page5.jpg';
import P6 from '../../images/page6.jpg';
import P7 from '../../images/page7.jpg';
import P8 from '../../images/page8.jpg';
import P9 from '../../images/page9.jpg';
import P10 from '../../images/page10.jpg';
import P11 from '../../images/page11.jpg';
import P12 from '../../images/page12.jpg';
import P13 from '../../images/page13.jpg';
import P14 from '../../images/page14.jpg';
import P15 from '../../images/page15.jpg';
import P16 from '../../images/page16.jpg';
import P17 from '../../images/page17.jpg';
import P18 from '../../images/page18.jpg';
import P19 from '../../images/page19.jpg';
import { Collection } from 'mongoose';

function GraphicComp() {

    let pages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]

    const [currentPage, setCurrentPage] = useState(P1)
    const [index, setIndex] = useState(0)

    function nextPage() {
        for (let i = 0; i < pages.length; i++) {
            setCurrentPage(pages[index + 1])

        }
        if (index >= 18) {
            setIndex(0)
            setCurrentPage(P1)
        } else {
            setIndex(index + 1)
        }
    }

    function prevPage() {
        for (let i = 0; i < pages.length; i++) {
            setCurrentPage(pages[index - 1])

        }
        if (index <= 0) {
            setIndex(18)
            setCurrentPage(P19)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className='main-graphic-div'>
            <div className='title-div'>
                <h1>EarthBound Misfit</h1>
                <p className='overview'>Join Curly and Phill on the adventure of a lifetime in this amazing story written in the style of a graphic novel. Curly is your typical 15 year old kid living life when out of nowhere he is bombarded by an alien named Phill, who is on the run. He was created to save the universe and together, Curly and Phill learn about friendship, heroism and overcoming fear.
                </p>
                <h6>Family Friendly, Intended For Ages 8 And Up.</h6>
                <button className='buyBtn'>Buy</button>
            </div>
            <div className='cover-div'>
                <img className='cover' src={Cover} alt='book cover'></img>
            </div>
            <br />
            <div>
                <h2>Exclusive Sneak Preview</h2>
                <p>Here is the first 19 pages free for you to enjoy</p>
            </div>
            <div className='pages-div'>
                <button style={{ backgroundColor: 'rgb(212, 181, 0)', color: 'black' }} onClick={prevPage}>PREVIOUS</button>
                <img className='pages' src={currentPage} alt='pages'></img>
                <button style={{ backgroundColor: 'green', color: 'white' }} onClick={nextPage}>NEXT</button>
            </div>
            <div>
                <p><strong>Page {index + 1}</strong></p>
            </div>
            <div>
                <button className='buyBtn'>Buy</button>
            </div>
        </div>
    )
}

export default GraphicComp















// <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
//                     <div className="carousel-inner">
//                         <div className="carousel-item active" data-interval="0" interval='1000000000'>
//                             <img src={P1} className="d-block" alt="..."></img>
//                         </div>
//                         <div className="carousel-item" data-interval="0">
//                             <img src={P2} className="d-block" alt="..."></img>
//                         </div>
//                         <div className="carousel-item">
//                             <img src={P3} className="d-block" alt="..."></img>
//                         </div>
//                     </div>
//                     <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="sr-only">Previous</span>
//                     </a>
//                     <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="sr-only">Next</span>
//                     </a>
//                 </div>