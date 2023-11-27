import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType:string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
