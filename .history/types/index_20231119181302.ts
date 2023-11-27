import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  constainerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
