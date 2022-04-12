import React from "react";
import styled from "styled-components";
import RepositoryList from "./RepositoryList";
import Spinner from "./Spinner";

const LeftBox = (isLoading) => {
  return (
    <>
      <Container>
        <Title>검색 Repository 🎉</Title>
        <ListContainer>
          <RepositoryList />
          {isLoading ? null : <Spinner />}
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
  ${(props) => (props.titleColor ? "color: #717171" : "color: #ffffff")};
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
