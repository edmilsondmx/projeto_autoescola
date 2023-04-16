import React from "react";
import { render, screen, fireEvent } from "test-utils";
import Registration from "./Registration";

it("scrolls to top in first render", () => {
  render(<Registration />);

  expect(window.scrollTo).toBeCalledTimes(1);
});

it("renders form with correct elements and fields", () => {
  render(<Registration />);
  const nameField = screen.getByLabelText("Nome:");
  const cpfField = screen.getByLabelText("CPF:");
  const emailField = screen.getByLabelText("E-mail:");
  const phoneField = screen.getByLabelText("Telefone:");
  const selectField = screen.getByLabelText("Serviço:");
  const submitButton = screen.getByRole("button", { name: "Enviar" });

  expect(nameField).toBeInTheDocument();
  expect(cpfField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
  expect(phoneField).toBeInTheDocument();
  expect(selectField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it("form should submit with valid data", () => {
  render(<Registration />);
  const nameField = screen.getByLabelText("Nome:");
  const cpfField = screen.getByLabelText("CPF:");
  const emailField = screen.getByLabelText("E-mail:");
  const phoneField = screen.getByLabelText("Telefone:");
  const selectField = screen.getByLabelText("Serviço:");
  const submitButton = screen.getByRole("button", { name: "Enviar" });

  fireEvent.change(nameField, { target: { value: "Lucas Souza" } });
  fireEvent.change(cpfField, { target: { value: "12345678901" } });
  fireEvent.change(emailField, { target: { value: "lucas.souza@gmail.com" } });
  fireEvent.change(phoneField, { target: { value: "11912345678" } });
  fireEvent.change(selectField, {
    target: { value: "1ª Habilitação Carro e Moto" },
  });
  fireEvent.click(submitButton);
  expect(submitButton).toBeEnabled();
});
