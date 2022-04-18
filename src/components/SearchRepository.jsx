import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import useIntersect from "../hooks/useIntersect";
import { ReactComponent as GitHubLogo } from "../assets/github_logo.svg";
import {
  addSearchList,
  searchAfterAdd,
  setFourModal,
  setOverlapModal,
} from "../modules/mainPage";

const SearchRepositoty = () => {
  const [scrollLoading, setIsScrollLoading] = useState(false);
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  const getSearchRepo = useSelector((state) => state.mainPage.searchList);
  const setGetSearchRepo = (data) => {
    dispatch(addSearchList(data));
  };

  const newMatchRepoList = useIntersect(
    targetRef,
    getSearchRepo,
    setGetSearchRepo,
    setIsScrollLoading
  );

  const repoLength = useSelector((state) => state.mainPage.addRepo);

  const handleAddClick = (e, target) => {
    const addData = getSearchRepo.filter(
      (current) =>
        current.userID === getSearchRepo[e.target.id].userID &&
        current.repoName === getSearchRepo[e.target.id].repoName
    );
    // console.log(repoLength);
    if (repoLength.length < 4) {
      if (repoLength.length > 0) {
        const array = repoLength.map((el) => `${el.userID}${el.repoName}`);
        if (array.includes(`${target.userID}${target.repoName}`)) {
          dispatch(setOverlapModal());
        } else {
          dispatch(searchAfterAdd(addData[0]));
          window.localStorage.setItem(
            "savedRepo",
            JSON.stringify([...repoLength, addData[0]])
          );
        }
      } else {
        dispatch(searchAfterAdd(addData[0]));
        window.localStorage.setItem("savedRepo", JSON.stringify([addData[0]]));
      }
    } else {
      dispatch(setFourModal());
    }
  };

  return (
    <>
      <InfinityScrollBox>
        {getSearchRepo ? (
          <>
            {newMatchRepoList.map((el, idx) => (
              <RepoListBox key={idx}>
                <LeftContain
                  className="left_contain"
                  key={idx}
                  ref={
                    idx + 10 === newMatchRepoList.length ? targetRef : undefined
                  }
                >
                  <div className="logo_box">
                    <GitHubLogo id="github_logo" width="20px" fill="#ccc" />
                  </div>
                  <div className="repo_name_box">
                    <h1 className="repo_name">
                      {el.repoName}
                      <span> | {el.userID}</span>
                    </h1>
                  </div>
                </LeftContain>
                <RightContain>
                  <AddBtn
                    className="add_btn"
                    id={idx}
                    el={el}
                    onClick={(e) => handleAddClick(e, el)}
                  >
                    추가
                  </AddBtn>
                </RightContain>
              </RepoListBox>
            ))}
            {scrollLoading ? <Spinner scrollSpinner /> : null}
          </>
        ) : null}
      </InfinityScrollBox>
    </>
  );
};

const RepoListBox = styled.div`
  width: 100%;
  height: 51px;
  border-radius: 8px;
  display: flex;
  padding: 0 15px;
  margin-bottom: 18px;
  animation: fadeInRepoList 1.05s ease;

  @keyframes fadeInRepoList {
    from {
      opacity: 0;
      margin-bottom: 38px;
    }
    to {
      opacity: 1;
      margin-bottom: 18px;
    }
  }

  :hover {
    background-color: #fff;
    color: #000;
    transition: all 0.35s ease;

    > .left_contain > .logo_box > #github_logo {
      fill: #000;
      transition: all 0.35s ease;
    }

    > .left_contain > .repo_name_box > .repo_name {
      color: #000;
      transition: all 0.35s ease;
    }

    > .left_contain > .repo_name_box > .repo_name > span {
      color: #ccc;
      transition: all 0.35s ease;
    }
  }
  :not(:hover) {
    background-color: #2d2d2d;
    color: #ccc;
    transition: all 0.35s ease;
  }
`;

const InfinityScrollBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const LeftContain = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  .logo_box {
    width: 6%;
  }

  .repo_name_box {
    width: 94%;
  }

  .repo_name {
    margin-left: 8px;
    padding-top: 3px;
    font-size: 1.8rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .text_line {
      color: #ccc;
    }
`;

const RightContain = styled(LeftContain)`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;

const AddBtn = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  padding: 6px 15px;
  border-radius: 8px;

  :hover {
    background-color: #00aaee;
    transition: all 0.35s ease;
  }

  :not(:hover) {
    background-color: #8d8d8d;
    transition: all 0.35s ease;
  }
`;

export default SearchRepositoty;
