import { eventWrapper } from "@testing-library/user-event/dist/utils"
import "./textaream.css"
import { useState } from "react"

const Textarea=()=>{
    let tvalue = document.getElementById("tarea")
    const[text,settext] = useState("")
    const[bg,setbg] = useState("white")
    const[clr,setclr] = useState("black")


    
    const setvalue=(event)=>{
        settext(event.target.value)
    }
    const changeuppercase=()=>{
        settext(text.toUpperCase())
    }

   const changelowercase=()=>{
    settext(text.toLowerCase())
   }

   const changebg=(event)=>{
       setbg(event.target.value)
    tvalue.style.background = bg
}

   const changetxt=(event)=>{
    setclr(event.target.value)
    tvalue.style.color   = clr
   }

    return(
        <div className="textarea-part">
            <textarea rows={20} id="tarea" onChange={setvalue} value={text} cols={100}> </textarea>
            <div className="Buttons">

            <button onClick={changeuppercase} >Upper</button>
            <button onClick={changelowercase}>lower</button>
            <label>bgcolor</label>
            <input  type="color" onChange={changebg}  id="bgcolor"/>
            <label>textcolor</label>
            <input  type="color" onChange={changetxt} id="textcolor"/>
            </div>
        </div>
    )
}
export default Textarea;