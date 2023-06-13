import * as S from "./Secession.style";
import Button01 from "../../../../commons/buttons/button01/Button01.container";

export default function Secession() {
  const onClickButton = () => {
    // 회원탈퇴 버튼
  };

  return (
    <S.Wrapper>
      <S.Notice>
        · 탈퇴 신청 즉시 회원탈퇴 처리되며, 해당 아이디의 회원정보 및 마일리지는
        삭제처리되며, 복원할 수 없습니다.
        <br />
        · 회원탈퇴 이후 같은 아이디로는 재가입이 불가능 합니다.
        <br />
        · 이용권 기간이 남아있는 경우 즉시 탈퇴가 불가능 하오니 고객센터에 문의
        바랍니다.
        <br />
      </S.Notice>
      <S.Contents>
        <S.Message>
          <p>
            <em>회원탈퇴</em>를 신청합니다.
          </p>
          <span>
            서울자전거를 이용해 주셔서 감사합니다.
            <br />
            회원탈퇴를 하실 경우 위와 같이 안내드린대로 회원정보가 처리됩니다.
          </span>
        </S.Message>
        <input type="text" defaultValue="선택(셀렉트 인풋으로 변경해야됨!!!)" />
        <Button01
          onClickButton={onClickButton}
          btnWidth="200px"
          btnText="회원탈퇴"
        />
      </S.Contents>
    </S.Wrapper>
  );
}
