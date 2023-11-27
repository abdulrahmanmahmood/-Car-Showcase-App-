import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?:"button" | "submit" | "reset";
  textStyles?:string;
  rightIcon?:string;
  isDisabled?:boolean;
}

export interface SearchManfacturerProps {
  setmanufacturer:(manufacturer:string)=>void;
  manufacturer:string;
}

export interface CarProps{
  city_mpg:number;
  class:string;
  combination_mpg:number;
  cylinders:number;
  displacement:number;
  drive:string;
  fuel_type:string;
  highway_mpg:number;
  make:string;
  model:string;
  transmission:string;
  year:number;
}


export interface CarDetailsProps{
  isOpen:boolean;
  closeModal:Function;
  car:CarProps;
}

export interface FilterProps{
  manufacturer :string;
  year:number;
  fuel:string;
  limit:number;
  model:string;
}

export interface CustomFilterProps{
  title:string;
  options:optionProps[];
}
export interface optionProps{
  title:string;
  
}