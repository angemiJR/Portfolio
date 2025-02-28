import Navbar from '../components/Navbar';
import picture1 from '../pictures/Hello_1.svg';
import World from '../pictures/World.svg';
import '../styles/Hello.css';




import "../styles/Hello.css";

function Hello() {
    return (
        <div>
            <Navbar /> {/* Fixed navigation at the top */}
            <div className='container'>


                <div className="hello_text">
                    <h2>Hello</h2>
                    <img src={World} alt="picture2" id='world' />

                </div>

                <img src={picture1} alt="picture" id='picture_hello' />
            </div>

        </div>
    );
}

export default Hello;
