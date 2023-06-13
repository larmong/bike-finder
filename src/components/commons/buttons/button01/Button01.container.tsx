import { DefaultBtn } from "./Button02.style";

export default function Button01(props) {
  return (
    <DefaultBtn
      onClick={props.onClickButton}
      btnWidth={props.btnWidth}
      className={props.btnClass}
    >
      {props.btnText}
    </DefaultBtn>
  );
}
