import React from "react";
import styled from "styled-components";
import SearchRepository from "./SearchRepository";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";

const LeftBox = ({ isLoading }) => {
  const titleColor = useSelector((state) => state.mainPage.searchList.length);

  return (
    <>
      <Container>
        <Title titleColor={titleColor}>검색 Repository 🎉</Title>
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
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
  padding: 30px 0 0 30px;
  margin-bottom: 20px;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => (props.titleColor ? "#ffffff" : "#424242")};
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
