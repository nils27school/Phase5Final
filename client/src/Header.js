

import React from "react";
import NavBar from "./NavBar";


function Header({ onSearch }) {
  return (
    <header>
      <h1 style={{backgroundColor: 'black', color: 'red', font: 'Sevillana'}}>
        EZmeals
      </h1>
      <NavBar/>
    </header>
  );
}

export default Header;