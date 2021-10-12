import style from "./UserPanel.module.css";

import { Button, List } from "antd";
import { LeftOutlined, RightOutlined, SyncOutlined } from "@ant-design/icons";
import { userList, usersPage } from "../../store/redusers/userReduser";
import { useAppDispatch, useAppSelector } from "../../store/types";
import {
	getNexPage,
	getPrevPage,
	reloadUsers,
} from "../../store/actions/userActions";
import { useEffect } from "react";

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

	const prevBtnHandler = () => {
		dispatch(getPrevPage());
	};
	const nextBtnHandler = () => {
		dispatch(getNexPage());
	};

	return (
		<div className={style.UserPanel}>
			<Button
				shape="circle"
				icon={<SyncOutlined />}
				size="large"
				className={style.btnReload}
				onClick={getNewUsersBtnHandler}
			/>
			<List
				dataSource={users}
				renderItem={(item) => (
					<List.Item key={item.uid}>
						<div>
							{item.first_name + " - " + item.last_name + " - " + item.username}
						</div>
					</List.Item>
				)}
			></List>
			<div className={style.pageNavigation}>
				<Button icon={<LeftOutlined />} onClick={prevBtnHandler}></Button>
				<p className={style.pageNumber}>{page}</p>
				<Button icon={<RightOutlined />} onClick={nextBtnHandler}></Button>
			</div>
		</div>
	);
};

export default UserPanel;
