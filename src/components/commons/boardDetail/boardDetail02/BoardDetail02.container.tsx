import * as S from "./BoardDetail02.style";
import { useRouter } from "next/router";
import { MdArrowBackIosNew, MdQuestionAnswer } from "react-icons/md";
import { IPropsBoardDetail02 } from "./BoardDetail02.types";

export default function BoardDetail02(props: IPropsBoardDetail02) {
  const router = useRouter();

  return (
    <S.Detail>
      <S.DetailHead>
        <S.BackBtn onClick={() => router.back()}>
          <MdArrowBackIosNew />
        </S.BackBtn>
        <S.BoardTitle>{props.fetchBoard?.title}</S.BoardTitle>
        <S.BoardDate>
          <span>Date: </span>
          {props.fetchBoard?.date}
        </S.BoardDate>
      </S.DetailHead>
      <S.DetailBody>
        {props.fetchBoard?.content}
        <S.AnswerWrapper>
          <S.AnswerIcon>
            <MdQuestionAnswer />
            <S.AnswerState className={props.fetchBoard?.state ? "on" : ""}>
              {props.fetchBoard?.state ? "답변완료" : "미답변"}
            </S.AnswerState>
          </S.AnswerIcon>
          <S.Answer>{props.fetchBoard?.answer}</S.Answer>
        </S.AnswerWrapper>
      </S.DetailBody>
    </S.Detail>
  );
}
