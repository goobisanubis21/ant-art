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
import CurlyGIF from '../../images/curlyGIF.GIF';
import PhillGIF from '../../images/phillGIF.GIF';
import ZapGIF from '../../images/zapGIF.GIF';


function GraphicComp() {

    let pages = [Cover, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]

    const [currentPage, setCurrentPage] = useState(Cover)
    const [index, setIndex] = useState(0)

    function nextPage() {
        for (let i = 0; i < pages.length; i++) {
            setCurrentPage(pages[index + 1])

        }
        if (index >= 19) {
            setIndex(0)
            setCurrentPage(Cover)
        } else {
            setIndex(index + 1)
        }
    }

    function prevPage() {
        for (let i = 0; i < pages.length; i++) {
            setCurrentPage(pages[index - 1])

        }
        if (index <= 0) {
            setIndex(19)
            setCurrentPage(P19)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className='main-graphic-div'>
            {/* <div className='curlyPhill-div'>
                <img className='curlyPhill' src={Curly} alt='curly'></img>
                <img className='curlyPhill' src={Phill} alt='phill'></img>
            </div> */}
            <div className='title-div'>
                <h1>EarthBound Misfit</h1>
                <p className='overview'>Join Curly and Phill on the adventure of a lifetime in this amazing story written in the style of a graphic novel. Curly is your typical 15 year old kid living life when out of nowhere he is bombarded by an alien named Phill, who is on the run. He was created to save the universe and together, Curly and Phill learn about friendship, heroism and overcoming fear.
                </p>
                <h6>Family Friendly, Intended For All Ages.</h6>
                <button className='buyBtn1'>Buy</button>
            </div>
            <div className='zap-div'>
                <img className='zap' src={ZapGIF} alt='zap gif'></img>
            </div>
            <br />
            <div className='sneak'>
                <h2>Exclusive Sneak Preview</h2>
                <p>Here is the first 19 pages free for you to enjoy</p>
            </div>
            <div className='pages-div'>
                <button className='prevBtn' style={{ backgroundColor: 'rgb(212, 181, 0)', color: 'black' }} onClick={prevPage}>PAGE PRIOR</button>
                <img className='pages' src={currentPage} alt='pages'></img>
                <button className='nextBtn' style={{ backgroundColor: 'green', color: 'white' }} onClick={nextPage}>NEXT PAGE</button>
            </div>
            <div className='pageNumber-div'>
                <p><strong>Page {index}</strong></p>
            </div>

            <div className='gifs'>
                <div>
                    <img className='curlyGIF' src={CurlyGIF} alt='curlygif'></img>
                </div>
                <div>
                    <button className='buyBtn'>Buy</button>
                </div>
                <div>
                    <img className='phillGIF' src={PhillGIF} alt='phillygif'></img>
                </div>
            </div>
        </div>
    )
}

export default GraphicComp