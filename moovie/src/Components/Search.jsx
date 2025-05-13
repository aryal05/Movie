import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='w-[655px] h-12 bg-blue-950'>
      <div className='flex items-center w-full h-full ml-3 '>
        <img src="search.svg" className='text-blue-800' alt="" />
        <input type="text"
        className='border-none outline-0 text-white ml-5
        '
        placeholder='Search Here..' />
      </div>
    </div>
  )
}

export default Search
