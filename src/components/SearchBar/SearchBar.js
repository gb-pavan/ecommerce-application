import React from 'react'
import './SearchBar.css'
import { PiPlantFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";



const SearchBar = () => {
    return (
        <div className='search-bar'>
            <div className='sub-search'>
                <CiSearch />
                <input placeholder='Search Plant' />
                <PiPlantFill />
            </div>
        </div>
        
    )
}

export default SearchBar