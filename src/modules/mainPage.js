export const SET_DATA = "mainPage/SET_DATA";
export const AFTER_DATA = "mainPage/AFTER_DATA";
export const DELETE_DATA = "mainPage/DELETE_DATA";
export const COUNTER_DATA = "mainPage/COUNTER_DATA";
export const SEARCH_DATA = "mainPage/SEARCH_DATA";
export const MODAL_OPEN = "mainPage/MODAL_OPEN";
export const SECOND_MODAL = "mainPage/SECOND_MODAL";
export const ADD_SEARCH_LIST = "mainPage/ADD_SEARCH_LIST";

const initialState = {
  compareData: [],
  repoData: [],
  addRepo: [],
  pageCounter: 2,
  searchString: "",
  modalOpen: false,
  secondModal: false,
  searchList: [],
};

export const setFourModal = () => ({ type: MODAL_OPEN });
export const setOverlapModal = () => ({ type: SECOND_MODAL });

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
    case ADD_SEARCH_LIST:
      return {
        ...state,
        searchList: [...action.list],
      };

    default:
      return state;
  }
}
