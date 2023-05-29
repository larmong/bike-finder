import * as S from "./Animation02.style";
import { IPropsAnimation02 } from "./Animation02.types";

export default function Animation02UI(props: IPropsAnimation02) {
  return (
    <S.Wrapper>
      <S.FlowContainer>
        {[...Array(3)].map((_, iteration) => (
          <S.InstagramContainer
            key={iteration}
            onAnimationEnd={props.handleAnimationEnd}
            isActive={props.isFirstDivVisible}
          >
            {props.fetchInstagram?.map((el: any, index: number) => (
              <S.Instagram key={index}>
                <S.InstagramImage src={el?.image} alt="InstagramImage" />
                <S.InstagramData>
                  <S.InstagramDataFavorite>
                    <S.Favorite></S.Favorite>
                    {el?.favorite}
                  </S.InstagramDataFavorite>
                  <S.InstagramDataComment>
                    <S.Comment></S.Comment>
                    {el?.comment}
                  </S.InstagramDataComment>
                </S.InstagramData>
              </S.Instagram>
            ))}
          </S.InstagramContainer>
        ))}
      </S.FlowContainer>
    </S.Wrapper>
  );
}
