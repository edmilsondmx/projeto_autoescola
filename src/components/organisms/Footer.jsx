import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import {
  FaPhone,
  FaMailBulk,
  FaBuilding,
  FaInstagramSquare,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;
  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
  p{
    margin: 8px 0;
  }
`;

const IconContainer = styled.span`
  padding-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover{
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Auto Escola</h6>
          </Heading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia repellat facilis veritatis tempore unde sapiente commodi
            aspernatur. Tempore ad molestiae, nisi sunt voluptate unde quam eos
            eligendi id voluptas?
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (11) 1234-5678
          </p>
          <p>
            <IconContainer>
              <FaMailBulk />
            </IconContainer>
            autoescola@email.com
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Rua Lorem ipsum dolor, 123 - sit amet - consectetur adipisicing -
            elit
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="http://www.instagram.com">
              <IconContainer>
                <FaInstagramSquare />
              </IconContainer>
              Instagram
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="http://www.facebook.com">
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="http://www.twitter.com">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="http://www.linkedin.com">
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              Linkedin
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);
// Footer.defaultProps = {};

// Footer.propTypes = {};

export default Footer;
