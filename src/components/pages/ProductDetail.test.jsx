import React from "react";
import { render, screen } from "test-utils";
import ProductDetail from "./ProductDetail";

it("renders Product Detail page", () => {
  render(<ProductDetail />);

  expect(screen.getByText(/Documentos necessários:/i)).toBeInTheDocument();
});

it("scrolls to top in first render", () => {
  render(<ProductDetail />);

  expect(window.scrollTo).toBeCalledTimes(1);
});
