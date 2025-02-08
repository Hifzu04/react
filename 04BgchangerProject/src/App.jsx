

//used tailwindCSS in this project

import { useState } from "react"


 

function App() {
  const [color, setcolor] = useState("#674645");    //read and write

  return (
    <>
      <div className='width-full h-screen duration-1000' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-yellow-50 rounded-3xl">
            <button onClick={() => setcolor("red")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "red" }}>red</button>
            <button onClick={() => setcolor("green")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "green" }}>green</button>
            <button onClick={() => setcolor("grey")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "grey" }}>grey</button>
            <button onClick={() => setcolor("blue")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "blue" }}>blue</button>
            <button onClick={() => setcolor("orange")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "orange" }}>orange</button>
            <button onClick={() => setcolor("indigo")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "indigo" }}>indigo</button>
            <button onClick={() => setcolor("black")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "black" }}>black</button>
            <button onClick={() => setcolor("purple")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "purple" }}>purple</button>
            <button onClick={() => setcolor("pink")} className=' px-4 py-2 outline-none rounded-full shadow-sm text-white' style={{ backgroundColor: "pink" }}>pink</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
