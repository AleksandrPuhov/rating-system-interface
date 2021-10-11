import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const userReduserSlice = createSlice({
	name: "userReduser",
	initialState: {
		userList: [
			{ id: 1, name: "Name User" },
			{ id: 2, name: "Name User" },
		],
	},
	reducers: {},
});

export const userList = (state: RootState) => state.userReduser.userList;

export default userReduserSlice.reducer;
