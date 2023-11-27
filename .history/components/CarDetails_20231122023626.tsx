import { CarDetailsProps } from '@/types'
import { Transition } from '@headlessui/react'
import React from 'react'

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
  return (
    <>
     <Transition appear show={isOpen} as={Frag}>
      
      </Transition> 
    </>
  )
}

export default CarDetails