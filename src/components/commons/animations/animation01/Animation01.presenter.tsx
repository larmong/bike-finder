import { Fragment } from "react";
import * as S from "./Animation01.style";
import { IPropsAnimation01 } from "./Animation01.types";

export default function Animation01UI(props: IPropsAnimation01) {
  return (
    <S.Wrapper>
      <S.FlowContainer>
        {[...Array(2)].map((_, iteration) => (
          <S.FlowContents
            key={iteration}
            onAnimationEnd={props.handleAnimationEnd}
            isActive={props.isFirstDivVisible}
          >
            {[...Array(5)].map((_, index) => (
              <Fragment key={index}>
                {props.COMPANY_LIST.map((el: any, companyIndex: any) => (
                  <Fragment key={companyIndex}>
                    <S.Logo
                      src={`/images/company/${el.name_en}.svg`}
                      alt={el.name_en}
                    />
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </S.FlowContents>
        ))}
      </S.FlowContainer>
      <S.FlowGradient />
    </S.Wrapper>
  );
}
