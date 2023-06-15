import * as S from "./board09.style";
import { getPrice } from "../../utils/utils";
import { IPropsBoard09UI } from "./board09.types";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";
import Radio02 from "../../inputs/radio/radio02/Radio02.container";

export default function Board09UI(props: IPropsBoard09UI) {
  return (
    <S.Wrapper>
      <S.Search>
        <S.SearchHead>적립일자</S.SearchHead>
        <S.SearchBody>
          <Radio02
            onClickRadio={props.onClickSearchType}
            radioData={props.SEARCH_TYPE}
            radioName="paymentMethodType"
          />
        </S.SearchBody>
      </S.Search>
      <S.AllMileage>
        총 보유 마일리지 <span>{props.allMileage}</span>
      </S.AllMileage>
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
              <S.BoardItem>{el.product}</S.BoardItem>
              <S.BoardItem>{el.price * 0.1} 마일리지</S.BoardItem>
              <S.BoardItem>{el.rental_date}</S.BoardItem>
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
