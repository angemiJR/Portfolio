import Navbar from "../components/Navbar";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

import "../styles/Hello.css";

function Hello() {
    return (
        <div>
            <Navbar /> {/* Keep Navbar fixed at the top */}

            {/* Sections with IDs for smooth scrolling */}
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="education"><Education /></section>
            <section id="work"><Work /></section>
            <section id="contact"><Contact /></section>
        </div>
    );
}

export default Hello;
