import Image from 'next/image';
import React from 'react'
interface SearchButtonProps{
  otherClasses :string;

}

function SearchButton({otherClasses}:SearchButtonProps) {
  return (
    <button type='submit' className={`-m-3 z-10 ${otherClasses}`}>
      <Image
        her
      />
    </button>
  )
}

export default SearchButton
