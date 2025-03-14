
import '../styles/Common.css';
import '../styles/Work_chapter.css';

function Work_chapter(props) {
    return (
        <>

            <div className="Works_container">

                <img src={props.img} alt={props.altText} className="picture" />

                <div className="work_text_box">
                    <h3 className="tittle">{props.tittle}</h3>
                    <p className="built_on"><b>Built on: {props.built_on}  </b> </p>
                    <p className="note"><i>Note: {props.note} </i></p>
                    
                </div>


                <a href={props.url}>
                        <button className='try'>
                            Try it out
                        </button>
                    </a>


            </div>







        </>

    );
}

export default Work_chapter; 