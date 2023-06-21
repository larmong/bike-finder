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
    setInputEmail({
      ...inputEmail,
      [event.target.id]: event.target.value,
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
        placeholder="bike-finder"
      />
      @
      <InputEmail
        type="text"
        id="second"
        value={inputEmail.second}
        onChange={onChangeInputPhone}
        className="bottomBorder left"
        placeholder="gamil.com"
      />
    </InputEmailWrapper>
  );
}
