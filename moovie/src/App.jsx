import React, { useState, useEffect } from 'react';
import Search from './Components/Search'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState("")
  const fetchMovies = async()=>{
     try {
      const endPoint =(`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`)
      const response = await fetch(endPoint, API_OPTIONS)
      if(!response.ok){
        throw new Error(response.statusText)
      }else{
        const data = await response.json()
        console.log(data) 
      }
     } catch (error) {
      console.log(`Error fetching movies ${error}`)
      setError('Error Fetching Movies Please Try Again.')
     }
  }
  useEffect(()=>{

  },[])
  return (
    <main className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('./BG.png')" }}>
      <div className="absolute flex inset-0 flex-col items-center justify-center text-center text-white px-4">
        <img src="./hero-img.png" alt="" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find <span className="text-red-400">Movies</span> You'll Enjoy <br /> Without the Hassle
        </h1>
        <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      </div>
      <section>
        <h2>All Movies</h2>
      </section>
    </main>
  )
}

export default App
