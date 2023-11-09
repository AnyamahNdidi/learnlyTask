import SearchInput from "@/components/SearchInput";
import Home from "@/pages";
import { screen, render } from "@testing-library/react";

/**
 * Test suite for the Home component.
 */
describe("this is for testing the home component", () => {
	test("should render without error", () => {
		render(<Home />);
		const ele = screen.getByTestId("home");
		expect(ele).toBeInTheDocument;
	});

	  /**
   * Test: Home component should render the SearchInput component.
   */
	test("should render the search component", () => {
		const { container } = render(<SearchInput />);
		expect(container).toBeInTheDocument;
	});
});
