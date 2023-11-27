import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p className="">
            Explore The cars you might like
          </p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          
        </div>

      </div>
    </main>
  );
}
