import React from 'react'
import { useNavigate } from 'react-router-dom'
function LogoutButton({ setCurrentUser }) {
    const navigate = useNavigate()
    function navLogout() {
        setCurrentUser({})
        sessionStorage.clear()
        navigate("/")
      }
  return (
    <div class="item">
    <button onClick={navLogout} class="ui orange button">Log Out</button>
  </div>
  )
}
export default LogoutButton