import React from "react";
import styled from "styled-components";

function LeftBox() {
  return (
    <>
      <Container>
        <Title>검색 Repository 🎉</Title>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 49%;
  height: 100%;
  background-color: #111111;
  border-radius: 20px;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
  padding: 30px 0 0 30px;
  font-size: 2.2rem;
  font-weight: bold;
  color: #717171;
`;

export default LeftBox;
