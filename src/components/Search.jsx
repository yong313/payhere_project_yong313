import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";
import axios from "axios";
import { headers } from "../util/util";
import { useDispatch } from "react-redux";
import { addSearchList, searchData } from "../modules/mainPage";

const Search = ({ setIsLoading }) => {
  const searchValue = useRef(null);
  const dispatch = useDispatch();

  function getData() {
    setIsLoading(true);
    const targetValue = searchValue.current.value;
    const url = `https://api.github.com/search/repositories?q=${targetValue}&per_page=20&page=1`;

    axios.get(url, headers).then((res) => {
      const result = res.data.items.map((el) => {
        const fullName = el.full_name.split("/");
        console.log(fullName);
        return { userID: fullName[0], repoName: fullName[1] };
      });
      console.log(result);
      dispatch(addSearchList(result));
      dispatch(searchData(targetValue));
      setIsLoading(false);
    });
  }

  const keyHandler = (e) => {
    if (e.code === "Enter") {
      getData();
    }
  };

  const clickHandler = () => {
    getData();
  };

  return (
    <>
      <SearchBox>
        <div>
          <SearchIcon fill="#515151" className="icon_search" />
          <SearchInput
            ref={searchValue}
            onKeyPress={keyHandler}
            placeholder="Repository를 검색해주세요 ✨"
          />
        </div>
        <SearchBtn onClick={clickHandler}>검색</SearchBtn>
      </SearchBox>
    </>
  );
};

const SearchBox = styled.div`
  width: 75%;
  height: 4rem;
  margin: 0.5rem auto 3.5rem auto;
  border-bottom: 1px solid #515151;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    width: 95%;

    .icon_search {
      padding-top: 8px;
    }
  }
`;

const SearchInput = styled.input`
  width: 95%;
  margin-left: 8px;
  font-size: 2.3rem;
  color: #515151;
  background-color: transparent;
`;

const SearchBtn = styled.button`
  width: auto;
  font-size: 2.3rem;
  text-align: right;
  color: #515151;
`;

export default Search;
