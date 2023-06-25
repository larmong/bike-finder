import * as S from "../../src/components/units/inquiry/Inquiry.style";
import { Container } from "../../src/commons/style/global.style";
import Title02 from "../../src/components/commons/titles/title02/Title02.container";
import Faq from "../../src/components/units/inquiry/faq/Faq.container";
import Inquiry from "../../src/components/units/inquiry/Inquiry.container";
import Contact from "../../src/components/units/inquiry/contact/Contact.container";

export default function InquiryPage(props) {
  return (
    <S.Wrapper>
      <Container>
        <Title02 title="문의하기" />
        <S.Contents>
          {props.pathname === "faq" ? (
            <Faq />
          ) : props.pathname === "contact" ? (
            <Contact />
          ) : (
            <Inquiry />
          )}
        </S.Contents>
      </Container>
    </S.Wrapper>
  );
}
