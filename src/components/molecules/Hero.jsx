import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Container from "components/atoms/Container";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    padding: ${props.padding};
    background: url(${props.image}), rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  display: inline-block;
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const Hero = ({ image, title, children, padding }) => (
  <Root image={image} padding={padding} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  /* title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), */
  children: PropTypes.node,
};

/* Hero.defaultProps = { valores padrões
   image: "minha imagem"
   title: "Meu título",
} */

export default Hero;
