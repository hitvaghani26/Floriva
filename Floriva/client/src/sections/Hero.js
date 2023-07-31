import { React, useRef } from 'react'
import {Navbar} from "../containers"
import { logoleafremovebg, plantsearch } from "../assets"
function Hero(props) {

  return (

    <>
      <Navbar />
      <div className='main-section-body'>

        <div className='main-section-body-content'>
          <div className='text-1'>Paint Your Green Haven with<br />
            Nature's <span>Colorful Palette</span></div>
          <div className='input-section'>
            <input type='text' placeholder='Search for plants...'></input>
            <div><img src={plantsearch} alt='search' /></div>
          </div>
          <div className='text-2'>Transform your living spaces with the refreshing beauty of      nature, as you immerse yourself in our curated selection of plants.</div>
        </div>
      </div>
      <div className="main-section">

        <div id='canvas-section'>

          <canvas id='mycanvas' />
        </div>
      </div>

    </>
  )
}

export default Hero;