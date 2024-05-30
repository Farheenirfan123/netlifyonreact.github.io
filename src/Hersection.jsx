import React from 'react'

import VideoFile from '../src/video/Netlify Composable Web Platform.mp4'

export default function Hersection() {
  return (
    <div className='container-xxl'>

      <h1 className='text-center text-white fw-bolder'>Connect everything.</h1>
      <h1 className='text-center text-white fw-bolder mt-5'>Build anything.</h1> 
      <h5 className='text-white text-center mt-5'>
        Netlify is the modern development platform for Enterprises to realize the speed, <br />
       agility and performance of a scalable, composable web architecture.
</h5>
<div className='d-flex flex-wrap justify-content-center mt-5 p-2'>
  <div style={{background : "cyan"}} className='btn text-dark ms-3 first-btn'>Explore Platform</div>
  <div className="btn border border-1 border-white  text-white ms-3 first-btn">Request demo</div>
</div>
<br />
<center>
{/* <iframe  src="https://www.youtube.com/embed/tJ95Q2ETMA4" title="Netlify Composable Web Platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{borderRadius : "30PX" , border : "1px solid cyan", }} ></iframe> */}
<video width ="800" src="/src/video/Netlify Composable Web Platform.mp4" autoPlay muted style={{borderRadius : "30PX" , border : "1px solid cyan"}}>
  <source src={VideoFile}/>
</video>
       </center>

    </div>
  )
}