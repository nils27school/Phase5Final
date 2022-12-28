

import React from "react";
import Search from "./SearchBar";

function Header({ onSearch }) {
  return (
    <header>
      <h1>
        EZmeals
      </h1>
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;