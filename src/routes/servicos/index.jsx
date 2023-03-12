import React from "react";
import { useParams } from "react-router-dom";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";
import ProductDetailPage from "components/pages/ProductDetail";

const ProductDetail = () => {
  useScrollToTop();

  const { slang } = useParams();

  const product = useProduct({ slang });

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
