import { useState } from "react";

import { List, Tabs } from "antd";
import { useAppSelector } from "../../store/types";
import { goodUserList } from "../../store/redusers/goodUserReduser";
import { badUserList } from "../../store/redusers/badUserReduser";

const UserRaitingPanel = () => {
	const { TabPane } = Tabs;

	const [activeKeyState, activeKeySetState] = useState("1");

	const goodUsers = useAppSelector(goodUserList);
	const badUsers = useAppSelector(badUserList);

	const onChangeTab = (activeKey: string) => {
		activeKeySetState(activeKey);
	};

	return (
		<Tabs type="card" activeKey={activeKeyState} onChange={onChangeTab}>
			<TabPane tab="Good Raiting Users" key="1">
				<List
					dataSource={goodUsers}
					renderItem={(item) => (
						<List.Item key={item.id}>
							<div>{item.id + " - " + item.raiting}</div>
						</List.Item>
					)}
				></List>
			</TabPane>
			<TabPane tab="Bad Raiting Users" key="2">
				<List
					dataSource={badUsers}
					renderItem={(item) => (
						<List.Item key={item.id}>
							<div>{item.id + " - " + item.raiting}</div>
						</List.Item>
					)}
				></List>
			</TabPane>
		</Tabs>
	);
};

export default UserRaitingPanel;
