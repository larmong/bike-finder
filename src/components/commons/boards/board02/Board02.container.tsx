import Board02UI from "./Board02.presenter";
import { useState } from "react";

export default function Board02(props) {
  const noticeLength: number = props.boardData.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedNotice = props.boardData.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <Board02UI
      paginatedNotice={paginatedNotice}
      noticeLength={noticeLength}
      pageSize={pageSize}
      handlePageChange={handlePageChange}
    />
  );
}
