import React from 'react';
import { render } from '@testing-library/react';

import GlobalStyle from './GlobalStyle';

it('match snapshot', () => {
  render(<GlobalStyle />);

  expect(document.head).toMatchSnapshot();
});

