import * as S from "../../../../../commons/boards/board/Board.style";
import { useEffect, useState } from "react";
import Pagination01 from "../../../../../commons/paginations/pagination01/Pagination01.container";
import {
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../../commons/boards/board/Board.types";
import { IFetchPayment, IPropsPaymentBoard } from "./Board.types";
import Radio02 from "../../../../../commons/inputs/radio/radio02/Radio02.container";
import Button02 from "../../../../../commons/buttons/button02/Button02.container";
import { getPrice } from "../../../../../commons/utils/utils";

export default function PaymentBoard(props: IPropsPaymentBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: [
      "결제일자",
      "결제수단",
      "결제상품",
      "결제금액",
      "이용권개시일",
      "상태",
      "환불/취소",
    ],
    columns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  };

  const [filteredData, setFilteredData] = useState<IFetchPayment[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchPayment[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const onClickPaymentMethodType = (radioNum: number) => {
    props.setPaymentMethodType(Number(radioNum));
  };
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
            <S.SearchHead>결제수단</S.SearchHead>
            <S.SearchBody>
              <Radio02
                onClickRadio={onClickPaymentMethodType}
                radioData={props.PAYMENT_METHOD_TYPE}
                radioName="paymentMethodType"
              />
            </S.SearchBody>
          </S.Search>
          <S.Search>
            <S.SearchHead>결제일자</S.SearchHead>
            <S.SearchBody>
              <Radio02
                onClickRadio={onClickPaymentDateType}
                radioData={props.PAYMENT_DATE_TYPE}
                radioName="paymentDateType"
              />
            </S.SearchBody>
          </S.Search>
        </S.SearchWrapper>
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
              <S.BoardItemWrapper>결제내역이 없습니다.</S.BoardItemWrapper>
            </S.BoardBody>
          ) : (
            paginatedData?.map((el: IFetchPayment) => (
              <S.BoardItemWrapper key={el.id} isColumns={BOARD_DETAIL.columns}>
                <S.BoardItem>{el.payment_date}</S.BoardItem>
                <S.BoardItem>{el.method}</S.BoardItem>
                <S.BoardItem className="board-item-left">
                  {el.product}
                </S.BoardItem>
                <S.BoardItem>{getPrice(el.price)}원</S.BoardItem>
                <S.BoardItem>{el.use_date}</S.BoardItem>
                <S.BoardItem>
                  <S.BoardItemState>
                    {el.state === 0
                      ? "정상"
                      : el.state === 1
                      ? "환불중"
                      : el.state === 2
                      ? "취소완료"
                      : ""}
                  </S.BoardItemState>
                </S.BoardItem>
                <S.BoardItem>
                  {el.state === 0 ? (
                    <Button02
                      btnId={el.id}
                      onClickButton={props.onClickRefundBtn}
                      btnWidth="82px"
                      btnText="환불신청"
                    />
                  ) : (
                    <Button02
                      btnWidth="82px"
                      btnText="환불신청"
                      btnClass="disabled"
                    />
                  )}
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
    </>
  );
}
