import PostCodeUI from "./PostCode.presenter";
import { IPostCode } from "./PostCode.types";

export default function PostCode(props: IPostCode) {
  return (
    <PostCodeUI
      isModal={props.isModal}
      modalTitle={props.modalTitle}
      modalCurrentTarget={props.modalCurrentTarget}
      modalToggle={props.modalToggle}
      handleComplete={props.handleComplete}
    />
  );
}
