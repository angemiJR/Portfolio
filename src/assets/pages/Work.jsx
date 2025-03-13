import '../styles/Work.css';
import '../styles/Common.css';

import Work_chapter from '../components/Work_chapter.jsx';
import Chapter from '../components/Chapter_right.jsx';


const chapterText = "My work";
function Work() {

   
    return (
        <>
            <div className='chapter_right'>

                <Chapter text={chapterText} />

            </div>
            <div className='container5'>
               <Work_chapter/>
            </div>

        </>
    );
}

export default Work; // Ensure you have this default export
