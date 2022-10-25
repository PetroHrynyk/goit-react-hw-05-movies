import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const NavItem = styled(NavLink)`
  color: tomato;
  text-decoration: none;
  background-color: AntiqueWhite;
  padding:10px 120px;
  font-weight: 600;
  border-radius: 4px;


  &.active {
    color: blue;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: black;
  }
`;
