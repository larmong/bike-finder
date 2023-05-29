import { useRouter } from "next/router";
import { MouseEvent } from "react";
import Tab01UI from "./Tab01.presenter";
import { ITabMenus } from "./Tab01.types";

export default function Tab01(props) {
  const router = useRouter();
  const pathname = router.pathname;

  let TAB_MENUS: ITabMenus[] = props.TAB_MENUS;

  const onClickMoveToTabMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`/${event.currentTarget.id}`);
  };

  return (
    <Tab01UI
      TAB_MENUS={TAB_MENUS}
      pathname={pathname}
      onClickMoveToTabMenus={onClickMoveToTabMenus}
    />
  );
}
