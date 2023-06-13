import * as S from "./RentalPw.style";
import Button01 from "../../../../commons/buttons/button01/Button01.container";

export default function RentalPw() {
  const onClickButton = () => {
    // 대여비밀번호 변경하기
  };

  return (
    <S.Wrapper>
      <S.Message>
        대여 비밀번호는 자전거 대여시 단말기에 입력하는 정보입니다. 연속된 4개의
        숫자는 피해주세요.
      </S.Message>
      <S.Table01>
        <S.TableItem01 className="t-head">새 대여 비밀번호</S.TableItem01>
        <S.TableItem01>{/* 대여비밀번호 컴포넌트 */}1234</S.TableItem01>
        <S.TableItem01 className="t-head">새 대여 비밀번호 확인</S.TableItem01>
        <S.TableItem01>{/* 대여비밀번호 컴포넌트 */}1234</S.TableItem01>
      </S.Table01>
      <Button01
        onClickButton={onClickButton}
        btnWidth="200px"
        btnText="변경하기"
      />
    </S.Wrapper>
  );
}
