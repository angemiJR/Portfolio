import '../styles/Contact.css';
import '../styles/Common.css';
import Chapter from '../components/Chapter_left.jsx';
import picture1 from '../pictures/Contact_me.svg';

const chapterText = "Contact";

function Contact() {
    return (
        <>
            <div className='chapter_left'>

                <Chapter text={chapterText} />

            </div>
            <div className="container6">

                <div className="contact_text_box">
                    <h6>Thank you for visiting my website!

Feel free to reach out—I’m always open to new opportunities, collaborations, and exciting projects.

With a background in graphic engineering and design, I have a deep understanding of the entire creative, production, and workflow process. From initial concepts to final execution, I know how to bridge the gap between design and development. As a Scrum Master, I ensure smooth workflows, efficient team collaboration, and agile project execution. Combining these skills with front-end development, I bring designs to life with precision, ensuring both functionality and aesthetics work seamlessly together.

Let’s connect and create something amazing!</h6>
                </div>
                  <img src={picture1} alt="Background" id="picture_contact" />
            
            </div>
            <div className="line"></div>
        </>
    );
}

export default Contact; // Ensure you have this default export