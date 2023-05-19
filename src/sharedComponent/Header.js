import React from 'react'
import logo from "../assets/images/Logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header_main'>
        <div className="rightLogo">
            <img src={logo} alt="" />
        </div>
        <div className="Menu">
                <Link to="#">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">What I DO</Link>
                <Link to="#">Resume</Link>
                <Link to="#">Portfolio</Link>
                <Link to="#">Contact</Link>
        </div>
        <div className="social_icon">

        </div>
    </div>

    // <>
    //   <header id="header" class="sticky-top-slide">
    //     <nav class="primary-menu navbar navbar-expand-lg navbar-dark bg-transparent border-bottom-0">
    //       <div class="container-fluid position-relative g-lg-4">
    //         <div class="col-auto col-lg-2">
    //           <a class="logo" href="index.html" title="Simone"> <img src="images/logo-light.png" alt="Simone" /> </a>
    //         </div>
    //         <div class="col col-lg-8 navbar-accordion">
    //           <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span></span><span></span><span></span></button>
    //           <div id="header-nav" class="collapse navbar-collapse justify-content-center">
    //             <ul class="navbar-nav">
    //               <li class="nav-item"><a class="nav-link smooth-scroll active" href="#home">Home</a></li>
    //               <li class="nav-item"><a class="nav-link smooth-scroll" href="#about">About</a></li>
    //               <li class="nav-item"><a class="nav-link smooth-scroll" href="#services">What I Do</a></li>
    //               <li class="nav-item"><a class="nav-link smooth-scroll" href="#resume">Resume</a></li>
    //               <li class="nav-item"><a class="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
    //               <li class="nav-item"><a class="nav-link smooth-scroll" href="#testimonial">Client</a></li>
    //               <li class="nav-item"><a class="nav-link smooth-scroll" href="#contact">Contact</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div class="col-auto col-lg-2 d-flex justify-content-end">
    //           <ul class="social-icons social-icons-light">
    //             <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="" data-bs-original-title="Twitter"><i class="fab fa-twitter"></i></a></li>
    //             <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="" data-bs-original-title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
    //             <li class="social-icons-dribbble"><a data-bs-toggle="tooltip" href="http://www.dribbble.com/" target="_blank" title="" data-bs-original-title="Dribbble"><i class="fab fa-dribbble"></i></a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </header>
    // </>
  )
}

export default Header