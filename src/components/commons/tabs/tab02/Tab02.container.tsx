import Tab02UI from "./Tab02.presenter";
import { IPropsTab02 } from "./Tab02.types";

export default function Tab02(props: IPropsTab02) {
  return (
    <Tab02UI
      TAB_MENUS={props.TAB_MENUS}
      pathname={props.pathname}
      onClickMoveToTabMenus={props.onClickMoveToTabMenus}
    />
  );
}
