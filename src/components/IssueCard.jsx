import React from "react";
import styled from "styled-components";

const IssueCard = ({ dataObj }) => {
  const {
    title,
    repository_url,
    created_at,
    state,
    html_url,
    user: { avatar_url },
  } = dataObj;

  const toUpper = state.charAt(0).toUpperCase() + state.slice(1);
  const repoUrl = repository_url.slice(29);

  const getDate = () => {
    const createdDate = new Date(created_at);
    const currDate = new Date();
    const yDiff = currDate.getFullYear() - createdDate.getFullYear();
    const mDiff = currDate.getMonth() - createdDate.getMonth();
    const dDiff = currDate.getDate() - createdDate.getDate();
    if (dDiff === 0) {
      return "Today";
    }
    const date = parseInt((yDiff * 365 + mDiff * 30 + dDiff) / 30);
    return (date ? date + "month" : dDiff + " day") + " ago";
  };

  return (
    <>
      <IssueContainerBox state={state} url={html_url}>
        <Top>
          <Title state={state}>{title}</Title>
          <RepoName>{repoUrl}</RepoName>
          <RegistDate> {getDate()}</RegistDate>
        </Top>
        <Bottom>
          <IssueState state={state}>
            {toUpper} issue<span>✨</span>
          </IssueState>
          <UserImgBox>
            <UserImg avatar_url={avatar_url} />
          </UserImgBox>
        </Bottom>
      </IssueContainerBox>
    </>
  );
};

const IssueContainerBox = styled.a.attrs((props) => ({
  href: props.url,
}))`
  width: 100%;
  height: 17.2rem;
  background-color: ${({ state }) => (state === "open" ? "#fff" : "#111")};
  border-radius: 20px;
  padding: 15px 15px;
  cursor: pointer;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;

  @media (max-width: 1440px) {
    height: 16rem;
  }
}
`;

const Top = styled.div`
  width: 100%;
  height: 60%;
`;

const Title = styled.div`
  width: 100%;
  height: auto;
  font-size: 2rem;
  color: ${({ state }) => (state === "open" ? "#000" : "#ccc")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const RepoName = styled.div`
  width: 100%;
  height: auto;
  color: #2fcc59;
  font-size: 1.45rem;
  margin: 6px 0;
  word-break: break-all;
`;

const RegistDate = styled.p`
  font-size: 1.2rem;
  color: #ccc;
`;

const Bottom = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
`;

const IssueState = styled.div`
  width: 70%;
  height: 100%;
  font-size: 2.25rem;
  font-weight: bold;
  color: ${({ state }) => (state === "open" ? "#000" : "#ccc")};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const UserImgBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const UserImg = styled.img.attrs((props) => ({
  src: props.avatar_url,
}))`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  object-fit: contain;
`;

export default IssueCard;
