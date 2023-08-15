import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  // Active csss
  window.addEventListener('scroll', function () {
    var header = document.getElementById('myHeader');
    var scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollDistance >= window.innerHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  return (

    // <div className='Header_main'>
    //   <div className="rightLogo">
    //     <img src={logo} alt="" />
    //   </div>
    //   <div className="Menu">
    //     <Link to="#">Home</Link>
    //     <Link to="#">About</Link>
    //     <Link to="#">What I DO</Link>
    //     <Link to="#">Resume</Link>
    //     <Link to="#">Portfolio</Link>
    //     <Link to="#">Contact</Link>
    //   </div>
    //   <div className="social_icon">

    //   </div>
    // </div>
    <main>
      <header id='myHeader'>
        <nav>
          <Link to="#">Home</Link>
          <a href="#AboutMe">About</a>
          <a href="#ServicesMe">What I DO</a>
          <a href="#ResumeMe">Resume</a>
          <Link to="#">Portfolio</Link>
          <Link to="#">Contact</Link>
        </nav>
      </header>
    </main>
  )
}


export default Header