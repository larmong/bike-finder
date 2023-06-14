import Board04UI from "./Board04.presenter";
import { useState } from "react";

export default function Board04(props) {
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
    <Board04UI
      BOARD_COLUMNS={props.BOARD_COLUMNS}
      BOARD_HEAD={props.BOARD_HEAD}
      onClickRefundBtn={props.onClickRefundBtn}
      PAYMENT_METHOD_TYPE={props.PAYMENT_METHOD_TYPE}
      onClickPaymentMethodType={props.onClickPaymentMethodType}
      PAYMENT_DATE_TYPE={props.PAYMENT_DATE_TYPE}
      onClickPaymentDateType={props.onClickPaymentDateType}
      paginatedData={paginatedData}
      noticeLength={noticeLength}
      pageSize={pageSize}
      handlePageChange={handlePageChange}
    />
  );
}
