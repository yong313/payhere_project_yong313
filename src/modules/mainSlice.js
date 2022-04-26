import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
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
  },

  reducers: {
    SET_DATA: (state, action) => {
      state.repoData = action.payload;
      state.compareData = action.payload;
    },

    AFTER_DATA: (state, action) => {
      state.addRepo = [...state.addRepo, action.payload];
    },

    DELETE_DATA: (state, action) => {
      state.addRepo = action.payload;
    },

    COUNTER_DATA: (state, action) => {
      state.pageCounter = action.payload++;
    },

    SEARCH_DATA: (state, action) => {
      state.searchString = action.payload;
    },

    ADD_SEARCH_LIST: (state, action) => {
      // console.log(action.payload);
      state.searchList = [...action.payload];
    },

    MODAL_OPEN: (state) => {
      state.modalOpen = !state.modalOpen;
    },

    SECOND_MODAL: (state) => {
      // console.log(!state.secondModal);
      state.secondModal = !state.secondModal;
    },

    THIRD_MODAL: (state) => {
      state.thirdModal = !state.thirdModal;
    },

    CLIENT_ERROR_MODAL: (state) => {
      state.clientErrorModal = !state.clientErrorModal;
    },

    SERVER_ERROR_MODAL: (state) => {
      state.serverErrorModal = !state.serverErrorModal;
    },
  },
});

export const {
  SET_DATA,
  AFTER_DATA,
  DELETE_DATA,
  COUNTER_DATA,
  SEARCH_DATA,
  ADD_SEARCH_LIST,
  MODAL_OPEN,
  SECOND_MODAL,
  THIRD_MODAL,
  CLIENT_ERROR_MODAL,
  SERVER_ERROR_MODAL,
} = mainSlice.actions;

export default mainSlice.reducer;
