'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import CustomButton from './CustomButton';

function ShowMore({pageNumber, isNext}:ShowMoreProps) {
  const router = useRouter();
  const handleNavigation = ()=>{

  }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      <CustomButton/>
      
    </div>
  )
}

export default ShowMore