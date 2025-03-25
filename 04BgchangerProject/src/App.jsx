import { useState } from "react";

function App() {
  const [color, setcolor] = useState("#970945");

  return (                                                                             
    <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-yellow-50 rounded-3xl">
          <button onClick={() => setcolor("red")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-red-500 hover:bg-red-600 transition-colors duration-300">
            red
          </button>
          <button onClick={() => setcolor("green")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-300">
            green
          </button>
          <button onClick={() => setcolor("gray")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-gray-500 hover:bg-gray-600 
            transition-colors duration-300">
            grey 
          </button>
          <button onClick={() => setcolor("blue")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
            blue
          </button>
          <button onClick={() => setcolor("orange")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300">
            orange
          </button>
          <button onClick={() => setcolor("indigo")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300">
            indigo
          </button>
          <button onClick={() => setcolor("black")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-black hover:bg-gray-800 transition-colors duration-300">
            black
          </button>
          <button onClick={() => setcolor("purple")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-300">
            purple
          </button>
          <button onClick={() => setcolor("pink")} 
            className="px-4 py-2 rounded-full shadow-sm text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-300">
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
