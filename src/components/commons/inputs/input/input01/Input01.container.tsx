import { InputText } from "./Input01.style";
import { IPropsInput01 } from "./Input01.types";

export default function Input01(props: IPropsInput01) {
  return (
    <InputText
      className={props.inputClass}
      type={props.inputType}
      id={props.inputId}
      width={props.inputWidth}
      defaultValue={props.valueData || ""}
      onChange={props.onChangeValue}
      placeholder={props.placeholderData}
    />
  );
}
