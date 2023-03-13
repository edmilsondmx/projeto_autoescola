import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
  it("return a product", () => {
    const slang = "primeira-habilitacao-moto";

    const product = useProduct({ slang });

    expect(product.title).toEqual("1ª Habilitação Moto");
  });

  it("return undefined if product was not found", () => {
    const slang = "invalid-slang";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe("useProducts", () => {
  it("returns a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
});
