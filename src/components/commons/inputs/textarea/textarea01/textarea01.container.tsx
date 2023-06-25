import { TextareaText } from "./textarea01.style";
import { IPropsTextarea01 } from "./textarea01.types";

export default function Textarea01(props: IPropsTextarea01) {
  return (
    <TextareaText
      id={props.inputId}
      defaultValue={props.valueData || ""}
      onChange={props.onChangeContent}
      placeholder="내용을 입력해주세요."
    />
  );
}
