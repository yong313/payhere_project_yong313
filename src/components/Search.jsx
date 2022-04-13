import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";
import axios from "axios";
import { headers } from "../util/util";
import { useDispatch } from "react-redux";
import { addSearchList, searchData } from "../modules/mainPage";

const Search = ({ setIsLoading }) => {
  const [text, setText] = useState("");
  const searchValue = useRef(null);
  const onChange = (e) => {
    setText(searchValue.current.value);
  };
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
      setText("");
    }
  };

  const clickHandler = () => {
    getData();
    setText("");
  };

  return (
    <>
      <SearchBox>
        <div>
          <SearchIcon fill="#515151" className="icon_search" />
          <SearchInput
            className="input"
            text={text}
            ref={searchValue}
            onKeyPress={keyHandler}
            onChange={onChange}
            placeholder="Repository를 검색해주세요 ✨"
          />
        </div>
        <SearchBtn onClick={clickHandler} text={text} className="tet">
          검색
        </SearchBtn>
      </SearchBox>
    </>
  );
};

const SearchBox = styled.div`
  width: 75%;
  height: 4rem;
  margin: 0.5rem auto 3.5rem auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    width: 95%;

    .icon_search {
      padding-top: 8px;
    }
  }

  :hover {
    border-bottom: 1px solid #fff;
    transition: all 0.35s ease;

    > div > .icon_search {
      fill: #fff;
      transition: all 0.35s ease;
    }
  }
  :not(:hover) {
    border-bottom: 1px solid #515151;
  }
  > div > .icon_search {
    fill: #515151;
    transition: all 0.35s ease;
  }
`;

const SearchInput = styled.input`
  width: 95%;
  margin-left: 8px;
  font-size: 2.3rem;
  background-color: transparent;
  color: ${(props) => (props.text ? "#ffffff" : "#515151")};

  :focus {
    color: #fff;
  }
`;

const SearchBtn = styled.button`
  width: auto;
  font-size: 2.3rem;
  text-align: right;
  color: ${(props) => (props.text ? "#00aaee" : "#515151")};
`;

export default Search;
