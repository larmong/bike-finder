import * as S from "./Pagination01.style";
import { Pagination01UIProps } from "./Pagination01.types";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function Pagination01UI(props: Pagination01UIProps) {
  return (
    <S.Pagination>
      <S.PagePrevBtn onClick={props.onClickPrevPage}>
        <MdArrowBackIosNew />
      </S.PagePrevBtn>
      <S.PageBtn>
        {new Array(10).fill(1).map(
          (_, index) =>
            props.lastPage >= index + props.startPage && (
              <S.Page
                key={index + props.startPage}
                id={String(index + props.startPage)}
                isActive={props.startPage + index === props.nowPage}
                onClick={props.onClickPagination}
              >
                {index + props.startPage}
              </S.Page>
            )
        )}
      </S.PageBtn>
      <S.PageNextBtn onClick={props.onClickNextPage}>
        <MdArrowForwardIos />
      </S.PageNextBtn>
    </S.Pagination>
  );
}
