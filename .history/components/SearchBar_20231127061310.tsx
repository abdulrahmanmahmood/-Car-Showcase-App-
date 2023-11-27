'use client';

import { useState } from "react";
import {SearchButton, SearchManufacturer} from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";


const SearchBar = ({setmodel, setmanufacturer}) => {
  const [searchModel ,setodel] = useState('');
  const router = useRouter();
  const handlSearch = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(searchManufacturer ==='' && searchModel ===''){
      return alert('Please fill in the search bar');
    }

    UpdateSearchParams(searchModel.toLowerCase(), searchManufacturer.toLowerCase())
  }
  const UpdateSearchParams = (searchModel:string, searchManufacturer:string)=>{
    const searchParams = new URLSearchParams(window.location.search);
    if(searchModel){
      searchParams.set('model', searchModel)
    }else{
      searchParams.delete('model')
    }
    if(searchManufacturer){
      searchParams.set('manufacturer', searchManufacturer)
    }else{
      searchParams.delete('manufacturer')
    }
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)

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