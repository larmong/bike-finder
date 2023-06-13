import Tab02UI from "./Tab02.presenter";

export default function Tab02(props) {
  return (
    <Tab02UI
      TAB_MENUS={props.TAB_MENUS}
      pathname={props.pathname}
      onClickMoveToTabMenus={props.onClickMoveToTabMenus}
    />
  );
}
