import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?:"button" | "submit" | "reset";
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
  highway_mpg:26
  make:"toyota"
  model:"corolla"
  transmission:"a"
  year:1993
}
