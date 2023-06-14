import * as S from "./Board06.style";
import { getPrice } from "../../utils/utils";
import { IPropsBoard06UI } from "./Board06.types";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";
import Radio02 from "../../inputs/radio/radio02/Radio02.container";

export default function Board06UI(props: IPropsBoard06UI) {
  return (
    <S.Wrapper>
      <S.Search>
        <S.SearchHead>결제수단</S.SearchHead>
        <S.SearchBody>
          <Radio02
            onClickRadio={props.onClickSearchType}
            radioData={props.SEARCH_TYPE}
            radioName="paymentMethodType"
          />
        </S.SearchBody>
      </S.Search>
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
              <S.BoardItem>{getPrice(el.price)}원</S.BoardItem>
              <S.BoardItem>{el.product}</S.BoardItem>
              <S.BoardItem>
                {el.state ? (
                  <S.BoardItemState>환불완료</S.BoardItemState>
                ) : (
                  <S.BoardItemState className="red">환불거절</S.BoardItemState>
                )}
              </S.BoardItem>
              <S.BoardItem className="board-item-left">
                {el.note === 0
                  ? ""
                  : el.note === 1
                  ? "환불 기간이 지났습니다."
                  : ""}
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
