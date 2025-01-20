import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../Redex/pasteSlice'

const Home = () => {
    const [title, settitle] = useState("")
    const [value , setvalue] = useState("")
    const [searchParams , setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId")
    const dispatch = useDispatch();
    function createPaste(){
        const paste = {
            title: title,
            contant: value,
            _id: pasteId || Date.now.toString(36),
            createAt: new Date().toISOString(),
        }
        if(pasteId){
            dispatch(updateToPastes(paste));
        }
        else{
            dispatch(addToPastes(paste))
        }
        // after cration or updation
        settitle("");
        setvalue("");
        setSearchParams({})
    }

  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
      <input 
      className='p-1 rounded-2xl mt-2 w-[66%] pl-5'
      type="text" 
      placeholder='enter tital hear'
      value={title}
      onChange={(e)=> settitle(e.target.value) }/>
      <button onClick={createPaste} className='p-2 rounded-2xl mt-2'>
        {
            pasteId ? "update My Paste": "Create my Paste"
        }
      </button>
    </div>
    <div className='mt-8'>
        <textarea className='rounded-2xl mt-4 , min-w-[500px] p-4'
        value={value}
        placeholder='enter contant hear'
        onChange={(e)=> setvalue(e.target.value)}
        rows={20}
        />
    </div>
    </div>
    
  )
}

export default Home
