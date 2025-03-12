import '../styles/Skills.css';

import Chapter from '../components/Chapter_right.jsx';

import Skills_SM from '../pictures/Skills_SM.svg';
import Skills_FD from '../pictures/Skills_FD.svg';
import Skills_GE from '../pictures/Skills_GE.svg';
import Skills_FD_bullet from '../pictures/Skills_FD_bullet.svg';
import Skills_SM_bullet from '../pictures/Skills_SM_bullet.svg';
import Skills_GE_bullet from '../pictures/Skills_GE_bullet.svg';


const chapterText = "Skills";
function Skills() {
    return (
        <>
            <div className='chapter_right'>

                <Chapter text={chapterText} />

            </div>
            <div className='container3'>
                <div className="whole">
                    <div className="div2">
                        <img src={Skills_SM} alt="Scrum master logo" className='image' />
                    </div>
                    <div className="grid_container">

                        <div className="div3"></div>
                        <div className="div3"></div>
                        <div className="div4">
                            <img src={Skills_SM_bullet} alt="Scrum master bullet" className='bullet' />
                        </div>
                        <div className="div5">
                            <p>Proficient in <b>Scrum, Agile </b>methodologies, and frameworks like <b>SAFe</b>
                            </p>
                        </div>
                        <div className="div6">
                            <img src={Skills_SM_bullet} alt="Scrum master bullet" className='bullet' />
                        </div>
                        <div className="div7">
                            <p>Skilled in team <b>facilitation</b>, <b>leadership</b>, and <b>conflict resolution</b>
                            </p>
                        </div>
                        <div className="div8">
                            <img src={Skills_SM_bullet} alt="Scrum master bullet" className='bullet' />
                        </div>
                        <div className="div9">
                            <p>Effective <b>problem-solving</b> and removal of blockers

                            </p>
                        </div>
                        <div className="div10">
                            <img src={Skills_SM_bullet} alt="Scrum master bullet" className='bullet' />
                        </div>
                        <div className="div11">
                            <p>Experienced in using tools like <b>JIRA</b>, <b>Confluence</b>
                            </p>
                        </div>
                        <div className="div12">
                            <img src={Skills_SM_bullet} alt="Scrum master bullet" className='bullet' />
                        </div>
                        <div className="div13">
                            <p>High emotional intelligence for team dynamics and <b>fostering collaboration</b>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="whole">
                <div className="grid_container2">

                    <div className="div3"></div>
                    <div className="div3"></div>
                    <div className="div4">
                        <img src={Skills_FD_bullet} alt="Frontend bullet" className='bullet' />
                    </div>
                    <div className="div5">
                        <p>Proficient in <b>HTML5, CSS3, SCSS </b> (Sass), and <b>JavaScript</b>


                        </p>
                    </div>
                    <div className="div6">
                        <img src={Skills_FD_bullet} alt="Frontend bullet" className='bullet' />
                    </div>
                    <div className="div7">
                        <p>Experienced in modern frameworks such as <b> React</b>


                        </p>
                    </div>
                    <div className="div8">
                        <img src={Skills_FD_bullet} alt="Frontend bullet" className='bullet' />
                    </div>
                    <div className="div9">
                        <p>Skilled in UI/UX design using <b>Figma</b> and modern design libraries

                        </p>
                    </div>
                    <div className="div10">
                        <img src={Skills_FD_bullet} alt="Frontend bullet bullet" className='bullet' />
                    </div>
                    <div className="div11">
                        <p>Adept at version control with <b>Git</b> and <b>GitHub</b>

                        </p>
                    </div>
                    <div className="div12">
                        <img src={Skills_FD_bullet} alt="Frontend bullet bullet" className='bullet' />
                    </div>
                    <div className="div13">
                        <p>Strong foundation in responsive and user-centric web development principles

                        </p>
                    </div>
                    <div className="div3"></div>
                    <div className="div3"></div>
        
                    
                </div>

                <div className="div2">
                        <img src={Skills_FD} alt="Front end logo" className='image' />
                    </div>
                </div>
                <div className="whole">
                    <div className="div2">
                        <img src={Skills_GE} alt="Graphic engeneer logo" className='image' />
                    </div>
                    <div className="grid_container">
                        <div className="div3"></div>
                        <div className="div3"></div>
                        <div className="div4">
                            <img src={Skills_GE_bullet} alt="Graphic engeneer bullet" className='bullet' />
                        </div>
                        <div className="div5">
                            <p>Strong <b>negotiation skills</b> for client and supplier interactions

                            </p>
                        </div>
                        <div className="div6">
                            <img src={Skills_GE_bullet} alt="Graphic engeneer bullet" className='bullet' />
                        </div>
                        <div className="div7">
                            <p>Expertise in client <b>collaboration</b> and delivering customized solutions

                            </p>
                        </div>
                        <div className="div8">
                            <img src={Skills_GE_bullet} alt="Graphic engeneer bullet" className='bullet' />
                        </div>
                        <div className="div9">
                            <p>Proficient in using <b>Adobe InDesign</b> and <b>Illustrator</b> for graphic production


                            </p>
                        </div>
                        <div className="div10">
                            <img src={Skills_GE_bullet} alt="Graphic engeneer bullet" className='bullet' />
                        </div>
                        <div className="div11">
                            <p>Adept at fostering a <b>collaborative</b> and <b>supportive</b> learning environment

                            </p>
                        </div>
                        <div className="div12">
                            <img src={Skills_GE_bullet} alt="Graphic engeneer bullet" className='bullet' />
                        </div>
                        <div className="div13">
                            <p>Team player with a <b>leadership</b> role

                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Skills; // Ensure you have this default export