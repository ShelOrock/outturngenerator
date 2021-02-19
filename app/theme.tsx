import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import 'styled-components';

const theme = {
  colors: {
    body: 'white',
    black: 'black',
    white: 'white',
    gray: '#999',
    button: {
      text: '#000',
      background: '#21A0A0'
    },
    primary: '#21A0A0',
    disabled: '#DDD',
    flavourProfiles: {
      ['Young & spritely']: '#DFAED1',
      ['Sweet, fruity & mellow']: '#BD72AC',
      ['Spicy & sweet']: '#774677',
      ['Spicy & dry']: '#F9B254',
      ['Deep, rich & dried fruits']: '#D76E57',
      ['Old & dignified']: '#982130',
      ['Light & delicate']: '#99D4DF',
      ['Juicy, oak & vanilla']: '#679ABC',
      ['Oily & coastal']: '#2E5C74',
      ['Light peated']: '#C5DEAC',
      ['Peated']: '#81AC6D',
      ['Heavily peated']: '#5B7C4E',
    }
  },
  font: 'Roboto',
  fontSizes: {
    small: '1em',
    medium: '1.5em',
    large: '2em',
  }
};

export default ({ children }) => (
  <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
);

export type ThemeType = typeof theme;
