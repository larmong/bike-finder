import { useRouter } from "next/router";
import Tab01UI from "./Tab01.presenter";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export default function Tab01(props) {
  const router = useRouter();
  const pathname = router.pathname;

  const onClickMoveToTabMenus = (event: CustomMouseEvent) => {
    router.push(`/${event.currentTarget.id}`);
  };

  return (
    <Tab01UI
      TAB_MENUS={props.TAB_MENUS}
      tabWidth={props.tabWidth}
      pathname={pathname}
      onClickMoveToTabMenus={onClickMoveToTabMenus}
    />
  );
}
