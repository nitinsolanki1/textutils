import './App.css';
import Navbar from "./component/navbar"
import Textarea from "./component/textarea"
import About from "./component/about"
import { useState } from "react"


function App() {
  const [mode,setmode] = useState("light")
    const darkmod=()=>{
        if(mode == "light"){

            setmode("dark")
            // alert(mode)
        }
        else
        {

            setmode("light")
            // alert(mode)
        }
    }   

  return (
    <div className="App">
        <Navbar mode={mode} darkmod={darkmod}/>
        {/* <About/> */}
        <Textarea/>
    </div>
  );
}

export default App;
