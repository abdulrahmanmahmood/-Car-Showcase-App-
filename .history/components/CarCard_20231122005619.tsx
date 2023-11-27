"use client";
import { CarProps } from "@/types";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
      <span className="self-start text-[14px] font-semibold"> $ </span>
      <span className="self-start font-semibold">{carRent}</span>
        <span className="self-end text-[14px] font-medium"> / day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src='/hero.png' alt="car"
        fill property="" className="obje" 
        />
      </div>
    </div>
  );
};

export default CarCard;