"use client";
import { manufacturers } from "@/constants";
import { SearchManfacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: SearchManfacturerProps) => {
  const [query, setquery] = useState("");
  const filteredManufactures = query==='' ? 
  manufacturers : manufacturers.filter((item)=>(
    item.toLowerCase().replace(/\s+/g,"")
    .includes(query.toLowerCase().replace(/\s+/g,""))
  ))
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
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition as={Fragment} 
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={()=>setquery('')}
          >
            <Combobox.Options>
              {filteredManufactures.length ===0 && 
              query !=="" ?(
                <Combobox.Option value={query} 
                className='search-manufacturer__option' >
                  Create "{query}"
                </Combobox.Option>
              ):(filteredManufactures.map((item)=>(
                <Combobox.Option key={item} value={item} 
                className={()}>
                  {item}
                </Combobox.Option>
              )))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
