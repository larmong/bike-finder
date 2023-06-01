import * as S from "./BoardItem01.style";
import { useState } from "react";
import {
  MdArrowForwardIos,
  MdQuestionAnswer,
  MdContactSupport,
} from "react-icons/md";
import { IPropsBoardItem01 } from "../Board01.types";

export default function BoardItem01(props: IPropsBoardItem01) {
  const [item, setItem] = useState(false);
  const onClickOpenItem = () => {
    setItem((prev) => !prev);
  };

  return (
    <>
      <S.BoardTitle onClick={onClickOpenItem}>
        <S.BoardItem>
          {props.titleIcon ? "" : <MdContactSupport />}
          {props.title}
        </S.BoardItem>
        <S.BoardIcon className={item ? "open" : ""}>
          <MdArrowForwardIos />
        </S.BoardIcon>
      </S.BoardTitle>
      {item ? (
        <S.BoardCont>
          <MdQuestionAnswer />
          {props.titleIcon ? (
            <S.BoardContText>
              <span>도움주신분</span>
              {props.company} <br />
              <span>날짜</span>
              {props.date} <br />
              <br />
              {props.content}
            </S.BoardContText>
          ) : (
            <S.BoardContText>{props.content}</S.BoardContText>
          )}
        </S.BoardCont>
      ) : (
        <></>
      )}
    </>
  );
}
