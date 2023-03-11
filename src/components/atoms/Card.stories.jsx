import React from "react";

import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Section from "components/molecules/Section";
import Heading from "./Heading";
import Button from "./Button";
import Moto_carImage from "stories/assets/moto_car.jpg";

export default {
  title: "Components/Organisms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={Moto_carImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={Moto_carImage}>
        <CardMediaDescription>
          <h5>Descrição da imagem</h5>
        </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>
);
