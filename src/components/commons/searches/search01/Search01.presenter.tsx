import * as S from "./Search01.style";
import { MdSearch } from "react-icons/md";

export default function Search01UI() {
  return (
    <S.Search>
      <MdSearch />
      <S.SearchInput placeholder="검색어를 입력해주세요." type="text" />
      <S.SearchBtn>검색</S.SearchBtn>
    </S.Search>
  );
}
