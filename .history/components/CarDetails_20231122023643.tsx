import { CarDetailsProps } from '@/types'
import { Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
  return (
    <>
     <Transition appear show={isOpen} as={Fragment}>
      <dialog>

      </dialog>
      </Transition> 
    </>
  )
}

export default CarDetails