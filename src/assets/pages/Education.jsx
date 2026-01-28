import { useEffect, useState } from 'react';
import '../styles/Education.css';
import '../styles/Common.css';

import Skills_GE_bullet from '../pictures/Skills_GE_bullet.svg';
import Skills_FD_bullet from '../pictures/Skills_FD_bullet.svg';
import Skills_SM_bullet from '../pictures/Skills_SM_bullet.svg';

import Chapter from '../components/Chapter_right.jsx';
import pictureDesktop from '../pictures/Education.svg';
import pictureMobile from '../pictures/Education_M.svg';

const chapterText = "Education";

function Education() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1400);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1400);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='chapter_right'>
                <Chapter text={chapterText} />
            </div>

            <div className='container4'>
                {isMobile ? (
                    <img src={pictureMobile} alt="education" id="education_img" />
                ) : (
                    <div className="box">
                        <img src={pictureDesktop} alt="education" id="education_img" />

                        <div className="div01">
                            <div className="text_box">
                                <h6>Bachelor’s degree with honors in graphic engineering and design</h6>
                                <p>Department of Graphic Engineering and Design </p>
                                <p>Faculty of Technical Science in Novi Sad</p>
                                <p>October 2009 – October 2013</p>
                            </div>
                            <img src={Skills_GE_bullet} alt="bullet" className='bullets' />
                        </div>

                        <div className="div02">
                            <div className="text_box">
                                <h6>Master’s degree in graphic engineering and design</h6>
                                <p>Department of Graphic Engineering and Design </p>
                                <p>Faculty of Technical Science in Novi Sad</p>
                                <p>October 2013 – October 2014</p>
                            </div>
                            <img src={Skills_GE_bullet} alt="bullet" className='bullets' />
                        </div>



                        <div className="div03">
                            <div className="text_box">
                                <h6>Front-end developer</h6>
                                <p>Sundsgårdens folkhögskola, Helsingborg</p>
                                <p>August 2024 - January 2025</p>
                            </div>
                            <img src={Skills_FD_bullet} alt="bullet" className='bullets' />
                        </div>

                        <div className="div04">
                            <img src={Skills_FD_bullet} alt="bullet" className='bullets' />
                            <div className="text_box">
                                <h6>Basics of Programming</h6>
                                <h6>(in C# and .NET framework)</h6>
                                <p>SmartInIT Code Academy, Novi Sad</p>
                                <p>March 2018</p>
                            </div>
                        </div>

                        <div className="div05">
                            <img src={Skills_SM_bullet} alt="bullet" className='bullets' />
                            <div className="text_box">
                                <h6>Scrum Fundamentals Certified (SFC)</h6>
                                <p>SCRUMstudy - Accreditation Body for Scrum and Agile</p>
                                <p>March 2022</p>
                            </div>
                        </div>

                        <div className="div06">
                            <img src={Skills_SM_bullet} alt="bullet" className='bullets' />
                            <div className="text_box">
                                <h6>Professional Scrum Master™ I (PSM I)</h6>
                                <p>Scrum.org</p>
                                <p>August 2022</p>
                            </div>
                        </div>

                        <div className="div07">
                            <img src={Skills_FD_bullet} alt="bullet" className='bullets' />
                            <div className="text_box">
                                <h6>Meta Back-End Developer</h6>
                                <p>Meta</p>
                                <p>December 2025</p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
}

export default Education;
