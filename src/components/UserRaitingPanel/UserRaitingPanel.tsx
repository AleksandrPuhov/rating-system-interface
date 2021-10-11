import { useState } from "react";

import { List, Tabs } from "antd";

const UserRaitingPanel = () => {
	const { TabPane } = Tabs;

	const [activeKeyState, activeKeySetState] = useState("1");

	const onChangeTab = (activeKey: string) => {
		activeKeySetState(activeKey);
	};

	return (
		<Tabs type="card" activeKey={activeKeyState} onChange={onChangeTab}>
			<TabPane tab="Good Raiting Users" key="1">
				<List
					dataSource={[
						{ id: 1, raiting: "good" },
						{ id: 2, raiting: "good" },
					]}
					renderItem={(item) => (
						<List.Item key={item.id}>
							<div>{item.id + " - " + item.raiting}</div>
						</List.Item>
					)}
				></List>
			</TabPane>
			<TabPane tab="Bad Raiting Users" key="2">
				<List
					dataSource={[
						{ id: 1, raiting: "bad" },
						{ id: 2, raiting: "bad" },
					]}
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
