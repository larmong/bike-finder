import MyPageUI from "../../src/components/units/mypage/Mypage.container";
import { LoginCheck } from "../../src/components/commons/hocs/loginCheck";

function MyPage(props) {
  return <MyPageUI pathname={props.pathname} />;
}

export default LoginCheck(MyPage);
