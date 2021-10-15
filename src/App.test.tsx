import App from "./App";
import renderWithRedux from "./util/renderWithRedux";

describe("App", () => {
	Object.defineProperty(window, "matchMedia", {
		value: () => {
			return {
				matches: false,
				addListener: () => {},
				removeListener: () => {},
			};
		},
	});

	test("render App", () => {
		renderWithRedux(<App />);
	});
});
