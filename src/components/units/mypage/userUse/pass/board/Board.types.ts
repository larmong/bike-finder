import {
  IRadioData,
  IRadioDataClick,
} from "../../../../../commons/inputs/radio/radio02/Radio02.types";
import Pass from "../Pass.container";

export interface IPropsPassBoard {
  boardData: IFetchPass[];
  setPassType: IRadioDataClick;
  PASS_TYPE: IRadioData[];
}

export interface IFetchPass {
  id: string;
  userId: string;
  type: number;
  date: string;
  product: string;
  rental_date: number;
  return_date: string;
  state: boolean;
}
