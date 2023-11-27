'use client';

import { useState } from "react";
import {SearchButton, SearchManufacturer} from "./";
import Image from "next/image";


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
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      <div className="searchbar__item">
        <Image
        src='/model-icon.png'
        alt="model-icon"
        width={25}
        height={25}
        />
      </div>
    </form>
  )
}

export default SearchBar