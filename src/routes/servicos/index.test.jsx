import React from "react";
import { screen, render } from "test-utils";
import ProductDetailRoute from "routes/servicos";
import { useProduct } from "hooks/products";
import { buildProduct } from "models/builders/products";

jest.mock("hooks/products");

it("renders with a product", () => {
  useProduct.mockReturnValue(buildProduct());

  render(<ProductDetailRoute />);

  expect(
    screen.getByText("Recycled Frozen Towels", { selector: "h1" })
  ).toBeInTheDocument();
});

it("not found product", () => {
  useProduct.mockReturnValue(null);

  render(<ProductDetailRoute />);

  expect(
    screen.getByText("Serviço não encontrado", { selector: "h1" })
  ).toBeInTheDocument();
});

it("scrolls to top in first render", () => {
  render(<ProductDetailRoute product={buildProduct()} />);

  expect(window.scrollTo).toBeCalledTimes(1);
});
