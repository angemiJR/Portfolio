import '../styles/Skills.css';

import Chapter from '../components/Chapter_right.jsx';


const chapterText = "Skills";
function Skills() {
    return (
        <>
        <div className='chapter_right'>

            <Chapter text={chapterText} />

        </div>
        <div className='container2'>
           
        </div>

    </>
    );
}

export default Skills; // Ensure you have this default export