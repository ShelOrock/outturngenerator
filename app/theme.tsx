import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import 'styled-components';
import { white } from 'chalk';

const theme = {
  colors: {
    body: 'white',
    black: 'black',
    gray: '#999',
    primary: '#21A0A0',
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
    title: '1.8em',
    large: '1.5em',
    medium: '1.2em',    
    small: '1em',
  },
  buttons: {
    colors: {
      primary: {
        background: '#21A0A0',
        text: 'white'
      },
      secondary: {
        background: 'white',
        text: '#21A0A0'
      },
      disabled: {
        background: '#DDD',
        text: '#999'
        },
      default: {
        background: '#21A0A0',
        text: 'white'
        }
    },
    size: {
      default: {
        padding: '1rem',
        margin: '1rem'
      },
      small: {
        padding: '1rem',
        margin: '0rem'
      }
    }
  }
};

export default ({ children }) => (
  <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
);

export type ThemeType = typeof theme;
