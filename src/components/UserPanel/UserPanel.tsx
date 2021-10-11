import style from "./UserPanel.module.css";

import { Button, List } from "antd";
import { LeftOutlined, RightOutlined, SyncOutlined } from "@ant-design/icons";
import { userList } from "../../store/redusers/userReduser";
import { useAppDispatch, useAppSelector } from "../../store/types";
import { getNewUsers } from "../../store/actions/userActions";

const UserPanel = () => {
	const dispatch = useAppDispatch();

	const users = useAppSelector(userList);

	const getNewUsersBtnHandler = () => {
		dispatch(getNewUsers(10));
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
					<List.Item key={item.id}>
						<div>{item.id + " - " + item.name}</div>
					</List.Item>
				)}
			></List>
			<div className={style.pageNavigation}>
				<Button icon={<LeftOutlined />}></Button>
				<p className={style.pageNumber}>1</p>
				<Button icon={<RightOutlined />}></Button>
			</div>
		</div>
	);
};

export default UserPanel;
