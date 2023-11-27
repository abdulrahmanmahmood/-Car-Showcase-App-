import React from 'react'
interface SearchButtonProps{
  otherClases :string;

}

function SearchButton({otherClases}:SearchButtonProps) {
  return (
    <button type='submit' className={`-m-3 z-10 ${otherClasess}`}>
      
    </button>
  )
}

export default SearchButton
