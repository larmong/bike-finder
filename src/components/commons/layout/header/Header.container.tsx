import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function Header() {
  const router = useRouter();

  const onClickMoveToMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`/${event.currentTarget.id}`);
  };

  return <HeaderUI onClickMoveToMenus={onClickMoveToMenus} />;
}
