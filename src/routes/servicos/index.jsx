import React from "react";

import { useScrollToTop } from "hooks/scroll";
import ProductDetailPage from "components/pages/ProductDetail";

const ProductDetail = () => {
  useScrollToTop();

  return <ProductDetailPage />;
};

export default ProductDetail;
