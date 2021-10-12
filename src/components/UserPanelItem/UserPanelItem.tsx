import { getUserById } from "../../store/redusers/userReduser";
import { useAppSelector } from "../../store/types";
import UserItem from "../UserItem/UserItem";

const UserPanelItem = ({ uid }: { uid: string }) => {
	const user = useAppSelector(getUserById(uid));

	const plusBtnHandler = () => {
		if (user !== undefined) {
			console.log(user.first_name);
		}
	};
	const minusBtnHandler = () => {
		console.log("asdasd");
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
