import { CustomChangeEventTextArea } from "../../../../../commons/types/global.types";

export interface IPropsTextarea01 {
  inputId: string;
  valueData: string | number | readonly string[] | undefined;
  onChangeContent: (event: CustomChangeEventTextArea) => void;
}
