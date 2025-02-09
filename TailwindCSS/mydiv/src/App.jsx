import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Container with flex-col to stack card and button vertically */}
      <div className="flex flex-col items-center space-y-4">
        {/* Card */}
        <div className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex items-center gap-x-4">
          <div className="shrink-0">
            <img
              className="w-12 h-12"
              src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
              alt="Facebook logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium text-black">Hifzur Rahman</h1>
            <p className="text-slate-500 text-sm">It's me</p>
          </div>
        </div>
        {/* Button placed just below the card */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 hover:shadow-lg hover:shadow-gray-400  md:bg-green-500 ">
          Click me
        </button>
      </div>
    </div>
  )
}

export default App
