import * as S from "./Board05.style";
import { getPrice } from "../../utils/utils";
import { IPropsBoard05UI } from "./Board05.types";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";
import Radio02 from "../../inputs/radio/radio02/Radio02.container";
import Checkbox01 from "../../inputs/checkbox/checkbox01/Checkbox01.contaienr";
import Button01 from "../../buttons/button01/Button01.container";

export default function Board05UI(props: IPropsBoard05UI) {
  return (
    <S.Wrapper>
      <S.BillingWrapper>
        <S.Billing>
          <S.BillingHead>결제수단</S.BillingHead>
          <S.BillingBody>
            <Radio02
              onClickRadio={props.onClickPaymentMethodType}
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
          <Checkbox01 CheckboxCont="추가요금자동결제, 환불규정, 이용약관에 동의하며 결제를 진행합니다." />
          <Button01
            onClickButton={props.onClickPaymentButton}
            btnWidth="200px"
            btnText="결제하기"
          />
        </S.BillingBottom>
      </S.BillingWrapper>
      <S.BoardTitle>초과이용내역</S.BoardTitle>
      <S.Board>
        <S.BoardHead isColumns={props.BOARD_COLUMNS}>
          {props.BOARD_HEAD.map((el, index) => (
            <S.BoardItem key={index}>{el}</S.BoardItem>
          ))}
        </S.BoardHead>
        <S.BoardBody>
          {props.paginatedData?.map((el) => (
            <S.BoardItemWrapper key={el.id} isColumns={props.BOARD_COLUMNS}>
              <S.BoardItem>{el.date}</S.BoardItem>
              <S.BoardItem className="board-item-left">
                {el.product}
              </S.BoardItem>
              <S.BoardItem>{getPrice(el.price)}원</S.BoardItem>
              <S.BoardItem>
                {el.state ? (
                  <S.BoardItemState>결제완료</S.BoardItemState>
                ) : (
                  <S.BoardItemState className="red">미납</S.BoardItemState>
                )}
              </S.BoardItem>
            </S.BoardItemWrapper>
          ))}
        </S.BoardBody>
        <Pagination01
          noticeLength={props.noticeLength}
          pageSize={props.pageSize}
          handlePageChange={props.handlePageChange}
        />
      </S.Board>
    </S.Wrapper>
  );
}
