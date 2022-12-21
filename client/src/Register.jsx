import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {

  const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPw, setConfirmPw] = useState("")

  const currentUser = sessionStorage.getItem("user_id")

  useEffect(() => {
    if (currentUser) {
     navigate("/piano")
    } 
  },[currentUser, navigate])

  console.log(email);
  console.log(password);
  // console.log(confirmPw);

  function registerClick(e) {
    e.preventDefault()
    fetch('/register', {
      method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => window.sessionStorage.setItem("user_id", data.id))
                .then(() => navigate("/recipes"))
            }
            else {
                console.log("invalid")

            }
        })
    }
   

    return (
           <div className='auth-form-container'>
            <h2>Register</h2>
        <form className="register-form" onSubmit={registerClick}>
            {/* <label htmlFor="name">Full Name</label>
            <input value={name} name="name" id="name" placeholder="Full Name"/> */}
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value ={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="************" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="register-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register;