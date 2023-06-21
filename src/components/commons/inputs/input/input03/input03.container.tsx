import { InputNumber } from "./input03.style";
import { ChangeEvent, useEffect, useState } from "react";
import { IPropsInput03 } from "./input03.types";

export default function Input03(props: IPropsInput03) {
  const [inputBirth, setInputBirth] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputBirth(value);
  };

  useEffect(() => {
    props.onChangeNumber(inputBirth);
  }, [inputBirth]);

  return (
    <InputNumber
      type="text"
      maxLength={8}
      value={inputBirth}
      onChange={onChangeInput}
      className="bottomBorder"
      placeholder={props.placeholderData}
    />
  );
}
