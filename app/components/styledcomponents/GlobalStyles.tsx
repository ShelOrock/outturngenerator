import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../../theme';

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${ ({ theme }) => theme.colors.body }
    font-family: ${ ({ theme }) => theme.font }
  }
`