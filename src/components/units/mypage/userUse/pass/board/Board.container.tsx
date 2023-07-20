import * as S from "../../../../../commons/boards/board/Board.style";
import { useEffect, useState } from "react";
import Radio02 from "../../../../../commons/inputs/radio/radio02/Radio02.container";
import Pagination01 from "../../../../../commons/paginations/pagination01/Pagination01.container";
import { IFetchPass, IPropsPassBoard } from "./Board.types";
import {
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../../commons/boards/board/Board.types";

export default function HistoryBoard(props: IPropsPassBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["등록일자", "이용권", "사용기한", "상태"],
    columns: "1fr 1fr 1fr 1fr",
  };

  const [minute, setMinute] = useState(120);
  const [distance, setDistance] = useState(1.1);

  const [filteredData, setFilteredData] = useState<IFetchPass[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchPass[] = filteredData.slice(startIndex, endIndex);

  const onClickPassType = (radioNum: number) => {
    props.setPassType(Number(radioNum));
  };

  const handlePageChange = (selectedPage: number) => {
    void setCurrentPage(selectedPage);
  };

  useEffect(() => {
    setFilteredData(props.boardData);
    setCurrentPage(1);
  }, [props.boardData]);

  return (
    <S.Board>
      <S.SearchWrapper>
        <S.Search>
          <S.SearchHead>종류</S.SearchHead>
          <S.SearchBody>
            <Radio02
              onClickRadio={onClickPassType}
              radioData={props.PASS_TYPE}
              radioName="paymentMethodType"
            />
          </S.SearchBody>
        </S.Search>
      </S.SearchWrapper>
      <S.BoardHead isColumns={BOARD_DETAIL.columns}>
        {BOARD_DETAIL.title.map((el: IBoardDetailTitleType, index: number) => (
          <S.BoardItem key={index}>{el}</S.BoardItem>
        ))}
      </S.BoardHead>
      <S.BoardBody>
        {paginatedData.length === 0 ? (
          <S.BoardBody>
            <S.BoardItemWrapper>이용권 내역이 없습니다.</S.BoardItemWrapper>
          </S.BoardBody>
        ) : (
          paginatedData?.map((el: IFetchPass) => (
            <S.BoardItemWrapper key={el.id} isColumns={BOARD_DETAIL.columns}>
              <S.BoardItem>{el.date}</S.BoardItem>
              <S.BoardItem>{el.product}</S.BoardItem>
              <S.BoardItem>{`${el.rental_date} ~ ${el.return_date}`}</S.BoardItem>
              <S.BoardItem>
                {el.state ? <span></span> : <span>사용완료</span>}
              </S.BoardItem>
            </S.BoardItemWrapper>
          ))
        )}
      </S.BoardBody>
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
  );
}
