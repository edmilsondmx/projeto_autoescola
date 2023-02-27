import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

it('match snapshot', () => {
  const { asFragment } = render(<Heading>Title</Heading>)

  expect(asFragment()).toMatchSnapshot();
});
