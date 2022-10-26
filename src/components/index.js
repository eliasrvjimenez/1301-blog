import React from 'react';
import { Nav, NavLink, NavMenu } 
  from "./NavBarElements";


const NavBar = () => {
 return (
     <Nav>
        <NavLink to="/1301-blog" activeStyle>
          Home
      </NavLink>
      <div className="dropdown">
        <button className="dropbutton navElement"> 
        Blogs
        </button>
       <div className="dropdown-content">
        <NavLink className="screwnavcolor" to="/blog-1" activeStyle>
          Blog 1: Overloaded to Optimistic
          </NavLink>
          <NavLink className="screwnavcolor" to="/blog-2" activeStyle>
        Blog 2: What make a Writer?
        </NavLink>
        </div>
       </div>
       
     </Nav>
 );
};

export default NavBar;
