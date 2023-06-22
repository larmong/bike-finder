import { useRouter } from "next/router";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { IPropsTab01 } from "./Tab01.types";
import Tab01UI from "./Tab01.presenter";

export default function Tab01(props: IPropsTab01) {
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
