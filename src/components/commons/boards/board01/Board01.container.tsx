import { IPropsBoard } from "./Board01.types";
import * as S from "./Board01.style";
import BoardItem01 from "../../../units/inquiry/faq/board/item/BoardItem01.container";

export default function Board01(props: IPropsBoard) {
  return (
    <S.Board fetchData={props.fetchData} isHead={props.isHead}>
      {props.isHead ? (
        <S.BoardHead>
          <S.BoardItem>제목</S.BoardItem>
        </S.BoardHead>
      ) : (
        <></>
      )}

      <S.BoardBodyWrapper isHead={props.isHead}>
        {props.fetchData.map((el) => (
          <S.BoardBody key={el.id}>
            <BoardItem01
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
