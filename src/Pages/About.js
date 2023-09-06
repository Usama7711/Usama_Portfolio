import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import IMG from "../assets/images/gb_img1.jpg"
import reume from "../assets/Usama_Musab.pdf"

const About = () => {
    const emailAddress = 'usamamusab16@gmail.com';
    const subject = 'Hello, Usama is here';
    // const body = 'Hi there, \n\nI hope this email finds you well.';

    const handleEmailButtonClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink);
    };

    // Download CV
    const cvFileName = 'Usama_Resume.pdf'; // Replace with the actual filename of your CV


    // number Count
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count < 6) {
                setCount(prevCount => prevCount + 1);
            } else {
                clearInterval(intervalId);
            }
        }, 100); // Increment every 1 second (you can adjust the interval as needed)

        // Cleanup the interval when the component is unmounted
        return () => {
            clearInterval(intervalId);
        };
    }, [count]);
    return (
        <div className='AboutUs_Main' id='AboutMe'>
            <div className="headerAbout">
                <div className="backGroundHeading">
                    ABOUT ME
                </div>
                <div className="mainHeading">
                    Know Me More
                    <span className='BottomBorderAbout'>

                    </span>
                </div>
            </div>
            <div className="container">
                <div className="headerContain">
                    <div className=" row m-0 mb-5">
                        <div className="col-lg-8">
                            <div className="ContainHeading">
                                I'm <span>Usama Musab</span>, a Front End Developer
                            </div>
                            <p className="containDesription">
                                I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="containDesription">
                                Our primary responsibility is to create and implement the user interface and user experience of a website or web application. Our
                                work involves translating design mockups and wireframes into functional and interactive web pages that users can access and interact with in their browsers
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div className="singleLineContain BRbotton">
                                <p className="Title">Name : </p>
                                <p className="contain">Usama Musab</p>
                            </div>
                            <div className="singleLineContain BRbotton mt-3">
                                <p className="Title">Email : </p>
                                <p className="contain"><Link to="#" onClick={handleEmailButtonClick}>usamamusab16@gmail.com</Link></p>
                            </div>
                            <div className="singleLineContain BRbotton mt-3">
                                <p className="Title">Age : </p>
                                <p className="contain">23</p>
                            </div>
                            <div className="singleLineContain mt-3">
                                <p className="Title">From : </p>
                                <p className="contain">Nanded, Maharashtra, India</p>
                            </div>
                            <label className="DownloadCV">
                                <a href={reume} download={cvFileName}>
                                    <button>Download CV</button>
                                </a>
                            </label>
                        </div>
                    </div>
                    <div className="WorkRatio mt-4">
                        <div className="singleRatio">
                            <div className="countNumber">2.5 +</div>
                            <div className="ratiotitle">Years Experiance</div>
                        </div>
                        <div className="singleRatio">
                            <div className="countNumber">12 +</div>
                            <div className="ratiotitle">Happy Clients</div>
                        </div>
                        <div className="singleRatio">
                            <div className="countNumber">22 +</div>
                            <div className="ratiotitle">Project Done</div>
                        </div>
                        <div className="singleRatio">
                            <div className="countNumber">{count} +</div>
                            <div className="ratiotitle">Get Awards</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About