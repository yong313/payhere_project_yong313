import React, { useState, useEffect, useMemo, useCallback } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IssueCard from "../components/IssueCard";
import NoIssue from "../components/NoIssue";
import Pagination from "../components/Pagination";
import { headers } from "../util/util";
import Spinner from "../components/Spinner";

const Issue = () => {
  const navigate = useNavigate();
  const [showPage] = useState(9);
  const datas = useMemo(() => [], []);
  const [issueDataArr, setIssueDataArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0);
  const [clickedText, setClickedText] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const { userID, repoName } = JSON.parse(
    window.localStorage.getItem("selectedRepos")
  );

  const url = `https://api.github.com/repos/${userID}/${repoName}/issues?state=all&&per_page=100`;

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const { data: dataArr } = await axios.get(url, headers);
      // console.log(dataArr);
      if (dataArr.length) {
        dataArr.forEach((data) => {
          const {
            title,
            repository_url,
            created_at,
            state,
            html_url,
            number,
            user: { id, avatar_url },
          } = data;
          datas.push({
            title,
            repository_url,
            created_at,
            state,
            html_url,
            number,
            user: { id, avatar_url },
          });
        });
        setIssueDataArr(datas);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    })();
  }, [datas, url]);

  useEffect(() => {
    // 페이지네이션 인덱스 갯수 계산
    const issuelength = issueDataArr.length;
    const pagesLength = Math.ceil(issuelength / showPage);
    setNumOfPages(pagesLength);
    // 첫 번째 인덱스로 페이지 초기화
    setCurrentIndex(1);
  }, [issueDataArr, showPage]);

  const changePageIndex = useCallback((newIndex) => {
    // 클릭된 페이지 활성화
    setCurrentIndex(newIndex);
  }, []);

  const chageData = (text) => {
    const newDatas = datas.filter((obj) => {
      switch (text) {
        case "All":
          return obj;
        case "Open":
          return obj.state === "open";
        case "Closed":
          return obj.state === "closed";
        default:
          throw new Error(`Invalid text : ${text}`);
      }
    });
    setIssueDataArr(newDatas);
  };

  const setOnClick = (text) => {
    setClickedText(text);
    chageData(text);
  };

  return (
    <>
      <IssueBox>
        <Headers>
          <BackToMain onClick={() => navigate("/main")}>{"<"} HOME</BackToMain>
          <FilterBtn>
            {["All", "Open", "Closed"].map((text, idx) => (
              <Filter
                disabled={issueDataArr.length < 1}
                key={idx}
                text={text === clickedText}
                onClick={() => setOnClick(text)}
              >
                <span>{text}</span>
              </Filter>
            ))}
          </FilterBtn>
        </Headers>
        <RepositoryName>{repoName + " | " + userID}</RepositoryName>
        <Container>
          {isLoading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            <>
              <IssueList>
                {issueDataArr.length ? (
                  issueDataArr
                    .slice(
                      showPage * (currentIndex - 1),
                      showPage * currentIndex - 1 + 1
                    )
                    .map((dataObj, idx) => (
                      <IssueCard key={idx} dataObj={dataObj} />
                    ))
                ) : (
                  <NoIssue />
                )}
              </IssueList>
            </>
          )}
        </Container>
        <Footer>
          {issueDataArr.length ? (
            <Pagination
              currentIndex={currentIndex}
              numOfPages={numOfPages}
              changePageIndex={changePageIndex}
            />
          ) : null}
        </Footer>
      </IssueBox>
    </>
  );
};

const IssueBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 8% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  @media (max-width: 1440px) {
    padding: 4% 0;
  }
`;

const Headers = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
`;

const BackToMain = styled.div`
  width: 50%;
  height: auto;
  color: #00aaee;
  font-weight: bold;
  font-size: 3rem;
  cursor: pointer;
`;

const FilterBtn = styled.div`
  width: 50%;
  height: auto;
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Filter = styled.button`
  width: 75.5px;
  height: 43.5px;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => (props.disabled ? "#404040" : "#fff")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:first-child {
    border-radius: 20px 0 0 20px;
    border-left: ${(props) =>
      props.disabled ? "2px solid #404040" : "2px solid #fff"};
    border-top: ${(props) =>
      props.disabled ? "2px solid #404040" : "2px solid #fff"};
    border-bottom: ${(props) =>
      props.disabled ? "2px solid #404040" : "2px solid #fff"};
  }

  &:nth-child(2) {
    border-top: ${(props) =>
      props.disabled ? "2px solid #404040" : "2px solid #fff"};
    border-bottom: ${(props) =>
      props.disabled ? "2px solid #404040" : "2px solid #fff"};
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
    border-right: ${(props) =>
      props.disabled ? "2px solid #404040" : "2px solid #fff"};
    border-top: ${(props) =>
      props.disabled ? "2px solid #404040" : "2px solid #fff"};
    border-bottom: ${(props) =>
      props.disabled ? "2px solid #404040" : "2px solid #fff"};
  }

  ${({ text }) => {
    if (!text) return;
    return css`
      color: ${(props) => (props.disabled ? "#404040" : "#000")};
      background-color: ${(props) => (props.disabled ? "#000" : "#fff")};
    `;
  }};
`;

const RepositoryName = styled.div`
  width: 100%;
  height: 8%;
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    padding-bottom: 10px;
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IssueList = styled.div`
  width: 100%;
  display: grid;
  gap: 2.5rem;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  animation: showIssue 0.85s ease;

  @keyframes showIssue {
    from {
      opacity: 0;
      padding-top: 60px;
    }
    to {
      opacity: 1;
      padding-top: 0;
    }
  }

  @media (max-width: 1440px) {
    gap: 1.5rem;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
`;

export default Issue;
