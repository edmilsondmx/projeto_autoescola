import products from "./fixtures/products.json";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ ...products[i] });
  }
  return result;
};

export const buildProduct = () => buildProductList(1)[0];
