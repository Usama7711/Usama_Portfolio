import React from 'react'
import Web from "../assets/images/Servises/desktop-solid.svg"
import UIUX from "../assets/images/Servises/paintbrush-solid.svg"
import Graphic from "../assets/images/Servises/palette-solid.svg"
import App from "../assets/images/Servises/pen-ruler-solid.svg"
import devide from "../assets/images/Servises/icons8-responsive-50.png"
import ssr from "../assets/images/Servises/code-solid.svg"

const Services = () => {
    return (
        <div className='Services_Main'id="ServicesMe">
            <div className="headerAbout">
                <div className="backGroundHeading">
                    SERVICES
                </div>
                <div className="mainHeading">
                    What I Do?
                    <span className='BottomBorderAbout'>

                    </span>
                </div>
            </div>
            <div className="servusesContain">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="singleCardSecrvice">
                                <div className="logoService">
                                    <img src={Web} alt="" className="" />
                                </div>
                                <div className="containServiceInner">
                                    <p className="headingServiceInner">
                                        Web Design
                                    </p>
                                    Designing websites with HTML, CSS, and UX mastery to deliver compelling user experiences, combining aesthetics and functionality for seamless navigation, engagement, and effective communication of content and ideas.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="singleCardSecrvice">
                                <div className="logoService">
                                    <img src={UIUX} alt="" className="" />
                                </div>
                                <div className="containServiceInner">
                                    <p className="headingServiceInner">
                                        UI / UX Design
                                    </p>
                                    Experience our exceptional UI/UX service, where captivating designs and seamless functionality converge to create delightful user journeys, elevating your digital presence and driving meaningful engagement.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="singleCardSecrvice">
                                <div className="logoService">
                                    <img src={App} alt="" className="" />
                                </div>
                                <div className="containServiceInner">
                                    <p className="headingServiceInner">
                                        App Design & Develop
                                    </p>
                                    We provide comprehensive app design and development services, seamlessly transforming your ideas into user-centric, visually striking, and high-performance applications that cater to modern digital needs and user expectations.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="singleCardSecrvice">
                                <div className="logoService">
                                    <img src={Graphic} alt="" className="" />
                                </div>
                                <div className="containServiceInner">
                                    <p className="headingServiceInner">
                                        Graphic Design
                                    </p>
                                    Elevate your brand with our graphic design service. We craft compelling visuals, from logos to marketing materials, aligning creativity with strategic messaging for impactful and memorable communication.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="singleCardSecrvice">
                                <div className="logoService">
                                    <img src={devide} alt="" className="" />
                                </div>
                                <div className="containServiceInner">
                                    <p className="headingServiceInner">
                                        Device Friendly Application
                                    </p>
                                    We specialize in crafting applications that effortlessly adapt to different devices, providing a smooth and enjoyable user experience across smartphones, tablets, and desktops, catering to a wide range of users.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="singleCardSecrvice">
                                <div className="logoService">
                                    <img src={ssr} alt="" className="" />
                                </div>
                                <div className="containServiceInner">
                                    <p className="headingServiceInner">
                                        SSR & CSR developer
                                    </p>
                                    Our developer service excels in both Server-Side Rendering (SSR) and Client-Side Rendering (CSR), optimizing website performance and interactivity for enhanced user engagement and satisfaction.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services