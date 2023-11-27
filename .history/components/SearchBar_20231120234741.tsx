'use client';

import { useState } from "react";
import {SearchManufacturer} from "./";


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
      </div>
    </form>
  )
}

export default SearchBar