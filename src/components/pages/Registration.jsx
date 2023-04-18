import React, { useState } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import BreadCrumb from "components/atoms/BreadCrumb";
import Footer from "components/organisms/Footer";
import BgCarImage from "assets/car.jpg";
import Button from "components/atoms/Button";
import Section from "components/molecules/Section";
import { BreakpointSizes, breakAt } from "styles/Breakpoints";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0px auto;
  padding: 0;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  ${breakAt(BreakpointSizes.md)} {
    padding: 6rem;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #2c3e50;
  text-align: center;
  display: flex;
  align-items: baseline;
  flex-direction: column;

  ${breakAt(BreakpointSizes.sm)} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Input = styled.input`
  margin-bottom: 1rem;
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  width: 90%;
  max-width: 400px;
  font-size: 1.2rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const SelectWrapper = styled.select`
  margin-bottom: 1rem;
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const OptionLabel = styled.option`
  margin-right: 1rem;
  font-size: 1.2rem;
  color: #2c3e50;
`;

const options = [
  "1ª Habilitação Carro e Moto",
  "1ª Habilitação Carro",
  "1ª Habilitação Moto",
  "Mudança de Categoria Caminhão",
  "Aulas Avulsas",
  "Treinamento para habilitados",
];

const Registration = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("Selecione um serviço");

  const isNameValid = nome.trim() !== "";
  const isEmailValid = email.trim() !== "";
  const isTelefoneValid = telefone.trim() !== "";
  const isCpfValid = cpf.trim() !== "";
  const isServicoValid = servico !== "Selecione um serviço";
  const areAllFieldsValid =
    isNameValid &&
    isEmailValid &&
    isTelefoneValid &&
    isCpfValid &&
    isServicoValid;

  const isValid = () => {
    if (areAllFieldsValid) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      nome,
      cpf,
      email,
      telefone,
      servico,
    });
  };

  const handleSelectChange = (option) => {
    setServico(option.target.value);
  };

  return (
    <>
      <Hero image={BgCarImage} padding="0px">
        <Heading>
          <h1>Auto Escola &lt; TAG &gt;</h1>
        </Heading>
        <BreadCrumb
          items={[{ label: "Início", link: "/" }, { label: "Matricula" }]}
        />
      </Hero>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Label>
            Nome:
            <Input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Ex. Carlos Santos"
              required
            />
          </Label>
          <Label>
            CPF:
            <Input
              type="text"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
              placeholder="Somente números"
              required
            />
          </Label>
          <Label>
            E-mail:
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Ex. email@email.com.br"
              required
            />
          </Label>
          <Label>
            Telefone:
            <Input
              type="text"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              placeholder="Somente números com ddd"
              required
            />
          </Label>
          <Label>
            Serviço:
            <SelectWrapper
              onChange={handleSelectChange}
              required
              value={servico}
            >
              <option disabled>Selecione um serviço</option>
              {options.map((option) => (
                <OptionLabel key={option} value={option}>
                  {option}
                </OptionLabel>
              ))}
            </SelectWrapper>
          </Label>
          <div>
            <Button color="primary" type="submit" disabled={isValid()}>
              Enviar
            </Button>
          </div>
        </Form>
      </Section>
      <Footer />
    </>
  );
};
// Registration.defaultProps = {};

// Registration.propTypes = {};

export default Registration;
