import * as S from "./Card01.style";
import { useRouter } from "next/router";
import { MdArrowForward, MdConfirmationNumber } from "react-icons/md";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { IPropsCard01 } from "./Card01.types";

export default function Card01(props: IPropsCard01) {
  const router = useRouter();

  const onClickMoveToTabMenus = (event: CustomMouseEvent) => {
    router.push(`${router.pathname}/${event.currentTarget.id}`);
  };
  return (
    <S.MenuCard
      onClick={onClickMoveToTabMenus}
      id={props.route}
      isType={props.type}
    >
      <S.MenuCardText>
        <S.MenuCardTitle isType={props.type}>{props.title}</S.MenuCardTitle>
        <S.MenuCardDsc isType={props.type}>{props.dsc}</S.MenuCardDsc>
      </S.MenuCardText>
      {router.pathname === "/ticket" ? (
        <S.MenuCardIconTicket isType={props.type}>
          <MdConfirmationNumber />
        </S.MenuCardIconTicket>
      ) : (
        <S.MenuCardIcon isType={props.type}>
          <MdArrowForward />
        </S.MenuCardIcon>
      )}
    </S.MenuCard>
  );
}
