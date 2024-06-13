import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length , setlenth] = useState(8);
  const [number, setnumber] = useState(false);
  const [char , setchar] = useState(false);
  const [password ,setpassword] = useState("");
  

  const passswordRef = useRef(null);
  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passswordRef.current?.select()
  })

  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+= '0123456789';
    if(char) str+= '~!@#$%^&*()_+';

    for(let i =0 ; i<length ; i++){
      let randomidx = Math.floor(Math.random()*str.length +1 );
      pass += str[randomidx];
    }
    setpassword (pass);
       
  } ,[length,number,char,setpassword]
  )

  useEffect(() => {passwordGenerator()} , [length,number,char,setpassword]) 
  return (
    <>
      <div className='w-full text-orange-500 bg-gray-700 max-w-md 
      mx-auto shadow-md rounded-lg px-4 my-8'>
        <h1 className='text-white text-center'>password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' 
               value={password}
               className='outline-none w-full py-1 px-3'
               placeholder='password'
               ref={passswordRef}
              readOnly
        />
        <button className='bg-blue-500 outline-none
         text-white shrink-0 px-3 py-5' onClick={copyPassword}>copy me</button>
        

        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={0} max={20} value={length} className='cursor-pointer' 
            onChange={(e) => {setlenth(e.target.value)}} /> 
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked ={number} id='numberInput' onChange={() => {setnumber((prev) => !prev);}}/>
            <label>numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked ={char} id='characterInput' onChange={() => {setchar((prev) => !prev);}}/>
            <label>characters</label>
          </div>
        
        </div>

      </div>
    </>
  )
}

export default App
