import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";
import "@testing-library/jest-dom";

test("the headline is shown on the welcome page", () => {
  render(<WelcomePage />);
  const headline = screen.getByRole("heading");
  expect(headline).toBeInTheDocument;
});

test("the text is shown on the welcome page", () => {
  render(<WelcomePage />);
  const text = screen.getByText(/Scrollen durch Netflix, Amazon und Co. /i);
  expect(text).toBeInTheDocument;
});

test("the click on the button links to the quiz page", () => {
  render(<WelcomePage />);
  const button = screen.getByText(/Quiz jetzt starten!/i);
  expect(button).toHaveAttribute("href", "/quiz");
});

test("the click on the random button links to the random page", () => {
  render(<WelcomePage />);
  const button = screen.getByText(/Oder eine zufällige Filmempfehlung!/i);
  expect(button).toHaveAttribute("href", "/movie-recommendation");
});
