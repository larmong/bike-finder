import { TableBtn } from "./button04.style";

export default function Button04(props) {
  return (
    <TableBtn onClick={props.onClickButton} className={props.btnClass}>
      {props.btnText}
    </TableBtn>
  );
}
