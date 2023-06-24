import * as S from "../../../../commons/boards/Board.style";
import { useState } from "react";
import { useRouter } from "next/router";
import { IPropsBoard } from "./Board.types";
import Pagination01 from "../../../../commons/paginations/pagination01/Pagination01.container";
import Search01 from "../../../../commons/searches/search01/Search01.contaienr";

export default function Board(props: IPropsBoard) {
  const router = useRouter();

  const noticeLength: number = props.boardData.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedNotice = props.boardData.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <S.Board>
      <Search01 />
      <S.BoardHead isColumns={props.BOARD_DETAIL.columns}>
        {props.BOARD_DETAIL.title.map((el, index) => (
          <S.BoardItem key={index}>{el}</S.BoardItem>
        ))}
      </S.BoardHead>
      <S.BoardBody>
        {paginatedNotice?.map((el) =>
          el.top ? (
            <S.BoardItemWrapper
              key={el.id}
              isColumns={props.BOARD_DETAIL.columns}
            >
              <S.NoticeBoardItem className="board-item-left">
                <em>공지</em>
                <span id={el.id} onClick={props.onClickBoardDetail}>
                  {el.title}
                </span>
              </S.NoticeBoardItem>
              <S.NoticeBoardItem>{el.date}</S.NoticeBoardItem>
            </S.BoardItemWrapper>
          ) : (
            <S.BoardItemWrapper key={el.id}>
              <S.BoardItem className="board-item-left">
                <span id={el.id} onClick={props.onClickBoardDetail}>
                  {el.title}
                </span>
              </S.BoardItem>
              <S.BoardItem>{el.date}</S.BoardItem>
            </S.BoardItemWrapper>
          )
        )}
      </S.BoardBody>
      <Pagination01
        noticeLength={noticeLength}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
      />
    </S.Board>
  );
}
