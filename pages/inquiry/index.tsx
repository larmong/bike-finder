import * as S from "../../src/components/units/inquiry/Inquiry.style";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";
import Faq from "../../src/components/units/inquiry/faq/Faq.container";
import Inquiry from "../../src/components/units/inquiry/Inquiry.container";

export default function InquiryPage(props) {
  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title="문의하기" />
        <S.Contents>
          {props.pathname === "faq" ? (
            <Faq faqType={props.faqType} />
          ) : (
            <Inquiry />
          )}
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
