import * as S from "./Contact.style";
import { IPropsContactUI } from "./Contact.types";
import Input01 from "../../../commons/inputs/input/input01/Input01.container";
import Checkbox01 from "../../../commons/inputs/checkbox/checkbox01/Checkbox01.contaienr";
import Button01 from "../../../commons/buttons/button01/Button01.container";

export default function ContactUI(props: IPropsContactUI) {
  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <S.Wrapper>
      <S.ContactWrapper>
        <S.ContactItem>
          <S.Title>제목</S.Title>
          <S.InputItem>
            <Input01
              inputType="text"
              inputId="title"
              valueData={props.contactData.title}
              onChangeValue={props.onChangeTitle}
              placeholderData="제목을 입력해주세요."
            />
          </S.InputItem>
        </S.ContactItem>
        <S.ContactItem>
          <S.Title>아이디</S.Title>
          <S.InputItem>
            <S.TextItem>{props.loginUser}</S.TextItem>
          </S.InputItem>
        </S.ContactItem>
        <S.ContactItem>
          <S.Title>내용</S.Title>
          <S.InputItem className="editor">
            <S.Editor onChange={handleChange} />
          </S.InputItem>
        </S.ContactItem>
      </S.ContactWrapper>
      <S.Notice>
        시민의견 수렴 게시판은 회원
        <span>&nbsp;누구나 자유롭게 의견을 게시할 수 있는 열린 공간&nbsp;</span>
        입니다.
        <span>
          &nbsp;사업성 광고, 욕설, 저속한 표현, 비방, 정치적 성향, 반복게시물
          등은 관리자에 의해 통보없이 삭제
        </span>
        될 수 있으며, 홈페이지를 통해 불법 유해 정보 게시, 배포 시 정보통신망
        이용촉진 및 정보보호 등에 대한 관한 법률 제 74조에 의거 1년 이하 징역
        또는 1천만원 이하의 벌금에 처해질 수 있습니다.
      </S.Notice>
      <Checkbox01
        onClickCb={props.onClickCb}
        CheckboxCont="욕설, 비난, 상업광고 게재 시 해당 글이 답변없이 삭제됨을 동의합니다."
      />

      <Button01
        onClickButton={props.onClickSubmit}
        btnWidth="200px"
        btnText="문의하기"
      />
    </S.Wrapper>
  );
}
