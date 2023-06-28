import { useEffect, useState } from "react";
import {
  CardMessage,
  InputCard,
  InputCardContainer,
  InputCardWrapper,
} from "./input06.style";
import { CustomChangeEvent } from "../../../../../commons/types/global.types";
import { IInputCard, IPropsInput06 } from "./input06.types";

export default function Input06(props: IPropsInput06) {
  const [inputCard, setInputCard] = useState<IInputCard>({
    first: "",
    second: "",
    third: "",
  });

  const onChangeInputCard = (event: CustomChangeEvent) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputCard({
      ...inputCard,
      [event.target.id]: value,
    });
  };

  useEffect(() => {
    const fullCardNum = `${inputCard.first}${inputCard.second}${inputCard.third}`;
    props.onChangeCard(fullCardNum, props.inputId);
  }, [inputCard]);

  useEffect(() => {
    if (props.cardNum) {
      setInputCard({
        first: String(props.cardNum).slice(0, 4),
        second: String(props.cardNum).slice(4, 8),
        third: String(props.cardNum).slice(8, 12),
      });
    }
  }, []);

  return (
    <InputCardWrapper id={props.inputId}>
      <InputCardContainer>
        <InputCard
          type="text"
          id="first"
          maxLength={4}
          value={inputCard.first}
          onChange={onChangeInputCard}
          placeholder="1234"
        />
        -
        <InputCard
          type="text"
          id="second"
          maxLength={4}
          value={inputCard.second}
          onChange={onChangeInputCard}
          placeholder="1234"
        />
        -
        <InputCard
          type="text"
          id="third"
          maxLength={4}
          value={inputCard.third}
          onChange={onChangeInputCard}
          placeholder="1234"
        />
      </InputCardContainer>
      <CardMessage>
        * 카드번호 <strong>16자리를</strong> 입력해주세요.
      </CardMessage>
    </InputCardWrapper>
  );
}
