export interface IPropsCheckbox02 {
  checkboxData: ICheckboxData[];
  CheckboxCont2?: () => void;
  onChangeCheckbox: (index: number) => () => void;
}

export interface ICheckboxData {
  name: string;
  CheckboxCont: string;
  CheckboxCont2: string;
  state: boolean;
}
