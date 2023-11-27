"use client";
import { CustomFilterProps } from "@/types";
import { UpdateSearchParams } from "@/utils";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setselected] = useState(options[0]);
  const router = useRouter();
  const handleUpdateParams = (type: string, value: string) => {
    const newPathName =   UpdateSearchParams(type, value);
    
    router.push(newPathName);
  };
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setselected(e)}>
        <div className="relative z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="chevron-up-down.svg"
              alt="chevron-up-down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white " : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
