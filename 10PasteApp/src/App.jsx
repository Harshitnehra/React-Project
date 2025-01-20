import { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Paste from './Components/Paste';
import ViewPaste from './Components/ViewPaste';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    },
    {
      path: "/pastes", 
      element: <div>
        <Navbar></Navbar>
        <Paste></Paste>
      </div>
    },
    {
      path: "/pastes/:id", 
      element: <div>
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
      </div>
    },
  ]);

  return (
   <div>
    <RouterProvider router={router}></RouterProvider>
   </div>
  )
}

export default App
