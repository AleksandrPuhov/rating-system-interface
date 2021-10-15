import { ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import goodUserReduser from "../store/redusers/goodUserReduser";
import badUserReduser from "../store/redusers/badUserReduser";
import userReduser from "../store/redusers/userReduser";
import stateUIReduser from "../store/redusers/stateUIReduser";

const renderWithRedux = (
	ui: ReactElement,
	{
		preloadedState,
		store = configureStore({
			reducer: {
				goodUserReduser,
				badUserReduser,
				userReduser,
				stateUIReduser,
			},
			preloadedState,
		}),
		...renderOptions
	}: any = {}
) => {
	const Wrapper: React.FC<{}> = ({ children }) => {
		return <Provider store={store}>{children}</Provider>;
	};
	return { ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), store };
};

export default renderWithRedux;
