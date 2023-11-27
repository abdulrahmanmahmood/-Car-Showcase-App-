'use client';
import { SearchManfacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: SearchManfacturerProps) => {
  return <div className="search-manufacturer">
    <Combobox>
      <div className="relative w-full">
        <Combobox.Button className='absolute top-[14px]'>

        </Combobox.Button>
      </div>
    </Combobox>
  </div>;
};

export default SearchManufacturer;
