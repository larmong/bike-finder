import * as S from "./FaqDetail.style";
import { MdArrowBackIosNew, MdQuestionAnswer } from "react-icons/md";
import { IPropsFaqDetailUI } from "./FaqDetail.types";
import { useRouter } from "next/router";
import Button01 from "../../../../../commons/buttons/button01/Button01.container";
import { getDate } from "../../../../../commons/utils/utils";

export default function FaqDetailUI(props: IPropsFaqDetailUI) {
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
          {getDate(String(props.fetchBoard?.date))}
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
      <Button01
        onClickButton={props.onClickFaqDelete}
        btnWidth="200px"
        btnText="삭제"
      />
    </S.Detail>
  );
}
