
import '../styles/Common.css';
import '../styles/Work_chapter.css';

function Work_chapter(props) {
    return (
     <>
     
     <div className="Works_container">

     <img src={props.img} alt={props.altText} className="picture" />
     <h3 className="tittle">{props.tittle}</h3>
     <p className="built_on">{props.built_on} <b> </b> </p>
     <p className="note">{props.note} <i></i></p>






     </div>
     
     
     
     
     
     
     
     </>
    
    );
}

export default Work_chapter; 