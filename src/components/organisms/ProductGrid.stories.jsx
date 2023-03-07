import React from "react";

import ProductGrid from "./ProductGrid";
import Moto_carImage from "stories/assets/moto_car.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: Moto_carImage, title: "Título 1", sumary: "Texto" },
      { id: 2, image: Moto_carImage, title: "Título 2", sumary: "Texto" },
      { id: 3, image: Moto_carImage, title: "Título 3", sumary: "Texto" },
      { id: 4, image: Moto_carImage, title: "Título 4", sumary: "Texto" },
      { id: 5, image: Moto_carImage, title: "Título 5", sumary: "Texto" },
      { id: 6, image: Moto_carImage, title: "Título 6", sumary: "Texto" },
    ]}
  />
);
