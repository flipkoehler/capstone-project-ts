import { render, screen } from "@testing-library/react";
import AddAMovie from "./AddAMovie";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("a search for the movie 'napoleon dynamite' will show a movie preview card", async () => {
  render(<AddAMovie />);
  const user = userEvent.setup();
  const input = screen.getByRole("textbox", { name: "search for a movie" });
  await user.type(input, "Napoleon Dynamite");

  expect(input.value).toBe("Napoleon Dynamite");
});

test("the Headline is shown under the header", () => {
  render(<AddAMovie />);
  const headlineIsShown = screen.getByRole("heading");
  expect(headlineIsShown).toBeInTheDocument;
});
