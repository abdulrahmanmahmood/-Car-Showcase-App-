'use client'

import { CustomButtonProps } from "@/types"

function CustomButton({title, constainerStyles, handleClick} :CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn`}
      onClick={()=>{}}
      >
      <span className={`fex-1`}>title</span>
    </button>
  )
}

export default CustomButton