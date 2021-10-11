import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const badUserReduserSlice = createSlice({
	name: "badUserReduser",
	initialState: {
		userList: [
			{ id: 1, raiting: "bad" },
			{ id: 2, raiting: "bad" },
		],
	},
	reducers: {},
});

export const badUserList = (state: RootState) => state.badUserReduser.userList;

export default badUserReduserSlice.reducer;
