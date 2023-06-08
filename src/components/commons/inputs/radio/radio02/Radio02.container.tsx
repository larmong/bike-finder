import * as S from "./Radio02.style";
import { IPropsRadio02 } from "./Radio02.types";

export default function Radio02(props: IPropsRadio02) {
  const onClickRadio = (event) => {
    props.onClickRadio(event.target.value);
  };

  return (
    <S.Radio>
      {props.radioData?.map((el) => (
        <S.RadioLabel key={el.id} onClick={onClickRadio}>
          <S.RadioBtn
            type="radio"
            value={el.id}
            name={props.radioName}
            id={props.radioName + el.id}
            defaultChecked={el.checkedState}
          />
          <S.RadioName>{el.name}</S.RadioName>
        </S.RadioLabel>
      ))}
    </S.Radio>
  );
}