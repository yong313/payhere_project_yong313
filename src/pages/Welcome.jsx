import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainBackgroundTwo from "../assets/main_img_.gif";
import { ReactComponent as GitHubLogo } from "../assets/github_logo.svg";

const Welcome = () => {
  return (
    <>
      <WelcomeBox>
        <WelcomeBacground>
          <div>
            <GitHubLogo fill="#fff" className="github_log" />
            <Text>
              자주 가는 GitHub의
              <br />
              Public Repository Issue들을 모아서 볼 수 있어요
            </Text>
            <Link to="/main">
              <StartBtn>시작하기</StartBtn>
            </Link>
          </div>
        </WelcomeBacground>
      </WelcomeBox>
    </>
  );
};

const WelcomeBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WelcomeBacground = styled.div`
  width: 40%;
  height: 60%;
  background-image: url(${MainBackgroundTwo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  position: relative;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: fadeIn 0.85s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
        top: 8%;
      }
      to {
        opacity: 1;
        top: 0;
      }
    }
  }
`;

const Text = styled.h1`
  margin-top: 1.5rem;
  font-size: 3rem;
  font-weight: bold;
  line-height: 4.5rem;
  text-align: center;

  animation: fadeInBtn 1.85s ease;

    @keyframes fadeInBtn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const StartBtn = styled.button`
  width: 130px;
  height: 50px;
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 2.5rem;

  :hover {
    transition: all 0.35s ease;
    background-color: #00aaee;
  }
  :not(:hover) {
    transition: all 0.35s ease;
    background-color: #232323;
  }

  animation: fadeInBtn 2.25s ease;
  
    @keyframes fadeInBtn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export default Welcome;
