'use client';

import {SearchManufacturer} from "./";


const SearchBar = () => {
  const handlSearch = ()=>{

  }
  const [manufacturer, setmanufacturer] = useState('')
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