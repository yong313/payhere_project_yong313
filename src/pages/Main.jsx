import React from "react";
import styled from "styled-components";
// 이미지 및 로고
import { ReactComponent as GitHubLogo } from "../assets/github_logo.svg";
import MainBackground from "../assets/main_img.png";
import MainBackgroundTwo from "../assets/main_img_.gif";
// 컴포넌트
import Search from "../components/Search";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";

function Main() {
  return (
    <>
      <HeadBox>
        <TitleBox>
          <GihubLogo>
            <GitHubLogo />
          </GihubLogo>
          <Text>
            자주 가는 GitHub의
            <br />
            Public Repository Issue들을 모아서 볼 수 있어요 🔥
          </Text>
        </TitleBox>
      </HeadBox>
      <Search />
      <ContentBox>
        <LeftBox />
        <RightBox />
      </ContentBox>
    </>
  );
}

const HeadBox = styled.div`
  width: 100%;
  height: 33rem;
  background-image: url(${MainBackgroundTwo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center -33px;
  text-align: center;
  position: relative;
  top: -5px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GihubLogo = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const Text = styled.h1`
  line-height: 3.5rem;
  font-size: 2.3rem;
  font-weight: bold;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 52.5rem;
  margin: 0 auto;
  display: flex;
`;

export default Main;
