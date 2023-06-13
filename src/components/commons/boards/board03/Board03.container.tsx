import Board03UI from "./Board03.presenter";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";

export default function Board03(props) {
  const router = useRouter();

  const noticeLength: number = props.boardData.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = props.boardData.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <Board03UI
      BOARD_TABLE_TITLE={props.BOARD_TABLE_TITLE}
      boardTableColumns={props.boardTableColumns}
      paginatedData={paginatedData}
      noticeLength={noticeLength}
      pageSize={pageSize}
      handlePageChange={handlePageChange}
      onClickBoardDetail={props.onClickBoardDetail}
    />
  );
}
