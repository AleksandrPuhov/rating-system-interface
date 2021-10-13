import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserList } from "../types";

const initialState: UserList = {
	userList: [],
	page: 1,
};

export const userReduserSlice = createSlice({
	name: "userReduser",
	initialState,
	reducers: {
		reloadUserList: (state, action) => {
			state.userList = action.payload;
			state.page = 1;
		},
		setUserListAndPage: (state, action) => {
			state.userList.push(...action.payload.userList);
			state.page = action.payload.page;
		},
		deleteUserByIndex: (state, action) => {
			state.userList.splice(action.payload, 1);
		},
	},
});

export const { reloadUserList, setUserListAndPage, deleteUserByIndex } =
	userReduserSlice.actions;

export const userList = (state: RootState) => state.userReduser.userList;

export const usersPage = (state: RootState) => state.userReduser.page;

export const getUserById = (id: string) => (state: RootState) => {
	const userList = state.userReduser.userList;
	return userList.find((item) => item.uid === id);
};

export default userReduserSlice.reducer;
