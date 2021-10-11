import React from "react";
import "./App.css";

import { Card } from "antd";
import UserRaitingPanel from "./components/UserRaitingPanel/UserRaitingPanel";
import UserPanel from "./components/UserPanel/UserPanel";

const App = () => {
	return (
		<div className="App">
			<Card className="App-left">
				<UserPanel />
			</Card>
			<Card className="App-right">
				<UserRaitingPanel />
			</Card>
		</div>
	);
};

export default App;
