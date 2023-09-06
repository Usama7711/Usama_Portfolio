import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menu from "../assets/images/Menu.svg"

const Header = () => {
  // Active csss
  const [scrolled, setScrolled] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [resume, setResume] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);


  console.log(home)
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    if (scrollY == 0 && scrollY <= windowHeight) {
      setHome(true);
    } else {
      setHome(false);
    }

    if (scrollY >= windowHeight && scrollY <= windowHeight * 2) {
      setAbout(true);
    } else {
      setAbout(false);
    }

    if (scrollY >= windowHeight * 2 && scrollY <= windowHeight * 3) {
      setService(true);
    } else {
      setService(false);
    }

    if (scrollY >= windowHeight * 3 && scrollY <= windowHeight * 5.3) {
      setResume(true);
    } else {
      setResume(false);
    }

    if (scrollY >= windowHeight * 5.3 && scrollY <= windowHeight * 6.8) {
      setPortfolio(true);
    } else {
      setPortfolio(false);
    }

    if (scrollY >= windowHeight * 6.8 && scrollY <= windowHeight * 8.8) {
      setContact(true);
    } else {
      setContact(false);
    }

    if (scrollY > windowHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <main>
      <div
        className={
          scrolled
            ? "scrollActive"
            : "HomePage"
        }
        id='d_none_For_responsive'
      >
        <header id='myHeader'>
          <nav>
            <div className={home ? "active" : ""}>
              <a href="#dashBoardMe">Home</a>
            </div>
            <div className={about ? "active" : ""}>
              <a href="#AboutMe">About</a>
            </div>
            <div className={service ? "active" : ""}>
              <a href="#ServicesMe">What I DO</a>
            </div>
            <div className={resume ? "active" : ""}>
              <a href="#ResumeMe">Resume</a>
            </div>
            <div className={portfolio ? "active" : ""}>
              <a href="#MyWork">Portfolio</a>
            </div>
            <div className={contact ? "active" : ""}>
              <a href="#ContactUs">Contact</a>
            </div>
          </nav>
        </header>
      </div>
      <div className="ReponsiveHeaderTop">
        <img src={menu} alt="" onClick={handleShow} />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Category</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="repsonsiveInerrList">
              <a  onClick={handleClose} href="#dashBoardMe">Home</a>
              <a  onClick={handleClose} href="#AboutMe">About</a>
              <a  onClick={handleClose} href="#ServicesMe">What I DO</a>
              <a  onClick={handleClose} href="#ResumeMe">Resume</a>
              <a  onClick={handleClose} href="#MyWork">Portfolio</a>
              <a  onClick={handleClose} href="#ContactUs">Contact</a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

      </div>

    </main>
  )
}


export default Header