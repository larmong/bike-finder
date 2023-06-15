import Board07UI from "./board07.presenter";
import { useState } from "react";

export default function Board07(props) {
  const noticeLength: number = props.fetchBoard.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = props.fetchBoard.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <Board07UI
      BOARD_COLUMNS={props.BOARD_COLUMNS}
      BOARD_HEAD={props.BOARD_HEAD}
      SEARCH_TYPE={props.SEARCH_TYPE}
      onClickSearchType={props.onClickSearchType}
      paginatedData={paginatedData}
      noticeLength={noticeLength}
      pageSize={pageSize}
      handlePageChange={handlePageChange}
    />
  );
}
