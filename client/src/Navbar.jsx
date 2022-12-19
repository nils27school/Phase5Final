import React, { useState } from 'react';

// function Navbar({ onLogout }) {
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

export default function Navbar() {
    return <nav classname="nav">
        <a href="/" className="site-title">EZmeals</a>
        <ul>
            <li className="active">
                <a href="/recipes">Recipes</a>
                </li>
                <li>
                <a href="/About">About</a>
            </li>
        </ul>
    </nav>
}