import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes, //instead of switch
//   Route,
//   Link
// } from "react-router-dom"


function App() {

  const [mode, setMode] = useState('light'); //Whether on dark mode

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#0d1923";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled", "success");
      
    }
  }

  const changeColortoPurple = () =>{
      setMode("dark");
      document.body.style.backgroundColor="#290010";
      // showAlert("Dark Mode has been enabled", "success");
    }
  const changeColortoGreen = () =>{
      setMode("dark");
      document.body.style.backgroundColor="#003014";
      // showAlert("Dark Mode has been enabled", "success");
    }
  const changeColortoGrey = () =>{
      setMode("dark");
      document.body.style.backgroundColor="#444444";
      // showAlert("Dark Mode has been enabled", "success");
    }


  return (
    <>
      {/* <Router>    */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} changeColortoPurple={changeColortoPurple} changeColortoGreen={changeColortoGreen} changeColortoGrey={changeColortoGrey}/>
        <Alert alert={alert}/>
        <TextForm heading="Enter a text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter a text to analyze below" mode={mode} showAlert={showAlert}/>}/> */}
            {/* <Route exact path="/about" element={<About/> }/>  */}
            {/* partial path avoiding using "exact" */}
            {/* <Route  /> */}
          {/* </Routes> */}
        </div>
      {/* </Router>  */}
    </>
  )
}

export default App
