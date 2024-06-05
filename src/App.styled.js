import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  background-color: #222;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 2rem;

  &.active {
    border-bottom: 2px solid #61dafb;
  }

  &:hover {
    color: #61dafb;
  }
`;
