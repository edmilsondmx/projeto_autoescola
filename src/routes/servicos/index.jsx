import React from "react";
import { useParams } from "react-router-dom";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";
import ProductDetailPage from "components/pages/ProductDetail";
import Error from "components/pages/Error";
import SvgServerDown from "draws/ServerDown";

const ProductDetail = () => {
  useScrollToTop();

  const { slang } = useParams();

  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
        image={<SvgServerDown />}
        title="Serviço não encontrado"
        description="Serviço não encontrado ou não disponivel."
      />
    );
  }

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
