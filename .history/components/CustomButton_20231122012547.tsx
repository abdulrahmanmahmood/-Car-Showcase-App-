'use client'

import { CustomButtonProps } from "@/types"
import Image from "next/image"

function CustomButton({title, containerStyles, handleClick, 
  btnType, textStyles, rightIcon} :CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      >
      <span className={`fex-1 ${textStyles}`}>{title}</span>
      {rightIcon &&(
        <div className="">
          <Image src={rightIcon} alt={rightIcon} fill/>
        </div>
      )
}
    </button>
  )
}

export default CustomButton