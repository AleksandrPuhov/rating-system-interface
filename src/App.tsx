import "./App.css";

import { Card } from "antd";
import UserRaitingPanel from "./components/UserRaitingPanel/UserRaitingPanel";
import UserPanel from "./components/UserPanel/UserPanel";
import ModalShow from "./components/ModalShow/ModalShow";

const App = () => {
	return (
		<div className="App">
			<Card className="App-left">
				<UserPanel />
			</Card>
			<Card className="App-right">
				<UserRaitingPanel />
			</Card>
			<ModalShow />
		</div>
	);
};

export default App;
