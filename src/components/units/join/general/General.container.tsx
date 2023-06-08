import { MdDoubleArrow } from "react-icons/md";
import * as S from "./General.style";

export default function General() {
  return (
    <>
      <S.Progress>
        <span>약관동의</span>
        <MdDoubleArrow />
        <span>본인인증</span>
        <MdDoubleArrow />
        <span>정보입력</span>
      </S.Progress>
      <S.Notice>
        <span>회원가입 안내</span>· 서울자전거 따릉이는 만14세 이상(일반회원),
        만 13세로 구분하여 회원가입이 가능합니다. · 위의 사항에 동의할 경우에만
        아래의 가입하기 버튼을 눌러 진행하여 주기 바랍니다.
      </S.Notice>
    </>
  );
}
