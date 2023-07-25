import * as S from "../../../../../commons/boards/board/Board.style";
import { useEffect, useState } from "react";
import { getDate } from "../../../../../commons/utils/utils";
import Search01 from "../../../../../commons/searches/search01/Search01.contaienr";
import Pagination01 from "../../../../../commons/paginations/pagination01/Pagination01.container";
import {
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../../commons/boards/board/Board.types";
import { IFetchFaq, IPropsFaqBoard } from "./Board.types";

export default function FaqBoard(props: IPropsFaqBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["제목", "상태", "날짜"],
    columns: "3fr 1.5fr 2fr",
  };
  const [filteredData, setFilteredData] = useState<IFetchFaq[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchFaq[] = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage: number) => {
    void setCurrentPage(selectedPage);
  };

  const handleSearch = (keyword: string) => {
    const searchData = props.boardData.filter((el: IFetchFaq) =>
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
      <S.Board>
        <Search01 handleSearch={handleSearch} />
        <S.BoardWrapper>
          <S.BoardContainer>
            <S.BoardHead isColumns={BOARD_DETAIL.columns}>
              {BOARD_DETAIL.title.map(
                (el: IBoardDetailTitleType, index: number) => (
                  <S.BoardItem key={index}>{el}</S.BoardItem>
                )
              )}
            </S.BoardHead>
            {paginatedData.length === 0 ? (
              <S.BoardBody>
                <S.BoardItemWrapper>문의내역이 없습니다.</S.BoardItemWrapper>
              </S.BoardBody>
            ) : (
              <S.BoardBody>
                {paginatedData?.map((el: IFetchFaq) => (
                  <S.BoardItemWrapper
                    key={el.id}
                    isColumns={BOARD_DETAIL.columns}
                  >
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
                    <S.BoardItem>{getDate(el.date)}</S.BoardItem>
                  </S.BoardItemWrapper>
                ))}
              </S.BoardBody>
            )}
          </S.BoardContainer>
        </S.BoardWrapper>
        {paginatedData.length === 0 ? (
          ""
        ) : (
          <Pagination01
            noticeLength={noticeLength}
            pageSize={pageSize}
            handlePageChange={handlePageChange}
          />
        )}
      </S.Board>
    </S.Wrapper>
  );
}
