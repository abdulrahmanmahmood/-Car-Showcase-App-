import React from 'react'
interface SearchButtonProps{
  otherclasses :string;

}

function SearchButton({otherClasess}:string) {
  return (
    <button type='submit' className={`-m-3 z-10 ${otherClasess}`}>
      
    </button>
  )
}

export default SearchButton
