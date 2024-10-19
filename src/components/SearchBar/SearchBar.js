import React from 'react'
import './SearchBar.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <div className='sub-search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input placeholder='Search Plant' />
                <FontAwesomeIcon icon={faLeaf} />
            </div>
        </div>
        
    )
}

export default SearchBar