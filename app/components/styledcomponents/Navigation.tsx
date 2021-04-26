import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface LinkButtonPropTypes {
  variant?: string;
}

export const NavBar = styled.div`
  background-color: ${ ({ theme: { colors } }) => colors.primary };
  padding: 2rem;
  margin: 0;
  box-shadow: 0px 8px 15px #D5D5D5;
  width: 97vw;
`

export const NavLink = styled(Link)`
  color: ${ ({ theme: { colors } }) => colors.white };
  text-decoration: none;
  font-weight:bold;
  margin: 0 2rem;
`

export const LinkButton = styled(Link)<LinkButtonPropTypes>`
  font-size: 0.9rem;
  display: block;
  margin: ${ ({ theme: { buttons } }) => buttons.size.small.margin };
  text-decoration: none;
  cursor: default;
  color: ${ ({ variant, theme: { buttons } }) => variant ? buttons.colors[variant].text : '#21A0A0' };
  background-color: ${ ({ variant, theme: { buttons } }) => variant ? buttons.colors[variant].background : 'transparent' };
  border: ${ ({ variant, theme: { buttons } }) => variant ? buttons.colors[variant].border : 'none' };
  font-weight:bold;
`;

export const LargeLinkButton = styled(Link)<LinkButtonPropTypes>`
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: ${ ({ variant, theme: { buttons } }) =>  buttons.colors[variant].background} };
  color: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].text };
  border: ${ ({ variant, theme: { buttons } }) => buttons.colors[variant].border};
  border-radius: 3px;
  padding: ${ ({ theme: { buttons } }) => buttons.size.default.padding };
  margin: ${ ({ theme: { buttons } }) => buttons.size.default.margin };
  font-weight: bold;

  &:focus {
    outline: none;
  };
`;