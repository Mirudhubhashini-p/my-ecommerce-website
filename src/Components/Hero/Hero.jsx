import React from 'react'
import '../Hero/Hero.css'
import video from '../Assets/video/video.mp4'

const Hero = () => {
  return (
    
    <div className='hero'>
       <video  src={video} autoPlay loop muted playsInline class="back-video">
       </video>
      
       <div className="main-home">
        <div className="main-text">
            <h5>Summer collections</h5>
            <h1>Grab this offer  <span>2024</span></h1>
           
            <h1>summer sale <span>is on</span> </h1>
            
            <p>Go with the trend</p>
            <button className="main-btn">Shop now</button>
        </div>
        
     </div>
     
            
    </div>
  )
}

export default Hero