import * as S from "./NoticeDetail.style";
import { useRouter } from "next/router";
import { MdArrowBackIosNew } from "react-icons/md";
import { IPropsNoticeDetailUI } from "./NoticeDetail.types";

export default function NoticeDetailUI(props: IPropsNoticeDetailUI) {
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
