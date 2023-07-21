import MyPageUI from "../../src/components/units/mypage/Mypage.container";
import { LoginCheck } from "../../src/components/commons/hocs/loginCheck";

export interface IPropsMyPage {
  pathname: string;
}

function MyPage(props: IPropsMyPage) {
  return <MyPageUI pathname={props.pathname} />;
}

export default LoginCheck(MyPage);
