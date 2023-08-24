import React, { useState } from 'react'
import { Button, Carousel, Modal, Nav, Tab } from 'react-bootstrap'
import edsys from "../assets/images/EdsysLogo.svg"
import Priston from "../assets/images/PristonLogo.svg"
import VehicleLogo from "../assets/images/CloudLogo.svg"
import WifiLogo from "../assets/images/WifiLogo.png"
import officeLogo from "../assets/images/logo.svg"
import EdsysPri1 from "../assets/images/EdsysPri1.png"
import EdsysPri2 from "../assets/images/EdsysPri2.png"
import EdsysPri3 from "../assets/images/EdsysPri3.png"
import PristonPri1 from "../assets/images/PristonPri (1).png"
import PristonPri2 from "../assets/images/PristonPri (2).png"
import PristonPri3 from "../assets/images/PristonPri (3).png"
import CloudPr1 from "../assets/images/CloudPri (1).png"
import CloudPr2 from "../assets/images/CloudPri (2).png"
import CloudPr3 from "../assets/images/CloudPri (3).png"
import WifiPri1 from "../assets/images/WifiPri (1).png"
import WifiPri2 from "../assets/images/WifiPri (2).png"
import WifiPri3 from "../assets/images/WifiPri (3).png"
import WifiPri4 from "../assets/images/WifiPri (4).png"


const Mywork = () => {
    const [edsysModal, setEdsysModal] = useState(false);
    const [pristonModal, setPristonModal] = useState(false);
    const [cloudModal, setCloudModal] = useState(false);
    const [wifiAttendance, setWifiAttendance] = useState(false);

    const handleClose = () => setEdsysModal(false);
    const handleShow = () => setEdsysModal(true);

    const handleClosePriston = () => setPristonModal(false);
    const handleShowPriston = () => setPristonModal(true);

    const handleCloseCloud = () => setCloudModal(false);
    const handleShowCloud = () => setCloudModal(true);

    const handleCloseWifi = () => setWifiAttendance(false);
    const handleShowWifi = () => setWifiAttendance(true);
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
                                            <div className="singlePro WifiMain" onClick={() => { handleShowWifi() }}>
                                                <div className="Wifi">
                                                    <img src={WifiLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Wifi Attendance <br /> ( Manage Empolyes Data )</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro pristonMain" onClick={() => { handleShowPriston() }}>
                                                <div className="Priston">
                                                    <img src={Priston} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Priston <br /> ( Accounting Web Application )</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro VehicleMain" onClick={() => { handleShowCloud() }}>
                                                <div className="Vehicle">
                                                    <img src={VehicleLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">cloudxperte <br /> ( Live Tracking & Services )</p>
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

            {/* Edsys */}
            <Modal show={edsysModal} size='xl' centered onHide={handleClose} className='Common-Modal'>
                <Modal.Body close>
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
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">Parents can ensure child safety via live tracking .Parents get notified of all activities in the school. Parents can keep a track of all scholastic activities like exam schedules, upcoming events, PTA meets etcParents can communicate with parents and school authorities on the go </p>
                                    <p className="head">Project Details:</p>
                                    <p className="contain">Client : <span>Redbytes Software</span></p>
                                    <p className="contain">Technologies : <span>HTML, Sass, Bootstrap, React.js, React Prime</span></p>
                                    <p className="contain">Role : <span>Ui development</span></p>
                                    <p className="contain">URL : <span><a href="http://edsys-parent.ui.redbytes.in/Dashboard">edsys-parent</a></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Priston */}
            <Modal show={pristonModal} size='xl' centered onHide={handleClosePriston} className='Common-Modal'>
                <Modal.Body close>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">Priston-Front-Office</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={PristonPri1} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={PristonPri2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={PristonPri3} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">In this Project you'll give audit accounts and provide trustworthy information about financial records. This might involve financial reporting, taxation, auditing, forensic accounting, corporate finance, business recovery and insolvency, or accounting systems and processes.</p>
                                    <p className="head">Project Details:</p>
                                    <p className="contain">Client : <span>Accounting Sita Ram</span></p>
                                    <p className="contain">Technologies : <span>HTML, Sass, Bootstrap, React.js, React Prime</span></p>
                                    <p className="contain">Changles : <span>Dark / Light Mood</span></p>
                                    <p className="contain">URL : <span><a href="http://accountingfrontend.ui.redbytes.in/SalesGoods">Priston-Front -Office</a></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* CloudXperte */}
            <Modal show={cloudModal} onHide={handleCloseCloud} size='xl' centered className='Common-Modal'>
                <Modal.Body>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">CloudXperte</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={CloudPr1} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={CloudPr2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={CloudPr3} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">CloudXperte is an cloud enablement solution that comprises a well-experienced team, who have been creating cloud, mobile and web applications for clients – big and small, from around the world. In our journey so far, we have delivered over 350 projects to clients across the world, including Fortune 500 companies.</p>
                                    <p className="head">Project Details:</p>
                                    <p className="contain">Client : <span>CloudXperte</span></p>
                                    <p className="contain">Technologies : <span>HTML, CSS, Bootstrap, Next.js</span></p>
                                    <p className="contain">Role : <span>UI developer</span></p>
                                    <p className="contain">URL : <span><a href="http://cloudxperte.com">cloudxperte</a></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* WifiAttendancec */}
            <Modal show={wifiAttendance} onHide={handleCloseWifi} size='xl' centered className='Common-Modal'>
                <Modal.Body>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">Wifi Attendance</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={WifiPri1} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={WifiPri3} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={WifiPri2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={WifiPri4} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">Wi-Fi attendance daily attendance tracker is one-of-a-kind system designed with businesses like yours in mind. Spend less time on HR management and focus on what matters most to your organization.</p>
                                    <p className="head">Project Details:</p>
                                    <p className="contain">Client : <span>Redbytes</span></p>
                                    <p className="contain">Technologies : <span>HTML, Sass, Bootstrap, React.js</span></p>
                                    <p className="contain">Challenging Task : <span> <a href='http://wififrontoffice.ui.redbytes.in/teamchart'>Team Chart</a></span> ( Using HTML and Sass Only ) And <b>Dark / Light Mode</b></p>
                                    <p className="contain">URL : <span><a href="http://wififrontoffice.ui.redbytes.in/dashboard">www.wifiAttendance.com</a></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Mywork