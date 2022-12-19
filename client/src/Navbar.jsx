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
    const path = window.location.pathname
    return <nav classname="nav">
        <a href="/" className="site-title">EZmeals</a>
        <ul>
            <li className="active">
                <CustomLink href="/recipes"> Recipes </CustomLink>
                <CustomLink href="/about"> About </CustomLink>
                </li>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname

    return(
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
                </a>
        </li>
    )
}