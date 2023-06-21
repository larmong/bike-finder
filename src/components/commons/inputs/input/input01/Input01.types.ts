import { ChangeEvent } from "react";

export interface IPropsInput01 {
  inputType: string;
  inputId: string;
  inputWidth?: string;
  valueData: string | number | readonly string[] | undefined;
  onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholderData?: string;
}
