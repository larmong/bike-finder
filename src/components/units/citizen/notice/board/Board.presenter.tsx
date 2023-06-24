// import * as S from "./Board02.style";
// import Pagination01 from "../../paginations/pagination01/Pagination01.container";
// import { IPropsBoard02UI } from "./Board02.types";
//
// export default function Board02UI(props: IPropsBoard02UI) {
//   return (
//     <S.Board>
//       <S.BoardHead isColumns={props.boardTableColumns}>
//         {props.BOARD_TABLE_TITLE.map((el, index) => (
//           <S.BoardItem key={index}>{el}</S.BoardItem>
//         ))}
//       </S.BoardHead>
//       <S.BoardBody>
//         {props.paginatedNotice?.map((el) =>
//           el.top ? (
//             <S.BoardItemWrapper key={el.id}>
//               <S.NoticeBoardItem className="board-item-left">
//                 <em>공지</em>
//                 <span id={el.id} onClick={props.onClickBoardDetail}>
//                   {el.title}
//                 </span>
//               </S.NoticeBoardItem>
//               <S.NoticeBoardItem>{el.date}</S.NoticeBoardItem>
//             </S.BoardItemWrapper>
//           ) : (
//             <S.BoardItemWrapper key={el.id}>
//               <S.BoardItem className="board-item-left">
//                 <span id={el.id} onClick={props.onClickBoardDetail}>
//                   {el.title}
//                 </span>
//               </S.BoardItem>
//               <S.BoardItem>{el.date}</S.BoardItem>
//             </S.BoardItemWrapper>
//           )
//         )}
//       </S.BoardBody>
//       <Pagination01
//         noticeLength={props.noticeLength}
//         pageSize={props.pageSize}
//         handlePageChange={props.handlePageChange}
//       />
//     </S.Board>
//   );
// }
