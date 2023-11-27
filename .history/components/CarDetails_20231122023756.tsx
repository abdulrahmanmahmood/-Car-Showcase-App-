import { CarDetailsProps } from '@/types'
import { Transition,Dailog, Dialog } from '@headlessui/react'
import React, { Fragment } from 'react'

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
  return (
    <>
     <Transition appear show={isOpen} as={Fragment}>
      <Dialog>

      </Dialog>
      </Transition> 
    </>
  )
}

export default CarDetails