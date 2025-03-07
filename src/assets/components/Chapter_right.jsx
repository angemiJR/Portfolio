import '../styles/Common.css';
import Logo from './Logo.jsx';

function Chapter({ text }) {
    return (
        <div className="chapter_box_right">
            <div className="color_box_right">  {/* boja  */}
                <div className="box"> {/* div da se logo i text ne razdvajaju mnogo  */}

                    <h2>{text}</h2>
                    <Logo />

                </div>
            </div>
        </div>
    );
}

export default Chapter;