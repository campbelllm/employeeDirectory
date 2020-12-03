import React from 'react';
import { fas, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () =>{
  const handleClick = () => {

  }
  const handleChange = () => {

  }

  return(
    <div >
      <input type="text" value={handleChange} placeholder="search" className='search'/>
      <button className='searchButton' onClick={handleClick}><FontAwesomeIcon icon={fas, faSearch} /></button>
    </div>
  )
}

export default Search;