

import React from "react";
import NavBar from "./NavBar";
import Search from "./SearchBar";

function Header({ onSearch }) {
  return (
    <header>
      <h1 style={{backgroundColor: 'black', color: 'white}}'}}>
        EZmeals
      </h1>
      <NavBar/>
    </header>
  );
}

export default Header;