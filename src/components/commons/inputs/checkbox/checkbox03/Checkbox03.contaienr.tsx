import {
  Checkbox,
  CheckboxName,
  CheckboxWrapper,
  Detail,
  Essential,
  Wrapper,
} from "./Checkbox03.style";
import { useRouter } from "next/router";
import { ICheckboxData, IPropsCheckbox03 } from "./Checkbox03.types";

export default function Checkbox03(props: IPropsCheckbox03) {
  const router = useRouter();

  return (
    <Wrapper>
      {props.checkboxData.map((el: ICheckboxData, index: number) => (
        <CheckboxWrapper key={index}>
          <Checkbox
            type="checkbox"
            id={`${el.name}cb${index}`}
            checked={el.state}
            onChange={props.onChangeCheckbox(index)}
          />
          <label htmlFor={`${el.name}cb${index}`}></label>
          <CheckboxName>
            <Essential isEssential={el.essential}>
              [ {el.essential ? "필수" : "선택"} ]
            </Essential>
            {el.CheckboxCont}
            <Detail onClick={() => router.push(`/${el.route}`)}>
              상세보기 &#62;
            </Detail>
          </CheckboxName>
        </CheckboxWrapper>
      ))}
    </Wrapper>
  );
}
