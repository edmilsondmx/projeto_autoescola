import React from "react";
import { render, screen } from "test-utils";
import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products";

it("renders Product Detail page", () => {
  render(<ProductDetail product={buildProduct()} />);

  expect(
    screen.getByText("Recycled Frozen Towels", { selector: "h1" })
  ).toBeInTheDocument();
});
