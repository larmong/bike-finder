import { InputPhone, InputPhoneWrapper } from "./Input02.style";
import { useEffect, useState } from "react";
import { IInputPhone, IPropsInput02 } from "./Input02.types";
import { CustomChangeEvent } from "../../../../../commons/types/global.types";

export default function Input02(props: IPropsInput02) {
  const [inputPhone, setInputPhone] = useState<IInputPhone>({
    first: "",
    second: "",
    third: "",
  });

  const onChangeInputPhone = (event: CustomChangeEvent) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputPhone({
      ...inputPhone,
      [event.target.id]: value,
    });
  };

  useEffect(() => {
    const fullPhoneNum = `${inputPhone.first}${inputPhone.second}${inputPhone.third}`;
    props.onChangePhone(fullPhoneNum, props.inputId);
  }, [inputPhone]);

  return (
    <InputPhoneWrapper id={props.inputId}>
      <InputPhone
        type="text"
        id="first"
        maxLength={3}
        value={inputPhone.first}
        onChange={onChangeInputPhone}
        className="bottomBorder"
        placeholder="010"
      />
      -
      <InputPhone
        type="text"
        id="second"
        maxLength={4}
        value={inputPhone.second}
        onChange={onChangeInputPhone}
        className="bottomBorder"
        placeholder="1234"
      />
      -
      <InputPhone
        type="text"
        id="third"
        maxLength={4}
        value={inputPhone.third}
        onChange={onChangeInputPhone}
        className="bottomBorder"
        placeholder="5678"
      />
    </InputPhoneWrapper>
  );
}
