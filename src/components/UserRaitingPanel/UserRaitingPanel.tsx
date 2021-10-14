import { List, Tabs } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/types";
import { goodUserList } from "../../store/redusers/goodUserReduser";
import { badUserList } from "../../store/redusers/badUserReduser";
import UserGoodRaitingItem from "./UserRaitingItem/UserGoodRaitingItem";
import UserBadRaitingItem from "./UserRaitingItem/UserBadRaitingItem";
import { selectTab } from "../../store/redusers/stateUIReduser";
import { changeStateTab } from "../../store/actions/stateUIActions";
import { TabNum } from "../../store/constants";

import style from "./UserRaitingPanel.module.css";

const UserRaitingPanel = () => {
	const { TabPane } = Tabs;

	const activeKeyState = useAppSelector(selectTab);
	const goodUsers = useAppSelector(goodUserList);
	const badUsers = useAppSelector(badUserList);

	const dispatch = useAppDispatch();

	const onChangeTab = (activeKey: string) => {
		dispatch(changeStateTab(activeKey));
	};

	return (
		<Tabs type="card" activeKey={activeKeyState} onChange={onChangeTab}>
			<TabPane tab="Good Raiting Users" key={TabNum.Good}>
				<div className={style.userList}>
					<List
						dataSource={goodUsers}
						renderItem={(item) => (
							<List.Item key={item.uid} className={style.userListItem}>
								<UserGoodRaitingItem uid={item.uid} />
							</List.Item>
						)}
					></List>
				</div>
			</TabPane>
			<TabPane tab="Bad Raiting Users" key={TabNum.Bad}>
				<div className={style.userList}>
					<List
						dataSource={badUsers}
						renderItem={(item) => (
							<List.Item key={item.uid} className={style.userListItem}>
								<UserBadRaitingItem uid={item.uid} />
							</List.Item>
						)}
					></List>
				</div>
			</TabPane>
		</Tabs>
	);
};

export default UserRaitingPanel;
