import {
  Checkbox,
  CheckboxBtn,
  CheckboxLabel,
  CheckboxName,
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
        <Checkbox key={index}>
          <CheckboxLabel onChange={props.onChangeCheckbox(index)}>
            <CheckboxBtn
              type="checkbox"
              id={`${el.name}cb${index}`}
              defaultChecked={el.state}
            />
            <CheckboxName>
              <Essential isEssential={el.essential}>
                [ {el.essential ? "필수" : "선택"} ]
              </Essential>
              {el.CheckboxCont}
              <Detail onClick={() => router.push(`/${el.route}`)}>
                상세보기 &#62;
              </Detail>
            </CheckboxName>
          </CheckboxLabel>
        </Checkbox>
      ))}
    </Wrapper>
  );
}
