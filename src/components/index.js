import React from 'react';
import { Nav, NavLink} 
  from "./NavBarElements";


const NavBar = () => {
 return (
     <Nav>
        <NavLink to="/1301-blog/home" activeStyle>
          Home
      </NavLink>
      <div className="dropdown">
         <NavLink to="/1301-blog/blogs" activeStyle>
        Blogs 
         </NavLink>
       <div className="dropdown-content">
        <NavLink className="screwnavcolor" to="/1301-blog/overloaded-to-optimistic" activeStyle>
          Overloaded to Optimistic
          </NavLink>
          <NavLink className="screwnavcolor" to="/1301-blog/what-makes-a-writer" activeStyle>
          What make a Writer?
        </NavLink>
        <p className='centeredtext'>The Choice of Solitude over Socialization </p>
        <NavLink className="screwnavcolor" to="/1301-blog/the-choice-of-solitude-over-socialization-intro" activeStyle>
          Introduction
          </NavLink>
        <NavLink className="screwnavcolor" to="/1301-blog/the-choice-of-solitude-over-socialization-introvertedness-in-active-environments" activeStyle>
          Introvertedness in Active Environments
        </NavLink>
        <NavLink className="screwnavcolor" to='/1301-blog/the-choice-of-solitude-over-socialization-solitude-and-productivity' activeStyle>
          Solitude and Productivity
          </NavLink>
        <NavLink className="screwnavcolor" to="/1301-blog/the-choice-of-solitude-over-socialization-introverts-in-the-workplace" activeStyle>
          Introverts in the Workplace
          </NavLink>
        <NavLink className="screwnavcolor" to="/1301-blog/the-choice-of-solitude-over-socialization-conclusion" activeStyle>
          The Relationship between College and the Workplace
          </NavLink>
        </div>
       </div>
     </Nav>
 );
};

export default NavBar;
