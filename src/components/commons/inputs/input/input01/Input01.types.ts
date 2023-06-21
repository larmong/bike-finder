import { CustomChangeEvent } from "../../../../../commons/types/global.types";

export interface IPropsInput01 {
  inputType: string;
  inputId: string;
  inputWidth?: string;
  valueData: string | number | readonly string[] | undefined;
  onChangeValue: (event: CustomChangeEvent) => void;
  placeholderData?: string;
  inputClass?: string;
}
