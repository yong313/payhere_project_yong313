<br />

### 🎉  ****PayHere-Projects****
✨ 페이히어 - 과제 전형 - 전용태

---

### 🎁  배포링크

- [배포링크](https://625d71ef94cca85745062d6d--euphonious-halva-4e305d.netlify.app/)

<br />

### 💫  프로젝트 소개

- GitHub Repository명을 검색
- 검색된 Public Repository를 등록 - (4개 등록 가능)
- 등록된 Repository를 삭제 가능
- 등록된 각각의 Public Repository의 issue를 한 페이지에서 확인


<br />

### ⚙️  프로젝트 기획

1. 필수 사항 및 도전 과제 확인
2. [figma](https://www.figma.com/file/HV0V03BmPVqzCaerlrr61U/%ED%8E%98%EC%9D%B4%ED%9E%88%EC%96%B4-%2F-%EA%B3%BC%EC%A0%9C%EC%A0%84%ED%98%95-UI?node-id=0%3A1)를 사용 ui 디자인
3. GitHub Issues / Projects를 사용 ui구현 작업 및 기능 구현작업 기획

<br />

### 🛠 기능 시연 

![1](https://user-images.githubusercontent.com/85574104/163825498-05161329-4f0c-4271-839f-e070e84ad7b6.gif)

<br />

### 🔨  실행방법 - 1

1. 배포 된 주소로 접속해주세요. - [배포링크](https://625d71ef94cca85745062d6d--euphonious-halva-4e305d.netlify.app/)
2. 검색창에 GitHub Repository 명을 검색해 주세요. 검색어 입력 후 Enter 키 혹은 우측에 검색 버튼 두 가지 방법으로 검색 가능합니다.
3. 검색된 Public Repository 리스트에서 자주 찾는 Repository를 최대 4개까지 등록하여 사용할 수 있습니다. 삭제도 가능합니다.
4. 등록된 Repository를 클릭 시 issue를 한 페이지에서 모아서 확인 가능합니다.
5. issue를 클릭 시 해딩 issue의 GitHub 페이지로 이동합니다. 

<br />

### 🔧  실행방법 - 2


```jsx
git clone https://github.com/yong313/payhere_project_yong313.git

cd payhere

npm install

npm start
```

<br />

### 👨🏻‍💻 기능 구현 목록

1. 유저의 편의성을 위해 Enter 키 및 검색 버튼 마우스 클릭으로 검색

    ![2](https://user-images.githubusercontent.com/85574104/163826468-cff55e74-83c9-45e1-a2e5-7d93b629e832.gif)

    >  keyHandler & clickHandler를 사용하여 검색어 입력 후 Enter 키 및 검색 버튼 마우스 클릭으로 검색 가능하도록 함
    
    ```jsx
      const keyHandler = (e) => {
        if (e.code === "Enter" && text.length > 0) {
          getData();
          setText("");
        }
      };

      const clickHandler = () => {
        if (text.length > 0) {
          getData();
          setText("");
        }
      };
    ```
    
    <br />
    
2. 무한 스크롤 적용으로 Repository 검색 리스트 제공
    
    ![3](https://user-images.githubusercontent.com/85574104/163827737-c2b6878a-4765-481f-9199-755d24357967.gif)
    
    > hook으로 무한 스크롤 모듈을 만들어 검색된 레포지토리 컴포넌트에 적용시켜 구현함. spinner를 사용하여 데이터가 로딩 중임을 유저에게 노출
    
    ```jsx
    
    // searchRepository.jsx
   
    const newMatchRepoList = useIntersect(
        targetRef,
        getSearchRepo,
        setGetSearchRepo,
        setIsScrollLoading
      );
      
      <InfinityScrollBox>
        {getSearchRepo ? (
          <>
            {newMatchRepoList.map((el, idx) => (
              <RepoListBox key={idx}>
                <LeftContain
                  className="left_contain"
                  key={idx}
                  ref={
                    idx + 10 === newMatchRepoList.length ? targetRef : undefined
                  }
                >
                  <div className="logo_box">
                    <GitHubLogo id="github_logo" width="20px" fill="#ccc" />
                  </div>
                  <div className="repo_name_box">
                    <h1 className="repo_name">
                      {el.repoName}
                      <span> | {el.userID}</span>
                    </h1>
                  </div>
                </LeftContain>
                <RightContain>
                  <AddBtn
                    className="add_btn"
                    id={idx}
                    el={el}
                    onClick={(e) => handleAddClick(e, el)}
                  >
                    추가
                  </AddBtn>
                </RightContain>
              </RepoListBox>
            ))}
            {scrollLoading ? <Spinner scrollSpinner /> : null}
          </>
        ) : null}
      </InfinityScrollBox>
    ```
    
    <br />
    
3. 검색 Repository 추가 버튼 클릭 시 로컬 스토리지에 저장 / 저장 Repository 영역으로 추가 및 삭제
    
    > handleAddClick 함수를 통해 추가 버튼 클릭 시 로컬 스토리지에 선택된 Repository의 useId와 repoName을 저장, 저장된 데이터를 사용하여 추가 영역에 선택된 레포지토리를 추가 및 삭제하도록 구현
    
    ```jsx
    // onKeyUpHandler
    case "Enter":
      if (e.key === "Enter" && targetIndex > -1) {
        buttonClickHandler();
      }
    break;
        
    // buttonClickHandler
    const buttonClickHandler = () => {
        if (userValue === "") {
          return window.alert("검색어를 입력해 주세요.");
        }
        window.location.href = `https://clinicaltrialskorea.com/studies?condition=${userValue}`;
    };
    ```
    
    <br />
    
4. 미디어 쿼리를 사용 반응형 웹사이트 적용

    ![2](https://user-images.githubusercontent.com/85574104/160144474-5d5a525c-e057-4254-a4ba-09828b64c98a.gif)
    
    > 전체적인 컴포넌트 생성 시 width값을 % 로 설정해 가로 사이즈가 줄어들때 자동으로 크기를 가져가도록 설정, 미디어 쿼리를 사용해 특정 컴포넌트 크기 및 색상 노출 여부를 컨트롤 하였고, 모바일 사이즈가 되었을 때 모바일 전용 햄버거 매뉴 제공  
    
    ```jsx
    // 헤더 menu
    <RightBox>
       <p>소식받기</p>
       <p>제휴/문의</p>
      <MobileIcon id="mobile_menu" onClick={openModal} />
    </RightBox>
    
    // css
    const RightBox = styled(LeftBox)`
    justify-content: flex-end;

    #mobile_menu {
        display: none;
    }

    @media screen and (max-width: 1040px) {
     p {
      display: none;
    }
    #mobile_menu {
      cursor: pointer;
      display: block;
    }
    ```    

<br />    

🫠 &nbsp; 어려웠던 점

1. Redux-Toolkit
> 리덕스 툴킷을 처음 사용하는 거라 어려움을 겪었지만 문서와 레퍼런스를 찾아보며 사용법을 익힘, 리덕스에서도 리덕스 툴킷의 사용을 권장하지만 프로젝트 환경에 따라 달라진다는 사실을 알게 되었고, 리덕스보다 사용하기 편하고 간소화되어있는 거 같아 장점이 있다고 느낌

2. 검색어 입력하는 순간 검색 중 메세지 노출 시키기
> 검색어를 입력하는 input의 상태를 관리하는데 api 호출을 줄이기 위해 debounce로 딜레이 시간을 걸어놔서 검색 중 메시지와 추천 검색어 리스트가 동시에 나오는 상황이 생겨서 어떤 조건을 줘야 할지 고민을 많이 함 
> isValue라는 input의 상태 값을 하나 더 만들고 리듀스 initialState에 loading의 기본값을 false로 설정한 뒤, loading을 기준으로 isValue에 텍스트가 추가되면 검색 중 메시지를 노출시키고 api 호출이 되면 추천 검색어 컴포넌트를 노출시키는 방법으로 해결

<br />
