import React from 'react';
import { Nav, NavLink, NavMenu } 
  from "./NavBarElements";

const NavBar = () => {
 return (
   <>
     <Nav>
        <NavLink to="/1301-blog" activeStyle>
          Home
      </NavLink>
       <NavLink to="/blogs" activeStyle>
         Blogs
       </NavLink>
     </Nav>
   </>
 );
};

export default NavBar;
