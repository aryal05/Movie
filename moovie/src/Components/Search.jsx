import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='w-[655px] h-12 bg-blue-950'>
      <div className='flex items-center w-full h-full ml-3 '>
        <img src="search.svg" className='text-blue-800 cursor-pointer' alt="" />
        <input type="text"
        className='border-none w-[500px] outline-0 text-white ml-5
        '
        placeholder='Search Through Thousand of Movies'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)} />
      </div>
    </div>
  )
}

export default Search
