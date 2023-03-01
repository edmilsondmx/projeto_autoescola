import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgRoadImage from "../stories/assets/road.jpg"
import BgCarImage from "../stories/assets/car.jpg"
import Heading from "./Heading";
import Button from "./Button";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => 
  <Hero image={BgRoadImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir!")}</h1>
    <p>{text("Subtitle", "A Auto Escola lider em aprovação!")}</p>
  </Hero>;

export const withList = () => (
  <Hero 
    image={BgCarImage}
    >
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br/> 
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Aprenda a dirigir com segurança e confiança em nossa auto escola.</li>
      <li>Nossos instrutores experientes ajudarão você a dominar a arte de dirigir.</li>
      <li>Obtenha sua licença de condução e liberdade na estrada conosco!</li>
    </ul>
    <Button 
      color="primary" 
      variant="outlined"
    >
      Matricule-se agora
    </Button>
  </Hero>
)


