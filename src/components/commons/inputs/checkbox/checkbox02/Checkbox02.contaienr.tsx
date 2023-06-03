import { Checkbox, CheckboxName, Wrapper } from "./Checkbox02.style";

export default function Checkbox02(props) {
  return (
    <>
      {props.checkboxData.map((el, index) => (
        <Wrapper key={index}>
          <Checkbox type="checkbox" id={`${el.name}cb${index}`} />
          <label htmlFor={`${el.name}cb${index}`}></label>
          <CheckboxName>
            {el.CheckboxCont}
            <em>&nbsp;&nbsp;{props.CheckboxCont2}</em>
          </CheckboxName>
        </Wrapper>
      ))}
    </>
  );
}
