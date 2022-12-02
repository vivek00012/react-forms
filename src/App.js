import React,{useRef,useState} from "react";
import "./style.css";
// dom manupulation -create form save and submit
const App=() =>{
  const inputElement = useRef();
  const [color, setColor] = useState("");
 
  return (
    <>
    <input type="text" ref={inputElement} />
    </>
  );
}

export default App;
