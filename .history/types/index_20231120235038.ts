import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?:"button" | "submit" | "reset";
}

export interface SearchManfact {
  setmanufacturer:Function;
  manufacturer:string;
}
