import * as S from "./Title01.style";
import React from "react";

interface IPropsTitle01 {
  icon: React.ReactElement;
  title: string;
  dsc: string;
}

export default function Title01(props: IPropsTitle01) {
  return (
    <S.SectionTitle>
      <S.TitleIcon>{props.icon}</S.TitleIcon>
      <S.Title>{props.title}</S.Title>
      <S.TitleDsc>{props.dsc}</S.TitleDsc>
    </S.SectionTitle>
  );
}

// const titleData = {
//   icon: <아이콘 />,
//   title: "타이틀",
//   dsc: "설명",
// };
