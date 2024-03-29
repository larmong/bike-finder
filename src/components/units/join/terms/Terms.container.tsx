import { CbList } from "./Terms.style";
import { useState } from "react";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import Checkbox03 from "../../../commons/inputs/checkbox/checkbox03/Checkbox03.contaienr";
import Progress from "../progress/Progress.container";
import { IPropsTerms } from "./Terms.types";

export default function Terms(props: IPropsTerms) {
  const [cbState, setCbState] = useState(false);
  const [cbList, setCbList] = useState([
    {
      essential: true,
      name: "use",
      CheckboxCont: "서비스 이용약관에 동의합니다.",
      route: "use",
      state: false,
    },
    {
      essential: true,
      name: "privacy",
      CheckboxCont: "개인정보 수집ㆍ이용 동의합니다.",
      route: "privacy",
      state: false,
    },
    {
      essential: true,
      name: "use",
      CheckboxCont: "위치기반 서비스 이용약관에 동의합니다.",
      route: "use",
      state: false,
    },
    {
      essential: false,
      name: "privacy",
      CheckboxCont: "수집한 개인정보의 제 3자 정보제공 동의합니다.",
      route: "privacy",
      state: false,
    },
  ]);

  const onChangeCheckbox = (index: number) => () => {
    const newCbList = [...cbList];
    cbList[index].state = !cbList[index].state;
    setCbList(newCbList);

    if (!cbState) {
      const essential_cb = cbList.some((item) => item.essential && !item.state);
      setCbState(!essential_cb);
    }
  };

  const onClickButton = async () => {
    if (cbState) {
      await props.setTerms(true);
    } else {
      await alert("필수약관에 동의하셔야 회원가입이 가능합니다!");
    }
  };

  return (
    <>
      <Progress progress="terms" />
      <CbList>
        <Checkbox03 checkboxData={cbList} onChangeCheckbox={onChangeCheckbox} />
      </CbList>
      <Button01 onClickButton={onClickButton} btnWidth="200px" btnText="다음" />
    </>
  );
}
