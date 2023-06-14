import { SmallBtn } from "./Button02.style";

export default function Button02(props) {
  return (
    <SmallBtn
      onClick={props.onClickButton}
      btnWidth={props.btnWidth}
      className={props.btnClass}
    >
      {props.btnText}
    </SmallBtn>
  );
}
