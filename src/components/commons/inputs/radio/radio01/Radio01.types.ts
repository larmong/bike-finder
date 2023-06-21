import { CustomMouseEvent } from "../../../../../commons/types/global.types";

export interface IPropsRadio01 {
  radioData: IRadioData[];
  radioName: string;
  onClickRadio: (event: CustomMouseEvent) => void;
}

export interface IRadioData {
  name: string;
  price: number;
}
