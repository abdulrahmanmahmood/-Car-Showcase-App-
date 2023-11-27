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
  combination_mpg:24
  cylinders:4
  displacement:1.6
  drive:"fwd"
  fuel_type:"gas"
  highway_mpg:26
  make:"toyota"
  model:"corolla"
  transmission:"a"
  year:1993
}
