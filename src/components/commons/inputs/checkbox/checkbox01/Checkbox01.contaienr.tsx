import { Checkbox, CheckboxName, Wrapper } from "./Checkbox01.style";
import { IPropsCheckbox01 } from "./Checkbox01.types";

export default function Checkbox01(props: IPropsCheckbox01) {
  return (
    <Wrapper>
      <Checkbox type="checkbox" id="check1" onClick={props.onClickCb} />
      <label htmlFor="check1"></label>
      <CheckboxName>
        {props.CheckboxCont}
        <em>&nbsp;&nbsp;{props.CheckboxCont2}</em>
      </CheckboxName>
    </Wrapper>
  );
}
