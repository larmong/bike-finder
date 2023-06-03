import { DefaultBtn } from "./Button02.style";

export default function Button01(props) {
  return <DefaultBtn onClick={props.onClickButton}>{props.btnText}</DefaultBtn>;
}
