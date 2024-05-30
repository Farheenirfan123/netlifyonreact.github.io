import React from 'react'
import './App.css'


export default function Navbar() {
  return (
        <div classNameName='back-color '>
   <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{opacity : "0.8"}}>
        <div className="container-fluid">
          <img className="ms-4" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy8k8hKfOkFcOz0SGM_TXwZTCCBetWo2diHdrn9uRpO6pLOZiB" alt="" height="70px" width="149px"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bolder ms-5" aria-current="page" href="#">Platform</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bolder " href="#">Solutions</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-bolder me-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="">
                 Integrations
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="card  d-flex flex-wrap justify-content-center">
                <h6  className='text-dark fw-bolder'>THE NETLIFY PLATFORM</h6 >
                  <div>
                  <p className='text-dark me-4'>Instantly build and deploy your sites to our global network from Git. Custom domains, https, deploy previews, rollbacks and much more.</p>
                  <a className='text-dark' href="">Explore the Platform</a>
                  <br />
                  <a className='text-dark' href="">Netlify Core</a>
                  <br />
                  <a className='text-dark' href="">Netlify Connect</a>
                  <br />
                  <a className='text-dark' href="">Netlify Create</a>
                  </div>

                  <div>
                    <h6 className='fw-bolder'>KEY FEATURES</h6 >
                    <a className='text-dark' href="">Enterprise Team Management</a>
                  <br />
                  <a className='text-dark' href="">SDK</a>
                  <br />
                  <a className='text-dark' href="">Edge Functions</a>
                  <br />
                  <a className='text-dark' href="">Deploy Previews</a>
                  <br />
                  <a className='text-dark' href="">Forms </a>
                  <br />
                  </div>
                </div>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bolder  me-1" href="#" tabindex="-1" aria-disabled="true">Start Building</a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bolder " href="#" tabindex="-1" aria-disabled="true">Doc</a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bolder " href="#" tabindex="-1" aria-disabled="true">Pricing</a>
                
              </li>
            </ul>
            <form className="d-flex">
              <a href=""><i className="fa-solid fa-magnifying-glass text-dark  me-3 mt-2 fs-6" ></i></a>
              <a href="" style={{textDecoration : "none"}}><div className="text-dark  fw-bolder me-4 " >Contact</div></a>
              <a href="" style={{textDecoration : "none"}}><div className="text-dark  fw-bolder me-3 login " >Login</div></a>
              <button className="btn btn-primary" type="submit">Sign in</button>

            </form>
          </div>
        </div>
      </nav>
        </div>
        
      )
}
