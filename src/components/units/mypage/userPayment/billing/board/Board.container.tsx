import * as S from "../../../../../commons/boards/board/Board.style";
import { getPrice } from "../../../../../commons/utils/utils";
import { useEffect, useState } from "react";
import Pagination01 from "../../../../../commons/paginations/pagination01/Pagination01.container";
import Radio02 from "../../../../../commons/inputs/radio/radio02/Radio02.container";
import Button01 from "../../../../../commons/buttons/button01/Button01.container";
import Checkbox01 from "../../../../../commons/inputs/checkbox/checkbox01/Checkbox01.contaienr";
import { IFetchBilling, IPropsBillingBoard } from "./Board.types";
import {
  IBoardDetailTitleType,
  IBoardDetailType,
} from "../../../../../commons/boards/board/Board.types";

export default function BillingBoard(props: IPropsBillingBoard) {
  const BOARD_DETAIL: IBoardDetailType = {
    title: ["대여일시", "미납내역", "미납금액", "상태"],
    columns: "1fr 1fr 1fr 1fr",
  };

  const [filteredData, setFilteredData] = useState<IFetchBilling[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchBilling[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const onClickPaymentMethodType = (radioNum: number) => {
    props.setPaymentMethodType(Number(radioNum));
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
        <S.BillingWrapper>
          <S.Billing>
            <S.BillingHead>결제수단</S.BillingHead>
            <S.BillingBody>
              <Radio02
                onClickRadio={onClickPaymentMethodType}
                radioData={props.PAYMENT_METHOD_TYPE}
                radioName="paymentMethodType"
              />
            </S.BillingBody>
          </S.Billing>
          <S.Billing>
            <S.BillingHead>미납금액</S.BillingHead>
            <S.BillingBody>
              <span>{getPrice(props.nonTotalPayment)}</span>원
            </S.BillingBody>
          </S.Billing>
          <S.Billing>
            <S.BillingHead>미납내역</S.BillingHead>
            <S.BillingBody>
              초과이용 <span>{props.nonPaymentLength}</span>건
            </S.BillingBody>
          </S.Billing>
          <S.TotalPayment>
            <p>총 결제금액</p>
            <p>
              <span>{getPrice(props.nonTotalPayment)}</span> 원
            </p>
          </S.TotalPayment>
          <S.BillingBottom>
            <Checkbox01
              onClickCb={props.onClickCb}
              CheckboxCont="초과이용결제에 관한 약관에 동의하며 결제를 진행합니다."
            />
            <Button01
              onClickButton={props.onClickPaymentButton}
              btnWidth="200px"
              btnText="결제하기"
            />
          </S.BillingBottom>
        </S.BillingWrapper>
        <S.BoardTitle>초과이용내역</S.BoardTitle>
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
                    초과이용내역이 없습니다.
                  </S.BoardItemWrapper>
                </S.BoardBody>
              ) : (
                paginatedData?.map((el: IFetchBilling) => (
                  <S.BoardItemWrapper
                    key={el.id}
                    isColumns={BOARD_DETAIL.columns}
                  >
                    <S.BoardItem>{el.date}</S.BoardItem>
                    <S.BoardItem className="board-item-left">
                      {el.product}
                    </S.BoardItem>
                    <S.BoardItem>{getPrice(el.price)}원</S.BoardItem>
                    <S.BoardItem>
                      {el.state ? (
                        <S.BoardItemState>결제완료</S.BoardItemState>
                      ) : (
                        <S.BoardItemState className="red">
                          미납
                        </S.BoardItemState>
                      )}
                    </S.BoardItem>
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
