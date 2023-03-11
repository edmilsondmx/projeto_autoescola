import React from "react";
import { render, screen } from "test-utils";
import About from "./About";

it("renders About page", () => {
  render(<About></About>);

  expect(screen.getByText(/Conheça nossos professores/i)).toBeInTheDocument();
});

it("scrolls to top in first render", () => {
  render(<About />);

  expect(window.scrollTo).toBeCalledTimes(1);
});
