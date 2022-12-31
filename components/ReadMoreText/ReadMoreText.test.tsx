import { render, screen } from "@testing-library/react";
import ReadMore from "./ReadMoreText";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const testText: string =
  "So what's it to you, butthead. You know you've been looking for a, since you're new here, I'm gonna cut you a break, today. So why don't you make like a tree, and get out of here. Marty, you're acting like you haven't seen me in a week. My insurance, it's your car, your insurance should pay for it. Hey, I wanna know who's gonna pay for this? I spilled beer all over it when that car smashed into me.";

test("the text is shown in the compontent", () => {
  render(<ReadMore children={testText} />);
  const text = screen.getByTestId("movie-description");
  expect(text).toBeInTheDocument;
});

test("the text shows more than 200 characters, when clicked on the read more button (in this example 'beer' is shown after 200 chars", async () => {
  render(<ReadMore children={testText} />);
  const user = userEvent.setup();
  const linkReadMore = screen.getByTestId("read-more-link");
  await user.click(linkReadMore);
  const text = screen.getByText(/So what's it to you, butthead./i);
  expect(text).toHaveTextContent(/beer/i);
});
