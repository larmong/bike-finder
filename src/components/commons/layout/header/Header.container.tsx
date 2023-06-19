import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

export default function Header() {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const onClickMoveToMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`/${event.currentTarget.id}`);
  };

  return (
    <HeaderUI
      onClickMoveToMenus={onClickMoveToMenus}
      accessToken={accessToken}
    />
  );
}
