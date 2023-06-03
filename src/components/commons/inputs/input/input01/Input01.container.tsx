import { InputText } from "./Input01.style";

export default function Input01(props) {
  return (
    <InputText
      type="text"
      value={props.valueData}
      onChange={props.onChangeValue}
      placeholder={props.placeholderData}
    />
  );
}
