'use client'
import { CustomFilterProps } from '@/types'
import { Listbox } from '@headlessui/react'
import Image from 'next/image'
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
              <span className='block truncate'>{selected.title}</span>
              <Image src='chevron-up-down.svg' alt='chevron-up-down' width={20
              }/>
          </Listbox.Button>
          
        </div>
      </Listbox>
      
    </div>
  )
}

export default CustomFilter