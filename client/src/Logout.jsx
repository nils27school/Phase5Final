import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Logout({ setCurrentUser }) {
    const navigate = useNavigate()

const [loginStatus, setLoginStatus] = useState()

    // function navLogout() {
    //     setCurrentUser({})
    //     sessionStorage.clear()
    //     navigate("/")
    //   }

      // const handleLogout = () => {
      //   fetch(`/logout`, {
      //     method: "DELETE",
      //   }).then((res) => {
      //     if (res.ok) {
      //       setCurrentUser(null);
      //     }
      //   });
      function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => sessionStorage.clear())
            .then(setLoginStatus(false))
        console.log('Logout Worked')
        navigate('/')
    
      };
  return (
    <div class="item">
    <button onClick={handleLogout} class="ui orange button">Log Out</button>
  </div>
  )
}
export default Logout