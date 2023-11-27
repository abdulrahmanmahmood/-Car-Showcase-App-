import React from 'react'
interface SearchButtonProps{
  otherClasses :string;

}

function SearchButton({otherClasses}:SearchButtonProps) {
  return (
    <button type='submit' className={`-m-3 z-10 ${otherClasses}`}>
      <Im
    </button>
  )
}

export default SearchButton
