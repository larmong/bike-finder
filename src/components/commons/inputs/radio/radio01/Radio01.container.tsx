import * as S from "./Radio01.style";
import { IPropsRadio01 } from "./Radio01.types";

export default function Radio01(props: IPropsRadio01) {
  const onClickRadio = (event) => {
    props.onClickRadio(event.target.value);
  };

  return (
    <S.Radio>
      {props.radioData?.map((el, index: number) => (
        <S.RadioLabel key={index} onClick={onClickRadio}>
          <S.RadioBtn
            type="radio"
            value={el.price}
            name={props.radioName}
            id={props.radioName + index}
          />
          <S.RadioName>{el.name}</S.RadioName>
        </S.RadioLabel>
      ))}
    </S.Radio>
  );
}
