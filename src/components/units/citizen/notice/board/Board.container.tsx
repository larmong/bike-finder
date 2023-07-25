import * as S from "../../../../commons/boards/board/Board.style";
import { useEffect, useState } from "react";
import { IFetchNotice, IPropsNoticeBoard } from "./Board.types";
import {
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../commons/boards/board/Board.types";
import Search01 from "../../../../commons/searches/search01/Search01.contaienr";
import Pagination01 from "../../../../commons/paginations/pagination01/Pagination01.container";

export default function NoticeBoard(props: IPropsNoticeBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["제목", "날짜"],
    columns: "1fr 140px",
  };
  const [filteredData, setFilteredData] = useState<IFetchNotice[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchNotice[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (selectedPage: number) => {
    void setCurrentPage(selectedPage);
  };

  const handleSearch = (keyword: string) => {
    const searchData = props.boardData.filter((el: IFetchNotice) =>
      el.title.includes(keyword)
    );
    setFilteredData(searchData);
    setCurrentPage(1);
  };

  useEffect(() => {
    setFilteredData(props.boardData);
    setCurrentPage(1);
  }, [props.boardData]);

  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <Search01 handleSearch={handleSearch} />
        <S.BoardContainer>
          <S.Board widthValue="auto">
            <S.BoardHead isColumns={BOARD_DETAIL.columns}>
              {BOARD_DETAIL.title.map(
                (el: IBoardDetailTitleType, index: number) => (
                  <S.BoardItem key={index}>{el}</S.BoardItem>
                )
              )}
            </S.BoardHead>
            <S.BoardBody>
              {paginatedData?.map((el: any) =>
                el.top ? (
                  <S.BoardItemWrapper
                    key={el.id}
                    isColumns={BOARD_DETAIL.columns}
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
                  <S.BoardItemWrapper
                    key={el.id}
                    isColumns={BOARD_DETAIL.columns}
                  >
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
          </S.Board>
        </S.BoardContainer>
        <Pagination01
          noticeLength={noticeLength}
          pageSize={pageSize}
          handlePageChange={handlePageChange}
        />
      </S.BoardWrapper>
    </S.Wrapper>
  );
}
