import React from "react";
// import PropTypes from "prop-types";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import BgCarImage from "assets/car.jpg";
import CarRoadVideo from "assets/car_road.mp4";
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
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: CarImage,
    title: "1ª Habilitação Carro",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: MotoImage,
    title: "1ª Habilitação Moto",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: TruckImage,
    title: "Mudança de Categoria Caminhão",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    image: AvulsoImage,
    title: "Aulas Avulsas",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    image: CnhImage,
    title: "Treinamento para habilitados",
    sumary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const Home = () => (
  <>
    <Hero image={BgCarImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>
          Aprenda a dirigir com segurança e confiança em nossa auto escola.
        </li>
        <li>
          Nossos instrutores experientes ajudarão você a dominar a arte de
          dirigir.
        </li>
        <li>Obtenha sua licença de condução e liberdade na estrada conosco!</li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Auto Escola &lt; Tag &gt;</h2>
          </Heading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia repellat facilis veritatis tempore unde sapiente commodi
            aspernatur. Tempore ad molestiae, nisi sunt voluptate unde quam eos
            eligendi id voluptas?
          </p>
          <div>
            <Button as={Link} to="/sobre" color="primary">
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <video src={CarRoadVideo} width="100%" autoPlay loop muted />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
          possimus, assumenda, impedit laboriosam officia nostrum itaque?
          Placeat corrupti exercitationem vitae nulla doloremque.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
          possimus, assumenda, impedit laboriosam officia nostrum itaque?
          Placeat corrupti exercitationem vitae nulla doloremque.
        </Accordion>
        <Accordion title="Fui multado e agora?">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
          possimus, assumenda, impedit laboriosam officia nostrum itaque?
          Placeat corrupti exercitationem vitae nulla doloremque.
        </Accordion>
        <Accordion title="Quanto tempo é necessário para tirar a primeira habilitação?">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
          possimus, assumenda, impedit laboriosam officia nostrum itaque?
          Placeat corrupti exercitationem vitae nulla doloremque.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);
// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
