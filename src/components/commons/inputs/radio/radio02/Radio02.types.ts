import { MouseEvent } from "react";

export interface IPropsRadio02 {
  radioData: IRadioData[];
  radioName: string;
  onClickRadio: (event: MouseEvent<HTMLElement>) => void;
}

export interface IRadioData {
  id: number;
  name: string;
  checkedState: boolean;
}
