import {
  CustomChangeEvent,
  CustomChangeEventTextArea,
  CustomMouseEvent,
} from "../../../../commons/types/global.types";

export interface IPropsContactUI {
  loginUser: string | null;
  contactData: IContactDataType;
  onChangeTitle: (event: CustomChangeEvent) => void;
  onChangeContent: (value: string) => void;
  onClickSubmit: () => void;
  onClickCb: (event: CustomMouseEvent) => void;
}

export interface IContactDataType {
  title: string;
  content: string;
}
