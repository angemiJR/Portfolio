import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Navbar from './assets/components/Navbar';

import Hello from './assets/pages/Hello';
import About from './assets/pages/About';
import Skills from './assets/pages/Skills';
import Education from './assets/pages/Education';
import Work from './assets/pages/Work';
import Contact from './assets/pages/Contact';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
 
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
