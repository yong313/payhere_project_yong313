import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";

function Search() {
  return (
    <>
      <SearchBox>
        <div>
          <SearchIcon fill="#515151" className="icon_search" />
          <SearchInput placeholder="Repository를 검색해주세요 ✨" />
        </div>
        <SearchBtn>검색</SearchBtn>
      </SearchBox>
    </>
  );
}

const SearchBox = styled.div`
  width: 75%;
  height: 4rem;
  margin: 0 auto 2.6rem auto;
  border-bottom: 1px solid #515151;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    width: 90%;
    .icon_search {
      padding-top: 8px;
    }
  }
`;

const SearchInput = styled.input`
  width: 90%;
  margin-left: 8px;
  font-size: 2.3rem;
  background-color: transparent;
  color: #515151;
`;

const SearchBtn = styled.button`
  width: 10%;
  font-size: 2.3rem;
  text-align: right;
  color: #515151;
`;

export default Search;
