export interface IPropsCheckbox03 {
  checkboxData: ICheckboxData[];
  onChangeCheckbox: (index: number) => () => void;
}

export interface ICheckboxData {
  essential: boolean;
  name: string;
  CheckboxCont: string;
  route: string;
  state: boolean;
}

export interface IIsEssential {
  isEssential: boolean;
}
