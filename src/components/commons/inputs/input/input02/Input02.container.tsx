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
    setInputPhone({
      ...inputPhone,
      [event.target.id]: event.target.value,
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
        defaultValue={inputPhone.first}
        onChange={onChangeInputPhone}
      />
      -
      <InputPhone
        type="text"
        id="second"
        maxLength={4}
        defaultValue={inputPhone.second}
        onChange={onChangeInputPhone}
      />
      -
      <InputPhone
        type="text"
        id="third"
        maxLength={4}
        defaultValue={inputPhone.third}
        onChange={onChangeInputPhone}
      />
    </InputPhoneWrapper>
  );
}
