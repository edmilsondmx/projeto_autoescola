import React from "react";

import { useScrollToTop } from "hooks/scroll";
import { useProducts } from "hooks/products";
import HomePage from "components/pages/Home";

const Home = () => {
  useScrollToTop();
  const products = useProducts();

  return <HomePage products={products} />;
};

export default Home;
