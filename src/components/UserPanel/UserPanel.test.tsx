import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import badUserReduser from "../../store/redusers/badUserReduser";
import goodUserReduser from "../../store/redusers/goodUserReduser";
import stateUIReduser from "../../store/redusers/stateUIReduser";
import userReduser from "../../store/redusers/userReduser";
import renderWithRedux from "../../util/renderWithRedux";
import UserPanel from "./UserPanel";

describe("UserPanel", () => {
	// beforeAll(() => {
	// 	Object.defineProperty(window, "matchMedia", {
	// 		value: () => {
	// 			return {
	// 				matches: false,
	// 				addListener: () => {},
	// 				removeListener: () => {},
	// 			};
	// 		},
	// 	});
	// });
	test("render UserPanel with inital state", () => {
		renderWithRedux(<UserPanel />);

		// const tab1 = screen.getByText(/Good Raiting Users/i);
		// const tab2 = screen.getByText(/Bad Raiting Users/i);
		// expect(tab1).toHaveAttribute("aria-selected", true);
	});
});
