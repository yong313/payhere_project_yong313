import React, { useRef } from "react";
import styled from "styled-components";
import { ReactComponent as GitHubLogo } from "../assets/github_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import useIntersect from "../hooks/useIntersect";
import {
  addSearchList,
  searchAfterAdd,
  setFourModal,
  setOverlapModal,
} from "../modules/mainPage";

const RepositoryList = () => {
  const targetRef = useRef(null);
  const dispatch = useDispatch();

  const getSearchRepo = useSelector((state) => state.mainPage.searchList);
  const setGetSearchRepo = (data) => {
    dispatch(addSearchList(data));
  };

  const newMatchRepoList = useIntersect(
    targetRef,
    getSearchRepo,
    setGetSearchRepo
  );

  const repoLength = useSelector((state) => state.mainPage.addRepo);

  const handleAddClick = (e, target) => {
    const addData = getSearchRepo.filter(
      (current) =>
        current.userID === getSearchRepo[e.target.id].userID &&
        current.repoName === getSearchRepo[e.target.id].repoName
    );
    console.log(repoLength);
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
              <RepoListBox>
                <LeftContain
                  className="left_contain"
                  key={idx}
                  ref={
                    idx + 10 === newMatchRepoList.length ? targetRef : undefined
                  }
                >
                  <GitHubLogo id="github_logo" width="16px" fill="#ccc" />
                  <h1 className="repo_name">{el.repoName}</h1>
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

  :hover {
    background-color: #fff;
    color: #000;
    transition: all 0.35s ease;

    > .left_contain > #github_logo {
      fill: #000;
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

  .repo_name {
    margin-left: 8px;
    font-size: 1.8rem;
    font-weight: bold;
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

export default RepositoryList;
