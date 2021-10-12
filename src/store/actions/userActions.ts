import { AppDispatch, RootState } from "../store";

import axios from "../axios-base";

import { reloadUserList, setUserListAndPage } from "../redusers/userReduser";

//'https://random-data-api.com/api/users/random_user?size=3'

export const getNewUsersFromAPI = async (page: number) => {
	try {
		const response = await axios.get("users/random_user?size=10&page=" + page);

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

export const getPrevPage =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		const page = getState().userReduser.page;

		if (page > 1) {
			const newList = await getNewUsersFromAPI(page - 1);
			dispatch(setUserListAndPage({ userList: newList, page: page - 1 }));
		}
	};

export const getNexPage =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		const page = getState().userReduser.page;
		const newList = await getNewUsersFromAPI(page + 1);
		dispatch(setUserListAndPage({ userList: newList, page: page + 1 }));
	};
