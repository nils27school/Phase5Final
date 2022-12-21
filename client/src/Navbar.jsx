// import React, { useState } from 'react';

// function NavBar({ onLogout }) {
//     function handleLogout() {
//       fetch("/logout", {
//         method: "DELETE",
//       }).then(() => onLogout());
//     }
  
//     return (
//       <header>
//         <button onClick={handleLogout}>Logout</button>
//       </header>
//     );
//   }

//  function Navbar() {
//     // const path = window.location.pathname
//     return <nav classname="nav">
//         <a href="/" className="site-title">EZmeals</a>
//         <ul>
//             <li className="active">
//                 <CustomLink href="/recipes"> Recipes </CustomLink>
//                 <CustomLink href="/about"> About </CustomLink>
//                 <CustomLink href="/"> Login </CustomLink>
//                 </li>
//         </ul>
//     </nav>
// }

// function CustomLink({href, children, ...props}) {
//     const path = window.location.pathname

//     return(
//         <li className={path === href ? "active" : ""}>
//             <a href={href} {...props}>
//                 {children}
//                 </a>
//         </li>
//     )
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
           Recipes
      </NavLink>
      <NavLink
        to="/recipes"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/comment"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Comment  
      </NavLink>
      <NavLink
        to="/logout"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Logout
      </NavLink>
     
    </div>
  );
}

export default NavBar;