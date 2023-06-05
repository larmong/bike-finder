import { MouseEvent } from "react";

export interface IPropsRadio01 {
  radioData: IRadioData[];
  radioName: string;
  onClickRadio: (event: MouseEvent<HTMLElement>) => void;
}

export interface IRadioData {
  name: string;
  price: number;
}
