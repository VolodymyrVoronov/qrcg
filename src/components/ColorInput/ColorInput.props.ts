import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { ColorResult } from "react-color";

export interface IColorInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text: string;
  activeColor: string;
  onInputChange: (color: ColorResult) => void;
}
