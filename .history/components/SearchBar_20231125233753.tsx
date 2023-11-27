'use client';

import { useState } from "react";
import {SearchButton, SearchManufacturer} from "./";
import Image from "next/image";


const SearchBar = () => {
  const handlSearch = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(manufacturer ==='' && model ===''){
      return alert('Please fill in the search bar');
    }
  }
  const UpdateSearchParams = (model:string, manufact)=>{

  }
  const [manufacturer, setmanufacturer] = useState('')
  const [model ,setmodel] = useState('');
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
        className="absolute w-[20px] h-[20px] ml-4"
        />
        <input type="text" 
        name="model" 
        value={model} 
        placeholder="Model"
        className="searchbar__input"
        onChange={(e)=>setmodel(e.target.value)} />
        <SearchButton otherClasses="sm:hidden" />
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  )
}

export default SearchBar