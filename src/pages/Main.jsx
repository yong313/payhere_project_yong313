import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// 이미지 및 로고
import { ReactComponent as GitHubLogo } from "../assets/github_logo.svg";
import MainBackground from "../assets/main_img.png";
// 컴포넌트
import Search from "../components/Search";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";
import PopupModal from "../components/PopupModal";

import {
  MODAL_OPEN,
  SECOND_MODAL,
  THIRD_MODAL,
  CLIENT_ERROR_MODAL,
  SERVER_ERROR_MODAL,
} from "../modules/mainSlice";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const showFourModal = useSelector((state) => state.main.modalOpen);
  const showAlreadyModal = useSelector((state) => state.main.secondModal);
  const showNoSearchModal = useSelector((state) => state.main.thirdModal);
  const showClientErrorModal = useSelector(
    (state) => state.main.clientErrorModal
  );
  const showServerErrorModal = useSelector(
    (state) => state.main.serverErrorModal
  );
  return (
    <>
      {showFourModal && (
        <PopupModal
          content="4개 이상 저장은 안돼요!!"
          setShowModal={MODAL_OPEN}
        />
      )}
      {showAlreadyModal && (
        <PopupModal
          content="이미 저장 되었습니다!!"
          setShowModal={SECOND_MODAL}
        />
      )}
      {showNoSearchModal && (
        <PopupModal
          content="검색 결과가 없습니다!!"
          setShowModal={THIRD_MODAL}
        />
      )}
      {showClientErrorModal && (
        <PopupModal
          content="잘못된 접근입니다 잠시 후 다시 검색해 주세요!!"
          setShowModal={CLIENT_ERROR_MODAL}
        />
      )}
      {showServerErrorModal && (
        <PopupModal
          content="서버 통신 에러입니다 잠시 후 다시 검색해 주세요!!"
          setShowModal={SERVER_ERROR_MODAL}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 26rem;
  background-image: url(${MainBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center -50px;
  text-align: center;
  position: relative;
  top: 0px;

  @media (max-width: 1440px) {
    height: 25rem;
    top: -10px;
  }
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

  @media (max-width: 1440px) {
    height: 42rem;
    padding: 0 80px;
  }
`;

export default Main;
