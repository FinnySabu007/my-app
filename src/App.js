import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = (a,b,c)=>{
    setMode(c)
    console.log(mode)
    setTimeout(()=>{
      if(mode=="dark"){
        // setMode("light")
        // console.log(mode)
        document.body.style.backgroundColor = a;
        document.body.style.color = b;
        document.querySelector("#myBox").style.backgroundColor = a
        document.querySelector("#myBox").style.color = b
      }
      else if(mode=="light"){
        // setMode("dark")
        // console.log(mode)
        document.body.style.backgroundColor = a;
        document.body.style.color = b;
        document.querySelector("#myBox").style.backgroundColor = a
        document.querySelector("#myBox").style.color = b
      }
      else if(mode=="grey"){
        document.body.style.backgroundColor = a;
        document.body.style.color = b;
        document.querySelector("#myBox").style.backgroundColor = a
        document.querySelector("#myBox").style.color = b
      }
    },0)
    
  }
  
  return (
    <>
    {/* <Router> */}
       <Navbar title="textutils" mode={mode} toggleMode={toggleMode}></Navbar>
       <div className='container'>
       {/* <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze"></TextForm>}> */}
            <TextForm heading="Enter the text to analyze"></TextForm>
            {/* </Route>
        </Routes> */}
       
       {/* <About/> */}
       </div>

    {/* </Router> */}
    </>
  );
}

export default App;
