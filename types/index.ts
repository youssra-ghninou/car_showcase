import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: string) => void;
}
