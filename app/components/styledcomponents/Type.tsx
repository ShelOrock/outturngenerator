import styled, { css } from 'styled-components';

interface TextPropTypes {
  textAlign?: string;
  color?: string;
} 

export const AllTypeStyles = css<TextPropTypes>`
  padding: 0 1rem;
  margin: 0;
  text-align: ${ ({ textAlign }) => textAlign || 'left' };
  color: ${ ({ theme: { colors } }) => colors.black };
`;

export const Header = styled.h1`
  ${ AllTypeStyles }
  font-weight: bold;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.large };
`;

export const Subheader = styled.h2`
  ${ AllTypeStyles }
  font-weight: bold;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.medium };
`;

export const Subtitle = styled.p`
  ${ AllTypeStyles }
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
  color: ${ ( { theme: { colors } }) => colors.gray };
`

export const Body = styled.p`
  ${ AllTypeStyles }
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
  font-weight: bold;
`