/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from "test-utils";

import Hero from "./Hero"

it('renders Hero with children', () => {
  const { getByText } = render(
    <Hero>
      <p>Edmilson Gomes</p>
    </Hero>
  );

  expect(getByText("Edmilson Gomes")).toBeInTheDocument();
});

it('renders image background', () => {
  const image = "http://test/image.jpg";
  const { getByTestId } = render(<Hero image={image}/>);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
