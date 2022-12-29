import React from 'react'
import { useNavigate } from 'react-router-dom'
function Logout({ setCurrentUser }) {
    // const navigate = useNavigate()


    // function navLogout() {
    //     setCurrentUser({})
    //     sessionStorage.clear()
    //     navigate("/")
    //   }

      const handleLogout = () => {
        fetch(`/logout`, {
          method: "DELETE",
        }).then((res) => {
          if (res.ok) {
            setCurrentUser(null);
          }
        });
      };
  return (
    <div class="item">
    <button onClick={handleLogout} class="ui orange button">Log Out</button>
  </div>
  )
}
export default Logout