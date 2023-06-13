import * as S from "./Tab02.style";
import { IPropsTab01 } from "./Tab02.types";

export default function Tab02UI(props: IPropsTab01) {
  return (
    <S.Tab>
      {props.TAB_MENUS.map((el: any, index: number) => (
        <S.Manus
          key={index}
          className={props.pathname === `${el.route}` ? "target" : ""}
          id={el.route}
          onClick={props.onClickMoveToTabMenus}
        >
          {el.name}
        </S.Manus>
      ))}
    </S.Tab>
  );
}
