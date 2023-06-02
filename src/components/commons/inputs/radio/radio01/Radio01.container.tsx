import * as S from "./Radio01.style";
import { IPropsRadio01 } from "./Radio01.types";

export default function Radio01(props: IPropsRadio01) {
  return (
    <S.Radio>
      {props.radioData?.map((el, index: number) => (
        <S.RadioLabel key={index}>
          <S.RadioBtn
            type="radio"
            name={props.radioName}
            id={props.radioName + index}
          />
          <S.RadioName>{el.name}</S.RadioName>
        </S.RadioLabel>
      ))}
    </S.Radio>
  );
}
