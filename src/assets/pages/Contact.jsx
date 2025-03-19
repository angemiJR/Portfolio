import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"



import '../styles/Contact.css';
import '../styles/Common.css';
import '../styles/About.css';

import Chapter from '../components/Chapter_left.jsx';
import picture1 from '../pictures/Contact_me.svg';
import CV from '/documents/Emilija_Miladinovic_CV_February_25-merged-compressed-1.pdf';

const chapterText = "Contact";

function Contact() {
    return (
        <>
            <div className='chapter_left'>

                <Chapter text={chapterText} />

            </div>
            <div className="container6">

                <div className="contact_text_box">
                    <h6>Thank you for visiting my website!</h6>

                    <h6>Feel free to reach out—I’m always open to new opportunities, collaborations, and exciting projects.</h6>

                    <h6>With a background in graphic engineering and design, I have a deep understanding of the entire creative, production, and workflow process. From initial concepts to final execution, I know how to bridge the gap between design and development. As a Scrum Master, I ensure smooth workflows, efficient team collaboration, and agile project execution. Combining these skills with front-end development, I bring designs to life with precision, ensuring both functionality and aesthetics work seamlessly together. </h6>

                    <h6>Let’s connect and create something amazing!</h6>



                </div>

                <img src={picture1} alt="Background" id="picture_contact" />

            </div>
            <div className="name">
                <div className="name_box_left">
                    <a  href={CV} download>
                        <h3>Download my full CV here</h3>
                    </a>
                </div>
            </div>
            <footer>
                <div className="line"></div>

                <div className="footer_icons">
                    <p>Created by Emilija Miladinovic 2025</p>

                    <a href="https://github.com/angemiJR">
                        <FontAwesomeIcon icon={faGithub} className="icons" />
                    </a>
                    <a href="mailto:angemi.jr@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="icons" />
                    </a>
                    <a href="https://www.linkedin.com/in/emilija-miladinovic/">
                        <FontAwesomeIcon icon={faLinkedin} className="icons" />
                    </a>
                </div>

            </footer>
        </>
    );
}

export default Contact; // Ensure you have this default export