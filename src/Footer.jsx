import React from 'react'
import "./App.css"

export default function Footer() {
  return (
    <div>
        <h1 className=' heading text-center fw-bolder mt-5 demo'>Enterprises run on Netlify</h1>
        <div>
            <center>
        <img className='p-2 ms-5 mt-4 img-link' src="https://www.netlify.com/logos/twilio.svg" alt="" width={"150px"} />
        <img className='p-2 ms-5 mt-4 img-link' src="https://www.netlify.com/logos/mattel.svg" alt="" width={"100px"} />
        <img className='p-2 ms-5 mt-4 img-link' src="https://www.netlify.com/logos/riot-games.svg" alt="" width={"100px"} />
        <img className='p-2 ms-5 mt-4 img-link' src="https://www.netlify.com/logos/google.svg" alt="" width={"100px"} />
        <img className='p-2 ms-5 mt-4 img-link' src="https://www.netlify.com/logos/unilever.svg" alt="" width={"50px"} />
        <img className='p-2 ms-5 mt-4 img-link' src="https://www.netlify.com/logos/peloton.svg" alt="" width={"100px"} />
        </center>

<div className='footer-section mt-3 d-flex flex-wrap justify-content-evenly' >
  <div>
  <h1 className='fw-bolder text-white ms-2 mt-5 heading-2'>35M+</h1>
  <p className='fw-bolder text-white heading-2 '>Websites deployed on Netlify</p>
  </div>
  <div>
  <h1 className='fw-bolder text-white  mt-5 heading-2'>4M+</h1>
  <p className='fw-bolder text-white ms-3 heading-2' >Developers</p>
  </div>
  <div>
  <h1 className='fw-bolder text-white ms-2 mt-5 heading-2'>99.99%</h1>
  <p className='fw-bolder text-white ms-3 heading-2'>Uptime SLA</p>
  </div>
</div>
<div className='footer-section ' >
  <center>
<div className="card w-75 shadow-lg">
  <div className='d-flex flex-wrap justify-content-space '>   
     <img  className='img-3 m-3  ' src="https://www.netlify.com/assets/logos/full/small/lightmode/logo-netlify-small-monochrome-lightmode.svg" alt="" height={"80px"} width={"80px"} />
    <img  className='img-3 m-3 mt-4 'src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQBr3RJo4LKYmOGs4lbAUokQNy39r2ZNVrc0WENGm4SfiY1ixZ" alt="" height={"50px"} width={"50px"} />
    <img className='img-3 m-3 ' src="https://www.netlify.com/logos/riot-games.svg" alt="" height={"90px"} width={"90px"} />
    </div>
<p className='text-start fw-bolder ms-5 links '>
  "We aspire to be the most player-focused gaming company in the world, and <br />
  Netlify absolutely carries the same spirit of aspiring to be the most developer-  <br />
  focused technology company in the world… Ultimately, there was a sense of <br />
   deep collaboration, understanding and meeting our business requirements, <br />
    and providing extremely knowledgeable and highly professional solutions <br /> 
     every single step along the way."</p>
     <div className='d-flex flex-wrap justify-content-sapca'>
    <div>
      <img className='ms-5 mt-4' src="https://www.netlify.com/images/home/jason-rose.jpg" alt="" height={"50px"} width={"50px"} style={{borderRadius : " 50%"}} /></div>
    <div>
      <p className='fw-bolder mt-4 me-5'>Jason Rose</p>
      <p className='text-start mb-5 ms-4'>
        Senior Web Developer, <br />
        Riot Games</p>
    </div>
  </div>
  </div> 
  
  </center>
 
  </div>
  </div>
  
    </div>
  )
}
