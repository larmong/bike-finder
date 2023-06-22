import { InputEmail, InputEmailWrapper } from "./input04.style";
import { useEffect, useState } from "react";
import { IInputEmail, IPropsInput04 } from "./input04.types";
import { CustomChangeEvent } from "../../../../../commons/types/global.types";

export default function Input04(props: IPropsInput04) {
  const [inputEmail, setInputEmail] = useState<IInputEmail>({
    first: "",
    second: "",
  });

  const onChangeInputPhone = (event: CustomChangeEvent) => {
    const value = event.target.value.replace(/[^0-9a-zA-Z.]/g, "");
    setInputEmail({
      ...inputEmail,
      [event.target.id]: value,
    });
  };

  useEffect(() => {
    const fullEmail = `${inputEmail.first}@${inputEmail.second}`;
    props.onChangeEmail(fullEmail, props.inputId);
  }, [inputEmail]);

  return (
    <InputEmailWrapper id={props.inputId}>
      <InputEmail
        type="text"
        id="first"
        value={inputEmail.first}
        onChange={onChangeInputPhone}
        className="bottomBorder left"
        placeholder="영문, 숫자를 사용한 이메일을 입력해주세요."
        maxLength={20}
        minLength={4}
      />
      @
      <InputEmail
        type="text"
        id="second"
        value={inputEmail.second}
        onChange={onChangeInputPhone}
        className="bottomBorder left"
        placeholder="gamil.com"
        maxLength={15}
      />
    </InputEmailWrapper>
  );
}
