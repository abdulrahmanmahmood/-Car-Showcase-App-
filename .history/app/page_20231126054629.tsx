'use client'
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps, HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default  function Home() {
  const [allCars, setallCars] = useState([])
  const [loading, setloading] = useState(false);

  //search states
  const [manufacturer, setmanufacturer] = useState('');
  const [model, setmodel] = useState('')

  // filter States
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);

  //pagination state;
  const [limit, setLimit] = useState(10);

  const getCars = async ()=>{
    setloading(true)
    try{
      const result = await fetchCars({
        manufacturer : manufacturer || '',
        year:year || 2022,
        fuel: fuel || '',
        limit:limit || 10,
        model:model || '',
    
      });
    setallCars(result);
    }catch(error){
      console.log(error);
      
    }finally{
      setloading(false)
    }
    

  }

  useEffect(()=>{

    getCars();


  },[manufacturer,year, fuel, limit,model])

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
          <SearchBar setmanufacturer={setmanufacturer}  setmodel={setmodel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {allCars.length >0 ? (
          <section>
            <div className="home__cars-wrapper">
              {
                allCars.map((car)=> <CarCard car={car}/>)
              }
            </div>
            {loading &&(
              <div>
                <Image src='/loader.svg' alt="loader" width={}/>
              </div>
            )}
            <ShowMore
              pageNumber={(limit || 10)/10 }
              isNext={(limit || 10 )> allCars.length}
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
          </div>
        )}
      </div>
    </main>
  );
}
