import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed ,setnumberAllowed] = useState(false)
  const [charAllowed ,setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  //  uesRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*()*-;:,./?><"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setpassword(pass)


  }, [length, numberAllowed, charAllowed])
  
  const copypasswordtoclipboard= useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, ])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password generatror</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={password} 
      className='outline-none w-full py-1 px-3' 
      placeholder='password' 
      readOnly 
      ref={passwordRef}
      />
      <button
      onClick={copypasswordtoclipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flax text-sm gap-x-2'>
        <div className='flax items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
           />
           <label>length: {length}</label>
        </div>
        <div className='flax items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked= {numberAllowed}
          id='numberinput'
          onChange={() =>{
            setnumberAllowed((prev)=> !prev)
          }}
           />
           <label htmlFor='numberinput'>Number</label>
        </div>
        <div className='flax items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked= {charAllowed}
          id='charinput'
          onChange={() =>{
            setcharAllowed((prev)=> !prev)
          }}
           />
           <label htmlFor='charinput'>charater</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
