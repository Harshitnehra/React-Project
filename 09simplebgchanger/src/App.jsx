import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  function handlecolor(){
    setcolor("red")
  }

  return (
    <div className='w-full h-screen duration-200' style={{background: color}}>
      <button className='p-4' onClick={handlecolor} >
        red
      </button>
      <button onClick={()=>{setcolor("green")}}>
        green
      </button>
      <button onClick={()=>{setcolor("yellow")}}>
        yellow
      </button>
      <button onClick={()=>{setcolor("orange")}}>
        orange
      </button>
    </div>
  )
}

export default App
