import {
  Checkbox,
  CheckboxBtn,
  CheckboxLabel,
  CheckboxName,
} from "./Checkbox02.style";
import { ICheckboxData, IPropsCheckbox02 } from "./Checkbox02.types";

export default function Checkbox02(props: IPropsCheckbox02) {
  return (
    <>
      {props.checkboxData.map((el: ICheckboxData, index: number) => (
        <Checkbox key={index}>
          <CheckboxLabel onChange={props.onChangeCheckbox(index)}>
            <CheckboxBtn
              type="checkbox"
              id={`${el.name}cb${index}`}
              defaultChecked={el.state}
            />
            <CheckboxName>
              {el.CheckboxCont}
              <em>&nbsp;&nbsp;{props.CheckboxCont2}</em>
            </CheckboxName>
          </CheckboxLabel>
        </Checkbox>
      ))}
    </>
  );
}
