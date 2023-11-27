'use client';

import { useState } from "react";
import {SearchManufacturer} from "./";


const SearchBar = () => {
  const handlSearch = ()=>{

  }
  useState(()=>{})
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