import { InputPhone, InputPhoneWrapper } from "./Input02.style";
import { ChangeEvent, useEffect, useState } from "react";
import { IInputPhone, IPropsInput02 } from "./Input02.types";

export default function Input02(props: IPropsInput02) {
  const [inputPhone, setInputPhone] = useState<IInputPhone>({
    first: "",
    second: "",
    third: "",
  });

  const onChangeInputPhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputPhone({
      ...inputPhone,
      [event.target.id]: value,
    });
  };

  useEffect(() => {
    const fullPhoneNum = `${inputPhone.first}${inputPhone.second}${inputPhone.third}`;
    props.onChangePhone(fullPhoneNum);
  }, [inputPhone]);

  return (
    <InputPhoneWrapper>
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
