import React from 'react'
import logo from "../assets/images/Logo.svg"

const Header = () => {
  return (
    <div className='Header_main'>
        <div className="rightLogo">
            <img src={logo} alt="" />
        </div>
        <div className="Menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>What I DO</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="social_icon">
            
        </div>
    </div>
  )
}

export default Header