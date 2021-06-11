import styled, { css } from 'styled-components';

interface TextPropTypes {
  textAlign?: string;
  color?: string;
} 

export const AllTypeStyles = css<TextPropTypes>`
  padding: 0 1rem;
  margin: 0;
  text-align: ${ ({ textAlign }) => textAlign || 'left' };
  color: ${ ({ color, theme: { colors } }) => colors[color] || colors.black };
`;

export const PageTitle = styled.h1`
  ${ AllTypeStyles }
  font-weight: bold;
  margin: 1rem;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.title };
`

export const Header = styled.h2`
  ${ AllTypeStyles }
  font-weight: bold;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.large };
`;

export const Subheader = styled.h3`
  ${ AllTypeStyles }
  font-weight: bold;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.medium };
`;

export const CaskTitle = styled.h4`
  ${ AllTypeStyles }
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.medium };
  color: ${ ( { theme: { colors } }) => colors.darkgray };
  margin: 0.5rem 0;
`;

export const FlavourProfileTitle = styled.p`
  ${ AllTypeStyles }
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
  color: ${ ( { theme: { colors } }) => colors.white };
  margin: 0;
`

export const SmallListItemHeader = styled.p`
  ${ AllTypeStyles }
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
  color: ${ ( { theme: { colors } }) => colors.darkgray };
  margin: 0;
`

export const Body = styled.p`
  ${ AllTypeStyles }
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
  font-weight: bold;
`