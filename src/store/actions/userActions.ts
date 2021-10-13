import { AppDispatch, RootState } from "../store";

import axios from "../axios-base";

import {
	deleteUserByIndex,
	reloadUserList,
	setUserListAndPage,
} from "../redusers/userReduser";
import { addNewGoodUser } from "../redusers/goodUserReduser";
import { addNewBadUser } from "../redusers/badUserReduser";

//'https://random-data-api.com/api/users/random_user?size=3'

export const getNewUsersFromAPI = async (page: number) => {
	try {
		const response = await axios.get("users/random_user?size=3&page=" + page);

		if (!response.data) throw new Error("No data from random-data-api");

		const getUserList = response.data as Array<any>;

		const userList = getUserList.map((person: any) => {
			return {
				uid: person.uid,
				first_name: person.first_name,
				last_name: person.last_name,
				username: person.username,
			};
		});
		return userList;
	} catch (error) {
		console.error(error);
	}
};

export const reloadUsers =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		const newList = await getNewUsersFromAPI(1);
		dispatch(reloadUserList(newList));
	};

export const getNexPage =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		const page = getState().userReduser.page;
		const newList = await getNewUsersFromAPI(page + 1);
		dispatch(setUserListAndPage({ userList: newList, page: page + 1 }));
	};

export const moveUserToGoodList =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().userReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);

		if (index >= 0) {
			dispatch(addNewGoodUser(userList[index]));
			dispatch(deleteUserByIndex(index));
		}
	};

export const moveUserToBadList =
	(uid: string) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().userReduser.userList;
		const index = userList.findIndex((el) => el.uid === uid);

		if (index >= 0) {
			dispatch(addNewBadUser(userList[index]));
			dispatch(deleteUserByIndex(index));
		}
	};
