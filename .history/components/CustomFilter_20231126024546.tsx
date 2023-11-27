import { CustomFilterProps } from '@/types'
import { Listbox } from '@headlessui/react'
import React from 'react'

const CustomFilter = ({title,options}:CustomFilterProps) => {
  return (
    <div className='w-fit'>
      <Listbox>
        <div className='relative z-10'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>

          </Listbox.Button>
          
        </div>
      </Listbox>
      
    </div>
  )
}

export default CustomFilter