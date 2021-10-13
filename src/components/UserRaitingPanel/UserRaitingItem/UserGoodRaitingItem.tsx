import { getGoodUserById } from "../../../store/redusers/goodUserReduser";
import { useAppDispatch, useAppSelector } from "../../../store/types";
import UserItem from "../../UserItem/UserItem";

const UserGoodRaitingItem = ({ uid }: { uid: string }) => {
	const dispatch = useAppDispatch();

	const user = useAppSelector(getGoodUserById(uid));

	const plusBtnHandler = () => {
		if (user !== undefined) {
			// dispatch(moveUserToGoodList(uid));
		}
	};
	const minusBtnHandler = () => {
		if (user !== undefined) {
			// dispatch(moveUserToBadList(uid));
		}
	};

	return user === undefined ? null : (
		<UserItem
			first_name={user.first_name}
			last_name={user.last_name}
			username={user.username}
			raiting={user.raiting}
			showRaiting={true}
			plusBtnHandler={() => plusBtnHandler()}
			minusBtnHandler={() => minusBtnHandler()}
		/>
	);
};

export default UserGoodRaitingItem;
