import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textforms from './components/Textforms';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [text, settext] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      settext("Enable Light Mode")
      document.body.style.backgroundColor = "#343a40"
    }
    else {
      setmode("light")
      settext("Enable Dark Mode")
      document.body.style.backgroundColor = "transparent"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} text={text} about="About Us" toggleMode={toggleMode} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Textforms heading="Enter your text here" mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="about" element={<About mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
