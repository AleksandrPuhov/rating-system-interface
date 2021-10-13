import {
	deleteGoodUser,
	minusRaitingToGoodUser,
	plusRaitingToGoodUser,
} from "../../../store/actions/goodUserAction";
import { getGoodUserById } from "../../../store/redusers/goodUserReduser";
import { useAppDispatch, useAppSelector } from "../../../store/types";
import UserItem from "../../UserItem/UserItem";

const UserGoodRaitingItem = ({ uid }: { uid: string }) => {
	const user = useAppSelector(getGoodUserById(uid));

	// const [zeroRaiting, setZeroRaiting] = useState(user?.raiting === 0);

	const dispatch = useAppDispatch();

	const plusBtnHandler = () => {
		if (user !== undefined) {
			dispatch(plusRaitingToGoodUser(uid));
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

	// if (user.raiting === 0) {
	// 	setZeroRaiting(true);
	// } else if (user.raiting === 5) {

	// }

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
