import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectRpository from "../components/SelectRepository";
import { DELETE_DATA } from "../modules/mainSlice";
import { setLocalStorage, getLocalStorage } from "../util/localStorage";

const RightBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addRepositories = useSelector((state) => state.main.addRepo);
  const titleColor = useSelector((state) => state.main.addRepo);
  useEffect(() => {
    const origin = getLocalStorage("saveRepo");
    if (origin) {
      dispatch(DELETE_DATA(getLocalStorage("saveRepo")));
    }
  }, [dispatch]);

  const handleDltClick = useCallback(
    (e) => {
      e.stopPropagation();
      const target = e.target.id;
      let leftData = addRepositories.filter(
        (current, i) => Number(target) !== i
      );
      dispatch(DELETE_DATA(leftData));
      // console.log(leftData);
      setLocalStorage("savedRepo", leftData);
    },
    [addRepositories, dispatch]
  );

  const handleSetLocalStorage = useCallback(
    (e, idx) => {
      const target = Number(idx);
      const clickedData = addRepositories[target];
      setLocalStorage("selectedRepos", clickedData);
      navigate("/issue");
    },
    [addRepositories, navigate]
  );

  return (
    <>
      <Container>
        <Title titleColor={titleColor.length > 0}>저장 Repository 🎁</Title>
        <ListContainer>
          {addRepositories &&
            addRepositories.map((repo, idx) => {
              return (
                <SelectRpository
                  key={`${repo.userID}|${repo.repoName}`}
                  repo={repo}
                  id={idx}
                  handleDltClick={(e) => handleDltClick(e)}
                  handleSetLocalStorage={(e) => handleSetLocalStorage(e, idx)}
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
  transition: 0.35s;

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
  justify-content: flex-start;
  flex-direction: column;
`;

export default RightBox;
