import React from 'react'
import IMG from "../assets/images/gb_img1.jpg"
import download from "../assets/images/download-solid.svg"
import reume from "../assets/Usama_Musab.pdf"
const Summary = () => {
    const cvFileName = 'Usama_Musab.pdf'; // Replace with the actual filename of your CV
    return (
        <div className="SummaryMain" >
            <div className="headerAbout">
                <div className="backGroundHeading" id='ResumeMe'>
                    SUMMARY
                </div>
                <div className="mainHeading">
                    Resume
                    <span className='BottomBorderAbout'>

                    </span>
                </div>
            </div>
            <div className="container">
                <div className="summryExprince">
                    <div className="row">
                        <p className="ExpHeading">My Experience</p>
                        <div className="col-lg-6">
                            <div className="ExpSingle">
                                <p className="duration"> May 2022 - Present</p>
                                <p className="position">Front End Developer</p>
                                <p className="companyName">Redbytes Software Pvt. Ltd.</p>
                                <p className="dicription">Front-end dev at Redbytes, 1.5 yrs. Proficient in React and Next.js. Designed interactive web experiences with HTML, CSS, JS. Enhanced UI/UX, responsive layouts, and optimized user engagement.Working with SSR and CSR</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ExpSingle">
                                <p className="duration">Feb 2021 - Apr 2022</p>
                                <p className="position">React Js developer</p>
                                <p className="companyName">Tekisky Pvt. Ltd.</p>
                                <p className="dicription">At Tekisky, 1.2 years as a front-end developer. Expertise in React.js, creating dynamic web interfaces. Proficient in HTML, CSS, JS. Committed to user-centered design, responsive layouts, and elevating digital interactions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skillsMain">
                    <div className="row">
                        <p className="SkillHeading">My Skills</p>
                        <div className="col-lg-6">
                            <div className="skillSingle">
                                <div className="headSkill">
                                    <p className="skillName">Web Design</p>
                                    <p className="ratioSkill">89 %</p>
                                </div>
                                {/* Range */}
                                <div className="RangeSkill">
                                    <div className="Web89"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skillSingle">
                                <div className="headSkill">
                                    <p className="skillName">HTML / CSS</p>
                                    <p className="ratioSkill">97 %</p>
                                </div>
                                {/* Range */}
                                <div className="RangeSkill">
                                    <div className="Web97"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skillSingle">
                                <div className="headSkill">
                                    <p className="skillName">Syntactically Awesome Style Sheets ( Sass )</p>
                                    <p className="ratioSkill">95 %</p>
                                </div>
                                {/* Range */}
                                <div className="RangeSkill">
                                    <div className="Web95"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skillSingle">
                                <div className="headSkill">
                                    <p className="skillName">Bootstrap / React Bootstrap</p>
                                    <p className="ratioSkill">99 %</p>
                                </div>
                                {/* Range */}
                                <div className="RangeSkill">
                                    <div className="Web99"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skillSingle">
                                <div className="headSkill">
                                    <p className="skillName">Java Script</p>
                                    <p className="ratioSkill">80 %</p>
                                </div>
                                {/* Range */}
                                <div className="RangeSkill">
                                    <div className="Web80"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skillSingle">
                                <div className="headSkill">
                                    <p className="skillName">React Js</p>
                                    <p className="ratioSkill">85 %</p>
                                </div>
                                {/* Range */}
                                <div className="RangeSkill">
                                    <div className="Web85"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skillSingle">
                                <div className="headSkill">
                                    <p className="skillName">GitLab / GitHub</p>
                                    <p className="ratioSkill">95 %</p>
                                </div>
                                {/* Range */}
                                <div className="RangeSkill">
                                    <div className="Web95"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skillSingle">
                                <div className="headSkill">
                                    <p className="skillName">Next Js</p>
                                    <p className="ratioSkill">80 %</p>
                                </div>
                                {/* Range */}
                                <div className="RangeSkill">
                                    <div className="Web80"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <a href={reume} download={cvFileName} className='SkillDownloadCv'>
                                <button>
                                    Download CV
                                    <img src={download} alt="" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary