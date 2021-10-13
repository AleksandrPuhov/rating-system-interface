import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const stateTabPanelReduserSlice = createSlice({
	name: "stateTabPanelReduser",
	initialState: {
		tubNum: "1",
	},
	reducers: {
		change: (state, action) => {
			state.tubNum = action.payload;
		},
	},
});

export const { change } = stateTabPanelReduserSlice.actions;

export const selectTab = (state: RootState) =>
	state.stateTabPanelReduser.tubNum;

export default stateTabPanelReduserSlice.reducer;
