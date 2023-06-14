import * as S from "./Board04.style";
import { getPrice } from "../../utils/utils";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";
import Button02 from "../../buttons/button02/Button02.container";
import Radio02 from "../../inputs/radio/radio02/Radio02.container";
import { IPropsBoard04UI } from "./Board04.types";

export default function Board04UI(props: IPropsBoard04UI) {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.Search>
          <S.SearchHead>결제수단</S.SearchHead>
          <S.SearchBody>
            <Radio02
              onClickRadio={props.onClickPaymentMethodType}
              radioData={props.PAYMENT_METHOD_TYPE}
              radioName="paymentMethodType"
            />
          </S.SearchBody>
        </S.Search>
        <S.Search>
          <S.SearchHead>결제일자</S.SearchHead>
          <S.SearchBody>
            <Radio02
              onClickRadio={props.onClickPaymentDateType}
              radioData={props.PAYMENT_DATE_TYPE}
              radioName="paymentDateType"
            />
          </S.SearchBody>
        </S.Search>
      </S.SearchWrapper>
      <S.Board>
        <S.BoardHead isColumns={props.BOARD_COLUMNS}>
          {props.BOARD_HEAD.map((el, index) => (
            <S.BoardItem key={index}>{el}</S.BoardItem>
          ))}
        </S.BoardHead>
        <S.BoardBody>
          {props.paginatedData?.map((el) => (
            <S.BoardItemWrapper key={el.id} isColumns={props.BOARD_COLUMNS}>
              <S.BoardItem>{el.payment_date}</S.BoardItem>
              <S.BoardItem>{el.method}</S.BoardItem>
              <S.BoardItem className="board-item-left">
                {el.product}
              </S.BoardItem>
              <S.BoardItem>{getPrice(el.price)}원</S.BoardItem>
              <S.BoardItem>{el.use_date}</S.BoardItem>
              <S.BoardItem>
                {el.state === 0 ? (
                  <S.BoardItemState>정상</S.BoardItemState>
                ) : el.state === 1 ? (
                  <S.BoardItemState className="red">환불중</S.BoardItemState>
                ) : el.state === 2 ? (
                  <S.BoardItemState className="blue">취소완료</S.BoardItemState>
                ) : (
                  ""
                )}
              </S.BoardItem>
              <S.BoardItem>
                {el.state === 0 ? (
                  <Button02
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
