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
          <div className="logo_box">
            <GitHubLogo id="github_logo" width="20px" fill="#000" />
          </div>
          <div className="repo_name_box">
            <h1 className="repo_name">
              {selectRepo ? (
                <p>
                  <span className="test">{repo.repoName}</span> | {repo.userID}
                </p>
              ) : (
                <p>
                  <span className="test">{data.repoName}</span> | {data.userID}
                </p>
              )}
            </h1>
          </div>
        </LeftContain>
        <RightContain>
          <DeleteBtn
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
  cursor: pointer;
  animation: fadeInRepoList 1.05s ease;

  @keyframes fadeInRepoList {
    from {
      opacity: 0;
      margin-top: 35px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  @media (max-width: 1440px) {
    @keyframes fadeInRepoList {
      from {
        opacity: 0;
        margin-top: 15px;
      }
      to {
        opacity: 1;
        margin-top: 0;
      }
    }
  }
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

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #ccc;
      .test {
        color: #000;
      }
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
