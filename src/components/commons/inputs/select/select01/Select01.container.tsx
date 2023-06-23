import {
  Icon,
  SelectBox,
  SelectList,
  SelectMenu,
  SelectText,
  Star,
  Wrapper,
} from "./Select01.style";
import { useEffect, useRef, useState } from "react";
import { IPropsSelect01 } from "./Select01.types";
import { CustomMouseEvent } from "../../../../../commons/types/global.types";

export default function Select01(props: IPropsSelect01) {
  const selectListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectListRef.current &&
        !selectListRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [selectMenu, setSelectMenu] = useState(
    props.cardType || props.SELECT_LIST[0]
  );
  const [isOpen, setIsOpen] = useState(false);

  const onClickSelectBox = () => {
    setIsOpen(true);
  };
  const onClickSelectMenu = (event: CustomMouseEvent) => {
    setSelectMenu(props.SELECT_LIST[Number(event.currentTarget.id)]);
    props.onClickSelectValue(
      props.SELECT_LIST[Number(event.currentTarget.id)],
      props.inputId
    );
    setIsOpen(false);
  };

  return (
    <Wrapper isSelect={props.isSelect} id={props.inputId}>
      <SelectBox onClick={onClickSelectBox}>
        <SelectText>{selectMenu}</SelectText>
        <Icon />
      </SelectBox>
      {isOpen ? (
        <SelectList ref={selectListRef}>
          {props.SELECT_LIST.map((el, index) => (
            <SelectMenu
              key={index}
              id={String(index)}
              className={el === selectMenu ? "active" : ""}
              onClick={onClickSelectMenu}
            >
              {el}
              {el === selectMenu ? <Star /> : ""}
            </SelectMenu>
          ))}
        </SelectList>
      ) : (
        ""
      )}
    </Wrapper>
  );
}
