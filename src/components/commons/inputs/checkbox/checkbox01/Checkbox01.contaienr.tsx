import { Checkbox, CheckboxName, Wrapper } from "./Checkbox01.style";

export default function Checkbox01(props) {
  return (
    <Wrapper>
      <Checkbox type="checkbox" id="check1" />
      <label htmlFor="check1"></label>
      <CheckboxName>
        {props.CheckboxCont}
        <em>&nbsp;&nbsp;{props.CheckboxCont2}</em>
      </CheckboxName>
    </Wrapper>
  );
}
