import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  background-color: #007bff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 2rem;
  padding: 0.5rem 1rem;

  &.active {
    border-bottom: 2px solid #ffd700;
  }

  &:hover {
    color: #ffd700;
  }
`;
