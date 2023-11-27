'use client'
import { CustomFilterProps } from '@/types'
import { Listbox } from '@headlessui/react'
import React, { useState } from 'react'

const CustomFilter = ({title,options}:CustomFilterProps) => {
  const [selected, setselected] = useState(options[0]);
  return (
    <div className='w-fit'>
      <Listbox
      value={selected}
      onChange={(e)=>setselected(e)}
      >
        <div className='relative z-10'>
          <Listbox.Button className='custom-filter__btn'>
              <span className=''>{selected.title}</span>
          </Listbox.Button>
          
        </div>
      </Listbox>
      
    </div>
  )
}

export default CustomFilter