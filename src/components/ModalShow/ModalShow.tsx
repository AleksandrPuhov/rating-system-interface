import { Modal } from "antd";
import {
	clickModalOK,
	closeModal,
	getUserInfoForModal,
} from "../../store/actions/stateUIActions";
import {
	stateModalShow,
	typeModalShow,
} from "../../store/redusers/stateUIReduser";
import { useAppDispatch, useAppSelector } from "../../store/types";

const ModalShow = () => {
	const dispatch = useAppDispatch();

	const isModalVisible = useAppSelector(stateModalShow);
	const typeModa = useAppSelector(typeModalShow);

	const user = dispatch(getUserInfoForModal());

	const handleOk = () => {
		dispatch(clickModalOK());
		dispatch(closeModal());
	};

	const handleCancel = () => {
		dispatch(closeModal());
	};

	return (
		<Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
			{user === null ? null : typeModa ? (
				<p>Нужно вознаградить {user.username}. Сделать это?</p>
			) : (
				<p>Пора забанить {user.username}. Сделать это?</p>
			)}
		</Modal>
	);
};

export default ModalShow;
