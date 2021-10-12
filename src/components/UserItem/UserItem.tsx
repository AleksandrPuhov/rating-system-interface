import style from "./UserItem.module.css";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

type UserItemType = {
	first_name: string;
	last_name: string;
	username: string;
	raiting: number;
	showRaiting?: boolean;
	plusBtnHandler: () => void;
	minusBtnHandler: () => void;
};

const UserItem = ({
	first_name,
	last_name,
	username,
	raiting,
	showRaiting = false,
	plusBtnHandler,
	minusBtnHandler,
}: UserItemType) => {
	return (
		<>
			<div>
				<p>{"username: " + username}</p>
				<p>{"Name:" + first_name + " " + last_name}</p>
			</div>
			<div className={style.btnsPanel}>
				<Button
					className={style.btnPlus}
					shape="circle"
					icon={<PlusOutlined />}
					onClick={plusBtnHandler}
				></Button>
				{showRaiting ? <p className={style.pageNumber}>{raiting}</p> : null}
				<Button
					className={style.btnMinus}
					shape="circle"
					icon={<MinusOutlined />}
					onClick={minusBtnHandler}
				></Button>
			</div>
		</>
	);
};

export default UserItem;
