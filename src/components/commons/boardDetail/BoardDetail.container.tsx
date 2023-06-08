import { useRouter } from "next/router";
import * as S from "./BoardDetail.style";
import { MdArrowBackIosNew } from "react-icons/md";
import { IPropsBoardDetail } from "./BoardDetail.types";

export default function BoardDetail(props: IPropsBoardDetail) {
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
      <S.DetailBody>{props.fetchBoard?.content}</S.DetailBody>
    </S.Detail>
  );
}
