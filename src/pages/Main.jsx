import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  setFourModal,
  setOverlapModal,
  setNoSearchModal,
  setClientErrorModal,
  setServerErrorModal,
} from "../modules/mainPage";
// 이미지 및 로고
import { ReactComponent as GitHubLogo } from "../assets/github_logo.svg";
import MainBackground from "../assets/main_img.png";
// 컴포넌트
import Search from "../components/Search";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";
import PopupModal from "../components/PopupModal";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const showFourModal = useSelector((state) => state.mainPage.modalOpen);
  const showAlreadyModal = useSelector((state) => state.mainPage.secondModal);
  const showNoSearchModal = useSelector((state) => state.mainPage.thirdModal);
  const showClientErrorModal = useSelector(
    (state) => state.mainPage.clientErrorModal
  );
  const showServerErrorModal = useSelector(
    (state) => state.mainPage.serverErrorModal
  );

  return (
    <>
      {showFourModal && (
        <PopupModal
          content="4개 이상 저장은 안돼요 !!"
          setShowModal={setFourModal}
        />
      )}
      {showAlreadyModal && (
        <PopupModal
          content="이미 저장 되었습니다 !!"
          setShowModal={setOverlapModal}
        />
      )}
      {showNoSearchModal && (
        <PopupModal
          content="검색 결과가 없습니다 !!"
          setShowModal={setNoSearchModal}
        />
      )}
      {showClientErrorModal && (
        <PopupModal
          content="잘못된 접근입니다 !!"
          setShowModal={setClientErrorModal}
        />
      )}
      {showServerErrorModal && (
        <PopupModal
          content="서버 통신 에러입니다 !!"
          setShowModal={setClientErrorModal}
        />
      )}
      <MainBox>
        <HeadBox>
          <TitleBox>
            <GihubLogo>
              <GitHubLogo fill="#fff" />
            </GihubLogo>
            <Text>
              자주 가는 GitHub의
              <br />
              Public Repository Issue들을 모아서 볼 수 있어요
            </Text>
          </TitleBox>
        </HeadBox>
        <Search setIsLoading={setIsLoading} />
        <ContentBox>
          <LeftBox isLoading={isLoading} />
          <RightBox />
        </ContentBox>
      </MainBox>
    </>
  );
};

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  animation: fadeIn 0.95s ease;

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

const HeadBox = styled.div`
  width: 100%;
  height: 30rem;
  background-image: url(${MainBackground});
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
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 3.2rem;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 52.5rem;
  margin: 0 auto;
  display: flex;
`;

export default Main;
