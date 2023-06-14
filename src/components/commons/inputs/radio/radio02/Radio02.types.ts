import { MouseEvent } from "react";

export interface IPropsRadio02 {
  radioData: IRadioData[];
  radioName: string;
  onClickRadio: IRadioDataClick;
}

export interface IRadioData {
  id: number;
  name: string;
  checkedState: boolean;
}

export interface IRadioDataClick {
  onClickRadio: (event: MouseEvent<HTMLElement>) => void;
}
