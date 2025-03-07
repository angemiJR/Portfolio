import '../styles/Common.css';
import Logo from './Logo.jsx';

function Chapter({ text }) {
    return (
        <div className="chapter_box_left">
           <div className="color_box_left">  {/* boja  */}
               <div className="box"> {/* div da se logo i text ne razdvajaju mnogo  */}
                 <Logo />
                <h2>{text}</h2>
                </div>
            </div>
        </div>
    );
}

export default Chapter;
