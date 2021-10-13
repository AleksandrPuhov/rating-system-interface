import { changeStateTab } from "../../../store/actions/stateTabActions";
import {
	moveUserToBadList,
	moveUserToGoodList,
} from "../../../store/actions/userActions";
import { TabNum } from "../../../store/constants";
import { getUserById } from "../../../store/redusers/userReduser";
import { useAppDispatch, useAppSelector } from "../../../store/types";
import UserItem from "../../UserItem/UserItem";

const UserPanelItem = ({ uid }: { uid: string }) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(getUserById(uid));

	const plusBtnHandler = () => {
		if (user !== undefined) {
			dispatch(moveUserToGoodList(uid));
			dispatch(changeStateTab(TabNum.Good));
		}
	};
	const minusBtnHandler = () => {
		if (user !== undefined) {
			dispatch(moveUserToBadList(uid));
			dispatch(changeStateTab(TabNum.Bad));
		}
	};

	return user === undefined ? null : (
		<UserItem
			first_name={user.first_name}
			last_name={user.last_name}
			username={user.username}
			raiting={0}
			//showRaiting={true}
			plusBtnHandler={() => plusBtnHandler()}
			minusBtnHandler={() => minusBtnHandler()}
		/>
	);
};

export default UserPanelItem;
