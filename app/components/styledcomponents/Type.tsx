import styled, { css } from 'styled-components';

interface TextPropTypes {
  textAlign?: string;
  color?: string;
} 

export const AllTypeStyles = css<TextPropTypes>`
  margin: 0;
  text-align: ${ ({ textAlign }) => textAlign || 'left' };
  color: ${ ({ color, theme: { colors } }) => colors[color] || colors.black };
  line-height: 1.4;
`;

export const Title = styled.h1`
  ${ AllTypeStyles }
  font-weight: bold;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.title };
`

export const SubTitle = styled.h2`
`;

export const Heading = styled.h3`
  ${ AllTypeStyles }
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.large };
`;

export const SubHeading = styled.h4`
  ${ AllTypeStyles }
  margin-top: 8px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.medium };
`;

export const CaskTitle = styled.h5`
  ${ AllTypeStyles }
  margin-top: 8px;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.medium };
  color: ${ ( { theme: { colors } }) => colors.darkgray };
  margin: 0.5rem 0;
`;//Delete

export const FlavourProfileTitle = styled.p`
  ${ AllTypeStyles }
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
  color: ${ ( { theme: { colors } }) => colors.white };
  margin: 0;
`;//Delete

export const SmallListItemHeader = styled.p`
  ${ AllTypeStyles }
  margin-top: 8px;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
  color: ${ ( { theme: { colors } }) => colors.darkgray };
  margin: 0;
`;//Delete

export const BodyTitle = styled.p`
  ${ AllTypeStyles }
  margin-top: 8px;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
`;

export const Body = styled.p`
  ${ AllTypeStyles }
  margin-top: 8px;
  font-size: ${ ({ theme: { fontSizes } }) => fontSizes.small };
  font-weight: 200;
`;

export const Description = styled.p`
  margin-top: 8px;

`;
