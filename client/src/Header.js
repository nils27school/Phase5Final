

import React from "react";
import NavBar from "./NavBar";
import Search from "./SearchBar";

function Header({ onSearch }) {
  return (
    <header>
      <h1>
        EZmeals
      </h1>
      <NavBar/>
    </header>
  );
}

export default Header;