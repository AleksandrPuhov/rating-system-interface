import { fireEvent, screen } from "@testing-library/react";
import { TabNum } from "../../store/constants";
import renderWithRedux from "../../util/renderWithRedux";
import UserPanel from "./UserPanel";

describe("UserPanel", () => {
	const preloadedState = {
		goodUserReduser: {
			userList: [
				{
					uid: "qqqq",
					first_name: "wwww",
					last_name: "eeee",
					username: "rrrr",
					raiting: 1,
				},
			],
		},
		badUserReduser: {
			userList: [
				{
					uid: "tttt",
					first_name: "yyyy",
					last_name: "uuuu",
					username: "iiii",
					raiting: -1,
				},
			],
		},
		userReduser: {
			userList: [
				{
					uid: "oooo",
					first_name: "pppp",
					last_name: "aaaa",
					username: "ssss",
				},
			],
			page: 1,
		},
		stateUIReduser: {
			tabNum: TabNum.Good,
			modalShowState: false,
			modalShowGood: false,
			modalUid: "",
		},
	};

	Object.defineProperty(window, "matchMedia", {
		value: () => {
			return {
				matches: false,
				addListener: () => {},
				removeListener: () => {},
			};
		},
	});

	test("render UserPanel with inital state", () => {
		renderWithRedux(<UserPanel />, { preloadedState });

		expect(screen.getByText(/pppp/i)).toBeInTheDocument();
		expect(screen.getByText(/1/i)).toBeInTheDocument();
	});

	test("click on +", () => {
		const { store } = renderWithRedux(<UserPanel />, { preloadedState });

		const btnPlus = screen.getByTestId("btnPlusTest");

		expect(screen.getByText(/pppp/i)).toBeInTheDocument();

		fireEvent.click(btnPlus);

		expect(screen.queryByText(/pppp/i)).not.toBeInTheDocument();
		expect(store.getState().goodUserReduser.userList.length).toEqual(2);
	});

	test("click on -", () => {
		const { store } = renderWithRedux(<UserPanel />, { preloadedState });

		const btnMinus = screen.getByTestId("btnMinusTest");

		expect(screen.getByText(/pppp/i)).toBeInTheDocument();

		fireEvent.click(btnMinus);

		expect(screen.queryByText(/pppp/i)).not.toBeInTheDocument();
		expect(store.getState().badUserReduser.userList.length).toEqual(2);
	});

	test("test get data from API", async () => {
		const { store } = renderWithRedux(<UserPanel />, { preloadedState });

		const btnNew = screen.getByTestId("btnNewTest");
		const btnNext = screen.getByTestId("btnNextTest");

		expect(screen.getByText(/pppp/i)).toBeInTheDocument();
		expect(screen.getByText(/1/i)).toBeInTheDocument();

		fireEvent.click(btnNext);
		await screen.findByText(/2/i);

		fireEvent.click(btnNew);
		const page1 = await screen.findByText(/1/i);

		expect(page1).toBeInTheDocument();
		expect(store.getState().userReduser.userList.length).toEqual(3);

		fireEvent.click(btnNext);
		const page2 = await screen.findByText(/2/i);

		expect(store.getState().userReduser.userList.length).toEqual(6);
		expect(page2).toBeInTheDocument();
	});
});
