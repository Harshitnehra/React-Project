import { useState } from 'react'
import './App.css'
import { useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("bfgcsyg")
  const passwordref = useRef(null)
  const passwordGenerator =()=>{
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if(numberAllowed){
      str += "234567890" 
    }
    if(charAllowed){
      str += "[]{}:;<>/?:'-+!@#$%^&*()"
    }
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed,])

const handleCopy = () => {
  if (passwordref.current) {
    // Select the input field's content
    passwordref.current.select();
    passwordref.current.setSelectionRange(0, 20); // For mobile devices

    // Copy the content to the clipboard
    navigator.clipboard.writeText(passwordref.current.value).then(() => {
      setMessage('Copied to clipboard!');
      setTimeout(() => setMessage(''), 2000); // Clear the message after 2 seconds
    }).catch(() => {
      setMessage('Failed to copy!');
    });
  }
};

  return (
   <div>
    <input type="" value={password} ref={passwordref}/>
    <button onClick={handleCopy}>copy</button>
    <input type='range' min={6} max={100} value={length} onChange={(e)=>{setlength(e.target.value)}} />

    <label htmlFor="">length :{length}</label>
    <input type="checkbox"  onChange={() =>{
            setnumberAllowed((p)=> !p)}}/>
            <label htmlFor="">numberAllowed</label>
            <input type="checkbox"  onChange={() =>{
            setcharAllowed((p)=> !p)}}/>
            <label htmlFor="">charAllowed</label>

    
   </div>
  )
}

export default App
