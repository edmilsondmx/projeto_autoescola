import React from "react";
import { render, screen } from "test-utils";
import About from "./About";

it("renders About page", () => {
  render(<About></About>);

  expect(screen.getByText(/Conheça nossos professores/i)).toBeInTheDocument();
});
