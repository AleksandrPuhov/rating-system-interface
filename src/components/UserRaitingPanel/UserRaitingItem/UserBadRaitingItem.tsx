import {
	deleteBadUser,
	minusRaitingToBadUser,
	plusRaitingToBadUser,
} from "../../../store/actions/badUserAction";
import { showAddBanModal } from "../../../store/actions/stateUIActions";
import { getBadUserById } from "../../../store/redusers/badUserReduser";
import { useAppDispatch, useAppSelector } from "../../../store/types";
import UserItem from "../../UserItem/UserItem";

const UserBadRaitingItem = ({ uid }: { uid: string }) => {
	const dispatch = useAppDispatch();

	const user = useAppSelector(getBadUserById(uid));

	const plusBtnHandler = () => {
		if (user !== undefined) {
			dispatch(plusRaitingToBadUser(uid));
		}
	};
	const minusBtnHandler = () => {
		if (user !== undefined) {
			if (user.raiting <= -5) {
				dispatch(showAddBanModal(uid));
			} else {
				dispatch(minusRaitingToBadUser(uid));
			}
		}
	};
	const deleteBtnHandler = () => {
		dispatch(deleteBadUser(uid));
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
			deleteBtnHandler={() => deleteBtnHandler()}
		/>
	);
};

export default UserBadRaitingItem;
