import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";

import BgCarImage from "assets/car.jpg";
import AboutImage from "draws/About";
import InstImage1 from "assets/instructors/inst1.jpg";
import InstImage2 from "assets/instructors/inst2.jpg";
import InstImage3 from "assets/instructors/inst3.jpg";
import InstImage4 from "assets/instructors/inst4.jpg";
import InstImage5 from "assets/instructors/inst5.jpg";
import InstImage6 from "assets/instructors/inst6.jpg";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  { id: 1, name: "Thor", avatar: InstImage1 },
  { id: 2, name: "Mel", avatar: InstImage2 },
  { id: 3, name: "Bolinha", avatar: InstImage3 },
  { id: 4, name: "Mike", avatar: InstImage4 },
  { id: 5, name: "Emmy", avatar: InstImage5 },
  { id: 6, name: "Bob", avatar: InstImage6 },
];

const About = () => (
  <>
    <Hero image={BgCarImage}>
      <Heading>
        <h1>Auto Escola &lt; Tag &gt;</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            tempora iure, excepturi repudiandae blanditiis nostrum totam nemo.
            Quia a asperiores error necessitatibus, similique magni officiis!
            Alias dolore corporis iure enim.
          </p>
          <p>
            Quo, a officiis nisi voluptatibus rerum illo mollitia numquam
            deleniti impedit commodi, necessitatibus corporis veniam magnam
            corrupti. Porro, ullam fuga maiores sint quo atque iure
            voluptatibus? Incidunt culpa assumenda voluptatem!
          </p>
          <p>
            Molestiae nisi repudiandae commodi sed ex nostrum cupiditate,
            inventore quibusdam sunt veritatis, ut temporibus. Ex tempora eius
            officiis quas, sapiente unde veritatis voluptates nam odio optio
            doloribus nulla fugit asperiores.
          </p>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae,
            nisi vitae sit error esse, a doloremque excepturi eos, ex dolorum
            nulla rerum laborum iure saepe? Culpa explicabo aut praesentium!
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            natus quo inventore quam praesentium hic amet, quidem, veniam
            delectus cumque labore saepe, deleniti nobis corporis vel incidunt
            tempore maxime ipsam.
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Repudiandae nam molestiae inventore neque dignissimos quis vel iusto
            necessitatibus ab expedita dolores exercitationem, id, blanditiis
            fugiat, maxime alias repellendus consectetur quas rerum deleniti
            error velit quia aliquid! Molestias, natus?
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
      <Grid sm={2} md={3} lg={4}>
        {instructors.map((instructor) => (
          <Card key={instructor.id}>
            <CardMedia image={instructor.avatar}>
              <CardMediaDescription>
                <h5>{instructor.name}</h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
);
About.defaultProps = {};

About.propTypes = {};

export default About;
