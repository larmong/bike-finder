import { useState } from "react";
import Animation01UI from "./Animation01.presenter";

export default function Animation() {
  const COMPANY_LIST = [
    { name_ko: "삼성", name_en: "samsung" },
    { name_ko: "우리은행", name_en: "wooribank" },
    { name_ko: "SK플래닛", name_en: "skplanet" },
    { name_ko: "알톤", name_en: "alton" },
  ];

  const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);

  const handleAnimationEnd = () => {
    setIsFirstDivVisible(false);
  };

  return (
    <Animation01UI
      COMPANY_LIST={COMPANY_LIST}
      isFirstDivVisible={isFirstDivVisible}
      handleAnimationEnd={handleAnimationEnd}
    />
  );
}
