import * as S from "../../../../../commons/boards/board/Board.style";
import { useEffect, useState } from "react";
import Radio02 from "../../../../../commons/inputs/radio/radio02/Radio02.container";
import Pagination01 from "../../../../../commons/paginations/pagination01/Pagination01.container";
import { IFetchMileage, IPropsMileageBoard } from "./Board.types";
import {
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../../commons/boards/board/Board.types";
import {
  BoardContainer,
  BoardWrapper,
  Wrapper,
} from "../../../../../commons/boards/board/Board.style";

export default function MileageBoard(props: IPropsMileageBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["적립일자", "이용권", "마일리지", "대여일시"],
    columns: "1fr 1fr 1fr 1.5fr",
  };

  const [minute, setMinute] = useState(120);
  const [distance, setDistance] = useState(1.1);

  const [filteredData, setFilteredData] = useState<IFetchMileage[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchMileage[] = filteredData.slice(
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
    <S.Wrapper>
      <S.BoardWrapper>
        <S.SearchWrapper>
          <S.Search>
            <S.SearchHead>적립일자</S.SearchHead>
            <S.SearchBody>
              <Radio02
                onClickRadio={onClickPaymentDateType}
                radioData={props.PAYMENT_DATE_TYPE}
                radioName="paymentMethodType"
              />
            </S.SearchBody>
          </S.Search>
        </S.SearchWrapper>
        <S.AllMileage>
          총 보유 마일리지 <span>{props.allMileage}</span>
        </S.AllMileage>
        <S.BoardContainer>
          <S.Board widthValue="550px">
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
                  <S.BoardItemWrapper>
                    마일리지 적립 내역이 없습니다.
                  </S.BoardItemWrapper>
                </S.BoardBody>
              ) : (
                paginatedData?.map((el: IFetchMileage) => (
                  <S.BoardItemWrapper
                    key={el.id}
                    isColumns={BOARD_DETAIL.columns}
                  >
                    <S.BoardItem>{el.date}</S.BoardItem>
                    <S.BoardItem>{el.product}</S.BoardItem>
                    <S.BoardItem>{el.price * 0.1} 마일리지</S.BoardItem>
                    <S.BoardItem>{el.rental_date}</S.BoardItem>
                  </S.BoardItemWrapper>
                ))
              )}
            </S.BoardBody>
          </S.Board>
        </S.BoardContainer>
        {paginatedData.length === 0 ? (
          ""
        ) : (
          <Pagination01
            noticeLength={noticeLength}
            pageSize={pageSize}
            handlePageChange={handlePageChange}
          />
        )}
      </S.BoardWrapper>
    </S.Wrapper>
  );
}
