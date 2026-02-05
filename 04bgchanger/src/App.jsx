import { useState } from "react"

function App() {
  const [color , setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => {setcolor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>red</button>
        <button onClick={() => {setcolor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>green</button>
        <button onClick={() => {setcolor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
        <button onClick={() => {setcolor("yellow")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>yellow</button>
        <button onClick={() => {setcolor("pink")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>pink</button>
        <button onClick={() => {setcolor("white")}} className="outline-none px-4 py-1 rounded-full text-green shadow-lg" style={{backgroundColor: "white"}}>white</button>
        <button onClick={() => {setcolor("orange")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>orange</button>
      </div>
    </div>
  )
}

export default App
