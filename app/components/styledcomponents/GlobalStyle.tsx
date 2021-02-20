import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${ ({ theme }) => theme.colors.body };
    font-family: ${ ({ theme }) => theme.font };
    width: 100%;
    margin: 0;
  }
`;