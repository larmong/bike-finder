import {
  InputAddress,
  InputWrapper,
  InputZipcode,
  PostCodeBtn,
  ZipcodeWrapper,
} from "./input05.style";
import { useEffect, useState } from "react";
import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../../../commons/types/global.types";
import PostCode from "../../../modals/postCode/PostCode.container";
import { IInputAddress, IPropsInput05 } from "./input05.types";

export default function Input05(props: IPropsInput05) {
  const [inputAddress, setInputAddress] = useState<IInputAddress>({
    zipcode: "",
    addressFirst: "",
    addressSecond: "",
  });
  const [isModal, setIsModal] = useState(false);

  const modalToggle = () => {
    setIsModal((prev: boolean) => !prev);
  };

  const modalCurrentTarget = (event: CustomMouseEvent) => {
    if (isModal && event.target === event.currentTarget) {
      modalToggle();
    }
  };

  const handleComplete = (data: any) => {
    setInputAddress({
      ...inputAddress,
      zipcode: data.zonecode,
      addressFirst: data.address,
    });
    modalToggle();
  };

  const onChangeInputAddress = (event: CustomChangeEvent) => {
    setInputAddress({
      ...inputAddress,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const fullAddress: IInputAddress = {
      zipcode: inputAddress.zipcode,
      addressFirst: inputAddress.addressFirst,
      addressSecond: inputAddress.addressSecond,
    };
    props.onChangeAddress(fullAddress, props.inputId);
  }, [inputAddress]);

  return (
    <InputWrapper id={props.inputId}>
      <ZipcodeWrapper>
        <InputZipcode
          type="text"
          readOnly
          value={inputAddress.zipcode}
          placeholder="우편번호"
          className="bottomBorder"
        />
        <PostCodeBtn onClick={modalToggle}>우편번호 검색</PostCodeBtn>
      </ZipcodeWrapper>
      <InputAddress
        type="text"
        readOnly
        value={inputAddress.addressFirst}
        placeholder="주소를 검색해주세요."
        className="bottomBorder"
      />
      <InputAddress
        type="text"
        id="addressSecond"
        value={inputAddress.addressSecond}
        onChange={onChangeInputAddress}
        placeholder="상세주소를 입력해주세요."
        className="bottomBorder"
      />
      <PostCode
        isModal={isModal}
        modalCurrentTarget={modalCurrentTarget}
        modalToggle={modalToggle}
        handleComplete={handleComplete}
      />
    </InputWrapper>
  );
}
