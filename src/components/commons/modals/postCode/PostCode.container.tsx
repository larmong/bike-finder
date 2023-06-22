import PostCodeUI from "./PostCode.presenter";
import { IPostCode } from "./PostCode.types";

export default function PostCode(props: IPostCode) {
  return (
    <PostCodeUI
      isModal={props.isModal}
      modalCurrentTarget={props.modalCurrentTarget}
      modalToggle={props.modalToggle}
      handleComplete={props.handleComplete}
    />
  );
}
