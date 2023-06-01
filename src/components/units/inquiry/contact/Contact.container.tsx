import * as S from "./Contact.style";

export default function Contact() {
  return (
    <S.Wrapper>
      <S.ContactWrapper>
        <S.ContactItem>
          <span>제목</span>
          <S.InputItem>
            <input type="text" placeholder="제목을 입력해주세요." />
          </S.InputItem>
        </S.ContactItem>
        <S.ContactItem>
          <span>아이디</span>
          <S.TextItem>larmong</S.TextItem>
        </S.ContactItem>
        <S.ContactItem>
          <span>내용</span>
          <S.ContItem>
            <S.CbItem>
              <input type="checkbox" id="cb-cont" />
              <label htmlFor="cb-cont">
                반복 작성, 비문, 반말, 욕설, 비난, 상업광고 게재 시 해당 글이
                답변없이 삭제됨을 동의합니다.
              </label>
            </S.CbItem>
            <textarea placeholder="내용을 입력해주세요."></textarea>
          </S.ContItem>
        </S.ContactItem>
        <S.ContactItem>
          <span>사진첨부</span>
          <S.FileItem>
            <input type="file" />
          </S.FileItem>
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
      <S.ContactBtn>문의하기</S.ContactBtn>
    </S.Wrapper>
  );
}
