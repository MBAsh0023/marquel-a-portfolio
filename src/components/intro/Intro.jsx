import './intro.scss'
import { useEffect, useRef } from 'react'

export default function Intro() {
  
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/marquel2.PNG" alt=""/>
        </div>
      
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There! I'm</h2>
          <h1>Marquel</h1>
          <h1>Boardley-Ashlock</h1>
  
          <h3>Software Developer</h3>
        </div>
      </div>
        <a href="#bio">
          <img src="assets/down-arrow.png" alt=""/>
        </a>
        
    </div>
  )
}
