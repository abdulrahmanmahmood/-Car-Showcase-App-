'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import CustomButton from './CustomButton';
import { UpdateSearchParams } from '@/utils';

function ShowMore({pageNumber, isNext}:ShowMoreProps) {
  const router = useRouter();
  const handleNavigation = ()=>{
    const 
    const newPathName = UpdateSearchParams('limit', )
  }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {! isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
      
    </div>
  )
}

export default ShowMore