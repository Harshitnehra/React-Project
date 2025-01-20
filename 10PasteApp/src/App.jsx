import { useState } from 'react'
import { createBrowserRouter } from "react-router-dom";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <div>

      </div>
    },
    {
      path: "/pastes", 
      element: <div>
        
      </div>
    },
    {
      path: "/pastes/:id", 
      element: <div>
        
      </div>
    },
  ]);

  return (
   <div>
    hllo j
   </div>
  )
}

export default App
