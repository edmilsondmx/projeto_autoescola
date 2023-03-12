import React from "react";

import ProductGrid from "./ProductGrid";
import { buildProductList } from "models/builders/products";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

const products = buildProductList(6);

export const usage = () => <ProductGrid products={products} />;
