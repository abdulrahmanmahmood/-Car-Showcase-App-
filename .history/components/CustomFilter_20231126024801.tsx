'use client'
import { CustomFilterProps } from '@/types'
import { Listbox } from '@headlessui/react'
import React from 'react'

const CustomFilter = ({title,options}:CustomFilterProps) => {
  return (
    <div className='w-fit'>
      <Listbox>
        <div className='relative z-10'>
          <Listbox.Button className='custom-filter__btn'>

          </Listbox.Button>
          
        </div>
      </Listbox>
      
    </div>
  )
}

export default CustomFilter