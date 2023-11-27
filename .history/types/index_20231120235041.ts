import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?:"button" | "submit" | "reset";
}

export interface SearchManfacturerP {
  setmanufacturer:Function;
  manufacturer:string;
}
