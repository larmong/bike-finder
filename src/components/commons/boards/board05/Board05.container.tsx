import Board05UI from "./Board05.presenter";
import { useState } from "react";

export default function Board05(props) {
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
    <Board05UI
      BOARD_COLUMNS={props.BOARD_COLUMNS}
      BOARD_HEAD={props.BOARD_HEAD}
      PAYMENT_METHOD_TYPE={props.PAYMENT_METHOD_TYPE}
      onClickPaymentMethodType={props.onClickPaymentMethodType}
      paginatedData={paginatedData}
      noticeLength={noticeLength}
      pageSize={pageSize}
      handlePageChange={handlePageChange}
      onClickPaymentButton={props.onClickPaymentButton}
      nonPaymentLength={props.nonPaymentLength}
      nonTotalPayment={props.nonTotalPayment}
    />
  );
}
