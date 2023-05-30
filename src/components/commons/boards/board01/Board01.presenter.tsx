import * as S from "./Board01.style";
import { MdArrowForwardIos, MdQuestionAnswer } from "react-icons/md";
import {
  BoardBodyWrapper,
  BoardCont,
  BoardContText,
  BoardIcon,
} from "./Board01.style";

export default function Board01UI() {
  return (
    <S.Board>
      <S.BoardHead>
        <S.BoardItem>제목</S.BoardItem>
      </S.BoardHead>
      <S.BoardBodyWrapper>
        <S.BoardBody>
          <S.BoardItem>
            삼성에서 자전거 3,000대, 대여소 300개소 등을 기부하였습니다.
          </S.BoardItem>
          <S.BoardIcon>
            <MdArrowForwardIos />
          </S.BoardIcon>
          <S.BoardCont>
            <MdQuestionAnswer />
            <S.BoardContText>
              <span>도움주신분</span> 삼성 <br />
              <span>날짜</span> 2016-06-21 <br />
              <br />
              2016년 서울시 공공자전거 따릉이 확대구축 사업을 위해 자전거
              3,000대, 대여소 300개소 등을 기부하였습니다.
            </S.BoardContText>
          </S.BoardCont>
        </S.BoardBody>
        <S.BoardBody>
          <S.BoardItem>
            (주)SK플래닛에서 자전거 100대를 기부하였습니다.
          </S.BoardItem>
          <S.BoardIcon>
            <MdArrowForwardIos />
          </S.BoardIcon>
        </S.BoardBody>
        <S.BoardBody>
          <S.BoardItem>
            (주)알톤스포츠에서 자전거 100대를 기부하였습니다.
          </S.BoardItem>
          <S.BoardIcon>
            <MdArrowForwardIos />
          </S.BoardIcon>
        </S.BoardBody>
        <S.BoardBody>
          <S.BoardItem>우리은행에서 자전거를 기부하였습니다.</S.BoardItem>
          <S.BoardIcon>
            <MdArrowForwardIos />
          </S.BoardIcon>
        </S.BoardBody>
      </S.BoardBodyWrapper>
    </S.Board>
  );
}
