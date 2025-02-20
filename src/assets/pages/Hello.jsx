import Navbar from '../components/Navbar';




import "../styles/Hello.css";

function Hello() {
    return (
        <div>
             <Navbar /> {/* Fixed navigation at the top */}
             <div>
            <h1>Hello</h1>
            <p>This is the Hello page content.</p>
        </div>

        </div>
    );
}

export default Hello;
