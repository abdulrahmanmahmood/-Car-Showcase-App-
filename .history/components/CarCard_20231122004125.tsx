'use client'
import { CarProps } from "@/types"
import { useState } from "react"
import CustomButton from "./CustomButton"
interface CarCardProps {
  car:CarProps;
}

const CarCard = ({car}:CarCardProps) => {
  const {city_mpg,  combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg,
     make, model, transmission, year } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2>{make}  {model}</h2>
      </div>
    </div>
  )
}

export default CarCard