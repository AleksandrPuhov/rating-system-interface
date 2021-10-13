import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RaitingUserList } from "../types";

const initialState: RaitingUserList = {
	userList: [],
};

// uid: string;
// first_name: string;
// last_name: string;
// username: string;
// raiting: number;

export const goodUserReduserSlice = createSlice({
	name: "goodUserReduser",
	initialState,
	reducers: {
		addNewGoodUser: (state, action) => {
			state.userList.push({ ...action.payload, raiting: 1 });
		},
	},
});

export const { addNewGoodUser } = goodUserReduserSlice.actions;

export const goodUserList = (state: RootState) =>
	state.goodUserReduser.userList;

export const getGoodUserById = (id: string) => (state: RootState) => {
	const userList = state.goodUserReduser.userList;
	return userList.find((item) => item.uid === id);
};

export default goodUserReduserSlice.reducer;
