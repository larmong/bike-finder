import * as S from "../../../../../commons/boards/board/Board.style";
import { useState } from "react";
import Search01 from "../../../../../commons/searches/search01/Search01.contaienr";
import Pagination01 from "../../../../../commons/paginations/pagination01/Pagination01.container";
import {
  IPropsBoard,
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../../commons/boards/board/Board.types";
import { IBoardDataType } from "./Board.types";

export default function Board(props: IPropsBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["제목", "상태", "날짜"],
    columns: "1fr 185px 185px",
  };
  const pageSize = 10;
  const noticeLength: number = props.boardData.length;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = props.boardData.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };
  return (
    <S.Board>
      <Search01 />
      <S.BoardHead isColumns={BOARD_DETAIL.columns}>
        {BOARD_DETAIL.title.map((el: IBoardDetailTitleType, index: number) => (
          <S.BoardItem key={index}>{el}</S.BoardItem>
        ))}
      </S.BoardHead>
      {paginatedData.length === 0 ? (
        <S.BoardBody>
          <S.BoardItemWrapper>문의내역이 없습니다.</S.BoardItemWrapper>
        </S.BoardBody>
      ) : (
        <>
          <S.BoardBody>
            {paginatedData?.map((el: IBoardDataType) => (
              <S.BoardItemWrapper key={el.id} isColumns={BOARD_DETAIL.columns}>
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
            noticeLength={noticeLength}
            pageSize={pageSize}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </S.Board>
  );
}
