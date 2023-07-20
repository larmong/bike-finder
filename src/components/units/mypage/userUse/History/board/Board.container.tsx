import * as S from "../../../../../commons/boards/board/Board.style";
import { useEffect, useState } from "react";
import { MdFilterDrama, MdSchedule, MdStraighten } from "react-icons/md";
import Radio02 from "../../../../../commons/inputs/radio/radio02/Radio02.container";
import Pagination01 from "../../../../../commons/paginations/pagination01/Pagination01.container";
import { IFetchHistory, IPropsHistoryBoard } from "./Board.types";
import {
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../../commons/boards/board/Board.types";

export default function HistoryBoard(props: IPropsHistoryBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["자전거", "대여일시", "대여소", "반납일시", "반납대여소"],
    columns: "1fr 1fr 1fr 1fr 1fr",
  };

  const [minute, setMinute] = useState(120);
  const [distance, setDistance] = useState(1.1);

  const [filteredData, setFilteredData] = useState<IFetchHistory[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchHistory[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const onClickPaymentDateType = (radioNum: number) => {
    props.setPaymentDateType(Number(radioNum));
  };
  const handlePageChange = (selectedPage: number) => {
    void setCurrentPage(selectedPage);
  };

  useEffect(() => {
    setFilteredData(props.boardData);
    setCurrentPage(1);
  }, [props.boardData]);

  return (
    <>
      <S.Board>
        <S.SearchWrapper>
          <S.Search>
            <S.SearchHead>이용날짜</S.SearchHead>
            <S.SearchBody>
              <Radio02
                onClickRadio={onClickPaymentDateType}
                radioData={props.PAYMENT_DATE_TYPE}
                radioName="paymentMethodType"
              />
            </S.SearchBody>
          </S.Search>
        </S.SearchWrapper>
        <S.AllUse>
          <S.Hours>
            <MdSchedule />
            <p>
              이용시간<span>{minute}</span>분
            </p>
          </S.Hours>
          <S.Distance>
            <MdStraighten />
            <p>
              거리(km)<span>{distance}</span>km
            </p>
          </S.Distance>
          <S.Effect>
            <MdFilterDrama />
            <p>
              탄소절감효과(kg)<span>{(distance * 0.23).toFixed(2)}</span>kg
            </p>
          </S.Effect>
        </S.AllUse>
        <S.BoardHead isColumns={BOARD_DETAIL.columns}>
          {BOARD_DETAIL.title.map(
            (el: IBoardDetailTitleType, index: number) => (
              <S.BoardItem key={index}>{el}</S.BoardItem>
            )
          )}
        </S.BoardHead>
        <S.BoardBody>
          {paginatedData.length === 0 ? (
            <S.BoardBody>
              <S.BoardItemWrapper>대여이력이 없습니다.</S.BoardItemWrapper>
            </S.BoardBody>
          ) : (
            paginatedData?.map((el: IFetchHistory) => (
              <S.BoardItemWrapper key={el.id} isColumns={BOARD_DETAIL.columns}>
                <S.BoardItem>{el.bikeId}</S.BoardItem>
                <S.BoardItem>{el.rental_date}</S.BoardItem>
                <S.BoardItem>{el.rental_office}</S.BoardItem>
                <S.BoardItem>{el.return_date}</S.BoardItem>
                <S.BoardItem>{el.return_office}</S.BoardItem>
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
    </>
  );
}
