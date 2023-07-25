import * as S from "./Search01.style";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { ISearch01Props } from "./Search01.types";
import {
  CustomChangeEvent,
  CustomKeyboardEvent,
} from "../../../../commons/types/global.types";

export default function Search01(props: ISearch01Props) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event: CustomChangeEvent) => {
    setSearchText(event.target.value);
  };

  const handleClick = () => {
    props.handleSearch(searchText);
  };

  const onSubmitSearch = (event: CustomKeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <S.Search>
      <MdSearch />
      <S.SearchInput
        placeholder="검색어를 입력해주세요."
        type="text"
        value={searchText}
        onChange={handleChange}
        onKeyPress={onSubmitSearch}
      />
      <S.SearchBtn onClick={handleClick}>검색</S.SearchBtn>
    </S.Search>
  );
}
