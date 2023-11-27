'use client'

import { CustomButtonProps } from "@/types"

function CustomButton({title, containerStyles, handleClick, btnType, textStyles} :CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      >
      <span className={`fex-1 ${}`}>{title}</span>
    </button>
  )
}

export default CustomButton