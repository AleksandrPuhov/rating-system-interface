import { TabNum } from "../constants";
import {
	deleteUserByIndex,
	raitingMinus,
	raitingPlus,
} from "../redusers/badUserReduser";
import { addNewGoodUser } from "../redusers/goodUserReduser";
import { addNewUser } from "../redusers/userReduser";
import { AppDispatch, RootState } from "../store";
import { changeStateTab } from "./stateTabActions";

export const plusRaitingToBadUser =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().badUserReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);
		if (index >= 0) {
			const raiting = userList[index].raiting;

			if (raiting === 0) {
				dispatch(addNewGoodUser(userList[index]));
				dispatch(deleteUserByIndex(index));
				dispatch(changeStateTab(TabNum.Bad));
			} else {
				dispatch(raitingPlus(index));
			}
		}
	};

export const minusRaitingToBadUser =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().badUserReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);
		if (index >= 0) {
			dispatch(raitingMinus(index));
		}
	};

export const deleteBadUser =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().badUserReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);
		if (index >= 0) {
			const { uid, first_name, last_name, username } = userList[index];

			dispatch(addNewUser({ uid, first_name, last_name, username }));
			dispatch(deleteUserByIndex(index));
		}
	};
