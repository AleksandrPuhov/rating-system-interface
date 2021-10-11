import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserList } from "../types";

const initialState: UserList = {
	userList: [],
	userOnPage: 10,
};

export const userReduserSlice = createSlice({
	name: "userReduser",
	initialState,
	reducers: {},
});

export const userList = (state: RootState) => state.userReduser.userList;

export const userOnPage = (state: RootState) => state.userReduser.userOnPage;

export default userReduserSlice.reducer;
