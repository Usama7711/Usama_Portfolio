import React, { useEffect, useState } from 'react'
import bgimg from "../assets/images/backGround.jpeg";
import About from './About';
import Services from './Services';
import Summary from './Summary';
import TopScroller from './TopScroller';
import Mywork from './Mywork';
import Contact from './Contact';


const DashBoard = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState('');
  const selfData = [
    "I'm a Frontend Developer",
    "I have Encompass Wide range of React js",
    "Provide In-Depth Information For UX",
    "I create Device Friendly wepsite",
    "Providing Best User Interface ( UI )"
  ]


  // Render User Line
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWordIndex < selfData[currentLineIndex].split(' ').length) {
        setCurrentLine(prevLine =>
          prevLine + ' ' + selfData[currentLineIndex].split(' ')[currentWordIndex]
        );
        setCurrentWordIndex(prevIndex => prevIndex + 1);
      } else {
        setCurrentWordIndex(0);
        setCurrentLine('');
        setCurrentLineIndex(prevIndex => (prevIndex + 1) % selfData.length);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [currentLineIndex, currentWordIndex, selfData]);

  return (
    <div id='cx-main'>
      <div className="dashboard_wrapper" id='dashBoardMe'>
        <img src={bgimg} alt="" />
        <div className="bdopacity"></div>
        <div className="contain">
          <p className="Welcome">Welcome</p>
          <p className="Details">{currentLine}</p>
          <p className="location">Based in Nanded , Maharashtra</p>
        </div>
      </div>
      <About />
      <Services />
      <Summary />
      <Mywork />
      <TopScroller />
      <Contact />
    </div>
  )
}

export default DashBoard