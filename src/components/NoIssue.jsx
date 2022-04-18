import React from "react";
import styled from "styled-components";
import NoIssueImg from "../assets/no_issue_img.svg";
import { ReactComponent as GitHubLogo } from "../assets/github_logo.svg";

const NoIssue = () => {
  return (
    <>
      <NoIssueBox>
        <div>
          <GitHubLogo fill="#fff" />
          <h1>이 Rpository에는 Issues가 없습니다</h1>
        </div>
      </NoIssueBox>
    </>
  );
};

const NoIssueBox = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${NoIssueImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    text-align: center;
    animation: upDown 0.55s ease;

    @keyframes upDown {
      from {
        opacity: 0;
        margin-top: 120px;
      }
      to {
        opacity: 1;
        margin-top: 0px;
      }
    }
  }

  h1 {
    font-size: 2.85rem;
    font-weight: bold;
    margin-top: 22px;
  }

  animation: fadeIn 0.75s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
`;

export default NoIssue;
