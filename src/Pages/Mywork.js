import React, { useState } from 'react'
import { Button, Carousel, Modal, Nav, Tab } from 'react-bootstrap'
import edsys from "../assets/images/EdsysLogo.svg"
import Priston from "../assets/images/PristonLogo.svg"
import VehicleLogo from "../assets/images/VehicleLogo.svg"
import WifiLogo from "../assets/images/WifiLogo.png"
import officeLogo from "../assets/images/logo.svg"
import EdsysPri1 from "../assets/images/EdsysPri1.png"
import EdsysPri2 from "../assets/images/EdsysPri2.png"
import EdsysPri3 from "../assets/images/EdsysPri3.png"


const Mywork = () => {
    const [edsysModal, setEdsysModal] = useState(false);

    const handleClose = () => setEdsysModal(false);
    const handleShow = () => setEdsysModal(true);
    return (
        <div className="MyworkMian">
            <div className="headerMywork">
                <div className="backGroundHeading" id='ResumeMe'>
                    PORTFoLIO
                </div>
                <div className="mainHeading">
                    My Work
                    <span className='BottomBorderAbout'>

                    </span>
                </div>
            </div>
            <div className="WorkBody">
                <div className="container">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">React Js</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="three">Next Js</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="four">UI design SSR</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="five">UI design CSR</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="AllProject">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="singlePro" onClick={() => { handleShow() }}>
                                                <div className="edsys">
                                                    <img src={edsys} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Edsys <br /> ( Eduction System & Solutions )</p>
                                                </div>
                                            </div>
                                            <div className="singlePro WifiMain">
                                                <div className="Wifi">
                                                    <img src={WifiLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Wifi Attendance <br /> ( Manage Empolyes Data )</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro pristonMain">
                                                <div className="Priston">
                                                    <img src={Priston} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Priston <br /> ( Accounting Web Application )</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro VehicleMain">
                                                <div className="Vehicle">
                                                    <img src={VehicleLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Vehicle Tracking <br /> ( Live Tracking & Services )</p>
                                                </div>
                                            </div>
                                            <div className="singlePro WifiMain">
                                                <div className="office">
                                                    <img src={officeLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Office Caller <br /> ( Live Tracking & Services )</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="singlePro">
                                            <div className="edsys">
                                                <img src={edsys} alt="" />
                                            </div>
                                            <div className="backGrondProduct">
                                                <p className="projectTitle">Edsys <br /> ( Eduction System & Solutions )</p>
                                            </div>
                                        </div>
                                        <div className="singlePro pristonMain">
                                            <div className="Priston">
                                                <img src={Priston} alt="" />
                                            </div>
                                            <div className="backGrondProduct">
                                                <p className="projectTitle">Priston <br /> ( Accounting Web Application )</p>
                                            </div>
                                        </div>
                                        <div className="singlePro VehicleMain">
                                            <div className="Vehicle">
                                                <img src={VehicleLogo} alt="" />
                                            </div>
                                            <div className="backGrondProduct">
                                                <p className="projectTitle">Vehicle Tracking <br /> ( Live Tracking & Services )</p>
                                            </div>
                                        </div>
                                        <div className="singlePro WifiMain">
                                            <div className="Wifi">
                                                <img src={WifiLogo} alt="" />
                                            </div>
                                            <div className="backGrondProduct">
                                                <p className="projectTitle">Wifi Attendance <br /> ( Manage Empolyes Data )</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
            <Modal show={edsysModal} size='xl' centered onHide={handleClose} className='Common-Modal'>
                <Modal.Body>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">Edsys</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={EdsysPri1} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={EdsysPri2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={EdsysPri3} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Mywork