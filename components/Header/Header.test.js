import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("the logo is shown in the header", () => {
  render(<Header />);
  const logoIsShown = screen.getByRole("img");
  expect(logoIsShown).toBeInTheDocument;
});
