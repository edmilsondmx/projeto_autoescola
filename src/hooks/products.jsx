import Moto_carImage from "assets/moto_car.jpg";
import CarImage from "assets/carImage.jpg";
import MotoImage from "assets/motoImage.jpg";
import TruckImage from "assets/truckImage.jpg";
import CnhImage from "assets/cnhImage.jpg";
import AvulsoImage from "assets/avulsaImage.jpg";

const products = [
  {
    id: 1,
    image: Moto_carImage,
    title: "1ª Habilitação Carro e Moto",
    slang: "primeira-habilitacao-carro-e-moto",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: CarImage,
    title: "1ª Habilitação Carro",
    slang: "primeira-habilitacao-carro",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: MotoImage,
    title: "1ª Habilitação Moto",
    slang: "primeira-habilitacao-moto",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: TruckImage,
    title: "Mudança de Categoria Caminhão",
    slang: "mudanca-de-cateoria-caminhao",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    image: AvulsoImage,
    title: "Aulas Avulsas",
    slang: "aulas-avulsas",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    image: CnhImage,
    title: "Treinamento para habilitados",
    slang: "treinamento-para-habilitados",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
