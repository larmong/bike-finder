import { MdDoubleArrow } from "react-icons/md";
import { IPropsProgress } from "./Progress.types";
import { Wrapper } from "./Progress.style";

export default function Progress(props: IPropsProgress) {
  return (
    <Wrapper>
      <span className={props.progress === "terms" ? "target" : ""}>
        약관동의
      </span>
      <MdDoubleArrow />
      <span className={props.progress === "auth" ? "target" : ""}>
        본인인증
      </span>
      <MdDoubleArrow />
      <span className={props.progress === "membership" ? "target" : ""}>
        정보입력
      </span>
    </Wrapper>
  );
}
