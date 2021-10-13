import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface User {
	uid: string;
	first_name: string;
	last_name: string;
	username: string;
}

export interface RaitingUser extends User {
	raiting: number;
}

export type UserList = {
	userList: User[];
	page: number;
};

export type RaitingUserList = {
	userList: RaitingUser[];
};
