import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectRpository from "../components/SelectRepository";
import { deleteData } from "../modules/mainPage";

const RightBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addRepositories = useSelector((state) => state.mainPage.addRepo);
  const titleColor = useSelector((state) => state.mainPage.addRepo.length);
  useEffect(() => {
    const origin = JSON.parse(window.localStorage.getItem("savedRepo"));
    if (origin) {
      dispatch(
        deleteData(JSON.parse(window.localStorage.getItem("savedRepo")))
      );
    }
  }, [dispatch]);

  const handleDltClick = (e) => {
    e.stopPropagation();
    const target = e.target.id;
    let leftData = addRepositories.filter((current, i) => Number(target) !== i);
    dispatch(deleteData(leftData));
    window.localStorage.setItem("savedRepo", JSON.stringify(leftData));
  };
  const handleSetLocalStorage = (e, idx) => {
    const target = Number(idx);
    const clickedData = addRepositories[target];
    window.localStorage.setItem("selectedRepos", JSON.stringify(clickedData));
    navigate("/issue");
  };
  return (
    <>
      <Container>
        <Title titleColor={titleColor}>저장 Repository 🎁</Title>
        <ListContainer>
          {addRepositories &&
            addRepositories.map((repo, index) => {
              return (
                <SelectRpository
                  key={index}
                  repo={repo}
                  id={index}
                  handleDltClick={(e) => handleDltClick(e)}
                  handleSetLocalStorage={(e) => handleSetLocalStorage(e, index)}
                  button={"Delete"}
                  selectRepo
                />
              );
            })}
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
  display: flex;
  flex-direction: column;
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
  justify-content: flex-start;
  flex-direction: column;
`;

export default RightBox;
