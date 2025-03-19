import { useEffect, useState } from "react";
import Hello from './assets/pages/Hello';
import About from './assets/pages/About';
import Skills from './assets/pages/Skills';
import Education from './assets/pages/Education';
import Work from './assets/pages/Work';
import Contact from './assets/pages/Contact';

import './App.css';

function App() {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleOrientationChange);
    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  // If the screen is in portrait mode, display a warning
  if (isPortrait) {
    return (
      <div className="landscape-warning">
        <h2>Please rotate your device to landscape mode.</h2>
      </div>
    );
  }

  return (
    <>
      {/* Sections with corresponding IDs for smooth scrolling */}
      <section id="hello"><Hello /></section>
      <section id="about"><About /></section>
      <section id="work"><Work /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
