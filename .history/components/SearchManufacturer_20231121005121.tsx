import { SearchManfacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: SearchManfacturerProps) => {
  return <div className="search-manufacturer">
    <Combobox>
      <div className="rela">

      </div>
    </Combobox>
  </div>;
};

export default SearchManufacturer;
