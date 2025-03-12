import '../styles/About.css';
import '../styles/Common.css';

import Chapter from '../components/Chapter_left.jsx';
import picture1 from '../pictures/About1.svg';
function About() {

    const chapterText = "About me";
    return (
        <>
            <div className='chapter_left'>

                <Chapter text={chapterText} />

                <div className="name">
                    <div className="name_box_left">  
                        
                            <h3>Miladinovic Emilija</h3>
                       
                    </div>
                </div>

            </div>
            <div className='container2'>
                <div className="text">
                    <p>
                        My name is Emilija, and I am a passionate and
                        multifaceted professional originally from Serbia,
                        now based in Sweden. My background as a Graphic Engineer
                        and Designer has laid a solid foundation for my creativity,
                        which I apply across various disciplines. Over the years,
                        I’ve embraced opportunities to expand my skill set, integrating
                        Scrum Mastery with Front-end Development.
                    </p>
                    <p>
                        I thrive on connecting the dots between creativity,
                        technology, and organization, always bringing a fresh
                        perspective to my work. Whether I’m designing visual
                        experiences, managing projects, or developing user-focused
                        solutions, I give 100% of myself to every endeavor. My goal
                        is to create impactful results while continuously growing and
                        exploring new ways to innovate.
                    </p>
                </div>

                <img src={picture1} alt="Background" id="picture_about" />
            </div>

        </>
    );
}

export default About; // Ensure you have this default export