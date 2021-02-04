import styled from 'styled-components';

interface TextPropTypes {
  textAlign?: string;
  color?: string;
} 

export const Header = styled.h1<TextPropTypes>`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0rem 1rem;
  margin: 0;
  text-align: ${ props => props.textAlign  || 'center' };
  color: ${ props => props.color || 'black' };
`

export const Subheader = styled.h2<TextPropTypes>`
  font-weight: bold;
  font-size: 1rem;
  padding: 0 1rem;
  margin: 0;
  text-align: ${ props => props.textAlign  || 'center' };
  color: ${ props => props.color || 'black' };
`

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #999;
  padding: 0 1rem;
  margin: 0;
`

export const Body = styled.p`
  font-size: 1rem;
  padding: 0 1rem;
  margin: 0;
  font-weight: bold;
`