import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const LinkButton = styled(Link)`
  font-size: 0.8rem;
  display: block;
  height: 1rem;
  margin: ${ ({ theme: { buttons } }) => buttons.size.small.margin };
  padding: ${ ({ theme: { buttons } }) => buttons.size.small.padding };
  text-decoration: none;
  cursor: default;
  color: ${ ({ theme: { colors } }) => colors.primary };
`