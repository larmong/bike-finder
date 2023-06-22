import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IPostCode {
  modalTitle: string;
  isModal: boolean;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
  modalToggle: (event: CustomMouseEvent) => void;
  handleComplete: (data: any) => void;
}
