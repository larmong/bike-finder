import { useState } from "react";
import Animation01UI from "./Animation01.presenter";

export default function Animation01() {
  const COMPANY_LIST = [
    {
      name_ko: "삼성",
      name_en: "samsung",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fcompany%2Fsamsung.svg?alt=media&token=06a669bb-4108-4445-a765-da0b58153013",
    },
    {
      name_ko: "우리은행",
      name_en: "wooribank",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fcompany%2Fwooribank.svg?alt=media&token=91765bc4-e242-4e15-9791-88469ffc012f",
    },
    {
      name_ko: "SK플래닛",
      name_en: "skplanet",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fcompany%2Fskplanet.svg?alt=media&token=85fd1168-3153-43fe-9870-fb2fb746e6e3",
    },
    {
      name_ko: "알톤",
      name_en: "alton",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fcompany%2Falton.svg?alt=media&token=bbcc159c-b8b4-48ec-b09b-85bfc0a50f86",
    },
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
