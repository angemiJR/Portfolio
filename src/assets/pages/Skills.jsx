import { useEffect, useState } from 'react';
import '../styles/Skills.css';
import '../styles/Common.css';

import Chapter from '../components/Chapter_left.jsx';

import Skills_SM from '../pictures/Skills_SM.svg';
import Skills_FD from '../pictures/Skills_FD.svg';
import Skills_GE from '../pictures/Skills_GE.svg';
import Skills_FD_bullet from '../pictures/Skills_FD_bullet.svg';
import Skills_SM_bullet from '../pictures/Skills_SM_bullet.svg';
import Skills_GE_bullet from '../pictures/Skills_GE_bullet.svg';

const chapterText = "Skills";

function Skills() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1400);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1400);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='chapter_left'>
                <Chapter text={chapterText} />
            </div>

            <div className='container3'>

                {/* FIRST WHOLE */}
                <div className="whole">
                    <div className="div2">
                        <img src={Skills_SM} alt="Scrum master logo" className='image' />
                    </div>
                    <div className="grid_container">
                        <div className="div3"></div>
                        <div className="div3"></div>
                        <div className="div4"><img src={Skills_SM_bullet} alt="" className='bullet' /></div>
                        <div className="div5"><p>Proficient in <b>Scrum, Agile</b> methodologies, and frameworks like <b>SAFe</b></p></div>
                        <div className="div6"><img src={Skills_SM_bullet} alt="" className='bullet' /></div>
                        <div className="div7"><p>Skilled in team <b>facilitation</b>, <b>leadership</b>, and <b>conflict resolution</b></p></div>
                        <div className="div8"><img src={Skills_SM_bullet} alt="" className='bullet' /></div>
                        <div className="div9"><p>Effective <b>problem-solving</b> and removal of blockers</p></div>
                        <div className="div10"><img src={Skills_SM_bullet} alt="" className='bullet' /></div>
                        <div className="div11"><p>Experienced in using tools like <b>JIRA</b>, <b>Confluence</b></p></div>
                        <div className="div12"><img src={Skills_SM_bullet} alt="" className='bullet' /></div>
                        <div className="div13"><p>High emotional intelligence for team dynamics and <b>fostering collaboration</b></p></div>
                    </div>
                </div>

                {/* SECOND WHOLE - CONDITIONAL ORDER */}
                <div className="whole">
                    {isMobile ? (
                        <>
                            <div className="div2">
                                <img src={Skills_FD} alt="Front end logo" className='image' />
                            </div>
                            <div className="grid_container2">
                                <div className="div3"></div>
                                <div className="div3"></div>
                                <div className="div4"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div5"><p>Proficient in front-end technologies including <b>HTML5</b>, <b>CSS3</b>, <b>SCSS (Sass)</b>, <b>JavaScript</b>, <b>React</b>, and <b>Bootstrap</b></p></div>
                                <div className="div6"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div7"><p>Experienced in back-end development with <b>Python</b>, <b>Django</b> (including <b>Django ORM</b>), <b>MySQL</b>, and <b>RESTful APIs</b> using <b>Django REST Framework</b></p></div>
                                <div className="div8"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div9"><p>Skilled in UI/UX design using <b>Figma</b> and modern design libraries</p></div>
                                <div className="div10"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div11"><p>Adept at version control with <b>Git</b> and <b>GitHub</b></p></div>
                                <div className="div12"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div13"><p>Strong foundation in responsive and user-centric web development principles</p></div>
                                <div className="div3"></div>
                                <div className="div3"></div>
                           
                            </div>
                        </>
                    ) : (
                        <>
                              <div className="grid_container2">
                                <div className="div3"></div>
                                <div className="div3"></div>
                                <div className="div4"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div5"><p>Proficient in front-end technologies including <b>HTML5</b>, <b>CSS3</b>, <b>SCSS (Sass)</b>, <b>JavaScript</b>, <b>React</b>, and <b>Bootstrap</b></p></div>
                                <div className="div6"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div7"><p>Experienced in back-end development with <b>Python</b>, <b>Django</b> (including <b>Django ORM</b>), <b>MySQL</b>, and <b>RESTful APIs</b> using <b>Django REST Framework</b></p></div>
                                <div className="div8"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div9"><p>Skilled in UI/UX design using <b>Figma</b> and modern design libraries</p></div>
                                <div className="div10"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div11"><p>Adept at version control with <b>Git</b> and <b>GitHub</b></p></div>
                                <div className="div12"><img src={Skills_FD_bullet} alt="" className='bullet' /></div>
                                <div className="div13"><p>Strong foundation in responsive and user-centric web development principles</p></div>
                                <div className="div3"></div>
                                <div className="div3"></div>
                           
                            </div>
                            <div className="div2">
                                <img src={Skills_FD} alt="Front end logo" className='image' />
                            </div>
                        </>
                    )}
                </div>

                {/* THIRD WHOLE */}
                <div className="whole">
                    <div className="div2">
                        <img src={Skills_GE} alt="Graphic engineer logo" className='image' />
                    </div>
                    <div className="grid_container">
                        <div className="div3"></div>
                        <div className="div3"></div>
                        <div className="div4"><img src={Skills_GE_bullet} alt="" className='bullet' /></div>
                        <div className="div5"><p>Strong <b>negotiation skills</b> for client and supplier interactions</p></div>
                        <div className="div6"><img src={Skills_GE_bullet} alt="" className='bullet' /></div>
                        <div className="div7"><p>Expertise in client <b>collaboration</b> and delivering customized solutions</p></div>
                        <div className="div8"><img src={Skills_GE_bullet} alt="" className='bullet' /></div>
                        <div className="div9"><p>Proficient in using <b>Adobe InDesign</b> and <b>Illustrator</b> for graphic production</p></div>
                        <div className="div10"><img src={Skills_GE_bullet} alt="" className='bullet' /></div>
                        <div className="div11"><p>Adept at fostering a <b>collaborative</b> and <b>supportive</b> learning environment</p></div>
                        <div className="div12"><img src={Skills_GE_bullet} alt="" className='bullet' /></div>
                        <div className="div13"><p>Team player with a <b>leadership</b> role</p></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Skills;
