import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Main from "./pages/Main";
import Issue from "./pages/Issue";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/issue" element={<Issue />} />
          </Routes>
        </Container>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #000;
`;

const Container = styled.div`
  width: 1060px;
  height: 100vh;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export default App;
