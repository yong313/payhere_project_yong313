import React from "react";
import styled from "styled-components";
import SearchRepository from "./SearchRepository";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";

const LeftBox = ({ isLoading }) => {
  const titleColor = useSelector((state) => state.main.searchList);

  return (
    <>
      <Container>
        <Title titleColor={titleColor.length > 0}>검색 Repository 🎉</Title>
        <ListContainer>
          {isLoading ? <Spinner /> : <SearchRepository />}
        </ListContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 49%;
  height: 100%;
  background-color: #111111;
  border-radius: 20px;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1440px) {
    height: 96%;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 30px;
  margin-bottom: 20px;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => (props.titleColor ? "#ffffff" : "#424242")};
  transition: all 0.35s ease;

  @media (max-width: 1440px) {
    font-size: 1.95rem;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: 90%;
  padding: 0 5%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: scroll;
`;

export default LeftBox;
