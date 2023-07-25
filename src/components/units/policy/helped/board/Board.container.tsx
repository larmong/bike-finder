import * as S from "../../../../commons/boards/board/Board.style";
import { useEffect, useState } from "react";
import Search01 from "../../../../commons/searches/search01/Search01.contaienr";
import Pagination01 from "../../../../commons/paginations/pagination01/Pagination01.container";
import BoardItem01 from "./item/Item.container";
import { IFetchHelped, IPropsHelpedBoard } from "./Board.types";
import {
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../commons/boards/board/Board.types";

export default function HelpedBoard(props: IPropsHelpedBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["제목"],
    columns: "1fr",
  };

  const [filteredData, setFilteredData] = useState<IFetchHelped[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchHelped[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (selectedPage: number) => {
    void setCurrentPage(selectedPage);
  };

  const handleSearch = (keyword: string) => {
    const searchData = props.boardData.filter((el: IFetchHelped) =>
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
            <S.BoardItemWrapperHelped>
              {filteredData.map((el: IFetchHelped) => (
                <S.BoardBody key={el?.id}>
                  <BoardItem01
                    title={el?.title}
                    company={el?.company}
                    date={el?.date}
                    content={el?.content}
                  />
                </S.BoardBody>
              ))}
            </S.BoardItemWrapperHelped>
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
