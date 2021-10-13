import { change } from "../redusers/stateTabPanelReduser";
import { AppDispatch, RootState } from "../store";

export const changeStateTab =
	(num: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(change(num));
	};
