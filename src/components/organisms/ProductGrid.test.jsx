import React from "react";
import { render, screen, fireEvent } from "test-utils";
import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ id: i, title: `Title ${i}` });
  }

  return result;
};

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
])("with %i products", (size, showonly) => {
  it(`show only ${showonly} items`, () => {
    render(<ProductGrid products={buildProducts(size)} />);

    expect(screen.getAllByRole("heading").length).toBe(showonly);
  });

  it("show all the products whe button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)} />);

    await fireEvent.click(screen.getByText("Lista Completa de Serviços"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});
