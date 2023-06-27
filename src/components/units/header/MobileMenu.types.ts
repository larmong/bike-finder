import React from "react";
import { CustomMouseEvent } from "../../../commons/types/global.types";

export interface IPropsMobileMenu {
  loginCheck: boolean;
  loginUser: string | null;
  onClickMoveToMobileMenus: (event: CustomMouseEvent) => void;
}

export interface IMobileMenus {
  name: string;
  route: string;
  icon: React.ReactElement;
}
