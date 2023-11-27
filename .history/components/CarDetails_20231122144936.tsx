'use client'

import { CarDetailsProps } from '@/types'
import { Transition, Dialog } from '@headlessui/react'
import React, { Fragment } from 'react'

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
  return (
    <>
     <Transition appear show={isOpen} as={Fragment}>
      <Dialog  as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child as={Fragment} enter='ease-out duration-300'
        enterFrom='opacity-0' enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25'
          
          />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='fle'>

          </div>
        </div>
      </Dialog>
      </Transition> 
    </>
  )
}

export default CarDetails