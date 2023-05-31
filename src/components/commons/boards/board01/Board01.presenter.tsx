import * as S from "./Board01.style";
import BoardItem01 from "./item/BoardItem01.container";
import { IPropsBoard } from "./Board01.types";

export default function Board01UI(props: IPropsBoard) {
  return (
    <S.Board>
      <S.BoardHead>
        <S.BoardItem>제목</S.BoardItem>
      </S.BoardHead>
      <S.BoardBodyWrapper>
        {props.fetchHelped.map((el) => (
          <S.BoardBody key={el?.id}>
            <BoardItem01
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
