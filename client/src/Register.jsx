import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register({ user, setUser }) {

  const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPw, setConfirmPw] = useState("")

  const currentUser = sessionStorage.getItem("user_id")

  useEffect(() => {
    if (currentUser) {
     navigate("/recipes")
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
                .then(data => {
                  console.log("loggedin")
                  window.sessionStorage.setItem("user_id", data.id)})
                .then(() => navigate("/recipes"))
            }
            else {
                console.log("invalid")

            }
        })
    }

  return (
    <>
      <form className="ui large form">
        <h2>Register</h2>
        <div className="ui stacked segment">
          <div className="field">
            <label>Add your e-mail address!</label>
            <div className="ui left icon input">
              <i className="envelope icon"></i>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="E-mail address"
              />
            </div>
          </div>
          <div className="field">
            <label>Create your password!</label>
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>
          {/* <div className="field">
            <label>Confirm your password!</label>
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input
                onChange={(e) => setConfirmPw(e.target.value)}
                type="text"
                name="email"
                placeholder="Confirm Password"
              />
            </div>
          </div> */}
          {/* <div className="field">
            <label>Create your user name!</label>
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="email"
                placeholder="User Name"
              /> */}
            {/* </div> */}
          {/* </div> */}
          <button onClick={registerClick} className="submit button">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Register;