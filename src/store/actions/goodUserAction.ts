import { TabNum } from "../constants";
import { addNewBadUser } from "../redusers/badUserReduser";
import {
	deleteUserByIndex,
	raitingMinus,
	raitingPlus,
} from "../redusers/goodUserReduser";
import { addNewUser } from "../redusers/userReduser";
import { AppDispatch, RootState } from "../store";
import { changeStateTab } from "./stateTabActions";

export const plusRaitingToGoodUser =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().goodUserReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);
		if (index >= 0) {
			dispatch(raitingPlus(index));
		}
	};

export const minusRaitingToGoodUser =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().goodUserReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);
		if (index >= 0) {
			const raiting = userList[index].raiting;

			if (raiting === 0) {
				dispatch(addNewBadUser(userList[index]));
				dispatch(deleteUserByIndex(index));
				dispatch(changeStateTab(TabNum.Bad));
			} else {
				dispatch(raitingMinus(index));
			}
		}
	};

export const deleteGoodUser =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().goodUserReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);
		if (index >= 0) {
			const { uid, first_name, last_name, username } = userList[index];

			dispatch(addNewUser({ uid, first_name, last_name, username }));
			dispatch(deleteUserByIndex(index));
		}
	};
