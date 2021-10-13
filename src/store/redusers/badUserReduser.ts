import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RaitingUserList } from "../types";

const initialState: RaitingUserList = {
	userList: [],
};

export const badUserReduserSlice = createSlice({
	name: "badUserReduser",
	initialState,
	reducers: {
		addNewBadUser: (state, action) => {
			state.userList.push({ ...action.payload, raiting: -1 });
		},
		raitingPlus: (state, action) => {
			state.userList[action.payload].raiting++;
		},
		raitingMinus: (state, action) => {
			state.userList[action.payload].raiting--;
		},
		deleteUserByIndex: (state, action) => {
			state.userList.splice(action.payload, 1);
		},
	},
});

export const { addNewBadUser, raitingPlus, raitingMinus, deleteUserByIndex } =
	badUserReduserSlice.actions;

export const badUserList = (state: RootState) => state.badUserReduser.userList;

export const getBadUserById = (id: string) => (state: RootState) => {
	const userList = state.badUserReduser.userList;
	return userList.find((item) => item.uid === id);
};

export default badUserReduserSlice.reducer;
