import { createSlice } from "@reduxjs/toolkit";
import { TabNum } from "../constants";
import { RootState } from "../store";

export const stateUIReduserSlice = createSlice({
	name: "stateUIReduser",
	initialState: {
		tabNum: TabNum.Good,
		modalShowState: false,
		modalShowGood: false,
		modalUid: "",
	},
	reducers: {
		change: (state, action) => {
			state.tabNum = action.payload;
		},
		modalShow: (state, action) => {
			state.modalShowState = true;
			state.modalShowGood = action.payload.modalShowGood;
			state.modalUid = action.payload.modalUid;
		},
		modalHidden: (state, action) => {
			state.modalShowState = false;
		},
	},
});

export const { change, modalShow, modalHidden } = stateUIReduserSlice.actions;

export const selectTab = (state: RootState) => state.stateUIReduser.tabNum;

export const stateModalShow = (state: RootState) =>
	state.stateUIReduser.modalShowState;

export const typeModalShow = (state: RootState) =>
	state.stateUIReduser.modalShowGood;

export default stateUIReduserSlice.reducer;
