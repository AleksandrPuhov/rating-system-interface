import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RaitingUserList } from "../types";

const initialState: RaitingUserList = {
	userList: [],
};

export const goodUserReduserSlice = createSlice({
	name: "goodUserReduser",
	initialState,
	reducers: {
		addNewGoodUser: (state, action) => {
			state.userList.push({ ...action.payload, raiting: 1 });
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

export const { addNewGoodUser, raitingPlus, raitingMinus, deleteUserByIndex } =
	goodUserReduserSlice.actions;

export const goodUserList = (state: RootState) =>
	state.goodUserReduser.userList;

export const getGoodUserById = (id: string) => (state: RootState) => {
	const userList = state.goodUserReduser.userList;
	return userList.find((item) => item.uid === id);
};

export default goodUserReduserSlice.reducer;
