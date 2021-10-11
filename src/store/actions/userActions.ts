import { AppDispatch, RootState } from "../store";

import axios from "../axios-base";

import userReduser from "../redusers/userReduser";
import { User } from "../types";

//'https://random-data-api.com/api/users/random_user?size=3'

export const getNewUsersFromAPI = async (size: number) => {
	try {
		const response = await axios.get("users/random_user?size=" + size);

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

		console.log(userList);
	} catch (error) {
		console.error(error);
	}
};

export const getUsersFromListByPage =
	(page: number) => (dispatch: AppDispatch, getState: () => RootState) => {
		const userList = getState().userReduser.userList;
		const userOnPage = getState().userReduser.userOnPage;

		let userListPage: User[] = [];

		if (page > 0 && userOnPage * (page - 1) < userList.length) {
			userListPage = userList.filter(
				(user, index) =>
					index >= userOnPage * (page - 1) &&
					index >= userOnPage * (page - 1) + userOnPage
			);
		}

		return userListPage;
	};
