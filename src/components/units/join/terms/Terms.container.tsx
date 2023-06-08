import { MdDoubleArrow } from "react-icons/md";
import * as S from "./Terms.style";
import Checkbox03 from "../../../commons/inputs/checkbox/checkbox03/Checkbox03.contaienr";
import Checkbox01 from "../../../commons/inputs/checkbox/checkbox01/Checkbox01.contaienr";
import Button01 from "../../../commons/buttons/button01/Button01.container";

export default function Terms(props) {
  const CbList = [
    {
      essential: true,
      name: "use",
      CheckboxCont: "서비스 이용약관에 동의합니다.",
      route: "use",
    },
    {
      essential: true,
      name: "privacy",
      CheckboxCont: "개인정보 수집ㆍ이용 동의합니다.",
      route: "privacy",
    },
    {
      essential: true,
      name: "use",
      CheckboxCont: "위치기반 서비스 이용약관에 동의합니다.",
      route: "use",
    },
    {
      essential: false,
      name: "privacy",
      CheckboxCont: "수집한 개인정보의 제 3자 정보제공 동의합니다.",
      route: "privacy",
    },
  ];

  // 약관 all 동의 기능

  const onClickButton = () => {
    // 약관 동의 모두 됐으면,
    props.setTerms(true);
  };

  return (
    <>
      <S.Progress>
        <span className="target">약관동의</span>
        <MdDoubleArrow />
        <span>본인인증</span>
        <MdDoubleArrow />
        <span>정보입력</span>
      </S.Progress>
      <S.Notice>
        <Checkbox03 checkboxData={CbList} />
      </S.Notice>
      <Checkbox01 CheckboxCont="위 약관을 모두 읽었으며 이에 동의합니다." />
      <Button01 onClickButton={onClickButton} btnWidth="200px" btnText="다음" />
    </>
  );
}
