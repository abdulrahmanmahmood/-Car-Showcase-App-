'use client';

import {SearchManufacturer} from "./SearchManufacturer";


const SearchBar = () => {
  const handlSearch = ()=>{

  }
  return (
    <form className='searchbar' onSubmit={handlSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
        
        />
      </div>
    </form>
  )
}

export default SearchBar