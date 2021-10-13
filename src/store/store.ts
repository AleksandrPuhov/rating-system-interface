import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import badUserReduser from "./redusers/badUserReduser";
import goodUserReduser from "./redusers/goodUserReduser";
import stateUIReduser from "./redusers/stateUIReduser";
import userReduser from "./redusers/userReduser";

export const store = configureStore({
	reducer: {
		goodUserReduser,
		badUserReduser,
		userReduser,
		stateUIReduser,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
