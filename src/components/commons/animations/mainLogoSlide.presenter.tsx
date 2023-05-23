import React, { Fragment, useState } from "react";
import * as S from "./mainLogoSlide.style";

export default function Animation01UI() {
  const COMPANY_LIST = [
    { name_ko: "삼성", name_en: "samsung" },
    { name_ko: "우리은행", name_en: "wooribank" },
    { name_ko: "SK플래닛", name_en: "skplanet" },
    { name_ko: "알톤", name_en: "alton" },
  ];

  const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);
  const [reset, setReset] = useState(false);

  const handleAnimationEnd = () => {
    setIsFirstDivVisible(false);
    setReset(true);
  };

  return (
    <S.FlowContainer isActive={reset}>
      <div className="flow-text">
        <div className="flow-wrap" onAnimationEnd={handleAnimationEnd}>
          {[...Array(2)].map((_, iteration) => (
            <Fragment key={iteration}>
              {COMPANY_LIST.map((el: any, index: any) => (
                <Fragment key={index}>
                  <img
                    src={`/images/company/${el.name_en}.svg`}
                    alt={el.name_en}
                  />
                </Fragment>
              ))}
            </Fragment>
          ))}
        </div>
        <div className="flow-wrap">
          {[...Array(2)].map((_, iteration) => (
            <Fragment key={iteration}>
              {COMPANY_LIST.map((el: any, index: any) => (
                <Fragment key={index}>
                  <img
                    src={`/images/company/${el.name_en}.svg`}
                    alt={el.name_en}
                  />
                </Fragment>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </S.FlowContainer>
  );
}
