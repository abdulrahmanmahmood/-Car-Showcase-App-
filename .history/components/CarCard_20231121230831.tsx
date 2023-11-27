'use client'
import { CarProps } from "@/types"
import { useState } from "react"
import CustomButton from "./CustomButton"
interface CarCardProps {
  car:CarProps;
}

const CarCard = ({car}:CarCardProps) => {
  const {city_mpg, class , combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg,
     make, model, transmission, year }= car;
  return (
    <div>CarCard</div>
  )
}

export default CarCard