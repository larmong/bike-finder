import Board01UI from "./Board01.presenter";
import { IPropsBoard } from "./Board01.types";

export default function Board01(props: IPropsBoard) {
  return <Board01UI fetchData={props.fetchData} isHead={props.isHead} />;
}
