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
  )
}

export default Header