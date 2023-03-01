import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const ThemeNames = {
  light: "ligth",
  ocean: "ocean",
};

const ligth = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121"
    },
    danger: {
      main: "#ff3d00",
      dark: "#d22a00",
      text: "#212121"
    },
  },
};

const allThemes = {
  ligth,
  ocean: {
    ...ligth,
    colors: {
      ...ligth.colors,
      primary:{
        main:"#2196f3",
        dark:"#1769aa",
        ligth:"#4dabf5",
        text:"#fff"
      }
    }
  }
};

const ThemeProvider = ({theme, children}) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
);

ThemeProvider.defaultProps = {
  theme:"ligth",
}

export default ThemeProvider;
