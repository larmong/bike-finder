import FooterUI from "./Footer.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function Footer() {
  const router = useRouter();

  const onClickMoveToMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`${event.currentTarget.id}`);
  };

  return <FooterUI onClickMoveToMenus={onClickMoveToMenus} />;
}
