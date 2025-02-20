
import Hello from './assets/pages/Hello';
import About from './assets/pages/About';
import Skills from './assets/pages/Skills';
import Education from './assets/pages/Education';
import Work from './assets/pages/Work';
import Contact from './assets/pages/Contact';

import './App.css';

function App() {
  return (
    <div>
     {/* Sections with corresponding IDs for smooth scrolling */}
<section id="hello"><Hello /></section>
<section id="about"><About /></section>
<section id="skills"><Skills /></section>
<section id="education"><Education /></section>
<section id="work"><Work /></section>
<section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
