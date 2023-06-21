import { InputNumber } from "./input03.style";
import { useEffect, useState } from "react";
import { IPropsInput03 } from "./input03.types";
import { CustomChangeEvent } from "../../../../../commons/types/global.types";

export default function Input03(props: IPropsInput03) {
  const [inputNum, setInputNum] = useState<string>("");

  const onChangeInput = (event: CustomChangeEvent) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputNum(value);
  };

  useEffect(() => {
    props.onChangeNumber(inputNum, props.inputId);
  }, [inputNum]);

  return (
    <InputNumber
      type="text"
      id={props.inputId}
      maxLength={props.inputMaxLength}
      value={inputNum}
      onChange={onChangeInput}
      className={"bottomBorder " + props.inputClass}
      placeholder={props.placeholderData}
    />
  );
}
