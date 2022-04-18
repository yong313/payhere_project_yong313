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

    >  keyHandler & clickHandler를 사용하여 검색어 입력 후 Enter 키 및 검색 버튼 마우스 클릭으로 검색 가능하도록 함
    
    <br />
    
2. 무한 스크롤 적용으로 Repository 검색 리스트 제공
    
    > hook으로 무한 스크롤 모듈을 만들어 검색된 레포지토리 컴포넌트에 적용시켜 구현함. spinner를 사용하여 데이터가 로딩 중임을 유저에게 노출
        
    <br />
    
3. 검색 Repository 추가 버튼 클릭 시 로컬 스토리지에 저장 / 저장 Repository 영역으로 추가 및 삭제

    > handleAddClick 함수를 통해 추가 버튼 클릭 시 로컬 스토리지에 선택된 Repository의 useId와 repoName을 저장, 저장된 데이터를 사용하여 추가 영역에 선택된 레포지토리를 추가 및 삭제하도록 구현
      
    <br />
    
4. 선택 된 Repository issue페이지 구현 + 페이지네이션
    
    > 로컬에 저장된 선택된 레포지토리의 useId / repoName를 사용하여 issue에 필요한 데이터 api 호출 / 호출한 데이터를 사용하여 필수로 표현돼야 할 ui 및 데이터 구현 + 페이지 네이션 구현  

    <br />
    
5. 모달을 활용하여 검색어 없음 / 4개이상 저장 불가능 / 이미 추가된 레포지토리 / 에러 메세지 전달
    
    > redux를 사용하여 각각의 메시지의 상태를 관리하여 유저가 프로젝트를 이용하며 생길 수 있는 상황에 대한 메시지를 전달하여 올바른 흐름으로 진행할 수 있도록 유도

<br />    
