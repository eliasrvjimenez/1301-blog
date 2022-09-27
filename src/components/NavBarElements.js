import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
 background: #86181A;
 height: 60px;
 display:grid;
 grid-template-columns: repeat(10,1fr);
 grid-template-rows: 60px;
 justify-content: center;;
 padding: 0 ;
 z-index: 12;
 width:100%;
`;

export const NavLink = styled(Link)`
 color: #575757;
 display:grid;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 cursor: pointer;
 height: 100%;
 &.active{
  color: #FFFFFF;
  background-color: #5D1613;
}
`;

export const NavMenu = styled.ul`
 align-items: center;
 display:grid;
 grid-template-colummns: repeat(5, 1fr);
 justify-content: center;
 justify-items: center;
 margin-right: -24px;
 width: 100%;
   }
`;
