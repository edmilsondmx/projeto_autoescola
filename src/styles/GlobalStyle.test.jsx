import React from 'react';
import { render } from 'test-utils';

import GlobalStyle from './GlobalStyle';

it('match snapshot', () => {
  render(<GlobalStyle />);

  expect(document.head).toMatchSnapshot();
});

