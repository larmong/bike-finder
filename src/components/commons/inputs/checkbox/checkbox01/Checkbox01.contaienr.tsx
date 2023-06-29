import {
  Checkbox,
  CheckboxBtn,
  CheckboxLabel,
  CheckboxName,
} from "./Checkbox01.style";
import { IPropsCheckbox01 } from "./Checkbox01.types";

export default function Checkbox01(props: IPropsCheckbox01) {
  return (
    <Checkbox>
      <CheckboxLabel onClick={props.onClickCb}>
        <CheckboxBtn type="checkbox" id="check" name="check" />
        <CheckboxName>
          {props.CheckboxCont}
          <em>&nbsp;&nbsp;{props.CheckboxCont2}</em>
        </CheckboxName>
      </CheckboxLabel>
    </Checkbox>
  );
}
