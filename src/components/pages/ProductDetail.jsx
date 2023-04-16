import React from "react";
import styled from "styled-components";
import ProductType from "models/types/ProductType";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";
import { Link } from "react-router-dom";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutMedia,
  CalloutAction,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import BreadCrumb from "components/atoms/BreadCrumb";

import SpeedImage from "draws/Speed";
import BgCarImage from "assets/car.jpg";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => (
  <>
    <Hero image={BgCarImage}>
      <Heading>
        <h1>{product.title}</h1>
      </Heading>
      <BreadCrumb
        items={[
          { label: "Início", link: "/" },
          { label: "Serviços" },
          { label: product.title },
        ]}
      />
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non minima
        temporibus amet tempora culpa dignissimos, sapiente autem. Tempora quo
        obcaecati distinctio officia, aliquam fugit vitae ipsa consectetur!
        Quam, corrupti praesentium!
      </p>
      <p>
        Odit corrupti facilis itaque odio ut fugiat, numquam aspernatur veniam
        deleniti sit consectetur ullam suscipit rem nostrum quibusdam.
        Laudantium voluptate ut, soluta cupiditate qui ex esse beatae ea maxime
        repellat.
      </p>
      <p>
        Quasi vel aperiam voluptatibus sunt, soluta quas facilis, rerum atque
        corrupti sequi laudantium adipisci numquam corporis, quos qui? Odit sed
        temporibus mollitia voluptates dolores eveniet optio, quae sapiente
        natus. Atque.
      </p>
      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça sua matrícula agora mesmo</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            temporibus officia. Amet impedit enim, placeat nam inventore tempore
            est magnam eveniet odio dolor molestias provident nostrum vitae
            animi reprehenderit excepturi.
          </p>
          <CalloutAction>
            <Button as={Link} to="/matricule-se" color="primary">
              Matricular
            </Button>
          </CalloutAction>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
