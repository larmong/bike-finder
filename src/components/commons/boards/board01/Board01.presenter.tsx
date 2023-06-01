import * as S from "./Board01.style";
import BoardItem01 from "./item/BoardItem01.container";
import { IPropsBoardUI } from "./Board01.types";

export default function Board01UI(props: IPropsBoardUI) {
  return (
    <S.Board>
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
