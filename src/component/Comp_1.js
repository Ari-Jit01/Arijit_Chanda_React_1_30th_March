import React,{useState} from "react"
import "../App.css"
export default function Comp_1(){
const { useState } = require("react")


const [counter, setcounter] = useState(0)
return(
  <div className="App">
    <p>Counter={counter}</p>
    {counter<1?<p className="red">Error:Cannot go bellow 0</p>: <p>  </p>}
    <button onClick={()=>setcounter(counter-1)}>Decrement</button>
    <button onClick={()=>setcounter(counter+1)}>Increment</button>
    <button onClick={()=>setcounter(0)}>0</button>
  </div>
)}