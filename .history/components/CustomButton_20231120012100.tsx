'use client'

import { CustomButtonProps } from "@/types"

function CustomButton({title, containerStyles, handleClick, btnType} :CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      >
      <span className={`fex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton