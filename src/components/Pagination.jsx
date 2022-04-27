import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Pagination = React.memo(function Pagination({
  currentIndex,
  numOfPages,
  changePageIndex,
}) {
  const [pageIndexArray, setPageIndexArray] = useState(
    Array.from({ length: numOfPages }, (_, idx) => idx + 1)
  );
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    setPageIndexArray(Array.from({ length: numOfPages }, (_, idx) => idx + 1));
  }, [numOfPages]);

  useEffect(() => {
    // 첫 번째 인덱스일 때 prev 버튼 숨기기
    if (currentIndex === 1) {
      prevRef.current.style.display = "none";
    } else {
      prevRef.current.style.display = "block";
    }
    // 마지막 인덱스일 때 next 버튼 숨기기
    if (currentIndex === pageIndexArray.length) {
      nextRef.current.style.display = "none";
    } else {
      nextRef.current.style.display = "block";
    }
  }, [currentIndex, pageIndexArray]);

  const clickEventHandler = useCallback(
    (e) => {
      if (e.target.textContent === "prev") {
        changePageIndex(currentIndex * 1 - 1);
      } else if (e.target.textContent === "next") {
        changePageIndex(currentIndex * 1 + 1);
      } else {
        changePageIndex(e.target.textContent * 1);
      }
    },
    [changePageIndex, currentIndex]
  );

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button ref={prevRef} onClick={clickEventHandler}>
          prev
        </Button>
      </ButtonWrapper>
      <PagesWrapper>
        {pageIndexArray
          .slice(
            Math.floor((currentIndex - 1) / 10) * 10,
            (Math.floor((currentIndex - 1) / 10) + 1) * 10
          )
          .map((pIndex, idx) => {
            return pIndex === currentIndex ? (
              <li key={idx} className="active" onClick={clickEventHandler}>
                {pIndex}
              </li>
            ) : (
              <li key={idx} onClick={clickEventHandler}>
                {pIndex}
              </li>
            );
          })}
      </PagesWrapper>
      <ButtonWrapper>
        <Button ref={nextRef} onClick={clickEventHandler}>
          next
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  color: #fff;
  font-size: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: showIssue 0.85s ease;

  @keyframes showIssue {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  margin: 7px;
`;

const Button = styled.button`
  color: #424242;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: #00aaee;
    transition: all 0.35s ease;
  }
  :not(:hover) {
    color: #424242;
    transition: all 0.35s ease;
  }
  animation: showNextPrev 0.85s ease;

  @keyframes showNextPrev {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const PagesWrapper = styled.ul`
  width: fit-content;
  display: flex;

  li {
    width: 3rem;
    height: 3rem;
    line-height: 3.3rem;
    color: #424242;
    font-size: 1.45rem;
    background-color: #111;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    margin: 0.3rem;

    :hover {
      color: #000;
      background-color: #fff;
    }
    :not(:hover) {
      color: #424242;
      background-color: #111;
      transition: all 0.35s ease;
    }
  }
  li.active {
    background-color: #00aaee;
    color: #fff;
  }
`;

export default Pagination;
