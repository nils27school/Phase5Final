import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

const handleLogout = (e) => {
  e.preventDefault();
  // console.log(email);
  fetch("/login", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(r => {
          if (r.ok) {
              r.json()
              .then (data => window.sessionStorage.setItem("user_id", data.id))
              .then (() => navigate("/"))
          }
      })
            
  return (
    <div class="item">
    <button onClick={handleLogout} class="ui orange button">Log Out</button>
  </div>
  )
}

}
export default Logout;