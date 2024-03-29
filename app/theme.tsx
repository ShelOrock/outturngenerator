import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'styled-components';

export const theme = {
  colors: {
    black: 'black',
    white: 'white',
    darkgray: '#777',
    gray: '#DDD',
    lightgray: '#EEE',
    body: '#FAFAFF',
    primary: '#21A0A0',
    flavourProfiles: {
      ['Young & spritely']: '#DFAED1',
      ['Sweet, fruity & mellow']: '#BD72AC',
      ['Spicy & sweet']: '#774677',
      ['Spicy & dry']: '#F9B254',
      ['Deep, rich & dried fruits']: '#D76E57',
      ['Old & dignified']: '#982130',
      ['Light & delicate']: '#99D4DF',
      ['Juicy, oak & vanilla']: '#569ABC',
      ['Oily & coastal']: '#2E5C74',
      ['Lightly peated']: '#C5DEAC',
      ['Peated']: '#81AC6D',
      ['Heavily peated']: '#5B7C4E',
      other: '#202448',
      default: '#A5A5A5',
    }
  },
  font: 'Roboto',
  fontSizes: {
    title: '36px',
    large: '24px',
    medium: '20px',    
    small: '16px',
  },
  buttons: {
    colors: {
      primary: {
        background: '#21A0A0',
        text: 'white',
        border: 'none',
      },
      secondary: {
        background: 'white',
        text: '#21A0A0',
        border: '1px solid #21A0A0'
      },
      tertiary: {
        background: 'white',
        text: '#21A0A0',
        border: 'none',
      },
      disabled: {
        background: '#DDD',
        text: '#999',
        border: 'none'
      },
      default: {
        background: '#21A0A0',
        text: 'white',
        border: 'none'
      },
      ['Young & spritely']: {
        background: '#DFAED1',
        text: 'white',
        border: 'none',
      },
      ['Sweet, fruity & mellow']: {
        background: '#BD72AC',
        text: 'white',
        border: 'none'
      },
      ['Spicy & sweet']: {
        background: '#774677',
        text: 'white',
        border: 'none',
      },
      ['Spicy & dry']: {
        background: '#F9B254',
        text: 'white',
        border: 'none',
      },
      ['Deep, rich & dried fruits']: {
        background: '#D76E57',
        text: 'white',
        border: 'none',
      },
      ['Old & dignified']: {
        background: '#982130',
        text: 'white',
        border: 'none',
      },
      ['Light & delicate']: {
        background: '#99D4DF',
        text: 'white',
        border: 'none',
      },
      ['Juicy, oak & vanilla']: {
        background: '#679ABC',
        text: 'white',
        border: 'none',
      },
      ['Oily & coastal']: {
        background: '#2E5C74',
        text: 'white',
        border: 'none',
      },
      ['Lightly peated']: {
        background: '#C5DEAC',
        text: 'white',
        border: 'none',
      },
      ['Peated']: {
        background: '#81AC6D',
        text: 'white',
        border: 'none'
      },
      ['Heavily peated']: {
        background: '#5B7C4E',
        text: 'white',
        border: 'none',
      },
      ['Other']: {
        background: '#202448',
        text: 'white',
        border: 'none',
      },
    },
    size: {
      default: {
        padding: '1rem',
        margin: '1rem'
      },
      small: {
        padding: '0.5rem',
        margin: '0.5rem 1rem'
      },
      large: {
        padding: '1rem 4rem',
        margin: '1rem'
      }
    },
  },
  input: {
    size: {
      default: {
        width: '80%',
      },
      small: {
        width: '15%',
      },
      medium: {
        width: '50%',
      },
      large: {
        width: '80%',
      }
    }
  }
};

export default ({ children }) => (
  <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
);

export type ThemeType = typeof theme;
