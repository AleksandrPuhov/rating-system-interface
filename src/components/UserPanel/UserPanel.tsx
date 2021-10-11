import style from "./UserPanel.module.css";

import { Button, List } from "antd";
import { LeftOutlined, RightOutlined, SyncOutlined } from "@ant-design/icons";

const UserPanel = () => {
	return (
		<div className={style.UserPanel}>
			<Button
				shape="circle"
				icon={<SyncOutlined />}
				size="large"
				className={style.btnReload}
			/>
			<List
				dataSource={[
					{ id: 1, name: "Name User" },
					{ id: 2, name: "Name User" },
				]}
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
