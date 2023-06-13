import * as S from "./Board03.style";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";
import { IPropsBoard03UI } from "./Board03.types";

export default function Board03UI(props: IPropsBoard03UI) {
  return (
    <S.Board>
      <S.BoardHead isColumns={props.boardTableColumns}>
        {props.BOARD_TABLE_TITLE.map((el, index) => (
          <S.BoardItem key={index}>{el}</S.BoardItem>
        ))}
      </S.BoardHead>
      <S.BoardBody>
        {props.paginatedData?.map((el) => (
          <S.BoardItemWrapper key={el.id} isColumns={props.boardTableColumns}>
            <S.BoardItem className="board-item-left">
              <span id={el.id} onClick={props.onClickBoardDetail}>
                {el.title}
              </span>
            </S.BoardItem>
            <S.BoardItem>
              {el.state ? (
                <strong className="on">답변완료</strong>
              ) : (
                <strong>미답변</strong>
              )}
            </S.BoardItem>
            <S.BoardItem>{el.date}</S.BoardItem>
          </S.BoardItemWrapper>
        ))}
      </S.BoardBody>
      <Pagination01
        noticeLength={props.noticeLength}
        pageSize={props.pageSize}
        handlePageChange={props.handlePageChange}
      />
    </S.Board>
  );
}
