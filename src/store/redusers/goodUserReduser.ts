import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const goodUserReduserSlice = createSlice({
	name: "goodUserReduser",
	initialState: {
		userList: [
			{ id: 1, raiting: "good" },
			{ id: 2, raiting: "good" },
		],
	},
	reducers: {},
});

export const goodUserList = (state: RootState) =>
	state.goodUserReduser.userList;

export default goodUserReduserSlice.reducer;
