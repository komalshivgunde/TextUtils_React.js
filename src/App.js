import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable DarkMode')
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(() => {
        setAlert(null);
      },2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      setText('Disable DarkMode')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils- Dark Mode"
      setInterval(()=>{
        document.title="TextUtils is Amazing App";
      },2000);

      setInterval(()=>{
        document.title="Install TextUtils";
      },1500);

    }

    else{
      setMode('light')
      setText('Enable DarkMode')
      document.body.style.backgroundColor = "white"
      showAlert("Dark mode has been disabled","success")
      document.title="TextUtils- Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} text={text} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About showAlert={showAlert} mode={mode}/>} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze below:" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
    
  );
}

export default App;
