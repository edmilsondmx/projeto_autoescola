import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgRoadImage from "../stories/assets/road.jpg"
import BgCarImage from "../stories/assets/car.jpg"
import Heading from "./Heading";

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
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
)


