import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders blog", () => {
  render(<App />);
  const linkElement = screen.getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});
