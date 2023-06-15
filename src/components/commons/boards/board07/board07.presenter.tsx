import * as S from "./board07.style";
import { IPropsBoard07UI } from "./board07.types";
import Pagination01 from "../../paginations/pagination01/Pagination01.container";
import Radio02 from "../../inputs/radio/radio02/Radio02.container";
import { MdFilterDrama, MdSchedule, MdStraighten } from "react-icons/md";
import { useState } from "react";

export default function Board07UI(props: IPropsBoard07UI) {
  const [minute, setMinute] = useState(120);
  const [distance, setDistance] = useState(1.1);

  return (
    <S.Wrapper>
      <S.Search>
        <S.SearchHead>이용날짜</S.SearchHead>
        <S.SearchBody>
          <Radio02
            onClickRadio={props.onClickSearchType}
            radioData={props.SEARCH_TYPE}
            radioName="paymentMethodType"
          />
        </S.SearchBody>
      </S.Search>
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
      <S.Board>
        <S.BoardHead isColumns={props.BOARD_COLUMNS}>
          {props.BOARD_HEAD.map((el, index) => (
            <S.BoardItem key={index}>{el}</S.BoardItem>
          ))}
        </S.BoardHead>
        <S.BoardBody>
          {props.paginatedData?.map((el) => (
            <S.BoardItemWrapper key={el.id} isColumns={props.BOARD_COLUMNS}>
              <S.BoardItem>{el.bikeId}</S.BoardItem>
              <S.BoardItem>{el.rental_date}</S.BoardItem>
              <S.BoardItem>{el.rental_office}</S.BoardItem>
              <S.BoardItem>{el.return_date}</S.BoardItem>
              <S.BoardItem>{el.return_office}</S.BoardItem>
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
