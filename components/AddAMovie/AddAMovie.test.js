import { render, screen } from "@testing-library/react";
import AddAMovie from "./AddAMovie";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("a search for the movie 'napoleon dynamite' will show a movie preview card", async () => {
  render(<AddAMovie />);
  const user = userEvent.setup();
  const textBoxInputField = screen.getByRole("textbox");
  await user.type(textBoxInputField, "Napoleon Dynamite");
  const button = screen.getByRole("button", { name: "search for the movie" });
  await user.click(button);
  const napoleonHeadingIsShown = screen.getByRole("generic", { name: "testi" });
  expect(napoleonHeadingIsShown).toBeInTheDocument;
});

test("the Headline is shown under the header", () => {
  render(<AddAMovie />);
  const headlineIsShown = screen.getByRole("heading");
  expect(headlineIsShown).toBeInTheDocument;
});
