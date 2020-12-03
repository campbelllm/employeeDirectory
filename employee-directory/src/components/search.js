import React, {useEffect} from 'react';
import { fas, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = ({setSearchValue, setClick, click} ) =>{
 

  const handleClick = () => {
   if(click){
     setClick(false)
    }else{
       setClick(true)
    }
      
    
  }
  
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }


  
  return(
    <div >
      <input type="text"  onChange={handleChange} placeholder="search" className='search'/>
      <button className='searchButton' onClick={handleClick}><FontAwesomeIcon icon={fas, faSearch} /></button>
    </div>
  )
}

export default Search;