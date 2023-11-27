import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?:"button" | "submit" | "reset";
  textStyles?:string;
  rightIcon?:string;
  isDisabled?
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
