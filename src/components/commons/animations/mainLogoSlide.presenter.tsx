import React, { Fragment, useState } from "react";
import * as S from "./mainLogoSlide.style";

export default function Animation01UI() {
  const COMPANY_LIST = [
    { name_ko: "삼성", name_en: "samsung" },
    { name_ko: "우리은행", name_en: "wooribank" },
    { name_ko: "SK플래닛", name_en: "skplanet" },
    { name_ko: "알톤", name_en: "alton" },
  ];

  const [isFirstDivVisible, setIsFirstDivVisible] = useState<boolean>(true);

  const handleAnimationEnd = () => {
    setIsFirstDivVisible(false);
  };

  return (
    <S.Wrapper>
      <S.FlowContainer>
        {[...Array(2)].map((_, iteration) => (
          <S.FlowContents
            key={iteration}
            onAnimationEnd={handleAnimationEnd}
            isActive={isFirstDivVisible}
          >
            {[...Array(5)].map((_, index) => (
              <Fragment key={index}>
                {COMPANY_LIST.map((el: any, companyIndex: any) => (
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
