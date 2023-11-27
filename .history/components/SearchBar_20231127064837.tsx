'use client';

import { useState } from "react";
import {SearchButton, SearchManufacturer} from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";


const SearchBar = (setmodel, setmanufacturer) => {
  const [searchModel ,setSearchModel] = useState('');
  const [searchManufacturer,setSearchManufacturer]=useState('')
  const router = useRouter();
  const handlSearch = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(searchManufacturer ==='' && searchModel ===''){
      return alert('Please fill in the search bar');
    }

  setmodel(searchModel)
  setmanufacturer(searchManufacturer)
  }


  return (
    <form className='searchbar' onSubmit={handlSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
        manufacturer={searchManufacturer}
        setmanufacturer={setSearchManufacturer}
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
        value={searchModel} 
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