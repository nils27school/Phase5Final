import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "85px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
    const [currentUser, setCurrentUser] = useState({})
    const currentUserId = sessionStorage.getItem("user_id");
   

    useEffect(() => {
        if (currentUserId){
            fetch (`/users/${currentUserId}`)
            .then (r => r.json())
            .then (user =>{
                    setCurrentUser(user)
            })
        }
    },[currentUserId])

  

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
        to="/recipes"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
           Recipes
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/comments"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Comments 
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