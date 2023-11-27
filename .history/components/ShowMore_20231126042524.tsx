'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'

function ShowMore({pageNumber, isNext}:ShowMoreProps) {
  const router = useRouter();
  const handleNavigation = ()=>{

  }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      <Cus
      
    </div>
  )
}

export default ShowMore