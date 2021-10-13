import { change, modalHidden, modalShow } from "../redusers/stateUIReduser";
import { AppDispatch, RootState } from "../store";
import { deleteBadUser } from "./badUserAction";
import { deleteGoodUser } from "./goodUserAction";

export const changeStateTab =
	(num: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(change(num));
	};

export const closeModal =
	() => (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(modalHidden(true));
	};

export const showAddBonusModal =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(
			modalShow({
				modalShowGood: true,
				modalUid: uid,
			})
		);
	};

export const showAddBanModal =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(
			modalShow({
				modalShowGood: false,
				modalUid: uid,
			})
		);
	};

export const getUserInfoForModal =
	() => (dispatch: AppDispatch, getState: () => RootState) => {
		const modalType = getState().stateUIReduser.modalShowGood;
		const uid = getState().stateUIReduser.modalUid;
		const userList = modalType
			? getState().goodUserReduser.userList
			: getState().badUserReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);

		if (index < 0) {
			return null;
		}

		return userList[index];
	};

export const clickModalOK =
	() => (dispatch: AppDispatch, getState: () => RootState) => {
		const modalType = getState().stateUIReduser.modalShowGood;
		const uid = getState().stateUIReduser.modalUid;
		if (modalType) {
			dispatch(deleteGoodUser(uid));
		} else {
			dispatch(deleteBadUser(uid));
		}
	};
