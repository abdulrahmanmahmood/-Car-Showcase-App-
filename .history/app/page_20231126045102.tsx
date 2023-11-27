'use client'
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps, HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useState } from "react";

export default  function Home() {
  const [allCars, setallCars] = useState([])
  const [loading, setloading] = useState(false);

  //search states
  const [manufacture, setmanufacture] = useState('');
  const [model, setmodel] = useState('')

  // filter States
  const [first, setfirst] = useState(second)

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p className="">Explore The cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {
                allCars.map((car)=> <CarCard car={car}/>)
              }
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10)/10 }
              isNext={(searchParams.limit || 10 )> allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2
              className="text-black text-xl
        font-bold"
            >
              Oops, no results
            </h2>
            <p>{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
