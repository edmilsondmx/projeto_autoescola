/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from "./test-utils";
import App from "./App";

test("renders call to action", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/matricule-se agora/i);
  expect(linkElement).toBeInTheDocument();
});
