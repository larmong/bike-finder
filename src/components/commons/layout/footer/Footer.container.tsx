import FooterUI from "./Footer.presenter";
import { useRouter } from "next/router";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export default function Footer() {
  const router = useRouter();

  const onClickMoveToMenus = (event: CustomMouseEvent) => {
    router.push(`${event.currentTarget.id}`);
  };

  return <FooterUI onClickMoveToMenus={onClickMoveToMenus} />;
}
