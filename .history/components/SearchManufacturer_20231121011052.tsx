"use client";
import { SearchManfacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: SearchManfacturerProps) => {
  const [query, setquery] = useState('')
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car-log"
              width={30}
              height={30}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) =>
               manufacturer}
               onChange={(e)=>setquery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
