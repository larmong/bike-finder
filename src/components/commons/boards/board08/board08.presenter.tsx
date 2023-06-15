import * as S from "./board08.style";
import { IPropsBoard08UI } from "./board08.types";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";
import Radio02 from "../../inputs/radio/radio02/Radio02.container";

export default function Board08UI(props: IPropsBoard08UI) {
  return (
    <S.Wrapper>
      <S.RadioWrapper>
        <Radio02
          onClickRadio={props.onClickSearchType}
          radioData={props.SEARCH_TYPE}
          radioName="paymentMethodType"
        />
      </S.RadioWrapper>
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
              <S.BoardItem>{`${el.rental_date} ~ ${el.return_date}`}</S.BoardItem>
              <S.BoardItem>
                {el.state ? <span></span> : <span>사용완료</span>}
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
