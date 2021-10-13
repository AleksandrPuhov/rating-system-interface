import {
	deleteGoodUser,
	minusRaitingToGoodUser,
	plusRaitingToGoodUser,
} from "../../../store/actions/goodUserAction";
import { showAddBonusModal } from "../../../store/actions/stateUIActions";
import { getGoodUserById } from "../../../store/redusers/goodUserReduser";
import { useAppDispatch, useAppSelector } from "../../../store/types";
import UserItem from "../../UserItem/UserItem";

const UserGoodRaitingItem = ({ uid }: { uid: string }) => {
	const user = useAppSelector(getGoodUserById(uid));

	const dispatch = useAppDispatch();

	const plusBtnHandler = () => {
		if (user !== undefined) {
			if (user.raiting >= 5) {
				dispatch(showAddBonusModal(uid));
			} else {
				dispatch(plusRaitingToGoodUser(uid));
			}
		}
	};
	const minusBtnHandler = () => {
		if (user !== undefined) {
			dispatch(minusRaitingToGoodUser(uid));
		}
	};

	const deleteBtnHandler = () => {
		dispatch(deleteGoodUser(uid));
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

export default UserGoodRaitingItem;
