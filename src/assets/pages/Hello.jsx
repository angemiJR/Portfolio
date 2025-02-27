import Navbar from '../components/Navbar';
import picture1 from '../pictures/Hello_1.svg';
import '../styles/Hello.css';




import "../styles/Hello.css";

function Hello() {
    return (
        <div>
             <Navbar /> {/* Fixed navigation at the top */}
             <div className='container'>
          <img src={picture1} alt="" id='picture_hello' />
        </div>

        </div>
    );
}

export default Hello;
