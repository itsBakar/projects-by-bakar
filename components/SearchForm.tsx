"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'

const SearchForm = () => {

    const [search, setSearch] = useState('')

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
        <label className='flex-center relative w-full max-w-3xl'>
            <div className='absolute left-8 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
            </div>
            <Input className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-offset-0 placeholder:text-white-800' type='text' placeholder='Search'value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
    </form>
  )
}

export default SearchForm