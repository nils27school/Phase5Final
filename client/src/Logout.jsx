import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Logout({ setCurrentUser }) {
    const navigate = useNavigate()

const [loginStatus, setLoginStatus] = useState()

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
    <div class="item" style={{backgroundColor: 'tan', color: 'white}}'}}>
    <button onClick={handleLogout} class="ui orange button">Log Out</button>
  </div>
  )
}
export default Logout