'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'

function ShowMore({pageNumber, isNext}:ShowMoreProps) {
  const router = useRouter();
  const handleShowMore = ()=>{
    
  }
  return (
    <div>ShowMore</div>
  )
}

export default ShowMore