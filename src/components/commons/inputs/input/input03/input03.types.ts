export interface IPropsInput03 {
  onChangeNumber: (value: string, id: string) => void;
  valueData: string | number | readonly string[] | undefined;
  placeholderData?: string;
  inputMaxLength?: number;
  inputId: string;
}
