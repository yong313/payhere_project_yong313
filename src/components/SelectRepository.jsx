import React from "react";
import styled from "styled-components";
import { ReactComponent as GitHubLogo } from "../assets/github_logo.svg";

const SelectRepository = ({
  repo,
  data,
  id,
  handleAddClick,
  handleDltClick,
  selectRepo,
  button,
  handleSetLocalStorage,
  targetRef,
}) => {
  return (
    <>
      <RepoListBox
        onClick={handleSetLocalStorage}
        ref={selectRepo ? null : targetRef}
      >
        <LeftContain>
          <GitHubLogo id="github_logo" width="20px" fill="#000" />
          <h1 className="repo_name">
            {selectRepo ? `${repo.repoName}` : `${data.repoName}`}
          </h1>
        </LeftContain>
        <RightContain>
          <DeleteBtn
            className="add_btn"
            onClick={selectRepo ? handleDltClick : handleAddClick}
            id={id}
          >
            삭제
          </DeleteBtn>
        </RightContain>
      </RepoListBox>
    </>
  );
};

const RepoListBox = styled.div`
  width: 100%;
  height: 51px;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  display: flex;
  padding: 0 15px;
  margin-bottom: 18px;
  animation: fadeInRepoList 0.85s ease;

  @keyframes fadeInRepoList {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LeftContain = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .repo_name {
    margin-left: 8px;
    padding-top: 4px;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const RightContain = styled(LeftContain)`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;

const DeleteBtn = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  padding: 6px 15px;
  border-radius: 8px;
  background-color: #ff7a7a;
`;

export default SelectRepository;
