import { fireEvent, screen } from "@testing-library/react";
import { TabNum } from "../../store/constants";
import renderWithRedux from "../../util/renderWithRedux";
import UserRaitingPanel from "./UserRaitingPanel";

describe("UserRaitingPanel", () => {
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

	test("render UserRaitingPanel with inital state", () => {
		renderWithRedux(<UserRaitingPanel />, { preloadedState });
		const tab1 = screen.getByText(/Good Raiting Users/i);
		const tab2 = screen.getByText(/Bad Raiting Users/i);

		expect(tab1).toHaveAttribute("aria-selected", "true");
		expect(tab2).toHaveAttribute("aria-selected", "false");

		fireEvent.click(tab2);

		expect(tab1).toHaveAttribute("aria-selected", "false");
		expect(tab2).toHaveAttribute("aria-selected", "true");

		expect(screen.getByText(/wwww/i)).toBeInTheDocument();
		expect(screen.getByText(/yyyy/i)).toBeInTheDocument();
	});

	test("Click on + and - with good user", () => {
		renderWithRedux(<UserRaitingPanel />, { preloadedState });

		const tab1 = screen.getByText(/Good Raiting Users/i);
		const tab2 = screen.getByText(/Bad Raiting Users/i);

		expect(tab1).toHaveAttribute("aria-selected", "true");
		expect(tab2).toHaveAttribute("aria-selected", "false");

		const btnPlusList = screen.getAllByTestId("btnPlusTest");
		const btnMinusList = screen.getAllByTestId("btnMinusTest");

		fireEvent.click(btnPlusList[0]);

		expect(screen.getByText(/2/i)).toBeInTheDocument();

		fireEvent.click(btnMinusList[0]);

		expect(screen.getByText(/1/i)).toBeInTheDocument();
		expect(screen.queryByTestId("btnDeleteTest")).not.toBeInTheDocument();

		fireEvent.click(btnMinusList[0]);

		expect(screen.getByText(/0/i)).toBeInTheDocument();
		expect(screen.getAllByTestId("btnDeleteTest")[0]).toBeInTheDocument();

		fireEvent.click(btnMinusList[0]);

		expect(screen.getAllByText(/-1/i)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/-1/i)[1]).toBeInTheDocument();

		expect(screen.getByText(/wwww/i)).toBeInTheDocument();
		expect(screen.getByText(/yyyy/i)).toBeInTheDocument();

		expect(tab1).toHaveAttribute("aria-selected", "false");
		expect(tab2).toHaveAttribute("aria-selected", "true");
	});

	test("Click on + and - with bad user", () => {
		renderWithRedux(<UserRaitingPanel />, { preloadedState });

		const tab1 = screen.getByText(/Good Raiting Users/i);
		const tab2 = screen.getByText(/Bad Raiting Users/i);

		expect(tab1).toHaveAttribute("aria-selected", "true");
		expect(tab2).toHaveAttribute("aria-selected", "false");

		fireEvent.click(tab2);

		const btnPlusList = screen.getAllByTestId("btnPlusTest");
		const btnMinusList = screen.getAllByTestId("btnMinusTest");

		fireEvent.click(btnMinusList[1]);

		expect(screen.getByText(/-2/i)).toBeInTheDocument();

		fireEvent.click(btnPlusList[1]);

		expect(screen.getByText(/-1/i)).toBeInTheDocument();
		expect(screen.queryByTestId("btnDeleteTest")).not.toBeInTheDocument();

		fireEvent.click(btnPlusList[1]);

		expect(screen.getByText(/0/i)).toBeInTheDocument();
		expect(screen.getAllByTestId("btnDeleteTest")[0]).toBeInTheDocument();

		fireEvent.click(btnPlusList[1]);

		expect(screen.getAllByText(/1/i)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/1/i)[1]).toBeInTheDocument();

		expect(screen.getByText(/wwww/i)).toBeInTheDocument();
		expect(screen.getByText(/yyyy/i)).toBeInTheDocument();

		expect(tab1).toHaveAttribute("aria-selected", "true");
		expect(tab2).toHaveAttribute("aria-selected", "false");
	});

	test("click on delete button", () => {
		const { store } = renderWithRedux(<UserRaitingPanel />, { preloadedState });

		const btnMinus = screen.getByTestId("btnMinusTest");

		expect(screen.getByText(/wwww/i)).toBeInTheDocument();

		fireEvent.click(btnMinus);

		const btndelete = screen.getByTestId("btnDeleteTest");
		fireEvent.click(btndelete);

		expect(screen.queryByText(/wwww/i)).not.toBeInTheDocument();
		expect(store.getState().userReduser.userList.length).toEqual(2);

		const tab2 = screen.getByText(/Bad Raiting Users/i);
		fireEvent.click(tab2);

		expect(screen.getByText(/yyyy/i)).toBeInTheDocument();

		const btnPlus = screen.getByTestId("btnPlusTest");
		fireEvent.click(btnPlus);

		const btndelete1 = screen.getByTestId("btnDeleteTest");
		fireEvent.click(btndelete1);

		expect(screen.queryByText(/yyyy/i)).not.toBeInTheDocument();
		expect(store.getState().userReduser.userList.length).toEqual(3);
	});
});
