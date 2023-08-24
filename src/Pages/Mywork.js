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
import OfficeCaller1 from "../assets/images/OfficeCaller (1).png"
import OfficeCaller2 from "../assets/images/OfficeCaller (2).png"
import OfficeCaller3 from "../assets/images/OfficeCaller (3).png"
import OfficeCaller4 from "../assets/images/OfficeCaller (4).png"
import MyUnvrs1 from "../assets/images/MyUnvrs (1).png"
import MyUnvrs2 from "../assets/images/MyUnvrs (2).png"
import MyUnvrs3 from "../assets/images/MyUnvrs (3).png"
import MyUnvrs4 from "../assets/images/MyUnvrs (4).png"
import AnimalApp1 from "../assets/images/AnimalApp (1).png"
import AnimalApp2 from "../assets/images/AnimalApp (2).png"
import AnimalApp3 from "../assets/images/AnimalApp (3).png"
import AnimalApp4 from "../assets/images/AnimalApp (4).png"
import VehicleTracking1 from "../assets/images/VehicleTracking (1).png"
import VehicleTracking2 from "../assets/images/VehicleTracking (2).png"
import VehicleTracking3 from "../assets/images/VehicleTracking (3).png"
import VehicleTracking4 from "../assets/images/VehicleTracking (4).png"
import VehicleTracking5 from "../assets/images/VehicleTracking (5).png"
import VehiclTrackingLogo from "../assets/images/VehiclTrackingLogo.svg"
import MyUnivers from "../assets/images/MyUnivers.svg"
import FleetLogo from "../assets/images/FleetLogo.png"
import AniamlApp from "../assets/images/AniamlApp.svg"


const Mywork = () => {
    const [edsysModal, setEdsysModal] = useState(false);
    const [pristonModal, setPristonModal] = useState(false);
    const [cloudModal, setCloudModal] = useState(false);
    const [wifiAttendance, setWifiAttendance] = useState(false);
    const [officeCaller, setOfficeCaller] = useState(false);
    const [vehicalTracking, setVehicalTracking] = useState(false);
    const [animalAdmin, setAnimalAdmin] = useState(false);
    const [myUnivers, setMyUnivers] = useState(false);
    const [fleetManagement, setFleetManagement] = useState(false);

    const handleClose = () => setEdsysModal(false);
    const handleShow = () => setEdsysModal(true);

    const handleClosePriston = () => setPristonModal(false);
    const handleShowPriston = () => setPristonModal(true);

    const handleCloseCloud = () => setCloudModal(false);
    const handleShowCloud = () => setCloudModal(true);

    const handleCloseWifi = () => setWifiAttendance(false);
    const handleShowWifi = () => setWifiAttendance(true);

    const handleCloseOffice = () => setOfficeCaller(false);
    const handleShowOffice = () => setOfficeCaller(true);

    const handleCloseVehicalTracking = () => setVehicalTracking(false);
    const handleShowVehicalTracking = () => setVehicalTracking(true);

    const handleCloseAnimalAdmin = () => setAnimalAdmin(false);
    const handleShowAnimalAdmin = () => setAnimalAdmin(true);

    const handleCloseMyUnivers = () => setMyUnivers(false);
    const handleShowMyUnivers = () => setMyUnivers(true);

    const handleCloseFleetManagement = () => setFleetManagement(false);
    const handleShowFleetManagement = () => setFleetManagement(true);
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
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro WifiMain" onClick={() => { handleShowWifi() }}>
                                                <div className="Wifi">
                                                    <img src={WifiLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Wifi Attendance <br /> ( Manage Empolyes Data )</p>
                                                </div>
                                            </div>
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro pristonMain" onClick={() => { handleShowPriston() }}>
                                                <div className="Priston w-100">
                                                    <img src={Priston} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Priston <br /> ( Accounting Web Application )</p>
                                                </div>
                                            </div>
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro VehicleMain" onClick={() => { handleShowCloud() }}>
                                                <div className="Vehicle w-100">
                                                    <img src={VehicleLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">cloudxperte <br /> ( Live Tracking & Services )</p>
                                                </div>
                                            </div>
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro WifiMain" onClick={() => { handleShowOffice() }}>
                                                <div className="office">
                                                    <img src={officeLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Office Caller <br /> ( Live Tracking & Services )</p>
                                                </div>
                                            </div>
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro pristonMain" onClick={() => { handleShowVehicalTracking() }}>
                                                <div className="VehicalTracking w-100">
                                                    <img src={VehiclTrackingLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Vehicle Tracking <br /> ( Vehicle Management System )</p>
                                                </div>
                                            </div>
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro VehicleMain" onClick={() => { handleShowAnimalAdmin() }}>
                                                <div className="AminalApp w-100">
                                                    <img src={AniamlApp} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Animal App <br /> ( Animal's healts & Services )</p>
                                                </div>
                                            </div>
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro MyuniversZ" onClick={() => { handleShowMyUnivers() }}>
                                                <div className="office">
                                                    <img src={MyUnivers} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">My Universe<br /> ( For Commercial purpose )</p>
                                                </div>
                                            </div>
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="singlePro" onClick={() => { handleShowFleetManagement() }}>
                                                <div className="office">
                                                    <img src={FleetLogo} alt="" />
                                                </div>
                                                <div className="backGrondProduct">
                                                    <p className="projectTitle">Fleet Management<br /> ( Goods Carrier )</p>
                                                </div>
                                            </div>
                                            <div className="ProjectBorderBottom"></div>
                                        </div>
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

            {/* Office Caller */}
            <Modal show={officeCaller} onHide={handleCloseOffice} size='xl' centered className='Common-Modal'>
                <Modal.Body>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">Office Caller</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={OfficeCaller4} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={OfficeCaller3} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={OfficeCaller2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={OfficeCaller1} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">Office caller is an easy-to-manage business phone app that allows users to make or receive business calls. Users can work from anywhere and manage their business lines and hours without any hassle. The app allows users to make phone calls, transfer and forward calls, and much more at ease using any device, be it Android or iOS mobile devices or PC.</p>
                                    <p className="contain">Client : <span>Redbytes</span></p>
                                    <p className="contain">Technologies : <span>HTML, Sass, Bootstrap, <b>Next.js</b></span></p>
                                    <p className="contain">Role : <span> UI Developer </span></p>
                                    <p className="contain">URL : <span><a href="https://officecaller.com/">officecaller.com</a></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Office Caller */}
            <Modal show={vehicalTracking} onHide={handleCloseVehicalTracking} size='xl' centered className='Common-Modal'>
                <Modal.Body>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">Vehicle Tracking</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={VehicleTracking1} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={VehicleTracking2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={VehicleTracking3} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={VehicleTracking4} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={VehicleTracking5} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">The Vehicle Tracking Driver App is implemented with features specified to assist drivers with trip details such as trip route, pick up /drop points, and other valuable direction guidance to perform more effectively.</p>
                                    <p className="contain">Client : <span>Redbytes</span></p>
                                    <p className="contain">Technologies : <span>HTML, Sass, Bootstrap, React Prime , <b>React.js</b></span></p>
                                    <p className="contain">Challenging Task  : <span> <b>Multi Languages</b> </span></p>
                                    <p className="contain">URL : <span><a href="http://vehicletrackingsystem.ui.redbytes.in/">vehicletrackingsystem.com</a></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Animal Admin */}
            <Modal show={animalAdmin} onHide={handleCloseAnimalAdmin} size='xl' centered className='Common-Modal'>
                <Modal.Body>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">Animal App - Admin</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={AnimalApp1} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={AnimalApp2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={AnimalApp3} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={AnimalApp4} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">Animal Health Management & Pet Care is a comprehensive application designed to cater to various aspects of animal well-being and pet ownership. It offers a range of services and features to ensure the health, happiness, and proper care of animals.</p>
                                    <p className="contain">Client : <span>Redbytes</span></p>
                                    <p className="contain">Technologies : <span>HTML, Sass, Bootstrap, React Prime , <b>React.js</b></span></p>
                                    <p className="contain">Role  : <span> UI Development </span></p>
                                    <p className="contain">URL : <span><a href="http://animal-admin.ui.redbytes.in/">animal-admin.com</a></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* My Universe */}
            <Modal show={myUnivers} onHide={handleCloseMyUnivers} size='xl' centered className='Common-Modal'>
                <Modal.Body>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">My Universe</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={MyUnvrs1} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={MyUnvrs2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={MyUnvrs3} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={MyUnvrs4} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">My Universe is a multifaceted platform designed to enhance the university experience for students and faculty members. It provides a wide range of features and functionalities to foster connections, share information, and facilitate various university-related activities.</p>
                                    <p className="contain">Client : <span>Redbytes</span></p>
                                    <p className="contain">Technologies : <span>HTML, Sass, Bootstrap, React Bootstrap , <b>React.js</b></span></p>
                                    <p className="contain">Role  : <span> UI Development </span></p>
                                    <p className="contain">URL : <span><a href="http://my-univrs.ui.redbytes.in/">my-Universe.com</a></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

             {/* Fleet Management */}
             <Modal show={fleetManagement} onHide={handleCloseFleetManagement} size='xl' centered className='Common-Modal'>
                <Modal.Body>
                    <div className="modal_head">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">Fleet Management</div>
                            </div>
                            <div className="col-lg-6">
                                <div className="privewCarosal">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img src={MyUnvrs1} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={MyUnvrs2} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={MyUnvrs3} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={MyUnvrs4} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="projecInformations">
                                    <p className="head">Project Info:</p>
                                    <p className="contain">My Universe is a multifaceted platform designed to enhance the university experience for students and faculty members. It provides a wide range of features and functionalities to foster connections, share information, and facilitate various university-related activities.</p>
                                    <p className="contain">Client : <span>Redbytes</span></p>
                                    <p className="contain">Technologies : <span>HTML, Sass, Bootstrap, React Bootstrap , <b>React.js</b></span></p>
                                    <p className="contain">Role  : <span> UI Development </span></p>
                                    <p className="contain">URL : <span><a href="http://my-univrs.ui.redbytes.in/">my-Universe.com</a></span></p>

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