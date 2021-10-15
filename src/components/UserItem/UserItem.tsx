import style from "./UserItem.module.css";

import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

type UserItemType = {
	first_name: string;
	last_name: string;
	username: string;
	raiting: number;
	showRaiting?: boolean;
	plusBtnHandler: () => void;
	minusBtnHandler: () => void;
	deleteBtnHandler?: () => void;
};

const UserItem = ({
	first_name,
	last_name,
	username,
	raiting,
	showRaiting = false,
	plusBtnHandler,
	minusBtnHandler,
	deleteBtnHandler,
}: UserItemType) => {
	return (
		<>
			<div>
				<p>{"username: " + username}</p>
				<p>{"Name:" + first_name + " " + last_name}</p>
			</div>
			<div className={style.btnsPanel}>
				<Button
					data-testid="btnPlusTest"
					className={style.btnPlus}
					shape="circle"
					icon={<PlusOutlined />}
					onClick={plusBtnHandler}
				></Button>
				{showRaiting ? <p className={style.pageNumber}>{raiting}</p> : null}
				<Button
					data-testid="btnMinusTest"
					className={style.btnMinus}
					shape="circle"
					icon={<MinusOutlined />}
					onClick={minusBtnHandler}
				></Button>
				{showRaiting && raiting === 0 ? (
					<Button
						data-testid="btnDeleteTest"
						className={style.btnDelete}
						shape="circle"
						size="large"
						icon={<DeleteOutlined />}
						onClick={deleteBtnHandler}
					></Button>
				) : null}
			</div>
		</>
	);
};

export default UserItem;
