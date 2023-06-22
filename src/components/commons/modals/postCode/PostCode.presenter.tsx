import * as S from "./PostCode.style";
import { IPostCode } from "./PostCode.types";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function PostCodeUI(props: IPostCode) {
  return (
    <>
      {props.isModal && (
        <S.Modal onClick={props.modalCurrentTarget}>
          <S.ModalContainer>
            <S.CloseBtn onClick={props.modalToggle}>X</S.CloseBtn>
            <S.ModalContents>
              <S.InputTitle> {props.modalTitle}</S.InputTitle>
              <DaumPostcodeEmbed
                onComplete={props.handleComplete}
                autoClose={false}
              />
            </S.ModalContents>
          </S.ModalContainer>
        </S.Modal>
      )}
    </>
  );
}
