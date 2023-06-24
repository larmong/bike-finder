import * as S from "./Board.style";
import FaqItem from "./item/Item.container";
import { IPropsBoardItem, IPropsInquiryFaqBoard } from "./Board.types";

export default function InquiryFaqBoard(props: IPropsInquiryFaqBoard) {
  return (
    <S.Board>
      {props.isHead ? (
        <S.BoardHead>
          <S.BoardItem>제목</S.BoardItem>
        </S.BoardHead>
      ) : (
        ""
      )}
      <S.BoardBodyWrapper isHead={props.isHead}>
        {props.fetchData.map((el: IPropsBoardItem, index: number) => (
          <S.BoardBody key={index}>
            <FaqItem
              titleIcon={props.isHead}
              title={el?.title}
              company={el?.company}
              date={el?.date}
              content={el?.content}
            />
          </S.BoardBody>
        ))}
      </S.BoardBodyWrapper>
    </S.Board>
  );
}
