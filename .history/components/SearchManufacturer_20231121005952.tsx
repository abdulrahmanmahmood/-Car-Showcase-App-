'use client';
import { SearchManfacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: SearchManfacturerProps) => {
  return <div className="search-manufacturer">
    <Combobox>
      <div className="relative w-full">
        <Combobox.Button className='absolute top-[14px]'>
          <Image src='/car-log-.svg' alt="car-log" width={30} height={30} className="mt-4"/>
        </Combobox.Button>
      </div>
    </Combobox>
  </div>;
};

export default SearchManufacturer;
