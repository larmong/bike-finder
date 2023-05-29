import * as S from "./Title02.style";

interface IPropsTitle02 {
  title: string;
}

export default function Title02(props: IPropsTitle02) {
  return (
    <S.PagesTitle>
      <S.Circle></S.Circle>
      <S.Title>{props.title}</S.Title>
    </S.PagesTitle>
  );
}
