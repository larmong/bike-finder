import { BtnGroup, Icon, Message, Wrapper } from "./JoinSuccess.style";
import { useRouter } from "next/router";
import { MdCheckCircle } from "react-icons/md";
import Button01 from "../../../commons/buttons/button01/Button01.container";

export default function JoinSuccess() {
  const router = useRouter();

  const onClickMoveToMain = () => {
    router.push("/");
  };
  const onClickMoveToMypage = () => {
    router.push("/mypage/userInfo");
  };

  return (
    <Wrapper>
      <Icon>
        <MdCheckCircle />
      </Icon>
      <Message>따릉이 가입을 축하드립니다.</Message>
      <BtnGroup>
        <Button01
          btnClass="line"
          onClickButton={onClickMoveToMain}
          btnWidth="200px"
          btnText="메인페이지"
        />
        <Button01
          onClickButton={onClickMoveToMypage}
          btnWidth="200px"
          btnText="마이페이지"
        />
      </BtnGroup>
    </Wrapper>
  );
}
