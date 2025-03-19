import Navbar from '../components/Navbar';
import picture1 from '../pictures/Hello_1.jpg';

import '../styles/Hello.css';






function Hello() {
    return (
        <>
            <Navbar /> {/* Fixed navigation at the top */}
            <div className="container">
                <img src={picture1} alt="Background" id="picture_hello" />
            </div>
            </>
    );
}

export default Hello;


