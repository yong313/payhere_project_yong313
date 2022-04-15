export const SET_DATA = "mainPage/SET_DATA";
export const AFTER_DATA = "mainPage/AFTER_DATA";
export const DELETE_DATA = "mainPage/DELETE_DATA";
export const COUNTER_DATA = "mainPage/COUNTER_DATA";
export const SEARCH_DATA = "mainPage/SEARCH_DATA";
export const ADD_SEARCH_LIST = "mainPage/ADD_SEARCH_LIST";
export const MODAL_OPEN = "mainPage/MODAL_OPEN";
export const SECOND_MODAL = "mainPage/SECOND_MODAL";
export const THIRD_MODAL = "mainPage/THIRD_MODAL";
export const CLIENT_ERROR_MODAL = "mainPage/CLIENT_ERROR";
export const SERVER_ERROR_MODAL = "mainPage/SERVER_ERROR";

const initialState = {
  compareData: [],
  repoData: [],
  addRepo: [],
  pageCounter: 2,
  searchString: "",
  searchList: [],
  modalOpen: false,
  secondModal: false,
  thirdModal: false,
  clientErrorModal: false,
  serverErrorModal: false,
};

export const setFourModal = () => ({ type: MODAL_OPEN });
export const setOverlapModal = () => ({ type: SECOND_MODAL });
export const setNoSearchModal = () => ({ type: THIRD_MODAL });
export const setClientErrorModal = () => ({ type: CLIENT_ERROR_MODAL });
export const setServerErrorModal = () => ({ type: SERVER_ERROR_MODAL });

export const setDatas = (datas) => ({ type: SET_DATA, datas });
export const searchAfterAdd = (addData) => ({
  type: AFTER_DATA,
  addData,
});
export const deleteData = (deleted) => ({
  type: DELETE_DATA,
  deleted,
});
export const counterData = () => ({ type: COUNTER_DATA });
export const searchData = (searchText) => ({ type: SEARCH_DATA, searchText });
export const addSearchList = (list) => ({ type: ADD_SEARCH_LIST, list });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      console.log("payload", action.datas);
      return {
        ...state,
        repoData: action.datas,
        compareData: action.datas,
      };
    case AFTER_DATA:
      return {
        ...state,
        addRepo: [...state.addRepo, action.addData],
      };
    case DELETE_DATA:
      return {
        ...state,
        addRepo: action.deleted,
      };
    case COUNTER_DATA:
      return {
        ...state,
        pageCounter: state.pageCounter++,
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchString: action.searchText,
      };
    case ADD_SEARCH_LIST:
      return {
        ...state,
        searchList: [...action.list],
      };
    case MODAL_OPEN:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case SECOND_MODAL:
      return {
        ...state,
        secondModal: !state.secondModal,
      };
    case THIRD_MODAL:
      return {
        ...state,
        thirdModal: !state.thirdModal,
      };
    case CLIENT_ERROR_MODAL:
      return {
        ...state,
        clientErrorModal: !state.clientErrorModal,
      };
    case SERVER_ERROR_MODAL:
      return {
        ...state,
        serverErrorModal: !state.serverErrorModal,
      };

    default:
      return state;
  }
}
