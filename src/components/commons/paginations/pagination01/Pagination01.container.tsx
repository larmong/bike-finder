import Pagination01UI from "./Pagination01.presenter";
import { MouseEvent, useEffect, useState } from "react";

export default function Pagination01(props) {
  const [startPage, setStartPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    // 총 게시물 수 => 총 페이지네이션 수
    if (props.noticeLength % 10 === 0) {
      setLastPage(props.noticeLength / 10);
    } else {
      setLastPage((props.noticeLength - (props.noticeLength % 10)) / 10 + 1);
    }
  });

  const onClickPagination = (event: MouseEvent<HTMLElement>) => {};

  const onClickPrevPage = () => {};

  const onClickNextPage = () => {};

  return (
    <Pagination01UI
      startPage={startPage}
      nowPage={nowPage}
      lastPage={lastPage}
      onClickPagination={onClickPagination}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
