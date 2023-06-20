import { InputText } from "./Input01.style";

export default function Input01(props) {
  return (
    <InputText
      type={props.inputType}
      inputWidth={props.inputWidth}
      defaultValue={props.valueData || ""}
      onChange={props.onChangeValue}
      placeholder={props.placeholderData}
    />
  );
}
