import React, { useState } from 'react'
import Search from './Components/Search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <main className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('./BG.png')" }}>
      <div className="absolute flex inset-0 flex-col items-center justify-center text-center text-white px-4">
        <img src="./hero-img.png" alt="" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find <span className="text-red-400">Movies</span> You'll Enjoy <br /> Without the Hassle
        </h1>
        <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      </div>
    </main>
  )
}

export default App
