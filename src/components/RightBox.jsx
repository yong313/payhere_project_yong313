import React from "react";
import styled from "styled-components";

const RightBox = () => {
  return (
    <>
      <Container>
        <Title>저장 Repository 🎁</Title>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 49%;
  height: 100%;
  background-color: #111111;
  border-radius: 20px;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
  padding: 30px 0 0 30px;
  font-size: 2.2rem;
  font-weight: bold;
  color: #717171;
`;

export default RightBox;
