import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &.active {
    border-bottom: 2px solid #61dafb;
  }

  &:hover {
    color: #61dafb;
  }
`;
