import style from "./UserPanel.module.css";

import { Button, List } from "antd";
import { RightOutlined, SyncOutlined } from "@ant-design/icons";
import { userList, usersPage } from "../../store/redusers/userReduser";
import { useAppDispatch, useAppSelector } from "../../store/types";
import { getNexPage, reloadUsers } from "../../store/actions/userActions";
import { useEffect } from "react";
import UserPanelItem from "./UserPanelItem/UserPanelItem";

const UserPanel = () => {
	const dispatch = useAppDispatch();

	const users = useAppSelector(userList);
	const page = useAppSelector(usersPage);

	useEffect(() => {
		dispatch(reloadUsers());
	}, []);

	const getNewUsersBtnHandler = () => {
		dispatch(reloadUsers());
	};

	const nextBtnHandler = () => {
		dispatch(getNexPage());
	};

	return (
		<div className={style.UserPanel}>
			<div className={style.pageNavigation}>
				<Button
					data-testid="btnNewTest"
					shape="circle"
					icon={<SyncOutlined />}
					size="large"
					className={style.btnReload}
					onClick={getNewUsersBtnHandler}
				/>
				<p className={style.pageNumber}>{page}</p>
				<Button
					data-testid="btnNextTest"
					shape="circle"
					size="large"
					icon={<RightOutlined />}
					onClick={nextBtnHandler}
				></Button>
			</div>
			<div className={style.userList}>
				<List
					dataSource={users}
					renderItem={(item) => (
						<List.Item key={item.uid}>
							<UserPanelItem uid={item.uid} />
						</List.Item>
					)}
				></List>
			</div>
		</div>
	);
};

export default UserPanel;
