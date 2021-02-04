import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  background: #21A0A0;
  padding: 2rem;
  margin: 0;
  box-shadow: 0px 8px 15px #D5D5D5;
`

export const NavLink = styled(Link)`
  color: white;
  text-decoration:none;
  font-weight:bold;
  margin: 0 2rem;
`