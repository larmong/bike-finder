import { BtnGroup, Icon, Message, Wrapper } from "./JoinSuccess.style";
import { useRouter } from "next/router";
import Button01 from "../../../commons/buttons/button01/Button01.container";
import { MdCheckCircle } from "react-icons/md";

export default function JoinSuccess() {
  const router = useRouter();

  const onClickMoveToMain = () => {
    router.push("/");
  };
  const onClickMoveToLogin = () => {
    router.push("/login");
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
          onClickButton={onClickMoveToLogin}
          btnWidth="200px"
          btnText="로그인"
        />
      </BtnGroup>
    </Wrapper>
  );
}
