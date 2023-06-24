import * as S from "./Item.style";
import { useState } from "react";
import {
  MdArrowForwardIos,
  MdQuestionAnswer,
  MdContactSupport,
} from "react-icons/md";
import { IPropsBoardItem } from "../Board.types";

export default function FaqItem(props: IPropsBoardItem) {
  const [item, setItem] = useState<boolean>(false);
  const onClickOpenItem = () => {
    setItem((prev: boolean) => !prev);
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
        ""
      )}
    </>
  );
}
