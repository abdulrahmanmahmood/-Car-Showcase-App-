'use client';

import { useState } from "react";
import {SearchButton, SearchManufacturer} from "./";


const SearchBar = () => {
  const handlSearch = ()=>{

  }
  const [manufacturer, setmanufacturer] = useState('')
  return (
    <form className='searchbar' onSubmit={handlSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
        manufacturer={manufacturer}
        setmanufacturer={setmanufacturer}
        />
        <SearchButton otherClasses={''}/>
      </div>
    </form>
  )
}

export default SearchBar